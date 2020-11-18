import React from 'react'

import { FaFacebookSquare, FaGithub } from 'react-icons/fa'

import styles from '../styles/Footer.module.scss'

const Footer = () => {
  const handleClickToFb = () => {
    window.open('https://www.facebook.com/DoanQuocNgo', '_blank')
  }

  const handleClickToGithub = () => {
    window.open('https://github.com/DoanArsenal2905', '_blank')
  }

  return (
    <footer className={styles.footer}>
      <span className={styles.author}>Made by Ngo Quoc Doan</span>
      <div className={styles.socials}>
        <div className={styles.fb} onClick={handleClickToFb}>
          <FaFacebookSquare className={styles.fbIcon} />
        </div>
        <div className={styles.github} onClick={handleClickToGithub}>
          <FaGithub className={styles.githubIcon} />
        </div>
      </div>
    </footer>
  )
}

export default Footer