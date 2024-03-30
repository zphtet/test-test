// @ts-nocheck
"use client";
import { columns, Payment } from "./components/columns";
import { DataTable } from "./components/data-table";
import { useMockAPI } from "./components/mock";
import { usePagination } from "./components/use-pagination";
// import { useSorting } from "./components/use-sorting";
const TablePage = () => {
  const { limit, onPaginationChange, skip, pagination } = usePagination();
  // const { sorting, onSortingChange, field, order } = useSorting();
  const [data, count, loading] = useMockAPI("/episodes", {
    pagination: { skip, limit },
    // sort: { field, order },
  });

  const pageCount = Math.round(count / limit);
  return (
    <div className="p-10">
      <DataTable
        columns={columns}
        data={data}
        loading={loading}
        onPaginationChange={onPaginationChange}
        pageCount={pageCount}
        pagination={pagination}
        // onSortingChange={onSortingChange}
        // sorting={sorting}
      />
    </div>
  );
};

export default TablePage;
