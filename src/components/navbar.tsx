import React from 'react'
import { NavBrand, NavLink, NavLinkProps } from './ui/nav.ui'

type NavProps = {
  NavLinkData: NavLinkProps[]
}

export function Navbar({ NavLinkData }: NavProps) {
  let i: number = 0;
  return (
    <>
      <nav className="flex justify-center align-middle py-3 fixed max-w-screen-lg w-full px-10">
        <div className="flex justify-between align-middle max-w-screen-md w-full bg-stone-600/60 dark:bg-stone-400 py-3 px-6 rounded-md shadow-lg">
          <NavBrand title="Alyvazen" />
          <ul className="hidden md:flex justify-end align-middle gap-3">
            {NavLinkData.map(n => (
              <NavLink url={n.url} title={n.title} key={i++} />
            ))}
          </ul>
        </div>
      </nav>
    </>
  )
}