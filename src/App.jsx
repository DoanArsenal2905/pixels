import React, { useState } from 'react'

import GridImages from './components/GridImages'
import Header from './components/Header'
import ImageModal from './components/ImageModal'
import Navbar from './components/Navbar'
import UploadForm from './components/UploadForm'

import './index.scss'

const App = () => {
  const [selectedImg, setSelectedImg] = useState(null)

  return (
    <div className='App'>
      <Header />
      <Navbar />
      <UploadForm />
      <GridImages setSelectedImg={setSelectedImg} />
      {selectedImg && <ImageModal selectImg={selectedImg} setSelectImg={setSelectedImg} />}
    </div>
  )
}

export default App
