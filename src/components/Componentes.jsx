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

            <div id="pagina" class="bg-[#0C0C0C] text-white pt-[4rem] flex flex-col items-center px-[1.5rem]">
                <div id="top" class="mb-[2rem] flex flex-col justify-end">
                    <h1 class="flex flex-row text-[1.5rem] font-inter font-bold gap-[.2rem]">Componentes e investimentos <img src={smile} alt="" /></h1>
                    <img src={sublinhado} alt="" class="flex self-end"/>
                </div>

                <div class="border border-red-500 flex flex-col items-center mb-[3rem]">
                    <h2 class="text-[1.5rem] font-inter font-bold">Saiba onde comprar </h2> 
                    <h2 class="text-[1.5rem] font-inter font-bold">e quanto será seu investimento</h2>
                </div>

                <div id='video'class="w-[24rem] h-[18rem] bg-[#C4C4C4] text-black flex items-center justify-center mb-[2rem]"><p>video</p></div>

                <div id="lista" class="flex flex-col w-[100%] mb-[2rem]">
                    <h2 class="text-[1.5rem] font-inter font-bold flex justify-center mb-[1.75rem]">Lista de Itens</h2>

                    <p class="text-[1.2rem] font-inter font-bold">
                    2 Servomotores MG995 <br />
                    4 LDRs <br />
                    Bateria de Lítio  <br />
                    Carcaça para Membrana de 50 GPD <br />
                    Controlador de Carga  <br />
                    Display LCD <br />
                    Mini Painel Solar  <br />
                    Módulo Bluetooth  <br />
                    Módulo Step-down  <br />
                    MOSFET IRF520  <br />
                    Ponte H  <br />
                    Relés de Estado Sólido  <br />
                    Sensor de Condutividade/TDS <br />
                    Sensor de Fluxo de Água  <br />
                    Sensor de Nível Ultrassônico <br />
                    Sensor de Pressão de Água  <br />
                    Válvulas Solenoides 12V  <br />
                    </p>
                </div>

                <div id="comprar" class="">
                    <h2 class="text-[1.5rem] font-inter font-bold flex justify-center mb-[1rem]">Comprar</h2>

                    <div id="produto1" class="border border-red-500 h-[40rem] bg-white">
                        <img src={bateria} alt="" class="w-[24rem] h-[28rem]"/>

                        <h2 class="text-black">Bateria de lítio</h2>
                        <p class="text-black">52,50</p>

                        <button class="text-black">Ver mais</button>
                    </div>

                    <div id="produto2"></div>

                    <div id="produto3"></div>

                    <div id="produto4"></div>
                </div>
            </div>
        </div>
    )
}