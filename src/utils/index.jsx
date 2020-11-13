import { notification } from 'antd'
import { BsBell } from 'react-icons/bs'
import { VscClose } from 'react-icons/vsc'

export const SuccessNoti = () => {
  const noti = 
    notification.open({
      icon: <BsBell style={{ color: '#ffffff' }} />,
      message: <div style={{ color: '#ffffff' }}>Upload Success 👏👏</div>,
      style: {
        background: '#00bf9a',
        display: 'flex',
        alignItems: 'center',
        borderRadius: '6px',
      },
      closeIcon: <VscClose style={{ color: '#ffffff', fontSize: 20 }} />
    })

  return {noti}
}

export const ErrorNoti = () => {
  const noti = 
    notification['error']({
      icon: <BsBell style={{ color: '#ffffff' }} />,
      message: <div style={{ color: '#ffffff' }}>Upload Error 💀💀</div>,
      style: {
        background: '#f76a8c',
        display: 'flex',
        alignItems: 'center',
        borderRadius: '6px',
      },
      closeIcon: <VscClose style={{ color: '#ffffff', fontSize: 20 }} />
    })

  return {noti}
}