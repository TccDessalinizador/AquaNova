import LogoBranca from '../assets/logo branca2.png';    // logo branca
import LogoPreta from '../assets/logo site2.png';     // logo preta
import { Link } from 'react-router-dom';
import { useState, useContext } from "react";
import { Sun, Moon, X, Menu } from "lucide-react";
import { ThemeContext } from '../context/ThemeContext';

export function Header() {
  const { theme, toggle } = useContext(ThemeContext);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <header
      className="
        w-full h-16 lg:h-20 flex items-center justify-between px-6 fixed top-0 z-50
        backdrop-blur-xl transition-colors duration-300

        /* header claro */
        bg-white/70 text-[#0A1A2F] border-b border-black/10

        /* header escuro */
        dark:bg-black/50 dark:text-white dark:border-white/10
      "
    >

      {/* Mobile Menu Button */}
      <button
        className="lg:hidden text-[#0A1A2F] dark:text-white"
        onClick={() => setSidebarOpen(true)}
      >
        <Menu size={28} />
      </button>

      {/* Centered Logo */}
      <Link
        to={'/'}
        className="absolute left-1/2 -translate-x-1/2 flex items-center"
      >
        {/* Logo para tema claro (preta) */}
        <img
          src={LogoPreta}
          alt="Logo"
          className="h-14 w-auto block dark:hidden opacity-90 hover:opacity-100 transition"
        />

        {/* Logo para tema escuro (branca) */}
        <img
          src={LogoBranca}
          alt="Logo"
          className="h-14 w-auto hidden dark:block opacity-90 hover:opacity-100 transition"
        />
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden lg:flex items-center gap-10 text-sm font-light tracking-wide">
        <Link className="text-[#0A1A2F]/70 dark:text-white/80 hover:opacity-100 transition" to="/instrucoes">
          Instruções
        </Link>
        <Link className="text-[#0A1A2F]/70 dark:text-white/80 hover:opacity-100 transition" to="/componentes">
          Componentes
        </Link>
        <Link className="text-[#0A1A2F]/70 dark:text-white/80 hover:opacity-100 transition" to="/jogo">
          Jogo
        </Link>
        <Link className="text-[#0A1A2F]/70 dark:text-white/80 hover:opacity-100 transition" to="/quemsomos">
          Quem somos
        </Link>
      </nav>

      {/* Theme Toggle */}
      <button
        onClick={toggle}
        className="
          hidden lg:flex items-center gap-2 px-4 py-2 rounded-full transition

          /* claro */
          bg-[#0A1A2F]/5 text-[#0A1A2F]

          /* escuro */
          dark:bg-white/10 dark:text-white
        "
      >
        {theme === "dark" ? <Moon size={18} /> : <Sun size={18} />}
        <span className="text-sm">{theme === "dark" ? "Dark" : "Light"}</span>
      </button>

      {/* Sidebar Mobile */}
      {sidebarOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
            onClick={() => setSidebarOpen(false)}
          />

          <aside
            className="
              fixed top-0 left-0 h-full w-[70%] p-6 flex flex-col border-r
              animate-slideIn z-50 backdrop-blur-xl transition-colors duration-300

              /* claro */
              bg-white/90 text-[#0A1A2F] border-black/10

              /* escuro */
              dark:bg-black/90 dark:text-white dark:border-white/10
            "
          >
            <button
              className="text-2xl self-end mb-8 text-[#0A1A2F] dark:text-white"
              onClick={() => setSidebarOpen(false)}
            >
              <X />
            </button>

            <nav className="flex flex-col gap-8 text-lg">
              <Link onClick={() => setSidebarOpen(false)} to="/instrucoes">Instruções</Link>
              <Link onClick={() => setSidebarOpen(false)} to="/componentes">Componentes</Link>
              <Link onClick={() => setSidebarOpen(false)} to="/jogo">Jogo</Link>
              <Link onClick={() => setSidebarOpen(false)} to="/quemsomos">Quem somos</Link>
            </nav>

            {/* Toggle dentro do menu mobile */}
            <button
              onClick={toggle}
              className="
                mt-auto flex items-center gap-3 px-4 py-3 rounded-full transition

                /* claro */
                bg-[#0A1A2F]/10 text-[#0A1A2F]

                /* escuro */
                dark:bg-white/10 dark:text-white
              "
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
