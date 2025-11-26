import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext.jsx'

import { Home } from './components/Home.jsx'
import { Instrucoes } from './pages/Instrucoes.jsx'
import { Componentes } from './pages/Componentes.jsx'
import { Jogo } from './pages/Jogo.jsx'
import { QuemSomos } from './pages/QuemSomos.jsx'
import { Profile } from './pages/Profile.jsx'
import { Referencias } from './pages/Referencias.jsx'
import { Sistema } from './pages/Sistema.jsx'
import { Login } from './pages/Login.jsx'
import { Cadastro } from './pages/Cadastro.jsx'

export function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        {/* Container global com gradiente animado e fade-in */}
        <div className="
          min-h-screen
          bg-gradient-to-r from-[#0A1128] via-[#0A1A2F] to-[#1A2A48]
          dark:from-[#F7F7F7] dark:via-[#E0E0E0] dark:to-[#CFCFCF]
          bg-[length:200%_200%]
          animate-gradientMove animate-fadeIn
          transition-colors duration-700
        ">
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/instrucoes' element={<Instrucoes />}/>
            <Route path='/componentes' element={<Componentes />}/>
            <Route path='/jogo' element={<Jogo />}/>
            <Route path='/quemsomos' element={<QuemSomos />}/>
            <Route path='/profile' element={<Profile />}/>
            <Route path='/referencias' element={<Referencias />}/>
            <Route path='/sistema' element={<Sistema />}/>
            <Route path='/login' element={<Login />}/>
            <Route path='/cadastro' element={<Cadastro />}/>
          </Routes>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  )
}
