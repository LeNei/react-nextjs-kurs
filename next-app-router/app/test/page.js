"use client";

// Die Komponente muss eine Client-Komponente sein, da Eventhandler nicht
// in Server-Komponenten uebergeben werden koennen.
export default function Test() {
  // API-Call um cookies zu testen
  function callAPI() {
    fetch("/api", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        name: "Hello",
      }),
    });
  }
  return <div onClick={callAPI}>Test</div>;
}
