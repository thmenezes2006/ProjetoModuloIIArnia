import { StyledLogin, StyledImg } from './ImgLogin.style'
import imgBackground from '../../assets/images/Login/fundo.png'
import imgGraphic from '../../assets/images/Login/graphic.png'
import imgEllipse from '../../assets/images/Login/Ellipse.png'
import imgHands from '../../assets/images/Login/hands.png'
import imgMen from '../../assets/images/Login/men.png'
import imgText from '../../assets/images/Login/text.png'
import imgLine from '../../assets/images/Login/whiteLine.png'

export function ImgLogin() {
  return (
    <StyledLogin>
      <StyledImg mt={8} mr={0} mb={0} ml={9} h={85} w={0}>
        <img src={imgBackground} alt="background" />
      </StyledImg>
      <StyledImg mt={23} mr={0} mb={0} ml={20} h={70} w={0}>
        <img src={imgMen} alt="Men holding a tablet" />
      </StyledImg>
      <StyledImg mt={14} mr={0} mb={0} ml={15} h={12} w={0}>
        <img
          src={imgText}
          alt="text Acompanhe suas vendas de um jeito fácil e simples"
        />
      </StyledImg>
      <StyledImg mt={28} mr={0} mb={0} ml={15.1} h={20} w={0}>
        <img src={imgLine} alt="white line" />
      </StyledImg>

      <StyledImg mt={22} mr={0} mb={0} ml={65} h={15} w={0}>
        <img src={imgEllipse} alt="background ellipse" />
      </StyledImg>
      <StyledImg mt={70} mr={0} mb={0} ml={1.5} h={15} w={0}>
        <img src={imgEllipse} alt="background ellipse" />
      </StyledImg>
      <StyledImg mt={26} mr={0} mb={0} ml={70} h={5} w={0}>
        <img src={imgGraphic} alt="illustrative graphic" />
      </StyledImg>
      <StyledImg mt={73.5} mr={0} mb={0} ml={6} h={6} w={0}>
        <img src={imgHands} alt="handshake" />
      </StyledImg>
    </StyledLogin>
  )
}
