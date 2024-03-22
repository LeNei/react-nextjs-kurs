import Image from "next/image";
import { Inter } from "next/font/google";
import { Button } from "@/components/tailwind/Button";
import { ModuleButton } from "@/components/modules/Button";
import { StyledButton } from "@/components/css-in-js/StyledButton";
import { JsxButton } from "@/components/css-in-js/JsxButton";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="space-x-2">
      <ModuleButton size="small">Post</ModuleButton>
      {/**
       * Navigationen zwischen routen wird über die Link komponente vorgenommen.
       * Diese sorgt dafür, dass alle notwendigen Datein geladen werden ohne die komplette
       * Seite neu anfragen zu müssen.
       */}
      <Link href="/posts/15">To Posts</Link>
    </div>
  );
}
