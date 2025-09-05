import ciclo from '../assets/homeAssets/ciclo.svg'
import cifrao from '../assets/homeAssets/cifrao.svg'
import diamante from '../assets/homeAssets/diamante.svg'
import emoji from '../assets/homeAssets/emoji1.svg'
import interrogacao from '../assets/homeAssets/interrogacao.svg'
import like from '../assets/homeAssets/like.svg'
import fotoMenocci from '../assets/fotoMenocci.jpeg'
import fotoBrandassi from '../assets/fotoBrandassi.jpeg'
import modelo from '../assets/Ellipse 7.jpg'
import fotoJogo from '../assets/jogoFoto.png'
import robo from '../assets/robo.png'
import circuloDark from '../assets/homeAssets/circuloDark.png'
import interrogacaoDark from '../assets/homeAssets/interrogacaoDark.png'
import smileDark from '../assets/homeAssets/smileDark.png'
import cifraoDark from "../assets/homeAssets/cifraoDark.png"
import diamanteDark from "../assets/homeAssets/diamanteDark.png"
import likeDark from "../assets/homeAssets/likeDark.png"
import { Header } from './Header'
import { Link } from 'react-router-dom'
import { useContext, useState } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import { CardHome } from './CardHomeF'
import { CardHomeS } from './CardHomeS'
import { QuemSomosComp } from './QuemSomosComp'
import { CompComponentes } from './CompComponentes'


