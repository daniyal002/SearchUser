import React from 'react'
import UserVerificationForm from './components/FindUserForm/UserVerificationForm'
import style from './UserVerification.module.css'

const UserVerification = () => {
  return (
    <div className={style.userVerification}><UserVerificationForm/></div>
  )
}

export default UserVerification