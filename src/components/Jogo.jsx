import JogoImagem from '../assets/jogo.jpg'
import { Header } from './Header.jsx'
import { Link } from 'react-router-dom'

export function Jogo() {
    return (
        <div class="bg-blue-500 ">
            <Header />

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