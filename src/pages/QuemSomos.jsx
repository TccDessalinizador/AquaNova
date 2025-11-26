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

                    /* LIGHT MODE */
                    bg-[#F5F7FA]
                    text-[#1A1A1A]

                    /* DARK MODE */
                    dark:bg-[#0A1A2F]
                    dark:text-white

                    transition-colors duration-300
                "
            >
                {/* TÍTULO */}
                <h1
                    className="
                        text-center 
                        text-[2.4rem] 
                        font-bold 
                        drop-shadow-xl 
                        mb-[3rem]

                        text-[#0A1A2F]
                        dark:text-white

                        transition-colors duration-300
                    "
                >
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
                    <QuemSomosComp img={fotoMenocci} tittle="Arthur Menocci" />
                    <QuemSomosComp img={modelo} tittle="Eduardo Mariano" />
                    <QuemSomosComp img={modelo} tittle="Guilherme Milbeyer" />
                    <QuemSomosComp img={fotoBrandassi} tittle="Gustavo Brandassi" />
                </div>
            </div>
        </div>
    )
}
