import React from 'react'

import styles from '../styles/Header.module.scss'
import photo from '../assets/rainbow_23845.png'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.banner}>
        <img className={styles.logo} src={photo} alt="brand img"/>
        <h1 className={styles.brand}>Pixels</h1>
        <p className={styles.des}>Just a simple place to share a lot of free awesomes photos</p>
      </div>
      <div className={styles.dark}></div>
    </header>
  )
}

export default Header