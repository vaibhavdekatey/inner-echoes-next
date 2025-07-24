"use client";
import Link from "next/link";
import React, { useState } from "react";

type NavLink = {
  id: number;
  title: string;
  url: string;
};

const navLinks: NavLink[] = [
  { id: 1, title: "Home", url: "/" },
  { id: 2, title: "Portfolio", url: "/portfolio" },
  { id: 3, title: "Blog", url: "/blog" },
  { id: 4, title: "About", url: "/about" },
  { id: 5, title: "Contact", url: "/contact" },
  { id: 6, title: "Dashboard", url: "/dashboard" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className=" relative min-w-full">
        <div className="min-w-full">
          <div className="h-16 flex items-center justify-between">
            <div>
              <Link
                href="/"
                className="font-mono text-2xl font-bold bg-gradient-to-r from-neutral-200 to-neutral-400 text-transparent bg-clip-text">
                PixCode.
              </Link>
            </div>
            <div className=" flex-row font-mono hidden lg:flex">
              {navLinks.map((navlink) => (
                <div
                  key={navlink.id}
                  className="sm:mx-1 md:mx-2 mx-3 md:text-sm hover:text-neutral-400 transition-all ease-in-out">
                  <Link href={navlink.url}>{navlink.title}</Link>
                </div>
              ))}
              <button
                className="hover:text-neutral-400 ml-3 sm:mx-1 md:mx-2 mx-3 md:text-sm transition-all ease-in-out"
                onClick={() => console.log("Logout Pressed")}>
                Logout
              </button>
            </div>
            <div className="lg:hidden">
              <button
                className="font-mono lg:hidden mx-3"
                onClick={() => setIsMenuOpen(!isMenuOpen)}>
                Menu
              </button>
              {isMenuOpen && (
                <div className=" bg-neutral-800 font-mono p-1 absolute top-16 right-0">
                  {navLinks.map((navlink) => (
                    <div
                      key={navlink.id}
                      className="m-3 hover:text-neutral-400 transition-all ease-in-out">
                      <Link href={navlink.url}>{navlink.title}</Link>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
      <div className="border-b-[1px] border-neutral-700 w-screen" />
    </>
  );
};

export default Navbar;
