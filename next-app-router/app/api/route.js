import { cookies } from "next/headers";
import { NextResponse } from "next/server";

// API-Routen werden im vergleich zum pages router immer mit einer route-Datei angegeben
// Sie sind auch ueber das Filebasierte Routing verfuegbar und geben die moeglichkeit nur die
// Anfragen zu bearbeiten, die man definiert ueber die exportierten Funktionen GET, POST, etc.
export async function GET(req) {
  const cookieStore = cookies();
  const viewedPost = cookieStore.get("viewedPost");
  console.log(viewedPost);

  return Response.json({ name: "Leon" });
}

export async function POST(req) {
  const response = NextResponse.json({ name: "Leon" });
  // Cookies koennen einfach ueber die in next/headers mitgelieferte cookies funktion gesetzt und abgerufen werden
  cookies().set("viewedPost", "true", {
    httpOnly: true,
    secure: true,
    maxAge: 60,
  });
  return response;
}
