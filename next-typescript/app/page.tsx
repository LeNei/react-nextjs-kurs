import { Button } from "@/components/Button";
import { apiUserSchema } from "@/schemas/apiUser";
import { array } from "yup";
import { UserTable } from "./UserTable";

export default async function Home() {
  const res = await fetch("https://65fa8f863909a9a65b1ab31f.mockapi.io/users", {
    next: {
      revalidate: 60,
    },
  });

  // Mit diesem validate wird ueberprueft, dass die Daten von der
  // API dem Schema entsprechen, was wir erwarten
  const checkedUsers = await array()
    .of(apiUserSchema)
    .validate(await res.json());

  if (!checkedUsers) {
    throw new Error("No users fetched");
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Button size="medium">Button</Button>
      <UserTable users={checkedUsers} />
    </main>
  );
}
