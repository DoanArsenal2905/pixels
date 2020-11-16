import React, { useState } from 'react'
import Footer from './components/Footer'

import GridImages from './components/GridImages'
import Header from './components/Header'
import ImageModal from './components/ImageModal'
import Navbar from './components/Navbar'
import UploadForm from './components/UploadForm'

import './index.scss'

const App = () => {
  const [selectedImg, setSelectedImg] = useState(null)
  const [filterLists, setFilterLists] = useState('All')

  return (
    <div className='App'>
      <Header />
      <Navbar setFilterLists={setFilterLists} />
      <UploadForm />
      <GridImages setSelectedImg={setSelectedImg} filterLists={filterLists} />
      {selectedImg && <ImageModal selectImg={selectedImg} setSelectImg={setSelectedImg} />}
      <Footer />
    </div>
  )
}

export default App
