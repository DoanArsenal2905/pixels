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
      onClick={e => handleClickImage(e)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.div
        style={{ background: '#ffffff', margin: '50px auto', maxHeight: '100%', maxWidth: '60%', borderRadius: 5 }}
        initial={{ y: '-100vh' }}
        animate={{ y: 0 }}
      >
        <p>Doan</p>
        <img
          src={selectImg}
          alt='large-pic'
        />
        <p>arsenal</p>
      </motion.div>
    </motion.div>
  )
}

export default ImageModal