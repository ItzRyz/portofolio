"use client";
import { ThemeButton } from "@/components/ui/theme.ui";
import { BiLogoTypescript, BiLogoJavascript, BiLogoPython, BiLogoGoLang, BiLogoPhp } from "react-icons/bi";


export default function Home() {

  return (<section className="mt-16" id="about">
    <div className="flex flex-row justify-between bg-stone-600/60 dark:bg-stone-400 max-w-screen-md w-full rounded-md py-5 px-4 shadow-md mb-3">
      <div className="flex flex-col text-stone-100 dark:text-stone-800 w-[40%]">
        <div className="text-sm font-bold tracking-widest leading-5">Muhammad Salman Al Farizi</div>
        <div className="text-xs tracking-wide leading-5">Fullstack Developer</div>
      </div>
      <div className="w-[60%] text-justify text-sm text-stone-100 dark:text-stone-800">
        Over the last three odd years i've had the pleasure of working with some great companies.
        working side by side to design and develop new apps and improve upon existing products. [Go, Ts, Js, PHP, Py, etc.]
      </div>
    </div>
    <div className="flex flex-row justify-center bg-stone-600/60 dark:bg-stone-400 max-w-screen-md w-full rounded-md py-5 px-4 shadow-md mb-3">
      <div className="text-8xl flex flex-row justify-between w-full text-stone-100 dark:text-stone-800">
        <BiLogoGoLang />
        <BiLogoJavascript />
        <BiLogoTypescript />
        <BiLogoPython />
        <BiLogoPhp />
      </div>
    </div>
  </section>);
}
