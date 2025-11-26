import sublinhado from '../assets/sublinhado.svg'
import sublinhadoDark from "../assets/homeAssets/sublinhadoDark.png"
import smile from '../assets/smile.svg'
import emojiSmileDark from "../assets/emojiSmileDark.png"
import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

export function CompComponentes() {
  const { theme } = useContext(ThemeContext)

  return (
    <section
      id="componentes"
      className="
        bg-[#FAFAFA] dark:bg-[#0C0C0C]
        text-[#0C0C0C] dark:text-[#F5F5F5]
        w-screen lg:w-[95vw] mx-auto
        px-6 pt-28 pb-32
        flex flex-col items-center
        transition-colors duration-700
      "
    >
      {/* TITULO */}
      <header className="w-full max-w-4xl text-center mb-20">
        <div className="flex flex-col items-center gap-4">
          
          <h1 className="
            flex items-center gap-4
            text-4xl lg:text-6xl
            font-light font-inter tracking-tight
            text-indigo-600 dark:text-indigo-400
          ">
            Componentes e Investimentos
            <img
              src={theme === 'dark' ? smile : emojiSmileDark}
              className="w-9 h-9 lg:w-11 lg:h-11 opacity-90"
              alt=""
            />
          </h1>

          <img
            src={theme === 'dark' ? sublinhado : sublinhadoDark}
            className="w-48 lg:w-72 opacity-70"
            alt=""
          />

          {/* DIVISOR PREMIUM */}
          <div
            className="
              w-20 h-[2px] mt-4
              bg-indigo-600/20 dark:bg-indigo-400/40
              rounded-full
            "
          />
        </div>
      </header>

      {/* Subtítulo */}
      <div className="text-center mb-16">
        <h2 className="
          text-2xl lg:text-3xl
          font-inter font-light
          leading-tight
          text-indigo-600/80 dark:text-indigo-400/80
        ">
          Saiba onde comprar
        </h2>

        <h2 className="
          text-2xl lg:text-3xl
          font-inter font-light
          leading-tight mt-1
          text-indigo-600/80 dark:text-indigo-400/80
        ">
          e quanto será seu investimento
        </h2>
      </div>

      {/* Título lista */}
      <h2 className="
        text-3xl lg:text-4xl
        font-inter font-semibold mb-12
        text-center tracking-tight
        text-indigo-600 dark:text-indigo-400
      ">
        Lista de Itens
      </h2>

      {/* LISTA PREMIUM */}
      <div
        className="
          w-full max-w-5xl
          flex flex-col lg:flex-row
          justify-between
          gap-14 lg:gap-36
          font-inter text-[1.15rem] lg:text-[1.3rem]
          font-light
          text-[#0C0C0C]/90 dark:text-[#F5F5F5]/80
        "
      >
        <div className="leading-10">
          <p>
            Sensor de Condutividade/TDS <br />
            Sensor de Nível Ultrassônico <br />
            Sensor de Pressão de Água <br />
            Sensor de Fluxo de Água <br />
            Válvulas Solenoides 12V <br />
            Relés de Estado Sólido <br />
            Módulo Bluetooth <br />
            MOSFET IRF520 <br />
            Display LCD <br />
          </p>
        </div>

        <div className="leading-10 lg:text-right">
          <p>
            4 LDRs <br />
            Ponte H <br />
            Bateria de Lítio <br />
            Mini Painel Solar <br />
            Módulo Step-down <br />
            Controlador de Carga <br />
            2 Servomotores MG995 <br />
            Carcaça para Membrana 50 GPD <br />
          </p>
        </div>
      </div>
    </section>
  )
}
