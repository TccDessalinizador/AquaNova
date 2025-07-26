import LogoSite  from "../assets/logo tcc-black 1.jpg"

export function Login() {
    return (
        <div class="bg-white flex flex-col">
            <div id="pagina">
                <img src={LogoSite} alt="logo do AquaNova" class="flex self-center justify-center w-[10rem] h-[10rem]"/>
                <form action="" class="flex flex-col px-[1.63rem] ">
                    <label htmlFor="login" class="text-3x1 mx-[0.5rem] font-display">Login</label>
                    <input type="email" placeholder="Email ou telefone" id="login" class="h-[3.35rem] w-100% mb-[1rem] bg-[#D9D9D9] rounded-[1.125rem] px-[1rem]"/>

                    <label htmlFor="senha" class="text-3x1 mx-[0.5rem] font-display">Senha</label>
                    <input type="password" placeholder="Insira a senha" id="senha" class="bg-[#D9D9D9] h-[3.35rem] w-100% mb-[1rem] rounded-[1.125rem] px-[1rem]"/>

                    {/* Falta toogle */}
                    <span class="mb-[3.7rem] text-3x1">Lembre-me</span>

                    <button class="flex items-center self-center justify-center bg-[#0C0C0C] text-white w-[11.6875rem] h-[2.35rem] mb-[2rem] rounded-[0.625rem]">Login</button>

                    <div id="ancoras" class="items-center self-center">
                        <a href="#" class="flex justify-center mb-[2rem]">Esqueceu a senha?</a>

                        <p>Não tem uma conta? <a href="#" class="text-[#098DB2]">Registre-se</a></p>
                    </div>
                </form>
            </div>
            <div className="pop-up">
                <h2>Termos e Condições</h2>
                <p>Ao usar o sistema AquaNova, você concorda com o uso responsável da tecnologia, garantindo a segurança na instalação, o uso dos dados apenas para monitoramento e a preservação do equipamento. O AquaNova é um projeto educacional e sustentável, e seu uso indevido é de total responsabilidade do usuário.</p>

                <button>Não</button>
                <button>Eu aceito</button>
            </div>
            
        </div>
    )
}