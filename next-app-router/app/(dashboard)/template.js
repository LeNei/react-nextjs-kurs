"use client";
import { useEffect, useState } from "react";

// Templates haben eine aehnliche Fuktion wie Layouts mit dem Unterschied,
// dass bei jedem wechsel der Route der State neu initialisiert wird.
// Bei Layouts bleibt der State nach dem initialen rendern bestehen
export default function DashboardLayout({ children }) {
  const [bla, setBla] = useState(0);

  useEffect(() => {
    setBla((prev) => prev + 1);
  }, []);

  console.log(bla);

  return (
    <div>
      <div className="h-20 w-full bg-yellow-500 dark:bg-blue-500 hover:dark:bg-blue-700" />
      {children}
    </div>
  );
}
