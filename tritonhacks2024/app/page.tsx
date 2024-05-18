import Image from "next/image";
import TitleBar from "./modules/title";
import About from "./modules/about";
import StartButton from "./modules/Buttons";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-24 py-6">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm">
        <TitleBar/>
        <br></br>
        <About/>
        <br></br>
        <StartButton/>
      </div>
    </main>
  );
}

/*
Header
Photo/Camera





Fast fashion:
fast degrading _____
cite all sources (prompt?)
fashionably
"the proper way to fashion"
"sustainable, clean"
"sustainable fashion brought to you"
"sf" = "sustainable fashion"
"sf a click away"
"Fashionably = name"
placeholder api
loading animation
1 page
dynamic loading & deloading
modules

*/
