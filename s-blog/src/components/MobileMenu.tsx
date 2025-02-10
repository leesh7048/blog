"use client";

import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import HeaderDropdown from "./HeaderDropdown";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="sm:hidden relative">
      <IoMenu
        className="text-2xl cursor-pointer text-white"
        onClick={() => setIsOpen(!isOpen)}
      />
      {isOpen && (
        <nav className="absolute top-[100%] right-0 w-48 bg-black/95 mt-2 rounded-lg shadow-lg z-50">
          <HeaderDropdown setIsOpen={setIsOpen} />
        </nav>
      )}
    </div>
  );
}
