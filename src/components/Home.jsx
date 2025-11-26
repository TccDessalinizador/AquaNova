// Home.jsx — versão organizada, minimalista premium (botões centralizados e textos mais claros)
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import { Header } from './Header'
import CardHome from './CardHomeF'
import { CardHomeS } from './CardHomeS'
import { QuemSomosComp } from './QuemSomosComp'
import { CompComponentes } from './CompComponentes'

import ciclo from '../assets/homeAssets/ciclo.svg'
import cifrao from '../assets/homeAssets/cifrao.svg'
import diamante from '../assets/homeAssets/diamante.svg'
import emoji from '../assets/homeAssets/emoji1.svg'
import interrogacao from '../assets/homeAssets/interrogacao.svg'
import like from '../assets/homeAssets/like.svg'
import fotoMenocci from '../assets/fotoMenocci.jpeg'
import fotoBrandassi from '../assets/fotoBrandassi.jpeg'
import modelo from '../assets/Ellipse 7.jpg'
import fotoJogo from '../assets/jogoFoto.png'
import robo from '../assets/robo.png'

// versões dark
import circuloDark from '../assets/homeAssets/circuloDark.png'
import interrogacaoDark from '../assets/homeAssets/interrogacaoDark.png'
import smileDark from '../assets/homeAssets/smileDark.png'
import cifraoDark from "../assets/homeAssets/cifraoDark.png"
import diamanteDark from "../assets/homeAssets/diamanteDark.png"
import likeDark from "../assets/homeAssets/likeDark.png"

