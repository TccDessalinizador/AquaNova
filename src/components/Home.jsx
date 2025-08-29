import ciclo from '../assets/homeAssets/ciclo.svg'
import cifrao from '../assets/homeAssets/cifrao.svg'
import diamante from '../assets/homeAssets/diamante.svg'
import emoji from '../assets/homeAssets/emoji1.svg'
import interrogacao from '../assets/homeAssets/interrogacao.svg'
import like from '../assets/homeAssets/like.svg'
import fotoMenocci from '../assets/fotoMenocci.jpeg'
import fotoBrandassi from '../assets/fotoBrandassi.jpeg'
import modelo from '../assets/Ellipse 7.jpg'
import sublinhado from '../assets/sublinhado.svg'
import smile from '../assets/smile.svg'
import fotoJogo from '../assets/jogoFoto.png'
import robo from '../assets/robo.png'
import circuloDark from '../assets/homeAssets/circuloDark.png'
import interrogacaoDark from '../assets/homeAssets/interrogacaoDark.png'
import smileDark from '../assets/homeAssets/smileDark.png'
import { Header } from './Header'
import { Link } from 'react-router-dom'
import { useContext, useState } from 'react'
import { ThemeContext } from '../context/ThemeContext'


export function Home() {
    const { theme } = useContext(ThemeContext)

    return (
        <div>
            <Header />

            <div id="pg1" class="dark:bg-[#0C0C0C] lg:pt-[8rem]">
                <h1 class="text-[2.25rem] text-[#0C0C0C] font-bold text-shadow-mb mt-[rem] flex flex-col justify-center text-center mb-[.5rem] lg:text-[4.5rem] dark:text-white dark:text-shadow-none">Sol que dessalina <br /> <p class=" dark:text-white dark:text-shadow-none text-[2rem] text-[#0C0C0C] font-bold text-shadow-mb lg:text-[4.5rem]">Futuro que se ilumina</p></h1>
                <p class="text-[1.25rem] text-[#A3A3A3] font-bold flex mx-auto items-center w-[20rem] h-[7rem] text-center mb-[2rem] lg:w-[60rem] lg:justify-center">Tecnologia limpa e 100% autônoma que garante água potável às comunidades do nordeste.</p>

                <div id="separacao" class="flex mx-auto w-[24.5rem] h-[0.18rem] bg-[#000000] mb-[7rem] dark:bg-white"></div>

                <p class="text-[2rem] text-[#0C0C0C] font bold flex justify-center mb-[.5rem] lg:text-[3rem] dark:text-white">Saiba como funciona</p>
                <p class="text-[1.25rem] text-[#A3A3A3] font-bold flex mx-auto items-center w-[20rem] h-[7rem] text-center mb-[5.5rem] lg:w-[60rem] lg:justify-center">Veja como o AquaNova purifica água salobra com energia solar — e como aplicar isso no semiárido.</p>

                <div id="grid" class="mb-[10rem] lg:flex">

                    <div id="hiw" class="w-[100%] flex flex-col items-center px-[2rem] mb-[5rem]">
                        {theme === "dark" ? <img src={interrogacaoDark} alt="" class="mb-[.8rem]" /> : <img src={interrogacao} alt="" class="mb-[.8rem]" />}
                        <h2 class="text-neutral-950/75 font-bold text-[1.5rem] mb-[.5rem] dark:text-white">Entenda o Processo</h2>
                        <p class="text-[0.9rem] font-inter text-[#0C0C0C] flex text-center dark:text-[#A3A3A3]">Conheça cada etapa do ciclo de dessalinização: captação, evaporação, condensação e entrega da água limpa.</p>
                    </div>

                    <div id="SPL" class="w-[100%] flex flex-col items-center px-[2rem] mb-[5rem]">
                        {theme === "dark" ? <img src={smileDark} alt="" class="mb-[.8rem]" /> : <img src={emoji1} alt="" class="mb-[.8rem]" />}
                        <h2 class="text-neutral-950/75 font-bold text-[1.5rem] mb-[.5rem] dark:text-white">Supere Desafios Locais</h2>
                        <p class="text-[0.9rem] font-inter text-[#0C0C0C] flex text-center dark:text-[#A3A3A3]">Saiba como contornar a salinidade elevada e a falta de infraestrutura com um sistema autônomo e de fácil manutenção.</p>
                    </div>

                    <div id="GFC" class="w-[100%] flex flex-col items-center px-[2rem]">
                        <img src={ciclo} alt="" class="mb-[.8rem] " />
                        <h2 class="text-neutral-950/75 font-bold text-[1.5rem] mb-[.5rem] flex flex-col text-center lg:w-[24rem] lg:flex-row lg:gap-[.1rem] dark:text-white">Garanta Funcionamento <div /> Continuo</h2>
                        <p class="text-[0.9rem] font-inter text-[#0C0C0C] flex text-center dark:text-[#A3A3A3]">Aprenda a manter seu equipamento em operação 24/7, com monitoramento via Arduino e recarga solar inteligente.</p>
                    </div>

                </div>

                <div id="beneficios" class="bg-[linear-gradient(180deg,rgba(18,18,18,0)_0%,#121212_71.63%)] h-[71rem] mb-[6rem] lg:h-[40rem]">
                    <h2 class="text-[2rem] dark:text-white text-neutral-950/75 font bold flex flex-col justify-center items-center text-start mb-[3rem] lg:flex-row lg:text-[3rem] lg:gap-[.2rem]">Os benefícios de <div /> dominar o AquaNova</h2>

                    <p class="text-[1.2rem] font-light text-shadow-mb text-white w-[15rem] mx-auto mb-[3.5rem] lg:w-[100%] lg:text-[1.5rem] flex lg:items-center lg:justify-center">Ao aplicar nosso método completo, você vai conquistar:</p>

                    <div id="grid-beneficios" class="lg:flex lg:gap-[5rem] lg:px-[12rem]">

                        <div id='fdu' class="flex flex-col items-center mb-[3rem]">
                            <img src={like} alt="" />
                            <h2 class="text-[#F0F0F0] mt-[1.5rem] mb-[.5rem] text-[1.5rem] font-bold">Fácil de Usar</h2>
                            <p class="text-[#F0F0F0] text-[0.9rem] flex text-center w-[19.5rem]">Interface intuitiva e sistema automatizado: qualquer pessoa pode operar com o mínimo de instruções</p>
                        </div>

                        <div id='tecnologia' class="flex flex-col items-center mb-[3rem]">
                            <img src={diamante} alt="" />
                            <h2 class="text-[#F0F0F0] mt-[1.5rem] mb-[.5rem] text-[1.5rem] font-bold">Tecnologia Valiosa</h2>
                            <p class="text-[#F0F0F0] text-[0.9rem] flex text-center w-[19.5rem]">Um sistema moderno, confiável e sustentável, feito para durar mesmo nas condições mais desafiadoras.</p>
                        </div>

                        <div id='economia' class="flex flex-col items-center">
                            <img src={cifrao} alt="" />
                            <h2 class="text-[#F0F0F0] mt-[1.5rem] mb-[.5rem] text-[1.5rem] font-bold">Economia Garantida</h2>
                            <p class="text-[#F0F0F0] text-[0.9rem] flex text-center w-[19.5rem]">Redução de custos com transporte de água e energia, trazendo retorno a longo prazo para comunidades.</p>
                        </div>


                    </div>
                    <button class=" mt-[3rem] w-[18rem] h-[4rem] text-[#0C0C0C] text-[1.25rem] font-bold flex mx-auto justify-center self-center items-center bg-white rounded-[0.75rem] box-shadow-mb cursor-pointer">Saiba mais</button>

                </div>

                <div id="quemsomos">
                    <h1 class="flex justify-center mb-[2rem] text-[1.5rem] text-[#010000] font-bold text-shadow-lg/30">Quem somos?</h1>

                    <div id="fotos" class="flex flex-col items-center h-[74vh] lg:flex-row lg:px-[8rem] lg:gap-[2rem] lg:justify-between">
                        <div class="flex flex-col items-center">
                            <img src={fotoMenocci} alt="menocci" class="w-[12.5rem] lg:w-[15rem] h-[12rem] lg:h-[14rem] rounded-[100%] drop-shadow-xl/50" />
                            <p class="text-[1.5rem] text-[#0C0C0C] font-semibold mb-[2.5rem] mt-[1.25rem] font-inter">Arthur Menocci</p>
                        </div>

                        <div class="flex flex-col items-center">
                            <img src={modelo} alt="mariano" class="w-[12.5rem] lg:w-[15rem] h-[12rem] lg:h-[14rem] rounded-[100%]" />
                            <p class="text-[1.5rem] text-[#0C0C0C] font-semibold mb-[2.5rem] mt-[1.25rem] font-inter">Eduardo Mariano</p>
                        </div>

                        <div class="flex flex-col items-center">
                            <img src={modelo} alt="milbeyer" class="w-[12.5rem] lg:w-[15rem] h-[12rem] lg:h-[14rem] rounded-[100%]" />
                            <p class="text-[1.5rem] text-[#0C0C0C] font-semibold mb-[2.5rem] mt-[1.25rem] font-inter">Guilherme Milbeyer</p>
                        </div>

                        <div class="flex flex-col items-center">
                            <img src={fotoBrandassi} alt="brandassi" class="w-[12.5rem] lg:w-[15rem] h-[12rem] lg:h-[14rem] rounded-[100%] drop-shadow-xl/50" />
                            <p class="text-[1.5rem] text-[#0C0C0C] font-semibold mb-[2.5rem] mt-[1.25rem] font-inter">Gustavo Brandassi</p>
                        </div>

                    </div>
                </div>

                <div id="componentes" class="bg-white text-white pt-[4rem] flex flex-col items-center px-[1.5rem] mt-[4rem]">
                    <div id="top" class="mb-[2rem] flex flex-col justify-end text-[#0C0C0C]">
                        <h1 class="flex flex-row text-[1.5rem] lg:text-[2.5rem] font-inter font-bold gap-[.2rem]">Componentes e investimentos <img src={smile} alt="" /></h1>
                        <img src={sublinhado} alt="" class="flex self-end border border-red-500 bg-black" />
                    </div>

                    <div class="flex flex-col items-center mb-[3rem] text-[#0C0C0C]">
                        <h2 class="text-[1.5rem] lg:text-[2rem] font-inter font-bold">Saiba onde comprar </h2>
                        <h2 class="text-[1.5rem] lg:text-[2rem] font-inter font-bold">e quanto será seu investimento</h2>
                    </div>

                    <div id='video' class="w-[24rem] h-[18rem] lg:w-[50rem] lg:h-[30rem] bg-[#C4C4C4] text-black flex items-center justify-center mb-[2rem] lg:mb-[4rem]"><p>video</p></div>

                    <h2 class="text-[1.5rem] text-[#0C0C0C] font-inter font-bold flex justify-center mb-[1.75rem]">Lista de Itens</h2>

                    <div id="lista" class="text-[#0C0C0C] flex flex-col lg:flex-row lg:gap-[50rem] w-[100%] mb-[2rem] lg:mb-[4rem]">

                        <div id="left" class="text-[1.25rem] lg:text-[1.5rem] font-bold font-inter">
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

                        <div id="right" class="text-[1.25rem] lg:text-[1.5rem] font-bold font-inter lg:text-right">
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

                <div id="jogo" className="w-[100%] h-[100vh] dark:bg-dark-fade">
                    <h1 class="mt-[2.5rem] mb-[2rem] flex justify-center text-[1.5rem] text-black font-bold text-shadow-[0 4px 4px rgba(0, 0, 0, 0.75)]">Conheça nosso jogo</h1>

                    <div id="img" class="flex justify-center w-[100%] mb-[3rem] rounded-[100%]">
                        <img src={fotoJogo} alt="" class="flex w-[25rem] lg:w-[45.8rem] lg:h-[25.5rem] self-center rounded-[3.5rem]" />
                    </div>

                    <p class="w-[45.8rem] mx-auto px-[1.15rem] font-normal text-[1.25rem] text-[#0C0C0C] mb-[1.5rem] text-shadow-2xs">O cientista Dr. Elias criou um dessalinizador movido a energia solar, capaz de mudar o mundo. Mas sua invenção passou a ser alvo de grupos que querem usá-la para fins próprios. Agora, ele e seus ajudantes precisam proteger essa tecnologia a todo custo. Enfrente desafios, proteja o projeto e ajude a salvar o futuro da água no planeta.

                        <br />Será você capaz de proteger o futuro da humanidade?</p>

                    <div class="flex items-center justify-center self-center w-[100%]">
                        <Link to={'/jogo'} class="w-[8rem] h-[2rem] bg-white border-1 border-[rgba(90, 90, 90, 0.50)] rounded-[0.75rem] text-[0.75rem] text-[#0C0C0C] font-bold flex items-center justify-center cursor-pointer">Saiba mais</Link>
                    </div>
                </div>

                <div id="referencias" class="bg-gradient-to-t from-neutral-900 to-neutral-900/0 dark:bg-[#131313] flex flex-col text-white h-[94vh] mt-[-25rem] lg:mt-[4rem] lg:w-[80rem] lg:h-[40rem] lg:mx-auto lg:mb-[1rem]">
                    <h1 class="mt-[3rem] text-[2rem] font-inter font-bold flex justify-center text-shadow-xl text-white mb-[5rem] lg:mb-[8rem]">Referências</h1>

                    <div class="lg:flex lg:flex-row">
                        <div class="flex justify-center self-center lg:h-[15rem] lg:w-[80rem] lg:ml-[5rem] flex justify-center items-center text-[1.5rem] px-[1rem]">
                            <p>Saiba quais foram as principais fontes que embasaram nossos estudos, pesquisas e desenvolvimento do projeto AquaNova. Acreditamos na ciência, na tecnologia acessível e em soluções sustentáveis — por isso, cada dado, componente e ideia utilizada tem base em materiais confiáveis e atualizados. Confira abaixo as referências que ajudaram a tornar este projeto possível.</p>
                        </div>

                        <div class="w-[100%] flex justify-center self-center mt-[1rem]">
                            <img src={robo} alt="" class="w-[12rem] h-[12rem]" />
                        </div>

                    </div>

                </div>

            </div>
        </div>
    )
}