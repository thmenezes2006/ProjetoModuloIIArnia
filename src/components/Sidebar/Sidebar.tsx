import React, { useState } from 'react'
import { IconClock } from '../../assets/icons/components/IconsSideMenu/IconClock'
import { IconGraphic } from '../../assets/icons/components/IconsSideMenu/IconGraphic'
import { IconProduct } from '../../assets/icons/components/IconsSideMenu/IconProduct'

import {
  LogoDivStyled,
  DivMenuStyled,
  ButtonStyled,
  HelpStyled,
  HandsStyled,
  P,
  ButtonHelpStyled,
  ButtonMenu,
  SideLeftStyled,
  CompactSideBarStyled,
} from './Sidebar.style'
import hands from '../../assets/images/SideMenu/Saly-31.png'
import { TextHelp } from '../../assets/icons/components/IconsSideMenu/IconText'
import { Logo } from '../../assets/icons/components/IconsSideMenu/Logo'
import { LogoCompact } from '../../assets/icons/components/IconsSideMenu/LogoCompact'
import { IconMenu } from '../../assets/icons/IconMenu'

export function Sidebar() {
  const [display, setDisplay] = useState('flex')
  const [logo, setLogo] = useState(Logo)
  const [ml, setMl] = useState(200)

  const isShowing = () => {
    if (display === 'flex') {
      setLogo(LogoCompact)
      setDisplay('none')
      setMl(93)
    } else {
      setLogo(Logo)
      setDisplay('flex')
      setMl(200)
    }
  }

  return (
    <SideLeftStyled>
      <div>
        <CompactSideBarStyled ml={ml} onClick={() => isShowing()} type="button">
          <IconMenu />
        </CompactSideBarStyled>
        <LogoDivStyled>{logo}</LogoDivStyled>
        <DivMenuStyled>
          <ButtonMenu display={display}>
            <IconClock />
            <ButtonStyled display={display} type="button">
              Dashboard
            </ButtonStyled>
          </ButtonMenu>
          <ButtonMenu display={display}>
            <IconGraphic />

            <ButtonStyled display={display} type="button">
              Predições
            </ButtonStyled>
          </ButtonMenu>
          <ButtonMenu display={display}>
            <IconProduct h="25" w="25" c="#ffffff" />

            <ButtonStyled display={display} type="button">
              Produtos
            </ButtonStyled>
          </ButtonMenu>
        </DivMenuStyled>
      </div>

      <HelpStyled display={display}>
        <HandsStyled src={hands} alt="suporte ou ajuda" />
        <P>
          <TextHelp />
        </P>
        <ButtonHelpStyled type="button">Fale Conosco</ButtonHelpStyled>
      </HelpStyled>
    </SideLeftStyled>
  )
}
