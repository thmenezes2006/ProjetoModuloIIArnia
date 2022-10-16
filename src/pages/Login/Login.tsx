import { useState } from 'react'
import { IconClosedEye } from '../../assets/icons/components/IconsLogin/IconClosedEye'
import { IconEye } from '../../assets/icons/components/IconsLogin/IconEye'
import { Input } from '../../components/Form/Inputs/Input'
import { ImgLogin } from '../../components/ImgLogin/ImgLogin'
import { Title } from '../../components/Title/Title'
import { authLogin } from '../../services/Auth/Auth'
import {
  Checkbox,
  CheckDiv,
  Container,
  PasswordLoginButton,
  ShowPasswordButton,
  SideA,
  SideB,
  SingIn,
  Wrapper,
} from './Login.styled'

export function Login() {
  const [email, setEmail] = useState('')
  const [type, setType] = useState('password')
  const [icon, setIcon] = useState(IconClosedEye)
  const [password, setPassword] = useState('')

  const isShowing = () => {
    if (type === 'password') {
      setIcon(IconEye)
      setType('text')
    } else {
      setIcon(IconClosedEye)
      setType('password')
    }
  }

  const doLogin = async () => {
    const postLogin = await authLogin(email, password)
    if (postLogin.logged) {
      window.location.href = '/'
      return
    }
    alert(postLogin.message)
  }

  return (
    <Container>
      <Wrapper>
        <SideA>
          <Title subtitle="Realize seu Login" title="Seja Bem Vindo!" />
          <div>
            <Input
              label="E-mail"
              onChange={event => setEmail(event.target.value)}
              value={email}
              borderColor={email.length < 12 ? '#e0e0e0' : '#00C247'}
              type="email"
              placeholder="exemplo@exemplo.com"
            />
          </div>
          <div>
            <Input
              onChange={event => setPassword(event.target.value)}
              label="Senha"
              value={password}
              borderColor={password.length < 6 ? '#e0e0e0' : '#00C247'}
              type={type}
              placeholder="Insira sua senha"
            />
            <PasswordLoginButton>
              <ShowPasswordButton onClick={() => isShowing()} type="button">
                {icon}
              </ShowPasswordButton>
            </PasswordLoginButton>
          </div>
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
