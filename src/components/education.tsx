import React from 'react'

export function Education() {
    return (
        <section id="education" className="px-10">
            <div className="bg-stone-600/60 dark:bg-stone-400 max-w-screen-md w-full rounded-md py-5 px-4 shadow-md mb-3">
                <div className='flex flex-row justify-center'>
                    <div className="flex flex-col text-stone-100 dark:text-stone-800 w-full">
                        <div className="text-md font-extrabold tracking-widest leading-5">My Education</div>
                    </div>
                </div>
            </div>
            <div className="bg-stone-600/60 dark:bg-stone-400 max-w-screen-md w-full rounded-md py-5 px-4 shadow-md mb-3">
                <div className='flex flex-col justify-center'>
                    <div className="flex flex-col text-stone-100 dark:text-stone-800 w-full">
                        <div className="text-sm font-bold tracking-widest leading-5">SDN Batan Indah</div>
                        <div className="text-xs tracking-wide leading-5">Elementary School</div>
                    </div>
                    <div className="mt-2 md:mt-0 w-full text-justify text-sm text-stone-100 dark:text-stone-800">
                        Graduated with the best grades from Batan Indah Elementary School.
                    </div>
                </div>
            </div>
            <div className="bg-stone-600/60 dark:bg-stone-400 max-w-screen-md w-full rounded-md py-5 px-4 shadow-md mb-3">
                <div className='flex flex-col justify-center'>
                    <div className="flex flex-col text-stone-100 dark:text-stone-800 w-full">
                        <div className="text-sm font-bold tracking-widest leading-5">MTsN 1 KOTA TANGSEL</div>
                        <div className="text-xs tracking-wide leading-5">Junior High School</div>
                    </div>
                    <div className="mt-2 md:mt-0 w-full text-justify text-sm text-stone-100 dark:text-stone-800">
                        Graduated with standard grades from MTsN 1 TANGSEL CITY.
                    </div>
                </div>
            </div>
            <div className="bg-stone-600/60 dark:bg-stone-400 max-w-screen-md w-full rounded-md py-5 px-4 shadow-md mb-3">
                <div className='flex flex-col justify-center'>
                    <div className="flex flex-col text-stone-100 dark:text-stone-800 w-full">
                        <div className="text-sm font-bold tracking-widest leading-5">SMKs PGRI 3 MALANG</div>
                        <div className="text-xs tracking-wide leading-5">Vocational High School</div>
                    </div>
                    <div className="mt-2 md:mt-0 w-full text-justify text-sm text-stone-100 dark:text-stone-800">
                        Currently studying at Vocational High School PGRI 3 MALANG CITY.
                    </div>
                </div>
            </div>
        </section>
    )
}