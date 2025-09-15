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
import { useContext, useState } from 'react'
import { ThemeContext } from '../context/ThemeContext'

export function Instrucoes() {
    const { theme } = useContext(ThemeContext)
    return (
        <div>
            <Header />

            <div id="pagina-it" class="bg-[#F7F7F7] dark:bg-[#0C0C0C] text-white px-[2.5rem] py-[2rem] pt-[6rem] lg:pt-[8rem] w-[100vw] lg:w-full">
                <h1 className="text-[2rem] w-[100%] dark:text-white text-[#0C0C0C] font-bold flex justify-center w-[95vw] mb-[3rem]">Saiba como funciona</h1>

                <div class="lg:flex lg:flex-row lg:gap-[5rem] lg:justify-between lg:text-[0.75rem]">

                    <div class="" id='instrucao1' className='w-[20rem] lg:w-[30rem] mb-[6rem]'>
                        <div id="imagens" className="w-calc(100vw - 2.5rem) flex items-center flex-col gap-y-[.5rem] mt-[1rem]">
                            <img src={theme === "dark" ? umLight : um} className="w-[4rem] h-[6rem]" />
                            <img src={theme === "dark" ? instrucao1 : instrucao1Light} className="dark:w-[10rem] dark:h-[12rem] w-[10rem] h-[10rem] mb-[4rem] mt-[.7rem]"/>
                        </div>
                        <h2 class="text-[1.5rem] font-bold font-inter flex justify-center mb-[.5rem] mt-[-4.3rem] text-black dark:text-white">Preparos para ligar</h2>
                        <p class="text-[1.25rem] font-inter text-black dark:text-white mt-[1rem]">
                            1-Instale o AquaNova em uma área externa com boa incidência solar.
                            <br />
                            <br />
                            2-Posicione corretamente o painel solar com rastreador, sempre voltado para o sol.
                            <br />
                            <br />
                            3-Conecte a entrada de água salobra ao sistema usando uma mangueira.
                            <br />
                            <br />
                            4-Garanta que o filtro caseiro (manta + carvão ativado) esteja bem encaixado.
                            <br />
                            <br />
                            5-O sistema será ativado automaticamente ao detectar energia solar suficiente.
                            <br />
                            <br />
                            6-A bomba diafragma será acionada e os sensores (nível, fluxo, pressão, condutividade) entram em operação.

                        </p>
                    </div>

                    <div id="instrucao2" className='w-[20rem] lg:w-[30rem] mb-[6rem]'>
                        <div id="imagem" class="w-calc(100vw - 2.5rem) flex items-center flex-col gap-y-[.5rem] mt-[1rem]">
                            <img src={theme === "dark" ? doisLight : dois} className="w-[4rem] h-[6rem]" />
                            <img src={theme === "dark" ? instrucao2 : instrucao2Light} className="dark:w-[18rem] dark:h-[15rem] w-[10rem] h-[10rem] mb-[4rem] dark:mb-[0rem] mt-[2rem] dark:mt-0 "/>
                        </div>
                        <h2 class="text-[1.5rem] text-black dark:text-white font-bold font-inter flex justify-center mb-[1.5rem] mt-[-3rem]">Verifique as conexões</h2>
                        <p class="text-[1.25rem] text-black dark:text-white font-inter mt-[1rem]">
                            1-A água salobra é direcionada para o recipiente de aquecimento.
                            <br />
                            <br />
                            2-O Arduino Mega comanda todas as funções: tempo de aquecimento, controle da bomba e acionamento das válvulas.
                            <br />
                            <br />
                            3-O vapor gerado pela água aquecida passa pelo condensador.
                            <br />
                            <br />
                            4-A água já dessalinizada e potável é armazenada no reservatório final.
                        </p>
                    </div>

                    <div id="instrucao3" className='w-[20rem] lg:w-[30rem] lg:mr-0 mb-[1rem]'>
                        <div class="w-calc(100vw - 2.5rem) flex items-center flex-col gap-y-[.5rem] mt-[1rem]">
                            <img src={theme === "dark" ? tresLight : tres} className="w-[4rem] h-[6rem] " />
                            <img src={theme === "dark" ? instrucao3 : instrucao3Light} className="dark:w-[15rem] dark:h-[12rem] w-[10rem] h-[10rem] mb-[1rem] mt-[1rem]"/>
                        </div>
                        <h2 class="text-[1.5rem] text-black dark:text-white font-bold font-inter flex justify-center mb-[.5rem] mt-[-2rem]">Monitoramento</h2>
                        <p class="text-[1.25rem] font-inter text-black dark:text-white mt-[1rem]">
                            1- Todos os dados são enviados em tempo real via Bluetooth.
                            Você pode visualizar:
                            <ul>
                                <li>Nível da água</li>
                                <li>Condutividade (TDS)</li>
                                <li>Pressão</li>
                                <li>Temperatura</li>
                            </ul>
                            <br />

                            2- Use um app como Serial Bluetooth Terminal (Android) para acompanhar os dados.
                            <br />
                            <br />
                            3- O sistema realiza o desligamento automático quando o nível de água potável é atingido ou a energia solar estiver insuficiente (pausando até que retorne).
                        </p>
                    </div>

                </div>

                    <div id='video' className='mt-[1rem]'>
                        <div class="lg:bg-black lg:dark:bg-white w-[20rem] h-[10rem] bg-pink-500 lg:w-[70rem] lg:h-[35rem] lg:mt-[1rem] self-center flex lg:mx-auto  text-white dark:text-black items-center justify-center">video</div>
                    </div>
            </div>
        </div>
    )
}