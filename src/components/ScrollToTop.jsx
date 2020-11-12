import React, { useState } from 'react'

import { FaArrowCircleUp } from 'react-icons/fa'

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
    <FaArrowCircleUp
      className={styles.scrollTop}
      onClick={scrollTop}
      style={{ display: showScroll ? 'flex' : 'none' }}
    />
  )
}

export default ScrollToTop