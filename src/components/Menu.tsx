import Link from "next/link";
import React from "react";

const Menu: React.FC<{ isOpen: boolean }> = ({ isOpen }) => {
  return (
    <div
      style={{ display: isOpen ? "block" : "none" }}
      className="w-1/2 bg-blue-950 text-white p-5 rounded-b-xl"
    >
      <ul>
        <li className="m-5">
          <Link href="/">Home</Link>
        </li>
        <li className="m-5">
          <Link href="/aboutus">About</Link>
        </li>
        <li className="m-5">
          <Link href="/gallery">Gallery</Link>
        </li>
        <li className="m-5">
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
