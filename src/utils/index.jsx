import { notification } from 'antd'
import { BsBell } from 'react-icons/bs'

import styles from './utils.module.scss'

export const SuccessNoti = () => {
  const noti = 
    notification.open({
      icon: <BsBell style={{ color: '#ffffff',  }} />,
      message: <div style={{ color: '#ffffff' }}>Upload Success 👏👏</div>,
      description: 'Upload photo successfully !!',
      className: `${styles.successNoti}`,
      style: {
        background: '#00bf9a',
        display: 'flex',
        alignItems: 'center',
        borderRadius: '6px',
        color: '#ffffff',
        marginBottom: '1rem',
      }
    })

  return (
    {noti}
  )
}