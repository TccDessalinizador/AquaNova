import { Header } from '../components/Header.jsx'
import um from "../assets/um.png"
import umLight from "../assets/umLight.png"
import dois from "../assets/dois.png"
import doisLight from "../assets/doisLight.png"
import tres from "../assets/tres.png"
import tresLight from "../assets/tresLight.png"

import instrucao1 from '../assets/instrucao1.png'
import instrucao2 from '../assets/instrucao2.png'
import instrucao3 from '../assets/instrucao3.png'

import instrucao1Light from "../assets/instrucao1Light.jpeg"
import instrucao2Light from '../assets/instrucao2Light.jpeg'
import instrucao3Light from '../assets/instrucao3Light.jpeg'

import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

export function Instrucoes() {
    const { theme } = useContext(ThemeContext)

    const cards = [
        {
            icon: theme === "dark" ? umLight : um,
            img: theme === "dark" ? instrucao1 : instrucao1Light,
            title: "Preparos para ligar",
            text: [
                "Instale o AquaNova em uma área externa com boa incidência solar.",
                "Posicione o painel solar voltado para o sol.",
                "Conecte a entrada de água salobra ao sistema.",
                "Garanta que o filtro esteja corretamente encaixado.",
                "O sistema liga automaticamente com energia solar suficiente.",
                "A bomba e sensores entram em operação."
            ]
        },
        {
            icon: theme === "dark" ? doisLight : dois,
            img: theme === "dark" ? instrucao2 : instrucao2Light,
            title: "Verifique as conexões",
            text: [
                "A água salobra é direcionada para o aquecedor.",
                "O Arduino controla bomba, tempo e válvulas.",
                "O vapor passa pelo condensador para resfriamento.",
                "A água potável é armazenada no reservatório final."
            ]
        },
        {
            icon: theme === "dark" ? tresLight : tres,
            img: theme === "dark" ? instrucao3 : instrucao3Light,
            title: "Monitoramento",
            text: [
                "Dados via Bluetooth (nível, TDS, pressão e temperatura).",
                "Use apps como Serial Bluetooth Terminal.",
                "Desligamento automático ao encher o reservatório ou falta de energia."
            ]
        }
    ];

    return (
        <div>
            <Header />

            {/* FUNDO PRINCIPAL */}
            <div className="bg-[#F7F7F7] dark:bg-[#0A1128] px-[2rem] py-[5rem] w-full transition-all">

                {/* TÍTULO */}
                <h1 className="text-[2.3rem] font-bold text-center text-[#0A1128] dark:text-white mb-[4rem] tracking-tight">
                    Saiba como funciona
                </h1>

                {/* 3 CARDS */}
                <div className="grid lg:grid-cols-3 gap-[4rem] justify-items-center">
                    {cards.map((card, i) => (
                        <div key={i} className="w-[20rem] lg:w-[25rem] text-center p-[1rem]">
                            <img src={card.icon} className="w-[4rem] h-[6rem] mx-auto" />
                            <img src={card.img} className="w-[12rem] h-[12rem] mx-auto my-[1.5rem]" />

                            <h2 className="text-[1.5rem] font-bold text-[#0A1128] dark:text-white mb-[1rem]">
                                {card.title}
                            </h2>

                            <ul className="text-[1.05rem] text-[#0A1128] dark:text-white leading-[1.65rem] space-y-[0.7rem] text-left mx-auto w-[90%]">
                                {card.text.map((t, idx) => (
                                    <li key={idx} className="before:content-['•'] before:mr-2">
                                        {t}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* VÍDEO */}
                <h2 className="text-[1.7rem] font-semibold text-center text-[#0A1128] dark:text-white mt-[6rem] mb-[2rem] tracking-tight">
                    Veja o sistema em funcionamento
                </h2>

                <div className="flex justify-center">
                    <div className="w-[22rem] h-[13rem] lg:w-[70rem] lg:h-[40rem] bg-white dark:bg-[#0A1128] rounded-2xl overflow-hidden shadow-2xl transition-all">
                        <iframe
                            className="w-full h-full"
                            src="https://www.youtube.com/embed/BKCd73my7Tw"
                            title="Demonstração do Sistema"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    )
}
