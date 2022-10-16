import { useEffect, useState } from 'react'
import { IconChevronDown } from '../../assets/icons/IconChevronDown'
import { IconConfig } from '../../assets/icons/IconConfig'
import { IconLogout } from '../../assets/icons/IconLogout'
import { IconUser } from '../../assets/icons/IconUser'
import { getUser } from '../../services/gets/getUser'
import {
  Body,
  ButtonChevron,
  ButtonLogout,
  IconUserStyled,
  Logout,
  UserDataStyled,
  UserStyled,
} from './TopBar.styled'

type UserProps = {
  nome: string
  email: string
}

export function TopBar() {
  const [user, setUser] = useState<UserProps>()
  const [display, setDisplay] = useState('none')

  useEffect(() => {
    ;(async () => {
      const result = await getUser()
      if (result.message) {
        alert(result.message)
      } else {
        setUser(result)
      }
    })()
  }, [])

  const isShowing = () => {
    if (display === 'none') {
      setDisplay('flex')
    } else {
      setDisplay('none')
    }
  }

  const logout = () => {
    localStorage.removeItem('token')
    window.location.href = '/login'
  }

  return (
    <Body>
      <div>
        <UserStyled>
          <IconUserStyled bColor="#001c98">
            <IconUser color="#fff" size="25" />
          </IconUserStyled>
          <UserDataStyled>
            <h5>{user?.nome || ''}</h5>
            <h6>{user?.email || ''}</h6>
          </UserDataStyled>
          <div>
            <ButtonChevron onClick={isShowing}>
              <IconChevronDown />
            </ButtonChevron>
            <Logout display={display}>
              <ButtonLogout>
                <IconConfig />
                Configurações
              </ButtonLogout>
              <ButtonLogout onClick={logout}>
                <IconLogout />
                Sair
              </ButtonLogout>
            </Logout>
          </div>
        </UserStyled>
      </div>
    </Body>
  )
}
