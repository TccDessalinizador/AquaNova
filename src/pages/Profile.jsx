import LogoSite from '../assets/LogoAquaNova.png'
import FotodePerfil from '../assets/FotodePerfil.jpg'
import Edit from '../assets/Edit.jpg'
import { Header } from '../components/Header.jsx'
import { Link } from 'react-router-dom'

export function Profile() {
    return (
        <div>
            <div id="pagina" class="flex flex-col lg:flex-row lg:gap-[8rem]">

                <div id='box' class="w-[0rem] h-[0rem] lg:w-[20vw] lg:h-[100vh] lg:bg-[#0C0C0C]">
                    <img src={LogoSite} alt="" class="lg:w-[15rem] lg:h-[15rem] mx-auto"/>
                </div>

                <div id="conteudo" class="flex flex-col lg:w-[50rem] lg:h-[40rem] lg:mt-[2rem] py-[2rem]">

                    <div class="flex flex-col lg:flex-row lg:h-[7rem] lg:items-center lg:justify-between lg:mt-[-2.5rem]">

                        <div id="texto" class="flex flex-row h-[2rem] lg:flex-row mb-[1rem] ml-[8rem] lg:ml-[1.5rem]">
                            <img src={Edit} alt="" class="w-[1.875rem] h-[1.7rem]"/>
                            <p class="h-[1.875rem] text-[1.5rem] w-[30rem] font-bold">Editar Perfil</p>
                        </div>

                        <img src={FotodePerfil} alt="foto de perfil" class="w-[8.75rem] h-[8.75rem] mb-[1rem] self-center lg:w-[6rem] lg:h-[6rem] lg:mb-[0]"/>
                    </div>


                    <div id="formulario" class="flex items-end px-[1.8rem]">
                        <form action="" class="flex flex-col">
                            <label htmlFor="nome" class="mb-[0.2rem] text-[#1C1C1C] font-semibold text-[1.3rem]">Nome</label>
                            <input type="text" id='nome' placeholder='Mehrab' class="h-[3.1875rem] mb-[0.5rem] border-1 border-[#0C0C0C] rounded-[1.125rem] px-[1rem] placeholder-[#858585] placeholder-font-medium lg:w-[48rem]"/>

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

                            <div id='buttons' class="lg:h-[4rem] flex justify-end gap-[.5rem] mt-[1rem]">
                                <button id='cancelar' class="border-2  border-[#0C0C0C] rounded-[0.3125rem] w-[8.15rem] h-[2.3rem] text-[1.375rem] text-[#0C0C0C] ml-[6.6rem] cursor-pointer">Cancelar</button>
                                <button id='confirmar' class="border-2 border-[#0C0C0C] rounded-[0.3125rem] w-[8.15rem] h-[2.3rem] text-[1.375rem] bg-[#0C0C0C] text-[#FFF] cursor-pointer">Confirmar</button>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    )
}