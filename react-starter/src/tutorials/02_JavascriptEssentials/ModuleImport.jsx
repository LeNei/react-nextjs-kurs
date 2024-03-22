// Import des Defaults achtet nicht auf den Namen
import ModuleExport from "./ModuleExport";

// Einfacher Export benötigt den korrekten Namen
import { NamedExport } from "./ModuleExport";

// Umbenennung der Imports bei Konflikten mit anderen Komponenten ist ebenfalls möglich
//import { default as Exp } from "./ModuleExport";
//import { NamedExport as Named} from "./ModuleExport"

export default function Display() {
  return (
    <>
      <ModuleExport />
      <NamedExport />
    </>
  );
}

// Ermöglicht es automatisch alle Exports mit Namen weiterzugeben.
// Der Default wird übergangen, da es zu Konflikten mit diesem Modul kommen könnte
export * from "./ModuleExport";
