import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  position: relative;
`
export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 170vh;
`

export const SideA = styled.div`
  display: flex;
  align-items: justify;
  flex-direction: column;
`
export const PasswordLoginDiv = styled.div`
  /* background: none; */
  position: relative;
`

export const PasswordLoginButton = styled.div`
  position: relative;
`
export const ShowPasswordButton = styled.button`
  position: absolute;
  border: none;
  top: -35px;
  left: 370px;
  background: none;
  cursor: pointer;
`

export const SideB = styled.div`
  background-color: #001c98;
  width: 110vh;
  height: 100vh;
`
export const Checkbox = styled.div`
  display: flex;
  gap: 3%;
  font-size: 14px;
  width: 200px;
  font-weight: 600;
  align-items: center;
  color: black;
`
export const CheckDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
  font-size: 14px;
  color: #616161;
`
export const SingIn = styled.button`
  width: 400px;
  background: #001c98;
  border-radius: 14px;
  height: 48px;
  color: white;
  border: none;
  margin-top: 30px;
  cursor: pointer;
`
