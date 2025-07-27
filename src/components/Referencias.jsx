import { Header } from './Header.jsx'
import robo from '../assets/robo.png'

export function Referencias() {
    return (
        <div>
            <Header />

            <div id="pagina" class="flex flex-col bg-[#0C0C0C] text-white h-[94vh] lg:h-[90vh]">
                <h1 class="mt-[3rem] text-[2rem] font-inter font-bold flex justify-center">Referências</h1>

                <div class="lg:flex lg:flex-row">
                    <div class="w-[100%] flex justify-center self-center lg:">
                        <img src={robo} alt="" class="w-[12rem] h-[12rem]"/>
                    </div>

                    <ul class="h-[35rem] px-[2rem] justify-center flex flex-col">
                        <li class="text-[1.5rem] font-inter"><a href="http://eventos.ecogestaobrasil.net/congestas2019/trabalhos/pdf/congestas2019-et-02-017.pdf" target='blank'>1- Proposta de um protótipo de dessalinização artesanal solar</a></li>
                        <br />
                        <li class="text-[1.5rem] font-inter"><a href="https://lume.ufrgs.br/handle/10183/127799" target='blank'>2- Dessalinização de água salobra e/ou salgada : métodos, custos e aplicações</a></li>
                        <br />
                        <li class="text-[1.5rem] font-inter"><a href="https://www.sustenere.inf.br/index.php/rica/article/view/CBPC2179-6858.2021.004.0035" target='blank'>3- Estudo do bombeamento de água salobra para irrigação agrícola</a></li>
                        <br />
                        <li class="text-[1.5rem] font-inter"><a href="https://periodicos.ufam.edu.br/index.php/revista-geonorte/article/view/2189" target='blank'>4- Aplicação de energia solar fotovoltaica</a></li>
                    </ul>
                </div>

            </div>
        </div>
    )
}