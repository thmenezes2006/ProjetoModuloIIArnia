import React, { useState } from 'react'
import { IconEye } from '../../assets/icons/components/IconsLogin/IconEye'
import { IconClosedEye } from '../../assets/icons/components/IconsLogin/IconClosedEye'
import { Input } from '../Form/Inputs/Input'
import {
  PasswordLoginButton,
  ShowPasswordButton,
} from '../../pages/Login/Login.styled'

export function ShowPassword() {
  const [type, setType] = useState('password')
  const [icon, setIcon] = useState(IconClosedEye)

  const isShowing = () => {
    if (type === 'password') {
      setIcon(IconEye)
      setType('text')
    } else {
      setIcon(IconClosedEye)
      setType('password')
    }
  }
  return (
    <div>
      <Input label="Senha" type={type} placeholder="Insira sua senha" />
      <PasswordLoginButton>
        <ShowPasswordButton onClick={() => isShowing()} type="button">
          {icon}
        </ShowPasswordButton>
      </PasswordLoginButton>
    </div>
  )
}
