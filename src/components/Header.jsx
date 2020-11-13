import React from 'react'
import { ThemeProvider } from 'styled-components'

import { GlobalStyles } from '../themes/global'
import { useDarkMode } from '../hooks/useDarkMode'
import { lightTheme, darkTheme } from '../themes/themes'
import TogglerMode from './TogglerMode'
import ScrollToTop from './ScrollToTop'

import styles from '../styles/Header.module.scss'
import photo from '../assets/rainbow_23845.png'

const Header = () => {
  const [theme, themeToggler, mountedComp] = useDarkMode()
  const themeMode = theme === 'light' ? lightTheme : darkTheme

  if (!mountedComp) return <div />
  return (
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyles />
        <header className={styles.header}>
          <div className={styles.banner}>
            <img className={styles.logo} src={photo} alt="brand img"/>
            <h1 className={styles.brand}>Pixels</h1>
            <p className={styles.des}>Just a simple place to share a lot of free awesome photos</p>
          </div>
          <div className={styles.dark}>
            <TogglerMode theme={theme} toggleTheme={themeToggler} />
            <ScrollToTop />
          </div>
        </header>
      </>
    </ThemeProvider>
  )
}

export default Header