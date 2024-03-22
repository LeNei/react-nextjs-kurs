const example = {
  title: "hey",
  label: "ho",
  child: {
    name: "Child",
  },
};
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

// Destructuring ermöglicht es Properties eines Objektes über den namen heraus zu ziehen
// Zusätzlich kann man Properties einen Default Wert geben, falls er nicht gesetzt wird
function Destructuring({ name, children, test = "bla" }) {
  const {
    title,
    // Nested destructuring ist ebenfalls möglich.
    // Bei Konflikten mit Variablennamen ist eine einfache Umbenennung über den `:` möglich
    child: { name: temp },
  } = example;

  // Man kann auch Arrays destructuren.
  const [index0, index1] = arr1;
  return (
    <div>
      <h1>{title}</h1>
      <p>This is my name: {name}</p>
      {children}
    </div>
  );
}

// Der `rest`-Parameter ermöglicht es ein Objekt nur teilweise zu destructuren.
// Die verbleibenden properties sind dann erreichbar über `...` + Name
function RestParameter({ children, ...rest }) {
  // Der Name des rest Parameters ist frei wählbar
  const { title, ...props } = example;

  // Der `rest`-Parameter ist ebenfalls auf arrays andendbar.
  const [index0, index1, ...everythingElse] = arr1;
  return (
    <div>
      <h1>{title}</h1>
      <p>This is my name: {rest.name}</p>
      {children}
    </div>
  );
}

function SpreadParameter({ children, ...props }) {
  // Der `spread` Operator erlaubt es iterables erweitert zu werden.
  // Wichtig ist zu beachten, dass bei Objekten mit einem doppelten propperty Key
  // der zuletzt hinzugefügte die vorherigen überschreibt.
  const allValues = {
    ...props,
    ...example,
  };

  // Ebenfalls mit Arrays möglich. Ein ähnliches verhalten zu `expand`
  const bouthArrays = [...arr1, ...arr2];

  function test(a, b, c) {
    return a + b + c;
  }

  // Es ist ebenfalls möglich den `spread` Operator in Fuktionsaufrufen zu verwenden
  console.log(test(...arr1));
  return (
    <div>
      <h1>{allValues.title}</h1>
      <p>This is my name: {allValues.name}</p>
      {children}
    </div>
  );
}

export default function Default() {
  return (
    <>
      <Destructuring name={"Leon"}>
        <p>Hello World</p>
      </Destructuring>
    </>
  );
}
