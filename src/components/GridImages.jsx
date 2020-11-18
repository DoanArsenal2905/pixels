import React from 'react'

import { motion } from 'framer-motion'

import useFirestore from '../hooks/useFirestore'
import styles from '../styles/GridImages.module.scss'

const GridImages = ({ setSelectedImg, setselectedCreatedAt, setselectedContributorName, filterLists }) => {
  const { docs } = useFirestore('photos')

  const filterImage = docs.filter(doc => doc.typeImg === filterLists)

  const handleSet = (url, createdAt, contributorName) => {
    setSelectedImg(url)
    setselectedCreatedAt(createdAt)
    setselectedContributorName(contributorName)
  }
  
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
          onClick={() => handleSet(doc.url, doc.createdAt, doc.contributorName)}
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
          onClick={() => handleSet(image.url, image.createdAt, image.contributorName)}
        />
      ))}
    </main>
  )
}

export default GridImages