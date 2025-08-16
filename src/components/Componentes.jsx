import { Header } from './Header.jsx'
import sublinhado from '../assets/sublinhado.svg'
import smile from '../assets/smile.svg'
import bateria from '../assets/produtosImgs/bateria.png'
import carcaca from '../assets/produtosImgs/carcaca.jpg'
import controlador from '../assets/produtosImgs/controlador.jpg'
import lcd from '../assets/produtosImgs/lcd.jpg'
import ldr from '../assets/produtosImgs/ldr.jpg'
import painelSolar from '../assets/produtosImgs/painelSolar.jpg'

export function Componentes() {
    return (
        <div>
            <Header />
            {/* bg-[#0C0C0C] */}
            <div id="pagina" class="bg-white text-white pt-[4rem] flex flex-col items-center px-[1.5rem] mt-[4rem]">
                <div id="top" class="mb-[2rem] flex flex-col justify-end text-[#0C0C0C]">
                    <h1 class="flex flex-row text-[1.5rem] lg:text-[2.5rem] font-inter font-bold gap-[.2rem]">Componentes e investimentos <img src={smile} alt="" /></h1>
                    <img src={sublinhado} alt="" class="flex self-end border border-red-500 bg-black"/>
                </div>

                <div class="flex flex-col items-center mb-[3rem] text-[#0C0C0C]">
                    <h2 class="text-[1.5rem] lg:text-[2rem] font-inter font-bold">Saiba onde comprar </h2> 
                    <h2 class="text-[1.5rem] lg:text-[2rem] font-inter font-bold">e quanto será seu investimento</h2>
                </div>

                <div id='video'class="w-[24rem] h-[18rem] lg:w-[50rem] lg:h-[30rem] bg-[#C4C4C4] text-black flex items-center justify-center mb-[2rem] lg:mb-[4rem]"><p>video</p></div>

                <h2 class="text-[1.5rem] text-[#0C0C0C] font-inter font-bold flex justify-center mb-[1.75rem]">Lista de Itens</h2>

                <div id="lista" class="text-[#0C0C0C] flex flex-col lg:flex-row lg:gap-[50rem] w-[100%] mb-[2rem] lg:mb-[10rem]">

                    <div id="left"  class="text-[1.25rem] lg:text-[1.5rem] font-bold font-inter">
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

                <h2 class="text-[1.5rem] font-inter font-bold flex justify-center mb-[1rem] text-[#0C0C0C]">Comprar</h2>
                <div id="comprar" class="flex flex-row lg:grid lg:grid-cols-3 lg:gap-[1rem]">

                    <div id="produto1" class="border-[4px] border-[#0C0C0C]  h-[40rem] bg-white mb-[1rem] items-center">
                        <img src={bateria} alt="" class="w-[24rem] h-[28rem] mb-[.5rem] mx-auto"/>

                        <h2 class="text-[#0C0C0C] text-[2rem] flex justify-center mb-[.3rem] font-bold">Bateria de lítio</h2>
                        <p class="text-[#0C0C0C] text-[1.5rem] flex justify-center font-bold mb-[.5rem]">R$52,50</p>

                        <button class="w-[11rem] h-[3.5rem] font-bold text-[1.375rem] text-[#0C0C0C] border border-[#0C0C0C] flex items-center justify-center self-center mx-auto">Ver mais</button>
                    </div>

                    <div id="produto2" class="border-[4px] border-[#0C0C0C]  h-[40rem] bg-white mb-[1rem]">
                        <img src={carcaca} alt="" class="w-[22rem] h-[26rem] mb-[.5rem] mx-auto"/>

                        <h2 class="text-[#0C0C0C] text-[2rem] flex justify-center mb-[.3rem] font-bold">Carcaça para Membrana de 50 GPD</h2>
                        <p class="text-[#0C0C0C] text-[1.5rem] flex justify-center font-bold mb-[.5rem]">R$60,91</p>

                        <button class="w-[11rem] h-[3.5rem] font-bold text-[1.375rem] text-[#0C0C0C] border border-[#0C0C0C] flex items-center justify-center self-center mx-auto">Ver mais</button>
                    </div>


                    <div id="produto3" class="border-[4px] border-[#0C0C0C] h-[40rem] bg-white mb-[1rem]">
                        <img src={controlador} alt="" class="w-[24rem] h-[28rem] mb-[.5rem] mx-auto"/>

                        <h2 class="text-[#0C0C0C] text-[2rem] flex justify-center mb-[.3rem] font-bold">Controlador de Carga</h2>
                        <p class="text-[#0C0C0C] text-[1.5rem] flex justify-center font-bold mb-[.5rem]">R$89,00</p>

                        <button class="w-[11rem] h-[3.5rem] font-bold text-[1.375rem] text-[#0C0C0C] border border-[#0C0C0C] flex items-center justify-center self-center mx-auto">Ver mais</button>
                    </div>

                    <div id="produto4" class="border-[4px] border-[#0C0C0C] h-[40rem] bg-white mb-[1rem]">
                        <img src={lcd} alt="" class="w-[24rem] h-[28rem] mb-[.5rem] mx-auto"/>

                        <h2 class="text-[#0C0C0C] text-[2rem] flex justify-center mb-[.3rem] font-bold">Display LCD</h2>
                        <p class="text-[#0C0C0C] text-[1.5rem] flex justify-center font-bold mb-[.5rem]">R$37,90</p>

                        <button class="w-[11rem] h-[3.5rem] font-bold text-[1.375rem] text-[#0C0C0C] border border-[#0C0C0C] flex items-center justify-center self-center mx-auto">Ver mais</button>
                    </div>

                    <div id="produto5" class="border-[4px] border-[#0C0C0C] h-[40rem] bg-white mb-[1rem]">
                        <img src={ldr} alt="" class="w-[24rem] h-[28rem] mb-[.5rem] mx-auto"/>

                        <h2 class="text-[#0C0C0C] text-[2rem] flex justify-center mb-[.3rem] font-bold">LDR</h2>
                        <p class="text-[#0C0C0C] text-[1.5rem] flex justify-center font-bold mb-[.5rem]">R$4,90</p>

                        <button class="w-[11rem] h-[3.5rem] font-bold text-[1.375rem] text-[#0C0C0C] border border-[#0C0C0C] flex items-center justify-center self-center mx-auto">Ver mais</button>
                    </div>

                    <div id="produto6" class="border-[4px] border-[#0C0C0C] h-[40rem] bg-white mb-[1rem]">
                        <img src={painelSolar} alt="" class="w-[24rem] h-[28rem] mb-[.5rem] mx-auto"/>

                        <h2 class="text-[#0C0C0C] text-[2rem] flex justify-center mb-[.3rem] font-bold">Mini Painel Solar</h2>
                        <p class="text-[#0C0C0C] text-[1.5rem] flex justify-center font-bold mb-[.5rem]">R$20,00</p>

                        <button class="w-[11rem] h-[3.5rem] font-bold text-[1.375rem] text-[#0C0C0C] border border-[#0C0C0C] flex items-center justify-center self-center mx-auto">Ver mais</button>
                    </div>
                </div>
            </div>
        </div>
    )
}