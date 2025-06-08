"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Desktop Header */}
      <section className="hidden sm:flex fixed top-0 left-0 z-50 text-center py-4 text-gray-400 bg-black w-full px-10 pt-10 justify-center">
        <div className="flex justify-center gap-x-10 text-lg font-medium">
          <NavLinks />
        </div>
      </section>

      {/* Mobile Header: Toggle Button */}
      <div className="sm:hidden fixed top-3 right-3 z-50 bg-black">
        <button onClick={() => setMenuOpen(!menuOpen)} className="text-white">
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="sm:hidden fixed top-0 left-0 w-full h-screen bg-black z-40 flex flex-col items-center justify-center gap-y-6 text-gray-300 text-xl font-medium">
          <NavLinks onClick={() => setMenuOpen(false)} />
        </div>
      )}
    </>
  );
}

function NavLinks({ onClick = () => {} }: { onClick?: () => void }) {
  return (
    <>
      <div className="hover:text-white cursor-pointer" onClick={onClick}><a href="#about">About</a></div>
      <div className="hover:text-white cursor-pointer" onClick={onClick}><a href="#projects">Projects</a></div>
      <div className="hover:text-white cursor-pointer" onClick={onClick}><a href="#skills">Skills</a></div>
      <div className="hover:text-white cursor-pointer" onClick={onClick}><a href="#contact">Contacts</a></div>
      <div className="hover:text-blue-400 cursor-pointer" onClick={onClick}>
        <a href="https://drive.google.com/file/d/1EsOiTTsIf4a_rmj6IlDZ4WnizXgA7rsF/view?usp=sharing" target="_blank" rel="noopener noreferrer">
          Resume
        </a>
      </div>
    </>
  );
}
