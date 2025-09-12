import Logo from '../assets/logo tcc 3.png';
import { Link } from 'react-router-dom';
import { useState, useContext } from "react";
import { Sun, Moon, X } from "lucide-react";
import { ThemeContext } from '../context/ThemeContext';
import interrogacaoHeader from "../assets/instrucoesHeader.png"
import sobreNosHeader from "../assets/sobreNosHeader.svg"
import jogoHeader from "../assets/jogoheader.png"
import componentesHeader from "../assets/componentesHeader.svg"

export function Header() {
    const { theme, toggle } = useContext(ThemeContext);
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="w-[100vw] h-[4rem] lg:h-[5rem] flex items-center justify-between bg-[#0C0C0C] px-4 fixed z-10 top-0">

            {/* Botão Menu Hambúrguer Mobile */}
            <div className="flex items-center lg:hidden">
                <button
                    className="text-white text-2xl"
                    onClick={() => setSidebarOpen(true)}
                >
                    ☰
                </button>
            </div>

            {/* Logo centralizada */}
            <div className="absolute left-1/2 transform -translate-x-1/2">
                <Link to={'/'}>
                    <img src={Logo} alt="Logo" className="mt-[2rem] cursor-pointer h-[6rem] w-[7rem] lg:mt-[2rem]" />
                </Link>
            </div>

            {/* Links Desktop */}
            <div id="ancoras" className="hidden lg:flex lg:w-[23rem] lg:ml-[5rem] flex-row justify-between lg:gap-[1rem] lg:mr-[4.5rem] items-center font-inter">
                <Link to={"/instrucoes"} className="text-white h-[2rem] font-light text-[0.75rem] flex items-center">Instruções</Link>
                <Link to={"/componentes"} className="text-white h-[2rem] font-light text-[0.75rem] flex items-center">Componentes</Link>
                <Link to={"/jogo"} className="text-white h-[2rem] font-light text-[0.75rem] flex items-center">Jogo</Link>
                <Link to={"/quemsomos"} className="text-white h-[2rem] font-light text-[0.75rem] flex items-center">Quem somos</Link>
            </div>

            {/* Toggle de tema Desktop */}
            <div className="hidden lg:flex lg:w-[30rem] justify-end lg:gap-[1rem] h-[3rem] my-auto">
                <div
                    className="flex items-center bg-[#111827] rounded-full p-1 cursor-pointer transition-colors duration-800"
                    onClick={toggle}
                >
                    {/* Light */}
                    <div className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-800 ${theme === "" ? "bg-[#1f2937] text-gray-200" : "text-gray-400"}`}>
                        <Sun size={20} />
                        <span className="text-sm font-medium">Light</span>
                    </div>
                    {/* Dark */}
                    <div className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-800 ${theme === "dark" ? "bg-[#1f2937] text-gray-200" : "text-gray-400"}`}>
                        <Moon size={20} />
                        <span className="text-sm font-medium">Dark</span>
                    </div>
                </div>
            </div>

            {/* Sidebar Mobile */}
            {sidebarOpen && (
                <>
                    {/* Overlay com blur */}
                    <div
                        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-20"
                        onClick={() => setSidebarOpen(false)}
                    ></div>

                    {/* Sidebar lateral */}
                    <div className="fixed top-0 left-0 w-[70%] h-full bg-[#0C0C0C] z-30 shadow-lg flex flex-col p-6 transition-transform duration-300">
                        <button
                            className="text-white text-2xl self-end mb-8"
                            onClick={() => setSidebarOpen(false)}
                        >
                            <X />
                        </button>
                        <Link to={"/instrucoes"} className="mt-[10rem] text-white mb-4 text-lg flex gap-[1rem] mb-[2rem]" onClick={() => setSidebarOpen(false)}> <img src={interrogacaoHeader} alt="" className='w-[1.5rem]'/> <p>Instruções</p></Link>
                        <Link to={"/componentes"} className="text-white mb-4 text-lg flex gap-[1rem] mb-[2rem]" onClick={() => setSidebarOpen(false)}><img src={componentesHeader} alt="" className='w-[1.5rem]'/> Componentes</Link>
                        <Link to={"/jogo"} className="text-white mb-4 text-lg flex gap-[1rem] mb-[2rem]" onClick={() => setSidebarOpen(false)}><img src={jogoHeader} alt="" className='w-[1.5rem]'/> Jogo</Link>
                        <Link to={"/quemsomos"} className="text-white mb-4 text-lg flex gap-[1rem]" onClick={() => setSidebarOpen(false)}><img src={sobreNosHeader} alt="" className='w-[1.5rem]'/> Quem somos</Link>

                        <div className="mt-[9rem] lg:flex lg:w-[30rem] justify-end lg:gap-[1rem] h-[3rem] my-auto">
                            <div
                                className="flex items-center bg-[#111827] rounded-full p-1 cursor-pointer transition-colors duration-800"
                                onClick={toggle}
                            >
                                {/* Light */}
                                <div className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-800 ${theme === "" ? "bg-[#1f2937] text-gray-200" : "text-gray-400"}`}>
                                    <Sun size={20} />
                                    <span className="text-sm font-medium">Light</span>
                                </div>
                                {/* Dark */}
                                <div className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-800 ${theme === "dark" ? "bg-[#1f2937] text-gray-200" : "text-gray-400"}`}>
                                    <Moon size={20} />
                                    <span className="text-sm font-medium">Dark</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </>
            )}

        </div>
    );
}

