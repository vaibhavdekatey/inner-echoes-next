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
    <nav className="border-[1px] border-neutral-800 relative min-w-screen">
      <div className="min-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <Link href="/" className="font-mono text-2xl mr">
            Inner Echoes
          </Link>
          <div className=" flex-row font-mono hidden md:flex">
            {navLinks.map((navlink) => (
              <div
                key={navlink.id}
                className="mx-3 hover:text-neutral-400 transition-all ease-in-out">
                <Link href={navlink.url}>{navlink.title}</Link>
              </div>
            ))}
            <button
              className="hover:text-neutral-400 ml-3 transition-all ease-in-out"
              onClick={() => console.log("Logout Pressed")}>
              Logout
            </button>
          </div>
          <div className="md:hidden">
            <button
              className="font-mono md:hidden mx-3"
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
  );
};

export default Navbar;
