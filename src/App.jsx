import { useState } from 'react'
import { Login } from './components/login.jsx'
import { Cadastro } from './components/Cadastro.jsx'
import { Profile } from './components/Profile.jsx'
import { Jogo } from './components/Jogo.jsx'
import { Header } from './components/Header.jsx'
import { QuemSomos } from './components/QuemSomos.jsx'
import { Referencias } from './components/Referencias.jsx'
import { Instrucoes } from './components/Instrucoes.jsx'

export function App() {
  return (
    <div>
      <Instrucoes />
    </div>
  )
}