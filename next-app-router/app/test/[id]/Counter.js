"use client";
import { useState } from "react";

// Komponenten die in irgendeiner Form State benutzen mussen als Client-Komponenten gekennzeichnet werden.
// Dafur wird im Kopf der Komponente ein "use client" hinzugefugt.
export function Counter(props) {
  const [count, setCount] = useState(0);
  return (
    <button {...props} onClick={() => setCount(count + 1)}>
      Counter ++ ({count})
    </button>
  );
}
