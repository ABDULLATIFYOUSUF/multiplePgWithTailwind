import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Menu from "./Menu";

export default function Navbar({}) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="w-full bg-blue-950 text-white flex justify-between items-center p-5 text-lg border-b border-2 border-gray-950">
        <div className="flex justify-center items-center gap-5">
          <button
            onClick={toggleMenu}
            className="border-2 border-gray-950 p-3 rounded-xl md:hidden"
          >
            {isOpen ? "Menu" : "Menu"}
          </button>
          <div className="logo">
            <h1>Multiple Pages</h1>
          </div>
        </div>

        <div>
          <ul className="hidden gap-5 md:flex">
            <li className="hover:text-emerald-200">
              <Link href="/">Home</Link>
            </li>
            <li className="hover:text-emerald-200">
              <Link href="/aboutus">About</Link>
            </li>
            <li className="hover:text-emerald-200">
              <Link href="/gallery">Gallery</Link>
            </li>
            <li className="hover:text-emerald-200">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
      <Menu isOpen={isOpen} />
    </>
  );
}
