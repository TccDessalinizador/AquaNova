// Componentes.jsx — versão refinada, sem a frase indesejada
import { useState, useEffect, useContext } from "react"
import { Header } from '../components/Header.jsx'
import { ThemeContext } from '../context/ThemeContext'

export function Componentes() {
  const { theme } = useContext(ThemeContext)
  const [selected, setSelected] = useState(null)

  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") setSelected(null)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [])

  // Lista dos itens
  const items = [
    { id: "painel", title: "Mini Painel Solar", desc: "Pequeno painel fotovoltaico responsável por fornecer energia renovável ao sistema." },
    { id: "bateria", title: "Bateria Recarregável", desc: "Armazena energia para manter o sistema funcionando mesmo sem luz solar." },
    { id: "filtro", title: "Filtro de Osmose Reversa", desc: "Remove sais e impurezas, melhorando a qualidade da água." },
    { id: "bomba", title: "Bomba de Água 12V", desc: "Circula a água pelo sistema durante o processo." },
    { id: "arduino", title: "Arduino UNO", desc: "Cérebro do sistema, responsável por controlar sensores e atuadores." },
    { id: "sensor-nivel", title: "Sensor de Nível de Água", desc: "Garante que os reservatórios operem dentro dos limites seguros." },
    { id: "reles", title: "Relés", desc: "Permitem o acionamento seguro de cargas de maior potência." },
    { id: "base-3d", title: "Base Modular 3D", desc: "Estrutura impressa que organiza e suporta os módulos eletrônicos." },
    { id: "protoboard", title: "Protoboard", desc: "Usada para prototipagem rápida de circuitos." },
    { id: "servo", title: "Servomotor MG995", desc: "Utilizado para movimentos precisos de válvulas e mecanismos." },
    { id: "ponte-h", title: "Ponte H", desc: "Controla motores DC permitindo inversão de direção." },
    { id: "lcd", title: "Display LCD", desc: "Exibe informações do sistema em tempo real." },
    { id: "bt", title: "Módulo Bluetooth HC-08", desc: "Permite comunicação sem fio para monitoramento." }
  ]

  return (
    <div className="min-h-screen bg-[#F2F6FF] dark:bg-[#071022] transition-all">
      <Header />

      <main className="max-w-[90rem] mx-auto px-6 lg:px-10 pt-28 pb-24">

        {/* título */}
        <header className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-extrabold text-[#0A2A83] dark:text-white drop-shadow-sm">
            Componentes do Sistema
          </h1>

          <p className="mt-4 text-lg leading-relaxed text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Aqui estão os itens essenciais utilizados na construção do AquaNova.
            Clique em <strong>“Ver mais”</strong> para visualizar sua função prática no projeto.
          </p>
        </header>

        {/* GRID DE CARDS */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map(item => (
            <article
              key={item.id}
              className="relative rounded-3xl bg-white dark:bg-[#0E1539] border border-[#dcdde1] dark:border-white/10 p-7 shadow-lg hover:shadow-xl transition-all flex flex-col h-48"
            >
              <div className="flex items-start gap-5">

                {/* Badge */}
                <div className="flex-none w-14 h-14 rounded-xl bg-[#DCE9FF] dark:bg-white/10 
                                flex items-center justify-center text-[#0A2A83] 
                                dark:text-white font-bold text-xl">
                  {item.title.split(' ').map(w => w[0]).slice(0,2).join('')}
                </div>

                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-[#0A2A83] dark:text-white leading-tight">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm text-gray-600 dark:text-gray-300 leading-relaxed line-clamp-2">
                    {item.desc}
                  </p>
                </div>
              </div>

              {/* Botão */}
              <div className="mt-auto pt-5">
                <button
                  onClick={() => setSelected(item)}
                  className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl border border-[#0A2A83] 
                             dark:border-white text-[#0A2A83] dark:text-white font-medium 
                             hover:bg-[#0A2A83] hover:text-white 
                             dark:hover:bg-white dark:hover:text-[#0A2A83] transition"
                >
                  Ver mais
                </button>
              </div>
            </article>
          ))}
        </section>
      </main>

      {/* MODAL */}
      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setSelected(null)}
          />

          <div className="relative z-10 max-w-xl w-[90%] bg-white dark:bg-[#071028] rounded-3xl shadow-2xl border border-[#e6e6e6] dark:border-white/10 overflow-hidden">

            <div className="p-7">
              <div className="flex items-start justify-between gap-6">

                <div>
                  <h2 className="text-3xl font-bold text-[#0A2A83] dark:text-white">
                    {selected.title}
                  </h2>

                  <p className="mt-4 text-gray-800 dark:text-gray-200 leading-relaxed text-[1rem]">
                    {selected.desc}
                  </p>
                </div>

                <button
                  onClick={() => setSelected(null)}
                  aria-label="Fechar"
                  className="ml-4 inline-flex items-center justify-center w-10 h-10 rounded-xl bg-transparent 
                             border border-gray-200 dark:border-white/10 text-gray-700 dark:text-gray-200 
                             hover:bg-gray-100 dark:hover:bg-white/10 transition"
                >
                  ✕
                </button>
              </div>

              {/* Dica / função */}
              <div className="mt-7 bg-gray-50 dark:bg-white/5 p-5 rounded-xl">
                <h3 className="text-sm font-semibold text-gray-800 dark:text-white/90">
                  Função prática no sistema
                </h3>

                <p className="mt-2 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                  {generateTip(selected.id)}
                </p>
              </div>

              <div className="mt-8 flex justify-end">
                <button
                  onClick={() => setSelected(null)}
                  className="px-6 py-2.5 rounded-xl bg-[#0A2A83] text-white font-semibold hover:opacity-90 transition"
                >
                  Fechar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

// Função com dicas personalizadas
function generateTip(id) {
  switch (id) {
    case "painel": return "Instale em local sem sombra e com bom ângulo para maximizar geração.";
    case "bateria": return "Use bateria com BMS e monitore carga para evitar ciclos profundos.";
    case "filtro": return "Faça pré-filtração e mantenha manutenção para prolongar a vida útil.";
    case "bomba": return "Evite funcionamento a seco usando sensor de nível.";
    case "arduino": return "Ideal para controlar sensores e atuadores com estabilidade.";
    case "sensor-nivel": return "Monte em posição que evite bolhas falsas e leituras erradas.";
    case "reles": return "Escolha relés com capacidade adequada à carga utilizada.";
    case "base-3d": return "Organiza o sistema e facilita manutenção e upgrades.";
    case "protoboard": return "Boa para testes, mas recomenda-se migrar para solda depois.";
    case "servo": return "MG995 tem alto torque, ideal para ajustes mecânicos precisos.";
    case "ponte-h": return "Permite controlar motores DC com segurança.";
    case "lcd": return "Ótimo para exibir leituras de sensores sem precisar do app.";
    case "bt": return "Facilita monitoramento remoto via aplicativo.";
    default: return "Dica prática do item."
  }
}
