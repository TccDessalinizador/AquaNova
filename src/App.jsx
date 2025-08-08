import { useState } from 'react'
import { Login } from './components/Login.jsx'
import { Cadastro } from './components/Cadastro.jsx'
import { Profile } from './components/Profile.jsx'
import { Jogo } from './components/Jogo.jsx'
import { Header } from './components/Header.jsx'
import { QuemSomos } from './components/QuemSomos.jsx'
import { Referencias } from './components/Referencias.jsx'
import { Instrucoes } from './components/Instrucoes.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Componentes } from './components/Componentes.jsx'
import { Home } from './components/Home.jsx'
import { Link } from 'react-router-dom'

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>

        <Route path='/instrucoes' element={<Instrucoes />}/>
        <Route path='/componentes' element={<Componentes />}/>
        <Route path='/jogo' element={<Jogo />}/>
        <Route path='/quemsomos' element={<QuemSomos />}/>
        <Route path='/profile' element={<Profile />}/>
        <Route path='/referencias' element={<Referencias />}/>

        <Route path='/login' element={<Login />}/>
        <Route path='/cadastro' element={<Cadastro />}/>



      </Routes>
    </BrowserRouter>
  )
}