import { IconChevronDown } from '../../assets/icons/IconChevronDown'
// import { IconMenu } from '../../assets/icons/IconMenu'
import { IconUser } from '../../assets/icons/IconUser'
import {
  Body,
  IconUserStyled,
  UserDataStyled,
  UserStyled,
} from './TopBar.styled'

type UserProps = {
  name: string
  email: string
}

export function TopBar({ name, email }: UserProps) {
  return (
    <Body>
      {/* <button onClick={() =>} type="button">
        <IconMenu />
      </button> */}
      <div>
        <UserStyled>
          <IconUserStyled>
            <IconUser />
          </IconUserStyled>
          <UserDataStyled>
            <h5>{name}</h5>
            <h6>{email}</h6>
          </UserDataStyled>
          <button type="button">
            <IconChevronDown />
          </button>
        </UserStyled>
      </div>
    </Body>
  )
}
