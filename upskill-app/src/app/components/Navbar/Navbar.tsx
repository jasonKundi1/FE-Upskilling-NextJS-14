import Link from "next/link"
import React from "react"
import Image from "next/image"

const NavbarLogo = () => {
  return (
    <div className="flex items-center space-x-2">
      <Image
        width={26}
        height={26}
        className="h-8 w-8"
        src="/assets/troll-face-logo.png"
        alt="Next.js Logo"
      />
      <span className="text-lg font-semibold"> Jasons Next.JS Playground</span>
    </div>
  )
}
export const Navbar = () => {
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="flex items-center space-x-4">
          <NavbarLogo />
        </div>
        <Link href="/">Home</Link>
        <Link href="/basic">Basic Route</Link>
        <Link href="/products">Dynamic (products)</Link>
      </div>
    </nav>
  )
}
