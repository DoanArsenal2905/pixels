import React from 'react'

import { motion } from 'framer-motion'
import { RiFolderDownloadLine } from 'react-icons/ri'
import { FaFacebook, FaInstagram } from 'react-icons/fa'

import styles from '../styles/ImageModal.module.scss'

const ImageModal = ({ selectedImg, setSelectedImg, selectedCreatedAt, setselectedCreatedAt, selectedContributorName, setselectedContributorName }) => {
  const handleClickImage = e => {
    if (e.target.classList.contains(styles.backDrop)) setSelectedImg(null)
  }

  const handleClickDownloadImage = () => {
    window.open(selectedImg, '_blank')
  }

  const theme = localStorage.getItem('theme')

  return (
    <motion.div
      className={styles.backDrop}
      onClick={e => handleClickImage(e)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.div
        className={theme === 'light' ? `${styles.popupModal} ${styles.light}` : `${styles.popupModal} ${styles.dark}`}
        initial={{ y: '-100vh' }}
        animate={{ y: 0 }}
      >
        <section className={styles.modalHeader}>
          <article className={styles.leftHeader}>
            <div className={styles.contriName}>
              <span className={styles.name} style={{ fontWeight: 'bold', fontSize: 16 }}>Contributor:&nbsp;</span><span style={{ fontSize: 15 }}>{selectedContributorName}</span>
            </div>
          </article>
          <div className={styles.rightHeader}>
            <div className={styles.btnDownload} onClick={handleClickDownloadImage}>
              <RiFolderDownloadLine className={styles.downIcon} />
            </div>
          </div>
        </section>
        <section>
          <img
            src={selectedImg}
            alt='large-pic'
          />
        </section>
        <footer className={styles.footer}>
          <span>Share to:</span>
          <div>
            <FaFacebook />
          </div>
          <div>
            <FaInstagram />
          </div>
        </footer>
      </motion.div>
    </motion.div>
  )
}

export default ImageModal