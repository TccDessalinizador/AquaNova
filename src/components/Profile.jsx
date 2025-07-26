import LogoSite from '../assets/LogoAquaNova.png'
import FotodePerfil from '../assets/FotodePerfil.jpg'
import Edit from '../assets/Edit.jpg'

export function Profile() {
    return (
        <div>
            <div id="header" class="h-[4.25rem] mb-[1.4rem] flex bg-[#0C0C0C] justify-between">
                <img src={LogoSite} alt="" class="w-[4rem] h-[4rem]"/>
                <img src={FotodePerfil} alt="" class="rounded-[100%] w-[3rem] h-[3rem] mr-[0.3rem] mt-[0.5rem]"/>
            </div>

            <div id="pagina" class="flex flex-col justify-center self-center">
                <div id="texto" class="flex flex-row mb-[1rem] justify-center self-center items-center">
                    <img src={Edit} alt="" class="w-[1.875rem] h-[1.7rem]"/>
                    <p class="h-[1.875rem] text-[1.5rem] font-bold">Editar perfil</p>
                </div>
                <img src={FotodePerfil} alt="foto de perfil" class="w-[8.75rem] h-[8.75rem] mb-[1rem] self-center"/>

                <div id="formulario" class="flex items-end px-[1.8rem]">
                    <form action="" class="flex flex-col">
                        <label htmlFor="nome" class="mb-[0.2rem] text-[#1C1C1C] font-semibold text-[1.3rem]">Nome</label>
                        <input type="text" id='nome' placeholder='Mehrab' class="h-[3.1875rem] mb-[0.5rem] border-1 border-[#0C0C0C] rounded-[1.125rem] px-[1rem] placeholder-[#858585] placeholder-font-medium"/>

                        <label htmlFor="email" class="mb-[0.2rem] text-[#1C1C1C] font-semibold text-[1.3rem]">Email</label>
                        <input type="email" id='email' placeholder='Morgi.business@gmail.com' class="h-[3.1875rem] mb-[0.5rem] border-1 border-[#0C0C0C] rounded-[1.125rem] px-[1rem] placeholder-[#858585] placeholder-font-medium"/>

                        <label htmlFor="endereco" class="mb-[0.2rem] text-[#1C1C1C] font-semibold text-[1.3rem]">Endereço</label>
                        <input type="text" id='endereco' placeholder='33062 Zboncak isle' class="h-[3.1875rem] mb-[0.5rem] border-1 border-[#0C0C0C] rounded-[1.125rem] px-[1rem] placeholder-[#858585] placeholder-font-medium"/>

                        <label htmlFor="numero" class="mb-[0.2rem] text-[#1C1C1C] font-semibold text-[1.3rem]">Número para contato</label>
                        <input type="number" id='numero' placeholder='Ex: 9999999999' class="h-[3.1875rem] mb-[0.5rem] border-1 border-[#0C0C0C] rounded-[1.125rem] px-[1rem] placeholder-[#858585] placeholder-font-medium"/>

                        <div id='inputs' class="flex flex-row gap-[2.4rem]">

                            <div id="cidade" class="flex flex-col">
                                <label htmlFor="cidade" class="mb-[0.2rem] text-[#1C1C1C] font-semibold text-[1.3rem]">Cidade</label>
                                <select name="" id="" class="w-[10.625rem] h-[3.1875rem] rounded-[1.125rem] bg-white border-1 border-[#0C0C0C] text-[#858585] text=[1.125rem] font-semibold px-[1rem] border-solid">
                                    <option value="">Sao Paulo</option>
                                    <option value="">Rio de janeiro</option>
                                </select>
                            </div>

                            <div id="estados" class="flex flex-col">
                                <label htmlFor="estado" class="mb-[0.2rem] text-[#1C1C1C] font-semibold text-[1.3rem]">Estado</label>
                                <select name="" id="" class="w-[10.625rem] h-[3.1875rem] rounded-[1.125rem] bg-white border-1 border-[#0C0C0C] text-[#858585] text=[1.125rem] font-semibold px-[1rem] border-solid mb-[0.3rem]">
                                    <option value="">Acre</option>
                                    <option value="">Alagoas</option>
                                    <option value="">Amapá</option>
                                    <option value="">Amazonas</option>
                                    <option value="">Bahia</option>
                                    <option value="">Ceará</option>
                                    <option value="">Espirito Santo</option>
                                    <option value="">Goiás</option>
                                    <option value="">Maranhão</option>
                                    <option value="">Mato Grosso</option>
                                    <option value="">Mato Grosso do Sul</option>
                                    <option value="">Minas Gerais</option>
                                    <option value="">Pará</option>
                                    <option value="">Paraiba</option>
                                    <option value="">Paraná</option>
                                    <option value="">Pernambuco</option>
                                    <option value="">Piauí</option>
                                    <option value="">Rio de Janeiro</option>
                                    <option value="">Rio Grande do Norte</option>
                                    <option value="">Rio Grande do Sul</option>
                                    <option value="">Rondõnia</option>
                                    <option value="">Roraima</option>
                                    <option value="">Santa Catarina</option>
                                    <option value="">São Paulo</option>
                                    <option value="">Sergipe</option>
                                    <option value="">Tocantins</option>
                                </select>
                            </div>
                        </div>

                        <label htmlFor="senha" class="mb-[0.2rem] text-[#1C1C1C] font-semibold text-[1.3rem]">Senha</label>
                        <input type="password" id='senha' placeholder='Ex: 123456' class="h-[3.1875rem] mb-[0.5rem] border-1 border-[#0C0C0C] rounded-[1.125rem] px-[1rem] placeholder-[#858585] placeholder-font-medium"/>

                        <div id='buttons'>
                            <button id='cancelar' class="border-2  border-[#0C0C0C] rounded-[0.3125rem] mt-[2.75rem] w-[8.15rem] h-[2.3rem] text-[1.375rem] text-[#0C0C0C] ml-[6.6rem] mr-[0.65rem]">Cancelar</button>
                            <button id='confirmar' class="border-2 border-[#0C0C0C] rounded-[0.3125rem] mt-[2.75rem] w-[8.15rem] h-[2.3rem] text-[1.375rem] bg-[#0C0C0C] text-[#FFF]">Confirmar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}