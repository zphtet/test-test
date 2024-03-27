"use client";
// @ts-nocheck
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
export type PaginationState = {
  pageIndex: number;
  pageSize: number;
};
import { Pagination } from "./pagination";
import React, { useEffect, useState } from "react";
import usePrevious from "./usePrevious";
interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  loading: boolean;
  onPaginationChange: () => void;
  pageCount: number;
  pagination: PaginationState;
  onSortingChange: () => void;
  sorting: [{ id: string; desc: boolean }];
}

const UpdateRowFn = (data: any) => {
  console.log("Row Selection Data", data);
};

export function DataTable<TData, TValue>({
  columns,
  data,
  loading,
  onPaginationChange,
  pageCount,
  pagination,
  onSortingChange,
  sorting,
}: DataTableProps<TData, TValue>) {
  //   console.log("data ", data);
  const [rowSelection, setRowSelection] = React.useState({});
  const [currentPage, setCurrentPage] = useState(pagination.pageIndex);
  console.log("current page pagination", pagination.pageIndex);
  const previousPage = usePrevious(currentPage);
  console.log("row Selection", rowSelection);
  const table = useReactTable({
    data,
    columns,
    manualPagination: true,
    manualSorting: true,
    onPaginationChange,
    onSortingChange,
    // autoResetAll: false,
    // enableRowSelection: false,
    // defaultPageSize: 10,
    // pageSizeOptions: [10, 20, 50, 100, 200],
    // pageCount: 10,
    // showPageSizeOptions: true,
    // showPagination: true,
    // showPaginationTop: true,
    // showPaginationBottom: true,
    // showPageSizeOptions: true,
    // showPageJump: true,
    // showPageSizeJump: true,
    // showPaginationSizeJump: true,
    // showPaginationPrev: true,
    // showPaginationNext: true,
    // showPaginationSizePrev: true,
    // showPaginationSizeNext: true,
    // showPaginationFirst: true,
    // showPaginationLast: true,
    // showPaginationSizeFirst: true,
    // showPaginationSizeLast: true,
    // showPageSizeOptions: true,
    // showPageSizeJump: true,
    getRowId: (row: any) => row.id,
    // enableMultiRowSelection: false,
    // onRowSelectionChange: (data) => UpdateRowFn(data),
    // onRowSelectionChange: setRowSelection,
    state: { pagination, sorting },
    pageCount,
    // onPaginationChange
    getCoreRowModel: getCoreRowModel(),
  });
  //   console.log("IsAllRowsSelected", table.getIsAllRowsSelected());
  //   //   console.log("Selected Rows", table.toggleAllRowsSelected());

  //   console.log("Get Current Page  Selected row ", table.getSelectedRowModel());
  //   console.log("All Page sleected", table.getIsAllPageRowsSelected());

  const isAllSelected = table.getIsAllPageRowsSelected();
  //   console.log("Get All selected rows", table.getState().rowSelection);

  useEffect(() => {
    // table.setRowSelection({ 1: true, 2: true, 3: true });
    if (isAllSelected === false) {
      //   table.resetRowSelection();
    }
    if (isAllSelected === true) {
    }
  }, [isAllSelected]);

  useEffect(() => {
    // console.log("Previous Page", previousPage);
  }, [pagination.pageIndex]);
  console.log("Current Page", currentPage);

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead
                    key={header.id}
                    {...(header.column.getCanSort()
                      ? { onClick: header.column.getToggleSortingHandler() }
                      : {})}
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}

                    {header.column.getIsSorted() === "asc" ? (
                      <span> 🔼</span>
                    ) : header.column.getIsSorted() === "desc" ? (
                      <span> 🔽</span>
                    ) : null}
                  </TableHead>
                );
              })}
            </TableRow>
          ))}
        </TableHeader>
        {loading && <div>Loading ...</div>}
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      <Pagination sizes={[5, 10, 15]} tableLib={table} />
    </div>
  );
}
