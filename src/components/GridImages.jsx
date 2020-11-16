import React from 'react'

import { motion } from 'framer-motion'

import useFirestore from '../hooks/useFirestore'
import styles from '../styles/GridImages.module.scss'

const GridImages = ({ setSelectedImg, filterLists }) => {
  const { docs } = useFirestore('photos')

  const filterImage = docs.filter(doc => doc.typeImg === filterLists)
  
  return (
    <main className={styles.gridImage}>
      {filterLists === 'All' ? docs.map((doc, index) => (
        <motion.img
          className={styles.imageItem}
          key={index}
          src={doc.url}
          alt='upload-pic'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25 }}
          onClick={() => setSelectedImg(doc.url)}
        />
      )) : filterImage.map((image, index) => (
        <motion.img
          className={styles.imageItem}
          key={index}
          src={image.url}
          alt='upload-pic'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25 }}
          onClick={() => setSelectedImg(image.url)}
        />
      ))}
    </main>
  )
}

export default GridImages