import { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import logo from "../../img/logo.png"

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="bg-transparent shadow-md text-white px-[8%] py-2 flex items-center justify-between relative">
      {/* LOGO */}
      <Link to="/" className="flex items-center gap-3">
        <img src={logo} alt="logo" width={60} />
        <h1 className="text-2xl font-semibold">Systeminha</h1>
      </Link>

      {/* LINKS DESKTOP */}
      <nav className="hidden md:flex gap-8">
        <Link to="/" className="hover:text-shadow-2xs font-extralight">Home</Link>
        <Link to="/devs" className="hover:text-shadow-2xs font-extralight">Devs</Link>
        <Link to="/about" className="hover:text-shadow-2xs font-extralight">Sobre</Link>
      </nav>

      {/* AUTENTICAÇÃO DESKTOP */}
      <ul className="hidden md:flex gap-4">
        <li>
          <Link
            to="/login"
            className="rounded-sm px-3 py-2 bg-gradient-to-br from-[#1084ff] to-[#03eaff] via-[#64f2ff] bg-clip-text text-transparent hover:text-shadow-2xs"
          >
            Faça login
          </Link>
        </li>
        <li>
          <Link
            to="/register"
            className="border-2 border-white rounded-sm px-4 py-2 hover:border-transparent hover:bg-[#1084ff]"
          >
            Cadastre-se
          </Link>
        </li>
      </ul>

      {/* MENU ICON MOBILE */}
      <div className="md:hidden z-20" onClick={toggleMenu}>
        {menuOpen ? <AiOutlineClose className="text-3xl" /> : <AiOutlineMenu className="text-3xl" />}
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#0e0e0e] flex flex-col items-center py-4 gap-4 md:hidden z-10 shadow-lg">
          <Link to="/" onClick={toggleMenu}>Home</Link>
          <Link to="/devs" onClick={toggleMenu}>Devs</Link>
          <Link to="/about" onClick={toggleMenu}>Sobre</Link>
          <Link to="/login" onClick={toggleMenu}>Login</Link>
          <Link to="/register" onClick={toggleMenu}>Cadastrar</Link>
        </div>
      )}
    </header>
  );
};
