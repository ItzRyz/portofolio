"use client";
import React, { useEffect, useState } from 'react'
import Link from 'next/link'

export type NavLinkProps = {
  url: string;
  title: string;
}
export type NavBrandProps = {
  url?: string;
  title: string;
}

const NavLink = (data: NavLinkProps) => {
  const scrolltoHash = function (element_id: string) {
    const element = document.getElementById(element_id)
    element?.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
  }
  return (
    <div onClick={() => scrolltoHash(data.url)} className='text-stone-100 hover:text-stone-300 dark:text-stone-800 dark:hover:text-stone-500 text-sm leading-4 cursor-pointer'>{data.title}</div>
  )
}
const NavBrand = (data: NavBrandProps) => {
  const [url, setUrl] = useState<string>("");
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setUrl(window.location.pathname);
      const handleRouteChange = () => {
        setUrl(window.location.pathname);
      };
      window.addEventListener('popstate', handleRouteChange);
      return () => {
        window.removeEventListener('popstate', handleRouteChange);
      };
    }
  }, [])

  return (
    <Link href={data.url ? data.url : url} className='text-stone-100 dark:text-stone-800 text-sm leading-4'>{data.title}</Link>
  )
}

export { NavLink, NavBrand }