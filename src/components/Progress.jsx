import React, { useEffect } from 'react'

import { motion } from 'framer-motion'

import useStorage from '../hooks/useStorage'
import styles from '../styles/Progress.module.scss'
import { SuccessNoti } from '../utils'

const Progress = ({ file, setFile, type }) => {
  const {url, progress} = useStorage(file, type)

  useEffect(() => {
    if (url) {
      setFile(null)
      SuccessNoti()
    }
  }, [url, setFile])

  return (
    <motion.div className={styles.bar}>
      <motion.div
        className={styles.progressBar}
        initial={{ width: 0 }}
        animate={{ width: progress + '%' }}
      ></motion.div>
    </motion.div>
  )
}

export default Progress