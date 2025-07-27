import LogoSite from '../assets/LogoAquaNova.png'
import FotoPerfil from '../assets/FotodePerfil.jpg'
import JogoImagem from '../assets/jogo.jpg'

export function Jogo() {
    return (
        <div class="bg-blue-500 ">
            <div id="header" class="border border-red-500 flex flex-row h-[4rem] bg-blue-300">
                <span class="text-[o.5625rem] "> Funciona</span>
                <span class="text-[o.5625rem] ">Preço</span>
                <span class="text-[o.5625rem] ">somos</span>

                <img src={LogoSite} alt="" class="flex justify-center"/>

                <svg xmlns="http://www.w3.org/2000/svg" width="65" height="61" viewBox="0 0 65 61" fill="none">
                <g filter="url(#filter0_ii_2122_534)">
                    <rect x="28" y="24" width="20" height="10" rx="5" fill="white"/>
                </g>
                <g filter="url(#filter1_ddii_2122_534)">
                    <ellipse cx="32.894" cy="28.9999" rx="3.67725" ry="3.75676" fill="white"/>
                </g>
                <defs>
                    <filter id="filter0_ii_2122_534" x="13" y="9" width="45" height="35" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dx="-15" dy="-15"/>
                    <feGaussianBlur stdDeviation="15"/>
                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"/>
                    <feBlend mode="normal" in2="shape" result="effect1_innerShadow_2122_534"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dx="10" dy="10"/>
                    <feGaussianBlur stdDeviation="15"/>
                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.35 0"/>
                    <feBlend mode="normal" in2="effect1_innerShadow_2122_534" result="effect2_innerShadow_2122_534"/>
                    </filter>
                    <filter id="filter1_ddii_2122_534" x="0.216797" y="-3.75684" width="64.3545" height="64.5137" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dx="-4" dy="-4"/>
                    <feGaussianBlur stdDeviation="12.5"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2122_534"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dx="3" dy="3"/>
                    <feGaussianBlur stdDeviation="12.5"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0"/>
                    <feBlend mode="normal" in2="effect1_dropShadow_2122_534" result="effect2_dropShadow_2122_534"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_2122_534" result="shape"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dx="-6" dy="-6"/>
                    <feGaussianBlur stdDeviation="10"/>
                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0"/>
                    <feBlend mode="normal" in2="shape" result="effect3_innerShadow_2122_534"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dx="6" dy="6"/>
                    <feGaussianBlur stdDeviation="10"/>
                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.8 0"/>
                    <feBlend mode="normal" in2="effect3_innerShadow_2122_534" result="effect4_innerShadow_2122_534"/>
                    </filter>
                </defs>
                </svg>

                <button>Download</button>
                <img src={FotoPerfil} alt="" class="rounded-[100%]"/>
            </div>

            <div id="pagina" class="w-[100%]">
                <h1 class="mt-[2.5rem] mb-[2rem] flex justify-center text-[1.5rem] text-black font-bold text-shadow-[0 4px 4px rgba(0, 0, 0, 0.75)]">Conheça nosso jogo</h1>

                <div id="img" class="flex justify-center w-[100%] mb-[3rem] rounded-[100%]">
                    <img src={JogoImagem} alt="" class="flex w-[24.8rem] h-[14.5rem] self-center rounded-[4rem]"/>
                </div>

                <p class="px-[1.15rem] font-bold text-[1.25rem] text-white mb-[2rem] text-shadow-2xs">Em um futuro próximo, o mundo enfrenta uma crise hídrica sem precedentes. Em meio ao caos, o brilhante cientista Dr. Elias desenvolve uma máquina revolucionária capaz de dessalinizar água usando energia solar — uma invenção que pode salvar milhões de vidas. Porém, essa tecnologia atrai a atenção de grupos sombrios, dispostos a tudo para roubá-la e usá-la em benefício próprio. <br />
                Agora, Dr. Elias e seus fiéis ajudantes devem proteger o dessalinizador Solaris, enfrentando sabotagens, espiões e desafios ambientais. Embarque nessa jornada estratégica onde cada decisão conta: defenda a invenção, explore conhecimentos reais sobre dessalinização e energia solar, e descubra quem são os verdadeiros aliados nessa corrida pela salvação da água.</p>

                <div class="flex items-center justify-center self-center w-[100%]">
                    <button class="w-[7.5rem] h-[3rem] bg-white border-1 border-[rgba(90, 90, 90, 0.50)] rounded-[0.75rem] text-[0.75rem] text-[#0C0C0C] font-bold">Jogue agora</button>
                </div>

                <p>video</p>
            </div>
        </div>
    )
}