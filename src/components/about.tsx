"use client";
import { BiLogoTypescript, BiLogoJavascript, BiLogoPython, BiLogoGoLang, BiLogoPhp } from "react-icons/bi";

type Props = {}

export function About({ }: Props) {
    return (
        <section className="mt-16 px-10" id="about">
            <div className="flex flex-col md:flex-row justify-between bg-stone-600/60 dark:bg-stone-400 md:max-w-screen-md w-full rounded-md py-5 px-4 shadow-md mb-3">
                <div className="flex flex-col text-stone-100 dark:text-stone-800 md:w-[40%] w-full">
                    <div className="text-sm font-bold tracking-widest leading-5">Muhammad Salman Al Farizi</div>
                    <div className="text-xs tracking-wide leading-5">Fullstack Developer</div>
                </div>
                <div className="md:w-[60%] mt-2 md:mt-0 w-full text-justify text-sm text-stone-100 dark:text-stone-800">
                    Over the last three odd years i&apos;ve had the pleasure of working with some great companies.
                    working side by side to design and develop new apps and improve upon existing products. [Go, Ts, Js, PHP, Py, etc.]
                </div>
            </div>
            <div className="flex flex-row justify-center bg-stone-600/60 dark:bg-stone-400 max-w-screen-md w-full rounded-md py-5 px-4 shadow-md mb-3">
                <div className="text-8xl flex flex-wrap justify-evenly w-full text-stone-100 dark:text-stone-800">
                    <BiLogoGoLang />
                    <BiLogoJavascript />
                    <BiLogoTypescript />
                    <BiLogoPython />
                    <BiLogoPhp />
                </div>
            </div>
        </section>
    )
}