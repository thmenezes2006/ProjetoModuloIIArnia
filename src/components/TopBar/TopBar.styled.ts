import styled from 'styled-components'

export const Body = styled.div`
  display: flex;
  margin: 0 30px;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  button {
    gap: 10%;
    align-items: center;
    display: flex;
    background: none;
    border: none;
    cursor: pointer;
    div {
      justify-content: center;
    }
  }
`
export const IconUserStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  background: #001c98;
  border-radius: 45px;
`

export const UserDataStyled = styled.div`
  width: 100%;
  h5 {
    font-family: 'Sora', sans-serif;
    font-size: 16px;
    font-weight: 600;
  }
  h6 {
    font-family: 'Poppins', sans-serif;
    font-size: 12px;
    font-weight: 400;
    color: #757575;
  }
`

export const UserStyled = styled.div`
  display: flex;
  width: 250px;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
`
