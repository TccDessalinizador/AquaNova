import { useState } from 'react'
import { Login } from './pages/Login.jsx'
import { Cadastro } from './pages/Cadastro.jsx'
import { Profile } from './pages//Profile.jsx'
import { Jogo } from './pages/Jogo.jsx'
import { Header } from './components/Header.jsx'
import { QuemSomos } from './pages//QuemSomos.jsx'
import { Referencias } from './pages/Referencias.jsx'
import { Instrucoes } from './pages/Instrucoes.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Componentes } from './pages/Componentes.jsx'
import { Home } from './components/Home.jsx'
import { Link } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext.jsx'

export function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
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
      </ThemeProvider>
    </BrowserRouter>
  )
}