import { Header } from '../components/Header.jsx'
import um from '../assets/um.svg'
import dois from '../assets/dois.svg'
import tres from '../assets/tres.svg'
import instrucao1 from '../assets/instrucao1.png'
import instrucao2 from '../assets/instrucao2.png'
import instrucao3 from '../assets/instrucao3.png'
import { Link } from 'react-router-dom'


export function Instrucoes() {
    return (
        <div>
            <Header />

            <div id="pagina-it" class="bg-gradient-to-b from-neutral-900/0 to-neutral-900 text-white px-[2.5rem] py-[2rem]">
                <h1 class="text-[2rem] text-[#0C0C0C] font-bold flex justify-center">Saiba como funciona</h1>

                <div class="lg:flex lg:flex-row lg:gap-[5rem] lg:justify-between lg:text-[0.75rem]">
                    <div class="" id='instrucao1'>
                        <div id="imagens" class="w-calc(100vw - 2.5rem) flex items-center flex-col gap-y-[.5rem] mt-[1rem]">
                            <img src={um} alt="" class="" />
                            <img src={instrucao1} alt="" class="mt-[-1.8rem]" />
                        </div>
                        <h2 class="text-[1.5rem] text-shadow-xl font-bold font-inter flex justify-center mb-[.5rem] mt-[-3.5rem]">Preparos para ligar</h2>
                        <p class="text-[1.25rem] font-inter text-shadow-xl">
                            1-Instale o AquaNova em uma área externa com boa incidência solar.
                            <br />
                            <br />
                            2-Posicione corretamente o painel solar com rastreador, sempre voltado para o sol.
                            <br />
                            <br />
                            3-Conecte a entrada de água salobra ao sistema usando uma mangueira.
                            <br />
                            <br />
                            4-Garanta que o filtro caseiro (manta + carvão ativado) esteja bem encaixado.
                            <br />
                            <br />
                            5-O sistema será ativado automaticamente ao detectar energia solar suficiente.
                            <br />
                            <br />
                            6-A bomba diafragma será acionada e os sensores (nível, fluxo, pressão, condutividade) entram em operação.

                        </p>
                    </div>

                    <div id="instrucao2">
                        <div id="imagem" class="w-calc(100vw - 2.5rem) flex items-center flex-col gap-y-[.5rem] mt-[1rem]">
                            <img src={dois} alt="" class="" />
                            <img src={instrucao2} alt="" class="mt-[-2rem]" />
                        </div>
                        <h2 class="text-[1.5rem] text-shadow-xl font-bold font-inter flex justify-center mb-[1rem] mt-[-5rem]">Verifique as conexões</h2>
                        <p class="text-[1.25rem] font-inter text-shadow-xl mt-[-1rem]">
                            1-A água salobra é direcionada para o recipiente de aquecimento.
                            <br />
                            <br />
                            2-O Arduino Mega comanda todas as funções: tempo de aquecimento, controle da bomba e acionamento das válvulas.
                            <br />
                            <br />
                            3-O vapor gerado pela água aquecida passa pelo condensador.
                            <br />
                            <br />
                            4-A água já dessalinizada e potável é armazenada no reservatório final.
                        </p>
                    </div>

                    <div id="instrucao3">
                        <div class="w-calc(100vw - 2.5rem) flex items-center flex-col gap-y-[.5rem] mt-[1rem]">
                            <img src={tres} alt="" class="" />
                            <img src={instrucao3} alt="" class="mt-[-1.8rem]" />
                        </div>
                        <h2 class="text-[1.5rem] text-shadow-xl font-bold font-inter flex justify-center mb-[.5rem] mt-[-2rem]">Monitoramento</h2>
                        <p class="text-[1.25rem] font-inter text-shadow-xl">
                            1- Todos os dados são enviados em tempo real via Bluetooth.
                            Você pode visualizar:
                            <ul>
                                <li>Nível da água</li>
                                <li>Condutividade (TDS)</li>
                                <li>Pressão</li>
                                <li>Temperatura</li>
                            </ul>
                            <br />

                            2- Use um app como Serial Bluetooth Terminal (Android) para acompanhar os dados.
                            <br />
                            <br />
                            3- O sistema realiza o desligamento automático quando o nível de água potável é atingido ou a energia solar estiver insuficiente (pausando até que retorne).
                        </p>
                    </div>

                </div>

                    <div id='video'>
                        <div class="lg:bg-white lg:w-[70rem] lg:h-[35rem] lg:mt-[1rem] lg:self-center lg:flex"></div>
                    </div>
            </div>
        </div>
    )
}