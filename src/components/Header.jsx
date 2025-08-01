import Logo from '../assets/logo tcc 3.png'
import Foto from '../assets/FotodePerfil.jpg'
import { Link } from 'react-router-dom'

export function Header() {

    return (
        <div class="w-[100%] h-[4rem] lg:h-[5rem] flex flex-row justify-between bg-[#0C0C0C] px-[0.4rem] pl-[0.5rem]">

            <div id="ancoras" class='lg:w-[23rem] lg:ml-[5rem] flex flex-row justify-between lg:gap-[1rem] lg:mr-[4.5rem] items-center font-inter'>
                <Link to={"/instrucoes"} class="text-white my-[1rem] h-[2rem] font-light text-[0.75rem] flex items-center ml-[0.3rem] lg:mx-[2rem] font-inter lg:mr-[3rem]">Instruções</Link>
                <Link to={"/componentes"} class="text-white my-[1rem] h-[2rem] font-light text-[0.75rem] flex items-center ml-[-3em] invisible lg:visible lg:ml[0] font-inter lg:mr-[1rem]">Componentes</Link>
                <Link to={"/jogo"} class="text-white my-[1rem] h-[2rem] font-light text-[0.75rem] flex items-center ml-[-3rem] invisible lg:visible lg:ml-[0] font-inter lg:mr-[1rem]">Jogo</Link>
                <Link to={"/quemsomos"} class="text-white my-[1rem] lg:w-[10rem] h-[2rem] font-light text-[0.75rem] flex items-center lg:visible font-inter">Quem somos</Link> 
            </div>

            <img src={Logo} alt="" class="h-[6rem] w-[7rem] lg:mt-[.5rem] flex justify-center" />

            <div id="right" class="flex flex-row lg:w-[30rem] justify-end lg:gap-[1rem]">
                <div id="toogle" class="invisible mx-[-1.5rem] lg:visible lg:mr-[0rem]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="65" height="61" viewBox="0 0 65 61" fill="none" class="">
                        <g filter="url(#filter0_ii_2120_458)">
                            <rect x="28" y="24" width="20" height="10" rx="5" fill="#0C0C0C" />
                        </g>
                        <g filter="url(#filter1_ddii_2120_458)">
                            <ellipse cx="32.894" cy="28.9999" rx="3.67725" ry="3.75676" fill="#0C0C0C" />
                        </g>
                        <defs>
                            <filter id="filter0_ii_2120_458" x="13" y="9" width="45" height="35" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dx="-15" dy="-15" />
                                <feGaussianBlur stdDeviation="15" />
                                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
                                <feBlend mode="normal" in2="shape" result="effect1_innerShadow_2120_458" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dx="10" dy="10" />
                                <feGaussianBlur stdDeviation="15" />
                                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.35 0" />
                                <feBlend mode="normal" in2="effect1_innerShadow_2120_458" result="effect2_innerShadow_2120_458" />
                            </filter>
                            <filter id="filter1_ddii_2120_458" x="0.216797" y="-3.75684" width="64.3545" height="64.5137" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dx="-4" dy="-4" />
                                <feGaussianBlur stdDeviation="12.5" />
                                <feComposite in2="hardAlpha" operator="out" />
                                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2120_458" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dx="3" dy="3" />
                                <feGaussianBlur stdDeviation="12.5" />
                                <feComposite in2="hardAlpha" operator="out" />
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0" />
                                <feBlend mode="normal" in2="effect1_dropShadow_2120_458" result="effect2_dropShadow_2120_458" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_2120_458" result="shape" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dx="-6" dy="-6" />
                                <feGaussianBlur stdDeviation="10" />
                                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0" />
                                <feBlend mode="normal" in2="shape" result="effect3_innerShadow_2120_458" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dx="6" dy="6" />
                                <feGaussianBlur stdDeviation="10" />
                                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.8 0" />
                                <feBlend mode="normal" in2="effect3_innerShadow_2120_458" result="effect4_innerShadow_2120_458" />
                            </filter>
                        </defs>
                    </svg>
                </div>

                <button class="text-[#0C0C0C] font-light h-[2rem] w-[5rem] text-[0.75rem] border-1 border-[rgba(90, 90, 90, 0.50)] bg-white my-[1rem] rounded-[0.75rem] mr-[1rem] lg:w-[10rem] lg:h-[2.5rem] font-inter">Download</button>
                
                <Link to={"/profile"}><img src={Foto} alt="" class="rounded-[100%] h-[2.5rem] h-[2.5rem] mt-[0.75rem] lg:mt-[0.5rem] lg:w-[3.5rem] lg:h-[3.5rem] lg:mr-[0.5rem]" /></Link>
            </div>


        </div>
    )
}