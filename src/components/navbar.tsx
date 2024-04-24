"use client";
import React, { useState } from 'react'
import { NavBrand, NavLink, NavLinkProps, NavMobileButton } from './ui/nav.ui'

type NavProps = {
  NavLinkData: NavLinkProps[]
}

export function Navbar({ NavLinkData }: NavProps) {
  let i: number = 0;
  const [isActive, setIsActive] = useState<boolean>();
  return (
    <>
      <nav className="flex flex-col md:flex-row justify-center align-middle py-3 fixed max-w-screen-lg w-full px-10">
        <div className="relative flex flex-col md:flex-row justify-between align-middle max-w-screen-md w-full bg-stone-600/60 dark:bg-stone-400 py-3 px-3 rounded-md shadow-lg">
          <NavBrand title="Alyvazen" />
          <NavMobileButton functions={() => setIsActive(!isActive)} />
          <div className='hidden md:flex md:flex-row md:justify-between'>
            <ul className="hidden md:flex justify-end align-middle gap-3">
              {NavLinkData.map(n => (
                <NavLink url={n.url} title={n.title} key={i++} />
              ))}
            </ul>
          </div>
        </div>
        <ul className={'flex flex-col justify-end align-middle gap-3 mt-3 bg-stone-600 dark:bg-stone-400 p-3 rounded-md md:hidden transition-all ease-in-out duration-300' + (isActive ? ' opacity-100 visible' : ' opacity-0 invisible')}>
          {NavLinkData.map(n => (
            <NavLink url={n.url} title={n.title} key={i++} />
          ))}
        </ul>
      </nav>
    </>
  )
}