// Simple React Komponente
export function Component() {
  // Bereich für Javascript, wird bei jeder Änderung erneut top-down durchlaufen
  const hello = "hello world!";

  //Muss JSX returnen
  return <div>{hello}</div>;
}

// Komponente als `arrow-function`
export const ArrowComponent = () => {
  const hello = "world!";
  return <div>{hello}</div>;
};

export function JavascriptInJsx() {
  const whatIsYourName = "What is your name?";
  function getName() {
    return "My name is Leon";
  }

  return (
    <div>
      {/* Geschweifte Klammern ermöglichen es Javascript direkt im HTML zu benutzen */}
      <p>{whatIsYourName}</p>
      <p>{getName()}</p>
      {whatIsYourName.includes("world") ? (
        <p>Includes World</p>
      ) : (
        <p>Does not include World</p>
      )}
    </div>
  );
}

export function Html() {
  return (
    <>
      {/* Props von HTML Elementen sind immer in Camel-Case und können ebenfalls
       * mit geschweiften Klammern Javascript Logik auswerten oder Variablen übergeben bekommen
       */}
      <button
        className="btn"
        style={{ background: "red" }}
        onClick={() => console.log("clicked")}
      />
    </>
  );
}
