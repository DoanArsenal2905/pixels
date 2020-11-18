import React from 'react'

import styles from '../styles/Navbar.module.scss'

const Navbar = ({ setFilterLists }) => {
  const filterImages = (e) => {
    const currentType = e.target.textContent
    setFilterLists(currentType)
  }

  const span = document.getElementsByClassName(styles.tabItem)
  for (let i = 0; i < span.length; i++) {
    span[i].addEventListener('click', function () {
      let current = document.getElementsByClassName(styles.active)
      current[0].className = current[0].className.replace(` ${styles.active}`, '')
      this.className += ` ${styles.active}`
    })
  }

  return (
    <nav className={styles.navBar}>
      <span className={`${styles.tabItem} ${styles.active}`} onClick={(e) => filterImages(e)}>All</span>
      <span className={styles.tabItem} onClick={(e) => filterImages(e)}>Beach</span>
      <span className={styles.tabItem} onClick={(e) => filterImages(e)}>City</span>
      <span className={styles.tabItem} onClick={(e) => filterImages(e)}>Flower</span>
      <span className={styles.tabItem} onClick={(e) => filterImages(e)}>Fruit</span>
      <span className={styles.tabItem} onClick={(e) => filterImages(e)}>Game</span>
      <span className={styles.tabItem} onClick={(e) => filterImages(e)}>Mountain</span>
      <span className={styles.tabItem} onClick={(e) => filterImages(e)}>Natural</span>
      <span className={styles.tabItem} onClick={(e) => filterImages(e)}>Ocean</span>
      <span className={styles.tabItem} onClick={(e) => filterImages(e)}>Road</span>
      <span className={styles.tabItem} onClick={(e) => filterImages(e)}>Other</span>
    </nav>
  )
}

export default Navbar