import { IconClock } from '../../assets/icons/components/IconsSideMenu/clock'
import { IconGraphic } from '../../assets/icons/components/IconsSideMenu/graphic'
import { Logo } from '../../assets/icons/components/IconsSideMenu/logo'
import { IconProduct } from '../../assets/icons/components/IconsSideMenu/product'
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
} from './Sidebar.style'
import hands from '../../assets/images/SideMenu/Saly-31.png'
import { TextHelp } from '../../assets/icons/components/IconsSideMenu/text'

export function Sidebar() {
  return (
    <SideLeftStyled>
      <div>
        <LogoDivStyled>
          <Logo />
        </LogoDivStyled>
        <DivMenuStyled>
          <ButtonMenu>
            <IconClock />
            <ButtonStyled type="button">Dashboard</ButtonStyled>
          </ButtonMenu>
          <ButtonMenu>
            <IconGraphic />

            <ButtonStyled type="button">Predições</ButtonStyled>
          </ButtonMenu>
          <ButtonMenu>
            <IconProduct h="25" w="25" c="#ffffff" />

            <ButtonStyled type="button">Produtos</ButtonStyled>
          </ButtonMenu>
        </DivMenuStyled>
      </div>

      <HelpStyled>
        <HandsStyled src={hands} alt="suporte ou ajuda" />
        <P>
          <TextHelp />
        </P>
        <ButtonHelpStyled type="button">Fale Conosco</ButtonHelpStyled>
      </HelpStyled>
    </SideLeftStyled>
  )
}
