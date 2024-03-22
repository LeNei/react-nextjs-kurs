import { useState } from "react";

export function Counter() {
  // useState gibt immer 2 Dinge zurück.
  // Der 1. ist der gespeicherte State und das 2. ist eine Funktion um selbigen zu ändern
  const [count, setCount] = useState(0);

  function increaseCount() {
    setCount(count + 1);
  }

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <button onClick={increaseCount}>+</button>
      <span>Current count: {count}</span>
    </div>
  );
}

export function TextInput() {
  const [text, setText] = useState("");
  return (
    <div>
      <input
        placeholder="Text..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <p>{text}</p>
    </div>
  );
}

export function HideAndShow({ children }) {
  const [show, setShow] = useState(true);

  return (
    <div>
      <button onClick={() => setShow((prev) => !prev)}>Toggle Show</button>
      {show && <>{children}</>}
    </div>
  );
}

export function FunctionInit() {
  const [example] = useState(() => {
    return "example";
  });

  return <p>{example}</p>;
}

export function ArrayState() {
  const [arr, setArr] = useState([1, 2, 3]);

  function addItem() {
    setArr([...arr, arr.length + 1]);
  }

  return (
    <div>
      {arr.map((val) => (
        <p key={val}>{val}</p>
      ))}
      <button onClick={addItem}>+</button>
    </div>
  );
}
