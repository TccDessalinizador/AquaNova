import ciclo from '../assets/homeAssets/ciclo.svg'
import cifrao from '../assets/homeAssets/cifrao.svg'
import diamante from '../assets/homeAssets/diamante.svg'
import emoji from '../assets/homeAssets/emoji1.svg'
import interrogacao from '../assets/homeAssets/interrogacao.svg'
import like from '../assets/homeAssets/like.svg'
import fotoMenocci from '../assets/fotoMenocci.jpeg'
import fotoBrandassi from '../assets/fotoBrandassi.jpeg'
import modelo from '../assets/Ellipse 7.jpg'
import { Header } from './Header'

export function Home() {
    return (
        <div>
            <Header />

            <div id="pg1">
                <h1 class="text-[2.25rem] text-[#0C0C0C] font-bold text-shadow-mb mt-[8rem] flex flex-col justify-center text-center mb-[.5rem]">Sol que dessalina <br /> <p class="text-[2rem] text-[#0C0C0C] font-bold text-shadow-mb">Futuro que se ilumina</p></h1>
                <p class="text-[1.25rem] text-[#A3A3A3] font-bold flex mx-auto items-center w-[20rem] h-[7rem] text-center mb-[2rem]">Tecnologia limpa e 100% autônoma que garante água potável às comunidades do nordeste.</p>

                <div id="separacao" class="flex mx-auto w-[24.5rem] h-[0.18rem] bg-[#000000] mb-[7rem]"></div>

                <p class="text-[2rem] text-[#0C0C0C] font bold flex justify-center mb-[.5rem]">Saiba como funciona</p>
                <p class="text-[1.25rem] text-[#A3A3A3] font-bold flex mx-auto items-center w-[20rem] h-[7rem] text-center mb-[5.5rem]">Veja como o AquaNova purifica água salobra com energia solar — e como aplicar isso no semiárido.</p>

                <div id="grid" class="mb-[10rem]">

                    <div id="hiw" class="w-[100%] flex flex-col items-center px-[2rem] mb-[5rem]">
                        <img src={interrogacao} alt="" class="mb-[.8rem] " />
                        <h2 class="text-neutral-950/75 font-bold text-[1.5rem] mb-[.5rem]">Entenda o Processo</h2>
                        <p class="text-[0.9rem] font-inter text-[#0C0C0C] flex text-center">Conheça cada etapa do ciclo de dessalinização: captação, evaporação, condensação e entrega da água limpa.</p>
                    </div>

                    <div id="SPL" class="w-[100%] flex flex-col items-center px-[2rem] mb-[5rem]">
                        <img src={emoji} alt="" class="mb-[.8rem] " />
                        <h2 class="text-neutral-950/75 font-bold text-[1.5rem] mb-[.5rem]">Supere Desafios Locais</h2>
                        <p class="text-[0.9rem] font-inter text-[#0C0C0C] flex text-center">Saiba como contornar a salinidade elevada e a falta de infraestrutura com um sistema autônomo e de fácil manutenção.</p>
                    </div>

                    <div id="GFC" class="w-[100%] flex flex-col items-center px-[2rem]">
                        <img src={ciclo} alt="" class="mb-[.8rem] " />
                        <h2 class="text-neutral-950/75 font-bold text-[1.5rem] mb-[.5rem] flex text-center">Garanta Funcionamento <br /> Continuo</h2>
                        <p class="text-[0.9rem] font-inter text-[#0C0C0C] flex text-center">Aprenda a manter seu equipamento em operação 24/7, com monitoramento via Arduino e recarga solar inteligente.</p>
                    </div>

                </div>

                <div id="beneficios" class="bg-[linear-gradient(180deg,rgba(18,18,18,0)_0%,#121212_71.63%)] h-[71rem] mb-[6rem]">
                    <h2 class="text-[2rem] text-neutral-950/75 font bold flex justify-center text-start mb-[3rem]">Os benefícios de <br /> dominar o AquaNova</h2>

                    <p class="text-[1.2rem] font-light text-shadow-mb text-white w-[15rem] mx-auto mb-[3.5rem]">Ao aplicar nosso método completo, você vai conquistar:</p>

                    <div id="grid-beneficios" class="">

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

                        <button class=" mt-[3rem] w-[18rem] h-[4rem] text-[#0C0C0C] text-[1.25rem] font-bold flex mx-auto justify-center items-center bg-white rounded-[0.75rem] box-shadow-mb cursor-pointer">Saiba mais</button>

                    </div>

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
            </div>
        </div>
    )
}