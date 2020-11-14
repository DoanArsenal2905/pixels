import React from 'react'
import { motion } from 'framer-motion'

import styles from '../styles/ImageModal.module.scss'

const ImageModal = ({ selectImg, setSelectImg }) => {
  const handleClickImage = e => {
    if (e.target.classList.contains(styles.backDrop)) setSelectImg(null)
  }

  return (
    <motion.div
      className={styles.backDrop}
      onClick={handleClickImage}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div>
        <p>Doan</p>
      </div>
      <motion.img
        src={selectImg}
        alt='large-pic'
        initial={{ y: '-100vh' }}
        animate={{ y: 0 }}
      />
    </motion.div>
  )
}

export default ImageModal