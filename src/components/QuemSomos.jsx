import { Header } from './Header.jsx'
import fotoMenocci from '../assets/fotoMenocci.jpeg'
import fotoBrandassi from '../assets/fotoBrandassi.jpeg'
import modelo from '../assets/Ellipse 7.jpg'
import { Link } from 'react-router-dom'

export function QuemSomos() {
    return (
        <div>
            <Header />

            <div id="pagina" className="h-[100vh] bg-white dark:bg-[#3C3B3B]">
                <h1 class="flex justify-center pt-[8rem] mb-[2rem] text-[1.5rem] dark:text-white font-bold text-shadow-lg/30">Quem somos?</h1>

                <div id="fotos" class="flex flex-col items-center h-[74vh] lg:flex-row lg:px-[8rem] lg:gap-[2rem] lg:justify-between">
                    <div class="flex flex-col items-center">    
                        <img src={fotoMenocci} alt="menocci" class="w-[12.5rem] lg:w-[15rem] h-[12rem] lg:h-[14rem] rounded-[100%] drop-shadow-xl/50"/>
                        <p className="text-[1.5rem] text-[#0C0C0C] dark:text-white font-semibold mb-[2.5rem] mt-[1.25rem] font-inter">Arthur Menocci</p>
                    </div>

                    <div class="flex flex-col items-center">
                        <img src={modelo} alt="mariano" class="w-[12.5rem] lg:w-[15rem] h-[12rem] lg:h-[14rem] rounded-[100%]"/>
                        <p className="text-[1.5rem] text-[#0C0C0C] dark:text-white font-semibold mb-[2.5rem] mt-[1.25rem] font-inter">Eduardo Mariano</p>
                    </div>

                    <div class="flex flex-col items-center">
                        <img src={modelo} alt="milbeyer" class="w-[12.5rem] lg:w-[15rem] h-[12rem] lg:h-[14rem] rounded-[100%]"/>
                        <p className="text-[1.5rem] text-[#0C0C0C] dark:text-white font-semibold mb-[2.5rem] mt-[1.25rem] font-inter">Guilherme Milbeyer</p>
                    </div>

                    <div class="flex flex-col items-center">
                        <img src={fotoBrandassi} alt="brandassi" class="w-[12.5rem] lg:w-[15rem] h-[12rem] lg:h-[14rem] rounded-[100%] drop-shadow-xl/50"/>
                        <p className="text-[1.5rem] text-[#0C0C0C] dark:text-white font-semibold mb-[2.5rem] mt-[1.25rem] font-inter">Gustavo Brandassi</p>
                    </div>

                </div>
            </div>
        </div>
    )
}