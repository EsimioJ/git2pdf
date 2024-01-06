import Image from "next/image";
import Git2pdf from "@/app/components/Git2pdf";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className=" flex place-items-center gap-2 p-8  lg:p-0"
            href="https://www.mapomondo.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <h3 className="cursor-pointer hover:text-[#bada55]">Mapomondo</h3>
            {/* <Image
              src="/vercel.svg"
              alt="Mapo Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            /> */}
          </a>
        </div>
      </div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-green-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-green-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#bada55] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <h1 className="text-4xl font-black text-white p-4 flex gap-0">
          <span >Git</span>
          <span className="text-[#bada55] text-8xl">2</span>
          <span className="mt-auto" >Pdf</span>
        </h1>
        {/* <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Git2pdf Logo"
          width={180}
          height={37}
          priority
        /> */}
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <Git2pdf />
      </div>
    </main>
  );
}
