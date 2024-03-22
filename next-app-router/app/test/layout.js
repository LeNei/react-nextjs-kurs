// Layouts werden ineinander genested und sind immer fuer tiefer liegende
// Routen sichtbar
export default function TestLayout({ children }) {
  return <div className="bg-yellow-500 px-10 py-10">{children}</div>;
}
