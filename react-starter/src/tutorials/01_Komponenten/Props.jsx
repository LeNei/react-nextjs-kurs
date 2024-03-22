// Komponente mit Props
function Props(props) {
  return (
    <div>
      <p>Name: {props.name}</p>
      {/* Children ist immer das child element einer Komponente */}
      {props.children}
    </div>
  );
}

// Ein Beispliel wie Props weitergegeben werden
export function PassProps() {
  return (
    <>
      <p>Pass Props:</p>
      <Props name="Bob">
        <p>Child element</p>
      </Props>
    </>
  );
}
