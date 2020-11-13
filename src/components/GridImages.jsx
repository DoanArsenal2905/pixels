import React from 'react'

import useFirestore from '../hooks/useFirestore'
import '../styles/GridImages.scss'

const GridImages = () => {
  const { docs } = useFirestore('photos')
  
  return (
    <div className='grid-image'>
      {docs && docs.map(doc => (
        <img className='image-item' src={doc.url} alt='upload-pic' />
      ))}
    </div>
  )
}

export default GridImages