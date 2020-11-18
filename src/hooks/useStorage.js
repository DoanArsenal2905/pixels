import { useState, useEffect } from 'react'
import { projectStorage, projectFirestore, timestamp } from '../firebase'
import { ErrorNoti } from '../utils'

const useStorage = (file, type, name) => {
  const [progress, setProgress] = useState(0)
  const [error, setError] = useState(null)
  const [url, setUrl] = useState(null)
  const [createdAt, setCreatedAt] = useState(null)

  useEffect(() => {
    const storageRef = projectStorage.ref(file.name)
    const collectionRef = projectFirestore.collection('photos')

    storageRef.put(file).on('state_change', snap => {
      let percentage = (snap.bytesTransferred / snap.totalBytes) * 100
      setProgress(percentage)
    }, err => {
      setError(err)
      ErrorNoti()
    }, async() => {
      const url = await storageRef.getDownloadURL()
      const createdAt = timestamp()
      const typeImg = type === null ? 'Other' : type
      const contributorName = name
      collectionRef.add({ url, createdAt, typeImg, contributorName })
      setUrl(url)
      setCreatedAt(createdAt)
    })
  }, [file, type, name])

  return { progress, error, url, createdAt, name }
}

export default useStorage