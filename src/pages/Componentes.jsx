import { Header } from '../components/Header.jsx'
import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import sublinhado from '../assets/sublinhado.svg'
import sublinhadoDark from "../assets/homeAssets/sublinhadoDark.png"
import smile from '../assets/smile.svg'
import bateria from '../assets/produtosImgs/bateria.png'
import carcaca from '../assets/produtosImgs/carcaca.jpg'
import controlador from '../assets/produtosImgs/controlador.jpg'
import lcd from '../assets/produtosImgs/lcd.jpg'
import ldr from '../assets/produtosImgs/ldr.jpg'
import painelSolar from '../assets/produtosImgs/painelSolar.jpg'
import { CompComponentes } from '../components/CompComponentes.jsx'

export function Componentes() {
    const { theme } = useContext(ThemeContext)

    return (
        <div>
            <Header />
            {/* bg-[#0C0C0C] */}
            <div id="pagina" className="bg-white text-white pt-[4rem] flex flex-col items-center px-[1.5rem] mt-[4rem] dark:bg-[#0C0C0C]">
                <CompComponentes />

                <h2 className="text-[2rem] font-inter font-bold flex justify-center mb-[1rem] text-[#0C0C0C] dark:text-white">Comprar</h2>

                <div id="comprar" className="flex flex-col lg:grid lg:grid-cols-3 lg:gap-[1rem]">

                    <div id="produto1" className="border-[4px] border-[#0C0C0C]  h-[40rem] bg-white mb-[1rem] items-center">
                        <img src={bateria} alt="" className="w-[24rem] h-[28rem] mb-[.5rem] mx-auto"/>

                        <h2 className="text-[#0C0C0C] text-[2rem] flex justify-center mb-[.3rem] font-bold">Bateria de lítio</h2>
                        <p className="text-[#0C0C0C] text-[1.5rem] flex justify-center font-bold mb-[.5rem]">R$52,50</p>

                        <button className="w-[11rem] h-[3.5rem] font-bold text-[1.375rem] text-[#0C0C0C] border border-[#0C0C0C] flex items-center justify-center self-center mx-auto">Ver mais</button>
                    </div>

                    <div id="produto2" className="border-[4px] border-[#0C0C0C]  h-[40rem] bg-white mb-[1rem]">
                        <img src={carcaca} alt="" className="w-[22rem] h-[26rem] mb-[2.5rem] mx-auto"/>

                        <h2 className="text-[#0C0C0C] text-[2rem] flex justify-center text-center mb-[.3rem] font-bold">Carcaça para Membrana</h2>
                        <p className="text-[#0C0C0C] text-[1.5rem] flex justify-center font-bold mb-[.5rem]">R$60,91</p>

                        <button className="w-[11rem] h-[3.5rem] font-bold text-[1.375rem] text-[#0C0C0C] border border-[#0C0C0C] flex items-center justify-center self-center mx-auto">Ver mais</button>
                    </div>


                    <div id="produto3" className="border-[4px] border-[#0C0C0C] h-[40rem] bg-white mb-[1rem]">
                        <img src={controlador} alt="" className="w-[24rem] h-[28rem] mb-[.5rem] mx-auto"/>

                        <h2 className="text-[#0C0C0C] text-[2rem] flex justify-center text-center mb-[.3rem] font-bold">Controlador de Carga</h2>
                        <p className="text-[#0C0C0C] text-[1.5rem] flex justify-center font-bold mb-[.5rem]">R$89,00</p>

                        <button className="w-[11rem] h-[3.5rem] font-bold text-[1.375rem] text-[#0C0C0C] border border-[#0C0C0C] flex items-center justify-center self-center mx-auto">Ver mais</button>
                    </div>

                    <div id="produto4" className="border-[4px] border-[#0C0C0C] h-[40rem] bg-white mb-[1rem]">
                        <img src={lcd} alt="" className="w-[24rem] h-[28rem] mb-[.5rem] mx-auto"/>

                        <h2 className="text-[#0C0C0C] text-[2rem] flex justify-center mb-[.3rem] font-bold">Display LCD</h2>
                        <p className="text-[#0C0C0C] text-[1.5rem] flex justify-center font-bold mb-[.5rem]">R$37,90</p>

                        <button className="w-[11rem] h-[3.5rem] font-bold text-[1.375rem] text-[#0C0C0C] border border-[#0C0C0C] flex items-center justify-center self-center mx-auto">Ver mais</button>
                    </div>

                    <div id="produto5" className="border-[4px] border-[#0C0C0C] h-[40rem] bg-white mb-[1rem]">
                        <img src={ldr} alt="" className="w-[24rem] h-[28rem] mb-[.5rem] mx-auto"/>

                        <h2 className="text-[#0C0C0C] text-[2rem] flex justify-center mb-[.3rem] font-bold">LDR</h2>
                        <p className="text-[#0C0C0C] text-[1.5rem] flex justify-center font-bold mb-[.5rem]">R$4,90</p>

                        <button className="w-[11rem] h-[3.5rem] font-bold text-[1.375rem] text-[#0C0C0C] border border-[#0C0C0C] flex items-center justify-center self-center mx-auto">Ver mais</button>
                    </div>

                    <div id="produto6" className="border-[4px] border-[#0C0C0C] h-[40rem] bg-white mb-[1rem]">
                        <img src={painelSolar} alt="" className="w-[24rem] h-[28rem] mb-[.5rem] mx-auto"/>

                        <h2 className="text-[#0C0C0C] text-[2rem] flex justify-center mb-[.3rem] font-bold">Mini Painel Solar</h2>
                        <p className="text-[#0C0C0C] text-[1.5rem] flex justify-center font-bold mb-[.5rem]">R$20,00</p>

                        <button className="w-[11rem] h-[3.5rem] font-bold text-[1.375rem] text-[#0C0C0C] border border-[#0C0C0C] flex items-center justify-center self-center mx-auto">Ver mais</button>
                    </div>
                </div>
            </div>
        </div>
    )
}