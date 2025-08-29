import { createContext, useState, useEffect } from "react"

export const ThemeContext = createContext({})

export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState(() => localStorage.getItem("theme") ?? "")

    useEffect(() => {
        localStorage.setItem("theme", theme)
        const root = document.documentElement
        root.classList.remove("dark")

        if(theme === "dark") {
            root.classList.add(theme)
        }
    }, [theme])

    const themeProps = {
        theme,
        toggle: () => setTheme(prevTheme => prevTheme === "dark"? "" : "dark")
    }

    return (
        <ThemeContext.Provider value={themeProps}>
            {children}
        </ThemeContext.Provider>
    )
}