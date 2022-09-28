import { Button } from '../../components/Form/Button/Button'
import { Input } from '../../components/Form/Inputs/Input'
import { ImgLogin } from '../../components/ImgLogin/ImgLogin'
import { ShowPassword } from '../../components/ShowPassword/ShowPassword'
import { Title } from '../../components/Title/Title'
import {
  Checkbox,
  CheckDiv,
  Container,
  PasswordLoginDiv,
  SideA,
  SideB,
  Wrapper,
} from './Login.styled'

export function Login() {
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
          <Button label="Entrar" />
        </SideA>
      </Wrapper>

      <SideB>
        <ImgLogin />
      </SideB>
    </Container>
  )
}