export function Home() {
  const { theme } = useContext(ThemeContext)

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      <Header />

      <main className="pt-28 lg:pt-36 space-y-24">

        {/* ========================== HERO ========================== */}
        <section className="container mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* LEFT TEXT */}
            <div className="space-y-6 max-w-xl mx-auto lg:mx-0">
              <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight">
                Sol que dessalina
                <br />
                <span className="text-indigo-600 dark:text-indigo-400">
                  Futuro que se ilumina
                </span>
              </h1>

              <p className="text-lg text-gray-600 dark:text-gray-300">
                Tecnologia limpa, autônoma e pensada para comunidades do semiárido.
                Projeto otimizado para energia solar, manutenção simples e operação contínua.
              </p>

              {/* HIGHLIGHTS HORIZONTAL (compacto e alinhado) */}
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="rounded-lg p-3 text-center bg-white/60 dark:bg-white/6 shadow-sm">
                  <div className="text-indigo-600 dark:text-indigo-400 font-semibold">Monitoramento</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">Leitura em tempo real</div>
                </div>
                <div className="rounded-lg p-3 text-center bg-white/60 dark:bg-white/6 shadow-sm">
                  <div className="text-indigo-600 dark:text-indigo-400 font-semibold">Energia Solar</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">Autonomia off-grid</div>
                </div>
                <div className="rounded-lg p-3 text-center bg-white/60 dark:bg-white/6 shadow-sm">
                  <div className="text-indigo-600 dark:text-indigo-400 font-semibold">Baixo Custo</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">Fácil manutenção</div>
                </div>
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="flex justify-center lg:justify-end">
              <div className="w-full max-w-md rounded-2xl shadow-xl overflow-hidden">
                <img src={robo} alt="AquaNova" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

          {/* CTA PRINCIPAL - CENTRALIZADO (aparece abaixo do hero, sempre central) */}
          <div className="mt-8 flex justify-center gap-4">
            <Link
              to="/instrucoes"
              className="px-6 py-3 rounded-lg bg-indigo-600 text-white font-semibold shadow-lg hover:shadow-xl transition"
              aria-label="Saiba como funciona o AquaNova"
            >
              Saiba como funciona
            </Link>

          </div>
        </section>

        {/* ========================== CARDS EXPLICATIVOS ========================== */}
        <section>
          <div className="container mx-auto px-6 lg:px-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-stretch">

              <CardHome
                img={theme === "dark" ? interrogacaoDark : interrogacao}
                title="Entenda o Processo"
                text="Cada etapa: captação, evaporação, condensação e entrega — explicada de forma prática."
              />

              <CardHome
                img={theme === "dark" ? smileDark : emoji}
                title="Supere Desafios Locais"
                text="Soluções simples para salinidade elevada e infraestrutura limitada."
              />

              <CardHome
                img={theme === "dark" ? circuloDark : ciclo}
                title="Garantia de Operação"
                text="Monitoramento inteligente e recarga solar para funcionamento 24/7."
              />

            </div>
          </div>
        </section>

        {/* ========================== BENEFÍCIOS ========================== */}
        <section>
          <div className="container mx-auto px-6 lg:px-10 text-center">
            <h2 className="text-3xl font-bold mb-4">Benefícios de dominar o AquaNova</h2>

            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
              Autonomia hídrica, redução de custos e tecnologia escalável — pensado para quem precisa de solução confiável.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
              <CardHomeS
                img={theme === "light" ? likeDark : like}
                tittle="Fácil de Usar"
                text="Interface clara e automação que reduz erros operacionais."
              />

              <CardHomeS
                img={theme === "light" ? diamanteDark : diamante}
                tittle="Tecnologia Valiosa"
                text="Projeto robusto, resistente e preparado para o campo."
              />

              <CardHomeS
                img={theme === "light" ? cifraoDark : cifrao}
                tittle="Economia Garantida"
                text="Menos custos com transporte e energia — retorno no médio prazo."
              />
            </div>

            {/* CTA SECUNDÁRIO - CENTRALIZADO */}
            <div className="flex justify-center gap-4">
              <Link
                to="/instrucoes"
                className="px-6 py-3 rounded-lg bg-indigo-600 text-white font-semibold shadow hover:shadow-lg transition"
                aria-label="Saiba mais sobre instruções"
              >
                Saiba mais
              </Link>

             
            </div>
          </div>
        </section>

        {/* ========================== QUEM SOMOS ========================== */}
        <section>
          <div className="container mx-auto px-6 lg:px-10">
            <h2 className="text-3xl font-bold mb-8 text-center">Quem somos</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 place-items-center">
              <QuemSomosComp img={fotoMenocci} tittle="Arthur Menocci" />
              <QuemSomosComp img={modelo} tittle="Eduardo Mariano" />
              <QuemSomosComp img={modelo} tittle="Guilherme Milbeyer" />
              <QuemSomosComp img={fotoBrandassi} tittle="Gustavo Brandassi" />
            </div>
          </div>
        </section>

        {/* ========================== JOGO ========================== */}
        <section>
          <div className="container mx-auto px-6 lg:px-10 text-center">
            <h2 className="text-3xl font-bold mb-6">Conheça nosso jogo</h2>

            <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
              Acompanhe a história do Dr. Elias e proteja a tecnologia que pode mudar o futuro.
            </p>

            <img
              src={fotoJogo}
              alt="Imagem do jogo"
              className="w-full max-w-4xl mx-auto rounded-2xl shadow-xl mb-6"
            />

            <div className="flex justify-center">
              <Link
                to="/jogo"
                className="px-8 py-3 rounded-lg bg-indigo-600 text-white font-semibold shadow hover:shadow-lg transition"
                aria-label="Saiba mais sobre o jogo"
              >
                Saiba mais
              </Link>
            </div>
          </div>
        </section>

        {/* ========================== REFERÊNCIAS ========================== */}
        <section className="pb-24">
          <div className="container mx-auto px-6 lg:px-10">
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 lg:p-10 shadow-lg">
              <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-3">Referências</h3>
                  <p className="text-gray-600 dark:text-gray-300 max-w-xl">
                    Fontes que embasaram os estudos, pesquisas e o desenvolvimento do AquaNova.
                  </p>

                  <div className="mt-6">
                    <Link
                      to="/referencias"
                      className="inline-block px-5 py-2 rounded-md bg-indigo-50 text-indigo-700 border border-indigo-100 hover:bg-indigo-100 transition"
                    >
                      Ver referências
                    </Link>
                  </div>
                </div>

                <img src={robo} alt="Robô" className="w-36 mx-auto lg:mx-0" />
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  )
}
