import sublinhado from '../assets/sublinhado.svg'
import sublinhadoDark from "../assets/homeAssets/sublinhadoDark.png"
import smile from '../assets/smile.svg'
import emojiSmileDark from "../assets/emojiSmileDark.png"
import { useContext, useState } from 'react'
import { ThemeContext } from '../context/ThemeContext'

export function CompComponentes() {
    const { theme } = useContext(ThemeContext)
    return (
        <div id="componentes" className="bg-white text-white flex flex-col items-center px-[1.5rem] mt-[3rem] dark:bg-[#0C0C0C]">
            <div id="top" class="mb-[2rem] flex flex-col justify-end text-[#0C0C0C] lg:w-[100vw] w-[22rem] mr-[6rem] lg:mr-[0]">
                <h1 class="w-[100vw] flex flex-row text-[1.4rem] justify-center items-center lg:text-[2.5rem] font-inter font-bold gap-[.2rem] dark:text-white">Componentes e investimentos <img src={theme === "dark" ? smile : emojiSmileDark} alt="" className="lg:w-[2rem] lg:h-[1.7rem] lg:mt-[1rem] w-[1.5rem] h-[1.5rem]" /></h1>
                <img src={theme === "dark" ? sublinhado : sublinhadoDark} alt="" class="flex self-center lg:ml-[25rem] ml-[10rem]" />
            </div>

            <div class="flex flex-col items-center mb-[3rem] text-[#0C0C0C]">
                <h2 class="text-[1.5rem] lg:text-[2rem] font-inter font-bold dark:text-white">Saiba onde comprar </h2>
                <h2 class="text-[1.5rem] pl-[2.4rem] lg:text-[2rem] font-inter font-bold dark:text-white ml-[2.8rem] lg:ml-0">e quanto será seu investimento</h2>
            </div>

            <div id='video' class="w-[20rem] h-[14rem] lg:w-[50rem] lg:h-[30rem] bg-[#C4C4C4] text-black flex items-center justify-center mb-[2rem] lg:mb-[4rem]"><p>video</p></div>

            <h2 class="text-[2rem] text-[#0C0C0C] font-inter font-bold flex self-center justify-center mb-[1.75rem] dark:text-white">Lista de Itens</h2>

            <div id="lista" class="text-[#0C0C0C] flex flex-col lg:flex-row lg:gap-[50rem] w-[100%] mb-[2rem] lg:mb-[4rem] px-[1rem]">

                <div id="left" class="text-[1.25rem] lg:text-[1.5rem] font-bold font-inter dark:text-white">
                    <p>
                        Sensor de Condutividade/TDS <br />
                        Sensor de Nível Ultrassônico <br />
                        Sensor de Pressão de Água  <br />
                        Sensor de Fluxo de Água <br />
                        Válvulas Solenoides 12V <br />
                        Relés de Estado Sólido <br />
                        Módulo Bluetooth <br />
                        MOSFET IRF520 <br />
                        Display LCD <br />
                    </p>
                </div>

                <div id="right" class="text-[1.25rem] lg:text-[1.5rem] font-bold font-inter lg:text-right dark:text-white">
                    <p>
                        4 LDRs <br />
                        Ponte H  <br />
                        Bateria de Lítio  <br />
                        Mini Painel Solar  <br />
                        Módulo Step-down  <br />
                        Controlador de Carga  <br />
                        2 Servomotores MG995  <br />
                        Carcaça para Membrana de 50 GPD  <br />
                    </p>
                </div>
            </div>

        </div>
    )
}