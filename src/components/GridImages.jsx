import React from 'react'

import { motion } from 'framer-motion'

import useFirestore from '../hooks/useFirestore'
import styles from '../styles/GridImages.module.scss'

const GridImages = ({ setSelectedImg }) => {
  const { docs } = useFirestore('photos')
  
  return (
    <div className={styles.gridImage}>
      {docs && docs.map((doc, index) => (
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
      ))}
    </div>
  )
}

export default GridImages