export function Home() {
    const { theme } = useContext(ThemeContext)

    return (
        <div>
            <Header />

            <div id="pg1" className="dark:bg-[#0C0C0C] lg:pt-[8rem]">
                <h1 className="text-[2.25rem] text-[#0C0C0C] font-bold text-shadow-mb mt-[rem] flex flex-col justify-center text-center mb-[.5rem] lg:text-[4.5rem] dark:text-white dark:text-shadow-none">Sol que dessalina <br /> <p className=" dark:text-white dark:text-shadow-none text-[2rem] text-[#0C0C0C] font-bold text-shadow-mb lg:text-[4.5rem]">Futuro que se ilumina</p></h1>
                <p className="text-[1.25rem] text-[#A3A3A3] font-bold flex mx-auto items-center w-[20rem] h-[7rem] text-center mb-[2rem] lg:w-[60rem] lg:justify-center">Tecnologia limpa e 100% autônoma que garante água potável às comunidades do nordeste.</p>

                <div id="separacao" className="flex mx-auto w-[24.5rem] h-[0.18rem] bg-[#000000] mb-[7rem] dark:bg-white"></div>

                <p className="text-[2rem] text-[#0C0C0C] font bold flex justify-center mb-[.5rem] lg:text-[3rem] dark:text-white">Saiba como funciona</p>
                <p className="text-[1.25rem] text-[#A3A3A3] font-bold flex mx-auto items-center w-[20rem] h-[7rem] text-center mb-[5.5rem] lg:w-[60rem] lg:justify-center">Veja como o AquaNova purifica água salobra com energia solar — e como aplicar isso no semiárido.</p>

                <div id="grid" className="mb-[10rem] lg:flex">

                    <CardHome
                        img={theme === "dark" ? interrogacaoDark : interrogacao}
                        title={"Entenda o Processo"}
                        text={"Conheça cada etapa do ciclo de dessalinização: captação, evaporação, condensação e entrega da água limpa."}
                    />

                    <CardHome
                        img={theme === "dark" ? smileDark : emoji}
                        title={"Supere Desafios Locais"}
                        text={"Saiba como contornar a salinidade elevada e a falta de infraestrutura com um sistema autônomo e de fácil manutenção."}
                    />

                    <CardHome
                        img={theme === "dark" ? circuloDark : ciclo}
                        title={"Garanta Funcionamento Continuo"}
                        text={"Aprenda a manter seu equipamento em operação 24/7, com monitoramento via Arduino e recarga solar inteligente."}
                    />
                </div>


                <div id="beneficios" className="dark:bg-[#0C0C0C] h-[71rem] mb-[0rem]">
                    <h2 className="text-[2rem] dark:text-white text-neutral-950/75 font bold flex flex-col justify-center items-center text-start mb-[3rem] lg:flex-row lg:text-[3rem] lg:gap-[.2rem]">Os benefícios de <div /> dominar o AquaNova</h2>

                    <p className="text-[1.2rem] font-light dark:text-shadow-mb text-black w-[15rem] mx-auto mb-[3.5rem] lg:w-[100%] lg:text-[1.5rem] flex lg:items-center lg:justify-center dark:text-white">Ao aplicar nosso método completo, você vai conquistar:</p>

                    <div id="grid-beneficios" className="lg:flex lg:flex-col lg:gap-[5rem] lg:px-[12rem]">
                        <div id="grid-beneficios" className="lg:flex lg:flex-row lg:justify-center lg:self-center lg:gap-[5rem]">

                            <CardHomeS
                                img={theme === "dark" ? like : likeDark}
                                tittle={"Fácil de Usar"}
                                text={"Interface intuitiva e sistema automatizado: qualquer pessoa pode operar com o mínimo de instruções"}
                            />


                            <CardHomeS
                                img={theme === "dark" ? diamante : diamanteDark}
                                tittle={"Tecnologia Valiosa"}
                                text={"Um sistema moderno, confiável e sustentável, feito para durar mesmo nas condições mais desafiadoras."}
                            />

                            <CardHomeS
                                img={theme === "dark" ? cifrao : cifraoDark}
                                tittle={"Economia Garantida"}
                                text={"Redução de custos com transporte de água e energia, trazendo retorno a longo prazo para comunidades."}
                            />

                        </div>
                        <button className=" mt-[3rem] w-[18rem] h-[4rem] border border-black text-[#0C0C0C] text-[1.25rem] font-bold flex mx-auto justify-center items-center bg-white rounded-[0.75rem] box-shadow-mb cursor-pointer lg:mt-[0rem]">Saiba mais</button>

                    </div>
                </div>

                <div id="quemsomos" className="lg:w-[100vw] dark:bg-[#0C0C0C] lg:mt-[-25rem]">
                    <h1 className="flex justify-center mb-[2rem] lg:mt-[8rem] text-[2.5rem] dark:text-white text-[#010000] font-bold text-shadow-lg/30">Quem somos?</h1>

                    <div id="fotos" className="flex flex-col items-center h-[74vh] lg:flex-row lg:px-[8rem] lg:gap-[2rem] lg:justify-between">
                        <QuemSomosComp
                            img={fotoMenocci}
                            tittle={"Arthur Menocci"}
                        />

                        <QuemSomosComp
                            img={modelo}
                            tittle={"Eduardo Mariano"}
                        />

                        <QuemSomosComp
                            img={modelo}
                            tittle={"Guilherme Milbeyer"}
                        />

                        <QuemSomosComp
                            img={fotoBrandassi}
                            tittle={"Gustavo Brandassi"}
                        />

                    </div>
                </div>
           
                <CompComponentes />

                <div id="jogo" className="w-[100%] h-[100vh] dark:bg-dark-fade">
                        <h1 className="text-[2.5rem] mt-[2.5rem] mb-[2rem] flex justify-center text-[1.5rem] text-black font-bold text-shadow-[0 4px 4px rgba(0, 0, 0, 0.75)] dark:text-white">Conheça nosso jogo</h1>

                        <div id="img" className="flex justify-center w-[100%] mb-[3rem] rounded-[100%]">
                            <img src={fotoJogo} alt="" className="flex w-[25rem] lg:w-[45.8rem] lg:h-[25.5rem] self-center rounded-[3.5rem]" />
                        </div>

                        <p className="w-[45.8rem] mx-auto px-[1.15rem] font-normal text-[1.25rem] text-[#0C0C0C] mb-[1.5rem] text-shadow-2xs dark:text-white">O cientista Dr. Elias criou um dessalinizador movido a energia solar, capaz de mudar o mundo. Mas sua invenção passou a ser alvo de grupos que querem usá-la para fins próprios. Agora, ele e seus ajudantes precisam proteger essa tecnologia a todo custo. Enfrente desafios, proteja o projeto e ajude a salvar o futuro da água no planeta.

                            <br />Será você capaz de proteger o futuro da humanidade?</p>

                        <div className="flex items-center justify-center self-center w-[100%]">
                            <Link to={'/jogo'} className="w-[18rem] h-[4rem] bg-white border-1 border-[rgba(90, 90, 90, 0.50)] rounded-[0.75rem] text-[1rem] text-[#0C0C0C] font-bold flex items-center justify-center cursor-pointer">Saiba mais</Link>
                        </div>
                </div>

                <div id="referencias" className="bg-white dark:bg-[#0C0C0C] flex flex-col text-white h-[94vh] mt-[-18rem] lg:mt-[4rem] lg:w-[80rem] lg:h-[40rem] lg:mx-auto lg:mb-[0rem]">
                        <h1 class="mt-[3rem] text-[2rem] font-inter font-bold flex justify-center text-black dark:text-white mb-[5rem] lg:mb-[8rem]">Referências</h1>

                        <div class="lg:flex lg:flex-row">
                            <div class="flex justify-center self-center lg:h-[15rem] lg:w-[80rem] lg:ml-[5rem] flex justify-center items-center text-[1.5rem] px-[1rem] text-black dark:text-white">
                                <p>Saiba quais foram as principais fontes que embasaram nossos estudos, pesquisas e desenvolvimento do projeto AquaNova. Acreditamos na ciência, na tecnologia acessível e em soluções sustentáveis — por isso, cada dado, componente e ideia utilizada tem base em materiais confiáveis e atualizados. Confira abaixo as referências que ajudaram a tornar este projeto possível.</p>
                            </div>

                            <div class="w-[100%] flex justify-center self-center mt-[1rem]">
                                <img src={robo} alt="" class="w-[12rem] h-[12rem]" />
                            </div>

                        </div>
                        <Link to={"/referencias"} class=" mt-[3rem] w-[18rem] h-[4rem] text-[#0C0C0C] text-[1rem] font-bold flex mx-auto justify-center items-center bg-white rounded-[0.75rem] box-shadow-mb cursor-pointer lg:mt-[0rem] lg:mt-[4rem] border border-black">Saiba mais</Link>

                </div>
            </div>
        </div>    
    )
}