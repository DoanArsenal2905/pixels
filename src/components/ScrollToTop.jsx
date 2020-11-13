import React, { useState } from 'react'

import { BsArrowUp } from 'react-icons/bs'

import styles from '../styles/ScrollToTop.module.scss'

const ScrollToTop = () => {
  const [showScroll, setShowScroll] = useState(false)

  const checkScroll = () => {
    if (!showScroll && window.pageYOffset > 400) setShowScroll(true)
    else if (showScroll && window.pageYOffset < 400) setShowScroll(false)
  }

  const scrollTop = () => {
    window.scrollTo({top: 0, behavior: 'smooth'})
  }

  window.addEventListener('scroll', checkScroll)

  return (
    <div className={showScroll ? `${styles.scrollTop}` : `${styles.none}`}>
      <BsArrowUp className={styles.iconScroll} onClick={scrollTop} />
    </div>
  )
}

export default ScrollToTop