"use client";
import { Table } from "@/components/Table";
import { ApiUser } from "@/schemas/apiUser";
import { createColumnHelper } from "@tanstack/react-table";
import Image from "next/image";

// Der columnHelper ist notwendig um mit @tanstack/react-table
// die Tabellenstruktur aufzubauen. Zusaetzlich gibt er einem
// Hinweise ueber die Felder auf die man zugriff hat
const columnHelper = createColumnHelper<ApiUser>();

const columns = [
  columnHelper.accessor("firstName", {
    header: "Vorname",
  }),
  columnHelper.accessor("lastName", {
    header: "Nachname",
  }),
  columnHelper.accessor("avatar", {
    header: "Avatar",
    cell: (cell) => (
      <Image src={cell.getValue()} width={40} height={40} alt="avatar" />
    ),
  }),
  columnHelper.accessor("gender", {
    header: "Geschlecht",
  }),
  columnHelper.accessor("birthdate", {
    header: "Geburtsdatum",
  }),
  columnHelper.accessor("createdAt", {
    header: "Erstellt am",
  }),
];

// Die UserTable bekommt die vorher auf dem Server geladenen Daten
// uebergeben um sie anzuzeigen. Da die Table eine Client-Komponente
// ist kann sie nicht direkt in der page mit Daten befuellt werden
export function UserTable({ users }: { users: ApiUser[] }) {
  return (
    <Table
      data={users}
      columns={columns}
      onCellClick={console.log}
      onRowClick={console.log}
    />
  );
}
