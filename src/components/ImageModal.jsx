import React from 'react'
import { motion } from 'framer-motion'

// import styles from '../styles/Image.module.scss'

const ImageModal = ({ selectImg, setSelectImg }) => {
  const handleClickImage = e => {
    if (e.target.classList.contains('back-drop')) setSelectImg(null)
  }

  return (
    <motion.div
      className='back-drop'
      onClick={handleClickImage}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
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