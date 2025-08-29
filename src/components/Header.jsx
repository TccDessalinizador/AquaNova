import Logo from '../assets/logo tcc 3.png'
import { Link } from 'react-router-dom'
import { useState, useEffect, useContext } from "react";
import { Sun, Moon } from "lucide-react";
import { ThemeContext } from '../context/ThemeContext';

export function Header() {
    const { theme, toggle } = useContext(ThemeContext)


    return (
        <div className="w-full h-[4rem] lg:h-[5rem] flex flex-row justify-between bg-[#0C0C0C] px-[0.4rem] pl-[0.5rem] fixed z-10 top-0">

            <div id="ancoras" className="lg:w-[23rem] lg:ml-[5rem] flex flex-row justify-between lg:gap-[1rem] lg:mr-[4.5rem] items-center font-inter">
                <Link to={"/instrucoes"} className="text-white my-[1rem] h-[2rem] font-light text-[0.75rem] flex items-center ml-[0.3rem] lg:mx-[2rem] font-inter lg:mr-[3rem]">Instruções</Link>
                <Link to={"/componentes"} className="text-white my-[1rem] h-[2rem] font-light text-[0.75rem] flex items-center ml-[-3em] invisible lg:visible lg:ml[0] font-inter lg:mr-[1rem]">Componentes</Link>
                <Link to={"/jogo"} className="text-white my-[1rem] h-[2rem] font-light text-[0.75rem] flex items-center ml-[-3rem] invisible lg:visible lg:ml-[0] font-inter lg:mr-[1rem]">Jogo</Link>
                <Link to={"/quemsomos"} className="text-white my-[1rem] lg:w-[10rem] h-[2rem] font-light text-[0.75rem] flex items-center lg:visible font-inter">Quem somos</Link>
            </div>

            <Link to={'/'} className='ml-[50px]'>
                <img src={Logo} alt="" className="cursor-pointer h-[6rem] w-[7rem] lg:mt-[.5rem] flex justify-center" />
            </Link>

            <div id="right" className="flex flex-row lg:w-[30rem] justify-end lg:gap-[1rem] h-[3rem] my-auto mr-[6rem]">
                <div
                    className="flex items-center bg-[#111827] rounded-full p-1 cursor-pointer transition-colors duration-800"
                    onClick={toggle}
                >
                    {/* Light Option */}
                    <div
                        className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-800 ${theme === "" ? "bg-[#1f2937] text-gray-200" : "text-gray-400"
                            }`}
                    >
                        <Sun size={20} />
                        <span className="text-sm font-medium">Light</span>
                    </div>

                    {/* Dark Option */}
                    <div
                        className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-800 ${theme === "dark" ? "bg-[#1f2937] text-gray-200" : "text-gray-400"
                            }`}
                    >
                        <Moon size={20} />
                        <span className="text-sm font-medium">Dark</span>
                    </div>
                </div>
            </div>

        </div>
    )
}
