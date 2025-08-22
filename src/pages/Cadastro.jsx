import LogoSite from "../assets/logo tcc-black 1.jpg"
import Parabens from '../assets/cadastroImagem.jpg'
import background from '../assets/login.png'
import { Link } from 'react-router-dom'

export function Cadastro() {
    return (
        <div class="flex flex-col lg:flex-row">
            <img src={background} alt="" class="lg:w-[60vw] lg:h-[100vh] w-[0] h-[0] invisible lg:visible"/>

            <div className="pagina" class="lg:px-[4.25rem] px-[1.2rem] flex flex-col items-center lg:w-[40vw]">
                <img src={LogoSite} alt="logo do site" class="flex mx-auto w-[12rem] h-[12rem] mb-[2rem] lg:mb-[0rem]" />

                <form action="" class="flex flex-col px-[1.5rem]">
                    <label htmlFor="nome" class="text-[1.5rem] font-istok mx-[0.5rem] font-display">Nome</label>
                    <input type="text" placeholder="Nome e Sobrenome" id="nome" class="mb-[2.85rem] h-[3.35rem] w-[24rem] bg-[#D9D9D9] rounded-[1.125rem] px-[1rem] lg:w-[24.25rem] lg:mb-[2.5rem]" />

                    <label htmlFor="email" class="text-[1.5rem] font-istok mx-[0.5rem] font-display">Email</label>
                    <input type="email" placeholder="Ex: joao@gmail.com" id="email" class="mb-[2.85rem] h-[3.35rem] w-100% bg-[#D9D9D9] rounded-[1.125rem] px-[1rem]" />

                    <label htmlFor="senha" class="text-[1.5rem] font-istok mx-[0.5rem] font-display">Senha</label>
                    <input type="password" placeholder="Insira a senha" id="senha" class="mb-[2.2rem] mb-[2.85rem] h-[3.35rem] w-100% bg-[#D9D9D9] rounded-[1.125rem] px-[1rem]" />

                    <button class="flex items-center self-center justify-center bg-[#0C0C0C] text-white w-[11.6875rem] h-[2.35rem] mb-[2rem] rounded-[0.625rem]">Cadastrar</button>

                    <p class="flex self-center gap-[0.2rem]">Já tem cadastro? <Link to={"/"} class="text-[#098DB2]"> Faça Login</Link></p>
                </form>
            </div>

            {/* <div id="pop-up" class="flex justify-center self-center items-center flex-col w-[80%] border border-red p-[2rem] rounded-[1rem]">
                <img src={Parabens} alt="" class="w-[2.5rem] h-[2.5rem] mb-[1.5rem]"/>
                <h1 class="text-2x1 font-bold mb-[0.5rem]">Cadastro Concluido</h1>
                <button class="w-[12.5rem] h-[3rem] rounded-[0.5rem] bg-black text-white">Continuar</button>
            </div> */}
        </div>
    )
}