import { Counter } from "./Counter";

// Seiten im nextjs app folder sind erst mal automatisch Server Komponenten.
// Dadurch sind wir in der lage asynchrone Operationen direkt auszufuhren und
// mit den Ergebnissen die Seite aufzubauen.
// Routenparameter sind direkt im Funktionskopf verfugbar uber params: { `routenParameter` }
export default async function DynamicTest({ params: { id }, searchParams }) {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const posts = await res.json();
  await new Promise((resolve) => setTimeout(resolve, 2000));
  // throw new Error("Alles ist im Eimer");
  return (
    <div>
      <p>Dynamic Test {id}</p>
      <Counter className="!p-10" />
      <div className="grid grid-cols-1 gap-5">
        {posts.map((post) => (
          <div key={post.id}>{post.title}</div>
        ))}
      </div>
    </div>
  );
}
