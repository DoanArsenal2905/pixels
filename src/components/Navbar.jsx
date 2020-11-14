import React from 'react'

import styles from '../styles/Navbar.module.scss'

const Navbar = () => {
  return (
    <nav className={styles.navBar}>
      <span className={`${styles.tabItem} ${styles.active}`} data-tab="1">All</span>
      <span className={styles.tabItem} data-tab="2">Beach</span>
      <span className={styles.tabItem} data-tab="3">City</span>
      <span className={styles.tabItem} data-tab="4">Flower</span>
      <span className={styles.tabItem} data-tab="5">Food</span>
      <span className={styles.tabItem} data-tab="6">Fruit</span>
      <span className={styles.tabItem} data-tab="7">Juice</span>
      <span className={styles.tabItem} data-tab="8">Natural</span>
      <span className={styles.tabItem} data-tab="9">Ocean</span>
      <span className={styles.tabItem} data-tab="10">Road</span>
      <span className={styles.tabItem} data-tab="11">Other</span>
    </nav>
  )
}

export default Navbar