import Logo from '../assets/logo tcc 3.png';
import { Link } from 'react-router-dom';
import { useState, useContext } from "react";
import { Sun, Moon, X, Menu } from "lucide-react";
import { ThemeContext } from '../context/ThemeContext';

export function Header() {
  const { theme, toggle } = useContext(ThemeContext);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <header className="w-full h-16 lg:h-20 flex items-center justify-between px-6 fixed top-0 z-50 backdrop-blur-xl bg-black/50 border-b border-white/10">

      {/* Mobile Menu Button */}
      <button
        className="lg:hidden text-white"
        onClick={() => setSidebarOpen(true)}
      >
        <Menu size={28} />
      </button>

      {/* Centered Logo */}
      <Link
        to={'/'}
        className="absolute left-1/2 -translate-x-1/2 flex items-center"
      >
        <img
          src={Logo}
          alt="Logo"
          className="h-14 w-auto opacity-90 hover:opacity-100 transition"
        />
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden lg:flex items-center gap-10 text-sm font-light tracking-wide">
        <Link to="/instrucoes" className="text-white/80 hover:text-white transition">Instruções</Link>
        <Link to="/componentes" className="text-white/80 hover:text-white transition">Componentes</Link>
        <Link to="/jogo" className="text-white/80 hover:text-white transition">Jogo</Link>
        <Link to="/quemsomos" className="text-white/80 hover:text-white transition">Quem somos</Link>
      </nav>

      {/* Theme Toggle */}
      <button
        onClick={toggle}
        className="hidden lg:flex items-center gap-2 bg-white/5 hover:bg-white/10 px-4 py-2 rounded-full text-white transition"
      >
        {theme === "dark" ? (
          <Moon size={18} />
        ) : (
          <Sun size={18} />
        )}
        <span className="text-sm">{theme === "dark" ? "Dark" : "Light"}</span>
      </button>

      {/* Sidebar Mobile */}
      {sidebarOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
            onClick={() => setSidebarOpen(false)}
          />

          <aside className="fixed top-0 left-0 h-full w-[70%] bg-black/90 backdrop-blur-xl z-50 p-6 flex flex-col border-r border-white/10 animate-slideIn">
            <button
              className="text-white text-2xl self-end mb-8"
              onClick={() => setSidebarOpen(false)}
            >
              <X />
            </button>

            <nav className="flex flex-col gap-8 text-lg text-white/90">
              <Link to="/instrucoes" onClick={() => setSidebarOpen(false)}>Instruções</Link>
              <Link to="/componentes" onClick={() => setSidebarOpen(false)}>Componentes</Link>
              <Link to="/jogo" onClick={() => setSidebarOpen(false)}>Jogo</Link>
              <Link to="/quemsomos" onClick={() => setSidebarOpen(false)}>Quem somos</Link>
            </nav>

            <button
              onClick={toggle}
              className="mt-auto flex items-center gap-3 bg-white/5 hover:bg-white/10 px-4 py-3 rounded-full text-white transition"
            >
              {theme === "dark" ? <Moon size={20} /> : <Sun size={20} />}
              <span className="text-sm">Tema: {theme === "dark" ? "Dark" : "Light"}</span>
            </button>
          </aside>
        </>
      )}
    </header>
  );
}