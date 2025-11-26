import JogoImagem from '../assets/jogo.jpg'
import fotoJogo from '../assets/jogoFoto.png'
import { Header } from '../components/Header.jsx'

export function Jogo() {
    return (
        <div className="bg-white dark:bg-[#0A1A2F] text-[#0A1A2F] dark:text-white min-h-screen">
            <Header />

            <div 
                id="pagina" 
                className="
                    w-full 
                    min-h-screen 
                    pt-[3rem] pb-[4rem]
                "
            >
                {/* TÍTULO */}
                <h1 className="mt-[2.5rem] mb-[2rem] text-center text-[2rem] font-bold drop-shadow-lg">
                    Conheça nosso jogo
                </h1>

                {/* IMAGEM */}
                <div className="flex justify-center mb-[3rem]">
                    <img 
                        src={fotoJogo} 
                        alt="Imagem do jogo" 
                        className="w-[22rem] h-[15rem] lg:w-[40rem] lg:h-[25rem] rounded-[1.5rem] shadow-xl"
                    />
                </div>

                {/* TEXTO */}
                <p className="px-[1.5rem] lg:w-[70vw] lg:mx-auto leading-relaxed text-[1.1rem] font-medium">
                    Em um futuro próximo, o mundo enfrenta uma crise hídrica sem precedentes. Em meio ao caos, o brilhante cientista Dr. Elias cria uma máquina revolucionária capaz de dessalinizar água usando energia solar — uma tecnologia com potencial para salvar milhões de vidas. Porém, sua descoberta desperta a cobiça de grupos sombrios dispostos a tudo para roubá-la e usá-la para fins obscuros. Ao lado de seus fiéis assistentes, Dr. Elias precisa proteger o dessalinizador Solaris enquanto enfrenta sabotagens, espionagem e desafios ambientais. Nesta aventura estratégica, cada decisão importa: defenda a invenção, explore conceitos reais sobre dessalinização e energia solar e descubra quem realmente está ao seu lado na luta pelo recurso mais valioso do planeta.
                </p>

                {/* BOTÃO */}
                <div className="flex justify-center mt-[2.5rem]">
                    <a
                        href="https://gd.games/games/ef233415-3088-4397-a7ca-da6c2bfca86b"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                            w-[10rem] h-[3rem] flex items-center justify-center
                            bg-[#0A1A2F] dark:bg-white
                            text-white dark:text-[#0A1A2F]
                            rounded-xl font-bold shadow-md
                            hover:scale-105 hover:shadow-lg
                            transition-all
                        "
                    >
                        Jogue agora
                    </a>
                </div>
            </div>
        </div>
    )
}
