import { createContext, useState, useEffect } from "react"

export const ThemeContext = createContext({})

export function ThemeProvider({ children }) {
  // 1. Tema padrão baseado no sistema, se não houver no localStorage
  const getDefaultTheme = () => {
    const saved = localStorage.getItem("theme")
    if (saved) return saved

    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    return prefersDark ? "dark" : "light"
  }

  const [theme, setTheme] = useState(getDefaultTheme)

  // 2. Aplicar tema direto no <html> sem piscar
  useEffect(() => {
    const root = document.documentElement

    if (theme === "dark") {
      root.classList.add("dark")
    } else {
      root.classList.remove("dark")
    }

    localStorage.setItem("theme", theme)
  }, [theme])

  // 3. Função de alternar tema
  const toggle = () => {
    setTheme(prev => (prev === "dark" ? "light" : "dark"))
  }

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  )
}
