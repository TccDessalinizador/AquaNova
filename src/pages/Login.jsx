import LogoSite  from "../assets/logo tcc-black 1.jpg"
import background from '../assets/login.png'
import { Link } from 'react-router-dom'

export function Login() {
    return (
        <div class="bg-white flex flex-col lg:flex-row">
            <img src={background} alt="" class="lg:w-[60vw] lg:h-[100vh] w-[0] h-[0] invisible lg:visible"/>

            <div id="pagina" class="lg:px-[4.25rem] px-[1.2rem] flex flex-col items-center lg:w-[40vw]">

                <img src={LogoSite} alt="logo do AquaNova" class="flex self-center justify-center mb-[2rem] w-[10rem] h-[10rem] lg:w-[11rem] lg:h-[11rem]"/>

                <form action="" class="flex flex-col px-[1rem] ">
                    <label htmlFor="login" class="text-[1.5rem] mx-[0.5rem] font-display font-istok">Login</label>
                    <input type="email" placeholder="Email ou telefone" id="login" class="h-[3.35rem] w-[24rem] mb-[1rem] bg-[#D9D9D9] rounded-[1.125rem] mb-[2rem] px-[1rem] lg:w-[24.25rem] lg:mb-[2.5rem]"/>

                    <label htmlFor="senha" class="text-[1.5rem] mx-[0.5rem] font-display">Senha</label>
                    <input type="password" placeholder="Insira a senha" id="senha" class="bg-[#D9D9D9] h-[3.35rem] w-100% mb-[1rem] rounded-[1.125rem] px-[1rem]"/>

                    {/* Falta toogle */}
                    <span class="mb-[3.7rem] lg:mb-[4rem] text-3x1">Lembre-me</span>

                    <button class="flex items-center self-center justify-center bg-[#0C0C0C] text-white w-[12.5rem] h-[3rem] mb-[2rem] rounded-[0.625rem]">Login</button>

                    <div id="ancoras" class="items-center self-center">
                        <a href="#" class="flex justify-center mb-[2rem] lg:mb-[1rem]">Esqueceu a senha?</a>

                        <p>Não tem uma conta? <Link to={"/cadastro"} class="text-[#098DB2]">Registre-se</Link></p>
                    </div>
                </form>
            </div>

            {/* <div className="pop-up invisible">
                <h2>Termos e Condições</h2>
                <p>Ao usar o sistema AquaNova, você concorda com o uso responsável da tecnologia, garantindo a segurança na instalação, o uso dos dados apenas para monitoramento e a preservação do equipamento. O AquaNova é um projeto educacional e sustentável, e seu uso indevido é de total responsabilidade do usuário.</p>

                <button>Não</button>
                <button>Eu aceito</button>
            </div> */}
            
        </div>
    )
}