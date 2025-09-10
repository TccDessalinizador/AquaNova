import { Header } from '../components/Header.jsx'
import fotoMenocci from '../assets/fotoMenocci.jpeg'
import fotoBrandassi from '../assets/fotoBrandassi.jpeg'
import modelo from '../assets/Ellipse 7.jpg'
import { QuemSomosComp } from '../components/QuemSomosComp.jsx'
import { Link } from 'react-router-dom'

export function QuemSomos() {
    return (
        <div>
            <Header />

            <div id="pagina" className="h-[150vh] lg:h-[106vh] bg-white dark:bg-[#0C0C0C]">
                <h1 class="flex justify-center pt-[8rem] mb-[2rem] text-[2rem] dark:text-white font-bold text-shadow-lg/30">Quem somos?</h1>

                <div id="fotos" class="flex flex-col items-center h-[74vh] lg:flex-row lg:px-[8rem] lg:gap-[2rem] lg:justify-between">
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
        </div>
    )
}