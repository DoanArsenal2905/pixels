import React, { useState } from 'react'

import { Modal, Button, Select } from 'antd'
import { BsUpload } from 'react-icons/bs'

import Progress from './Progress'
import styles from '../styles/UploadForm.module.scss'

const { Option } = Select

const UploadForm = () => {
  const [visible, setVisible] = useState(false)
  const [file, setFile] = useState(null)
  const [errorImage, setErrorImage] = useState(null)
  const [fileUp, setFileUp] = useState(null)
  const [type, setType] = useState(null)

  const imageTypes = ['image/png', 'image/jpeg']

  const selectPhoto = fileUp => {
    if (fileUp && imageTypes.includes(fileUp.type)) {
      setFile(fileUp)
      setErrorImage('')
      setVisible(false)
    } else {
      setFileUp(null)
      setErrorImage('Please select an image file (png or jpeg)')
    }
  }

  const getFileUp = e => {
    const file = e.target.files[0]

    if (file !== null) setErrorImage('')
    setFileUp(file)
  }

  const showModal = () => {
    setVisible(true)
  }

  const handleCancel = () => {
    setVisible(false)
  }

  const selectValue = value => {
    setType(value)
  }

  return (
    <div className={styles.uploadForm}>
      <Button shape='circle' className={styles.btnUpload} onClick={showModal}>
        <BsUpload className={styles.uploadIcon} />
      </Button>
      <Modal
        title='Upload Photos'
        visible={visible}
        onOk={() => selectPhoto(fileUp, type)}
        onCancel={handleCancel}
        okText='Upload'
      >
        <form>
          <label className={styles.add}>
            <input type='file' onChange={getFileUp} />
          </label>
          <div className={styles.output}>
            { errorImage && <div className={styles.error}>{ errorImage }</div> }
          </div>
          <p>Select type of photos:</p>
          <Select defaultValue='Select' onChange={selectValue} style={{ width: 200 }}>
            <Option value='City'>City</Option>
            <Option value='Flower'>Flower</Option>
            <Option value='Food'>Food</Option>
            <Option value='Fruit'>Fruit</Option>
            <Option value='Juice'>Juice</Option>
            <Option value='Natural'>Natural</Option>
            <Option value='Other'>Other</Option>
          </Select>
          <div className={styles.output}>
            { type === null ? <div className={styles.error}>{`Please select type of photo (If you skip, type default: Other)`}</div> : null }
          </div>
        </form>
      </Modal>
      { file ? <div><span>Uploading: </span>{ file.name }</div> : null }
      { file && <Progress file={file} setFile={setFile} type={type} /> }
    </div>
  )
}

export default UploadForm