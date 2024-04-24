"use client";
import React from 'react'
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { BiSolidSun, BiSolidMoon } from "react-icons/bi";

const ThemeButton = () => {
    const { theme, setTheme } = useTheme()
    const [themeData, setThemeData] = useState<string>();
    useEffect(() => {
        setThemeData(theme)
    }, [theme])
    function changeThemeHandler() {
        if (themeData == "light") {
            setTheme('dark')
        } else {
            setTheme('light')
        }
    }
    return (
        <button onClick={changeThemeHandler} className='fixed bottom-5 right-5 bg-stone-600 hover:bg-stone-600/70 dark:bg-stone-400 dark:hover:bg-stone-400/70 p-2 rounded-md shadow-lg text-white dark:text-black' >
            {themeData == "light" ? <BiSolidSun /> : <BiSolidMoon />}
        </button>
    )
}

export { ThemeButton }