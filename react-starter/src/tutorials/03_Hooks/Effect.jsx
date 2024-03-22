import { useEffect, useState } from "react";

export function BaseEffect() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  // useEffect wird nur ausgeführt wenn sich einer der Parameter im dependency array verändert
  useEffect(() => {
    if (count % 2 === 0) {
      console.log("even");
    }
    // Dependency array
  }, [count]);

  function increaseCount() {
    setCount((prev) => prev + 1);
  }

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <button onClick={increaseCount}>+</button>
      <span>Current count: {count}</span>
    </div>
  );
}

export function EffectCleanup() {
  const [scroll, setScroll] = useState("");

  useEffect(() => {
    function handleScroll(e) {
      setScroll(`x: ${window.scrollX}, y:${window.scrollY}`);
    }
    window.addEventListener("scroll", handleScroll);
    // Cleanup function wird aufgerufen, wenn die Komponente aus dem DOM entfernt wird
    // Wenn diese vergessen wird, würde in diesem Fall der EventListener weiter laufen und versuchen den State zu setzen
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return <p style={{ height: 2000 }}>{scroll}</p>;
}
