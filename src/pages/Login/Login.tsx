// import { useNavigate } from 'react-router-dom'

import { Input } from '../../components/Form/Inputs/Input'
import { ImgLogin } from '../../components/ImgLogin/ImgLogin'
import { ShowPassword } from '../../components/ShowPassword/ShowPassword'
import { Title } from '../../components/Title/Title'
import { authLogin } from '../../services/Auth/Auth'
import {
  Checkbox,
  CheckDiv,
  Container,
  PasswordLoginDiv,
  SideA,
  SideB,
  SingIn,
  Wrapper,
} from './Login.styled'

export function Login() {
  // const navigate = useNavigate()
  const doLogin = () => {
    const postLogin = await authLogin(email, password)
  }

  return (
    <Container>
      <Wrapper>
        <SideA>
          <Title subtitle="Realize seu Login" title="Seja Bem Vindo!" />
          <div>
            <Input
              label="E-mail"
              type="email"
              placeholder="exemplo@exemplo.com"
            />
          </div>
          <PasswordLoginDiv>
            <ShowPassword />
          </PasswordLoginDiv>
          <CheckDiv>
            <Checkbox>
              <input type="checkbox" />
              <p>Lembrar-me</p>
            </Checkbox>
            <p>Esqueci minha senha</p>
          </CheckDiv>
          <SingIn type="button" onClick={doLogin}>
            Entrar
          </SingIn>
        </SideA>
      </Wrapper>

      <SideB>
        <ImgLogin />
      </SideB>
    </Container>
  )
}
