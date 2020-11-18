import React from 'react'

import { motion } from 'framer-motion'
import { RiFolderDownloadLine } from 'react-icons/ri'
import {
  FacebookShareButton,
  FacebookIcon,
  TumblrShareButton,
  TumblrIcon,
  TwitterShareButton,
  TwitterIcon
} from 'react-share'

import styles from '../styles/ImageModal.module.scss'

const ImageModal = ({ selectedImg, setSelectedImg, selectedCreatedAt, setselectedCreatedAt, selectedContributorName, setselectedContributorName }) => {
  const handleClickImage = e => {
    if (e.target.classList.contains(styles.backDrop)) setSelectedImg(null)
  }

  const create = new Date(selectedCreatedAt.seconds * 1000).toLocaleString()

  const handleClickDownloadImage = () => {
    window.open(selectedImg, '_blank')
  }

  const theme = localStorage.getItem('theme')

  const title = 'Pixels - Free photos for everyone'

  return (
    <motion.div
      className={styles.backDrop}
      onClick={e => handleClickImage(e)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.div
        className={theme && theme === 'dark' ? `${styles.popupModal} ${styles.dark}` : `${styles.popupModal} ${styles.light}`}
        initial={{ y: '-100vh' }}
        animate={{ y: 0 }}
      >
        <section className={styles.modalHeader}>
          <article className={styles.leftHeader}>
            <div>
              <span className={styles.contriTextBold}>Contributor:&nbsp;</span><span className={styles.contriText}>{selectedContributorName}</span>
            </div>
            <div>
              <span className={styles.contriTextBold}>Created At:&nbsp;</span><span className={styles.contriText}>{create}</span>
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
          <span className={styles.shareText}>Share to:</span>
          <FacebookShareButton
            url={selectedImg}
            quote={title}
            className={styles.btnShare}
          >
            <FacebookIcon size={30} borderRadius={4} />
          </FacebookShareButton>
          <TumblrShareButton
            url={selectedImg}
            quote={title}
            className={styles.btnShare}
          >
            <TumblrIcon size={30} borderRadius={4} />
          </TumblrShareButton>
          <TwitterShareButton
            url={selectedImg}
            quote={title}
            className={styles.btnShare}
          >
            <TwitterIcon size={30} borderRadius={4} />
          </TwitterShareButton>
        </footer>
      </motion.div>
    </motion.div>
  )
}

export default ImageModal