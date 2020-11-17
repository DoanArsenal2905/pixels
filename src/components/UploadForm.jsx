import React, { useState } from 'react'

import { Modal, Select, Popover } from 'antd'
import { BsExclamationCircle } from 'react-icons/bs'
import { VscClose } from 'react-icons/vsc'
import { RiFolderUploadFill } from 'react-icons/ri'
import { BiDownArrow } from 'react-icons/bi'

import Progress from './Progress'
import styles from '../styles/UploadForm.module.scss'

const { Option } = Select

const UploadForm = () => {
  const [visible, setVisible] = useState(false)
  const [file, setFile] = useState(null)
  const [errorImage, setErrorImage] = useState(null)
  const [fileUp, setFileUp] = useState(null)
  const [type, setType] = useState(null)
  const [name, setName]  = useState('')
  const [errorName, setErrorName] = useState(null)

  const imageTypes = ['image/png', 'image/jpeg']

  const selectPhoto = fileUp => {
    if ((fileUp && imageTypes.includes(fileUp.type)) && name !== '') {
      setFile(fileUp)
      setErrorImage('')
      setErrorName('')
      setVisible(false)
    } else if ((fileUp && imageTypes.includes(fileUp.type)) && name === '') {
      setErrorImage('')
      setErrorName('Please enter your name')
    } else if (fileUp === null && name !== '') {
      setFileUp(null)
      setErrorName('')
      setErrorImage('Please select an image file (png or jpeg)')
    } else {
      setFileUp(null)
      setErrorImage('Please select an image file (png or jpeg)')
      setErrorName('Please enter your name')
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

  const handleChangeName = e => {
    const contri = e.target.value
    setName(contri)
    e.preventDefault()
  }

  return (
    <div className={styles.uploadForm}>
      <div className={styles.btnUpload} onClick={showModal}>
        <RiFolderUploadFill className={styles.uploadIcon} />
      </div>
      <Modal
        title='Upload Photos'
        visible={visible}
        closeIcon={<VscClose onClick={handleCancel} style={{ fontSize: 20 }} />}
        onCancel={handleCancel}
        footer={
          <div className={styles.modalFooter}>
            <div className={styles.cancel} onClick={handleCancel}>Cancel</div>
            <div className={styles.upload} onClick={() => selectPhoto(fileUp)}>Upload</div>
          </div>
        }
        style={{ top: 50 }}
      >
        <form>
          <label className={styles.add}>
            <input type='file' onChange={getFileUp} />
          </label>
          <div className={styles.output}>
            { errorImage && <div className={styles.error}>{ errorImage }</div> }
          </div>
          <input type='text' value={name} className={styles.contributor} placeholder='Name...' onChange={handleChangeName} required={true} />
          <div className={styles.output}>
            { errorName && <div className={styles.error}>{ errorName }</div> }
          </div>
          <h4>Select type of photos:</h4>
          <div className={styles.select}>
          <Select
            defaultValue='Select...'
            onChange={selectValue}
            style={{ width: 200 }}
            suffixIcon={<BiDownArrow />}
          >
            <Option value='Beach'>Beach</Option>
            <Option value='City'>City</Option>
            <Option value='Flower'>Flower</Option>
            <Option value='Food'>Food</Option>
            <Option value='Fruit'>Fruit</Option>
            <Option value='Juice'>Juice</Option>
            <Option value='Natural'>Natural</Option>
            <Option value='Ocean'>Ocean</Option>
            <Option value='Road'>Road</Option>
            <Option value='Other'>Other</Option>
          </Select>
          {type === null ? (
            <Popover title='Please select type of photo' content='If you skip, type default: Other' trigger='hover'>
              <BsExclamationCircle className={styles.warning} />
            </Popover>
          ) : null}
          </div>
        </form>
      </Modal>
      { file ? <div style={{ marginTop: 5 }}><span>Uploading: </span>{ file.name }</div> : null }
      { file && <Progress file={file} setFile={setFile} type={type} name={name} /> }
    </div>
  )
}

export default UploadForm