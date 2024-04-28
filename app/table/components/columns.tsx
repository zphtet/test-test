import { Checkbox } from "@/components/ui/checkbox";
import { ColumnDef } from "@tanstack/react-table";
import { useTableContext } from "../context";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
  id: number;
  episode: string;
  title: string;
};

export const columns: ColumnDef<Payment>[] = [
  {
    id: "select",
    header: ({ table }) => {
      //   console.log("table row selected", table.getSelectedRowModel());
      // console.log("table", table.getIsAllRowsSelected());
      const isAllSelected = table.getIsAllRowsSelected();
      const { state, setState } = useTableContext();
      // console.log("PREV STATE", state);
      return (
        <Checkbox
          checked={
            table.getIsAllPageRowsSelected() ||
            (table.getIsSomePageRowsSelected() && "indeterminate")
          }
          onCheckedChange={(value) => {
            table.toggleAllPageRowsSelected(!!value);
            setState((prev) => ({
              ...prev,
              isAllSelected: !isAllSelected,
            }));
            // console.log("AFTER STATE", state);
          }}
          aria-label="Select all"
        />
      );
    },
    cell: ({ row }) => {
      const { state, setState } = useTableContext();

      const uncheckedHandler = () => {
        if (state.isAllSelected || state.unselectMode) {
          console.log("unselected roes", row.id);
          setState((prev) => ({
            ...prev,
            isAllSelected: false,
            unselectMode: true,
            unselectedRowIds: [
              ...prev.unselectedRowIds,
              row.id as unknown as number,
            ],
            // unselectedRowIds: [row.id],
          }));
        }
      };

      return (
        <Checkbox
          checked={row.getIsSelected()}
          onClick={uncheckedHandler}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="Select row"
        />
      );
    },
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "id",
    header: "Id",
    enableSorting: true,
  },
  {
    accessorKey: "episode",
    header: "Episode",
    enableSorting: false,
  },
  {
    accessorKey: "title",
    header: "Title",
    enableSorting: true,
  },
];
