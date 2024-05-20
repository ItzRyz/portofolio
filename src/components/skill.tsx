import React from 'react'

import { BiLogoTypescript, BiLogoJavascript, BiLogoPython, BiLogoGoLang, BiLogoPhp, BiLogoJava, BiLogoReact, BiLogoCss3, BiLogoTailwindCss, BiLogoSass, BiLogoHtml5, BiLogoGraphql, BiLogoPostgresql, BiLogoMongodb, BiLogoGit, BiLogoJquery, BiLogoDjango } from "react-icons/bi";

type Props = {}

export function Skill({ }: Props) {
    return (
        <section className="px-10" id="skill">
            <div className="bg-stone-600/60 dark:bg-stone-400 max-w-screen-md w-full rounded-md py-5 px-4 shadow-md mb-3">
                <div className='flex flex-row justify-center'>
                    <div className="flex flex-col text-stone-100 dark:text-stone-800 w-full">
                        <div className="text-md font-extrabold tracking-widest leading-5">My Skill</div>
                    </div>
                </div>
            </div>
            <div className="flex flex-row justify-center bg-stone-600/60 dark:bg-stone-400 max-w-screen-md w-full rounded-md py-5 px-4 shadow-md mb-3">
                <div className="text-8xl flex flex-wrap justify-evenly w-full gap-20 text-stone-100 dark:text-stone-800">
                    <BiLogoGoLang />
                    <BiLogoJavascript />
                    <BiLogoTypescript />
                    <BiLogoReact />
                    <BiLogoPython />
                    <BiLogoPhp />
                    <BiLogoJava />
                    <BiLogoPostgresql />
                    <BiLogoMongodb />
                    <BiLogoGit />
                    <BiLogoDjango />
                    <BiLogoTailwindCss />
                </div>
            </div>
        </section>
    )
}