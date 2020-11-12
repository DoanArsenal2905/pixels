import { useEffect, useState } from "react"

export const useDarkMode = () => {
  const [theme, setTheme] = useState('light')
  const [mountedComp, setMountedComp] = useState(false)

  const setMode = mode => {
    localStorage.setItem('theme', mode)
    setTheme(mode)
  }

  const themeToggler = () => {
    theme === 'light' ? setMode('dark') : setMode('light')
  }

  useEffect(() => {
    const localTheme = localStorage.getItem('theme')
    localTheme && setTheme(localTheme)
    setMountedComp(true)
  }, [])

  return [theme, themeToggler, mountedComp]
}