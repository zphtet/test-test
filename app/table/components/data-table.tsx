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
import React, { useEffect, useMemo, useState } from "react";
import usePrevious from "./usePrevious";
import { useTableContext } from "../context";
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
  const { setState, state } = useTableContext();
  const table = useReactTable({
    data,
    columns,
    manualPagination: true,
    // manualSorting: true,
    onPaginationChange,
    // onSortingChange,
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
    // autoResetAll: false,
    // enableMultiRowSelection: false,
    // onRowSelectionChange: (data) => UpdateRowFn(data),
    // onRowSelectionChange: setRowSelection,
    state: { pagination },
    pageCount,
    // onPaginationChange
    getCoreRowModel: getCoreRowModel(),
  });

  console.log(
    "****************************************************************"
  );
  console.count("render");
  // console.log("IsAllRowsSelected", table.getIsAllRowsSelected());
  const isAllrowSeleted = table.getIsAllRowsSelected();
  // console.log("data", data);
  const idDatas = data
    .map((item: any) => item.id)
    .reduce((accum: any, value: any) => {
      accum[value] = true;
      return accum;
    }, {});

  console.log("org datas", idDatas);

  const allSelected = useMemo(() => isAllrowSeleted, [isAllrowSeleted]);

  const memoData = useMemo(() => idDatas, [idDatas]);
  // pageIndex: 0,
  // prevIndex: 0,
  // useEffect(() => {
  //   setState((prev) => ({
  //     ...prev,
  //     prevIndex: prev.pageIndex,
  //     pageIndex: pagination.pageIndex,
  //   }));
  // }, [pagination.pageIndex]);

  useEffect(() => {
    console.log("use effect working");
    if (state.isAllSelected) {
      console.log("ALL SELECTED");
      table.setRowSelection(idDatas);
      return;
    }
    if (state.unselectMode) {
      console.log("Unselected Mode");
      console.log("ID DATAS", idDatas);
      const copy = { ...idDatas };
      console.log("Before copy", copy);
      state.unselectedRowIds.forEach((id) => {
        if (copy[id]) {
          delete copy[id];
        }
      });
      console.log("COPY DATA", copy);
      table.setRowSelection(copy);
      return;
    }
  }, [
    state.isAllSelected,
    state,
    allSelected,
    state.unselectMode,
    pagination.pageIndex,
    loading,
  ]);
  // if (loading) {
  //   return <div>Loading ...</div>;
  // }

  console.log("Selected Rowa", table.getState().rowSelection);
  console.log("All selected", state);
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
