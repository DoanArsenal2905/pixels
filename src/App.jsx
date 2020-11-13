import React from 'react'
import GridImages from './components/GridImages'
import Header from './components/Header'
import Navbar from './components/Navbar'
import UploadForm from './components/UploadForm'

const App = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <UploadForm />
      <GridImages />
    </div>
  )
}

export default App
