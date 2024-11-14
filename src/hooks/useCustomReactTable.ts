import { ColumnDef, ColumnFiltersState, getCoreRowModel, getFilteredRowModel, useReactTable, VisibilityState } from "@tanstack/react-table"
import { useEffect, useState } from "react"


export interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
}

export function useCustomReactTable<TData, TValue>({
  data,
  columns,
}: DataTableProps<TData, TValue>) {
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({})
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
  
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      columnVisibility,
      columnFilters,
    },
  })

  return { table }
}
