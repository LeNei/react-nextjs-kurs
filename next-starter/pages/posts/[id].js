import { useRouter } from "next/router";
import Image from "next/image";
// Über die eckigen Klammern im Datei oder Ordnernamen können dynamische routen
// definiert werden. Die Parameter in dieser dynamischen Route können über den
// useRoute hook erreicht werden
export default function PostId() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center">
      <p className="place-items-center">Current Post-ID {router.query.id}</p>

      {/**
       * Die Image Komponente von Nextjs führt automatisch
       * eine Bildkonvertierung durch um große Bilder für den
       * Browser performant zu laden
       */}
      <Image
        src="https://images.pexels.com/photos/417230/pexels-photo-417230.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        width={200}
        height={100}
        alt=""
      />
    </div>
  );
}
