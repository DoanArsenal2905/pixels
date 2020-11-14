import React from 'react'

import { motion } from 'framer-motion'

import useFirestore from '../hooks/useFirestore'
import '../styles/GridImages.scss'

const GridImages = ({ setSelectedImg }) => {
  const { docs } = useFirestore('photos')
  
  return (
    <div className='grid-image'>
      {docs && docs.map(doc => (
        <motion.img
          className='image-item'
          src={doc.url}
          alt='upload-pic'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          onClick={() => setSelectedImg(doc.url)}
        />
      ))}
    </div>
  )
}

export default GridImages