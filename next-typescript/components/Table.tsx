import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

// Da die Tabelle fuer alle Arten von Daten genutzt werden soll nutzen wir
// hier ein Generic zum uebergeben der Daten.
type TableProps<T> = {
  data: T[];
  columns: ColumnDef<T, any>[];
  onRowClick: (row: T) => void;
  onCellClick: (row: T, key: string) => void;
};

export function Table<T>({
  data,
  columns,
  onRowClick,
  onCellClick,
}: TableProps<T>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
  return (
    <table>
      <thead>
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <th key={header.id}>
                {flexRender(
                  header.column.columnDef.header,
                  header.getContext()
                )}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {table.getRowModel().rows.map((row) => (
          <tr key={row.id} onClick={() => onRowClick(row.original)}>
            {row.getVisibleCells().map((cell) => (
              <td
                key={cell.id}
                onClick={(e) => {
                  e.stopPropagation();
                  onCellClick(cell.row.original, cell.column.id);
                }}
              >
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
