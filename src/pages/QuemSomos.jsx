import { Header } from '../components/Header.jsx'
import fotoMenocci from '../assets/fotoMenocci.jpeg'
import fotoBrandassi from '../assets/fotoBrandassi.jpeg'
import modelo from '../assets/Ellipse 7.jpg'
import { QuemSomosComp } from '../components/QuemSomosComp.jsx'

export function QuemSomos() {
    return (
        <div>
            <Header />

            <div 
                id="pagina"
                className="
                    w-full
                    min-h-screen
                    pt-[6rem]
                    pb-[4rem]
                    bg-[#0A1A2F]      /* azul */
                    dark:bg-[#0A1A2F] /* força o azul no dark mode */
                    text-white
                "
            >
                {/* TÍTULO */}
                <h1 className="text-center text-[2.4rem] font-bold drop-shadow-xl mb-[3rem]">
                    Quem somos?
                </h1>

                {/* GRID DE INTEGRANTES */}
                <div 
                    id="fotos"
                    className="
                        grid 
                        grid-cols-1 
                        sm:grid-cols-2 
                        lg:grid-cols-4
                        gap-[2.5rem]
                        px-[2rem]
                        lg:px-[6rem]
                    "
                >
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
