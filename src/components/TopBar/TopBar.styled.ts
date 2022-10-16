import styled from 'styled-components'

export const Body = styled.div`
  display: flex;
  margin: 0 30px;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
`
export const IconUserStyled = styled.div<{ bColor: string }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 12px;
  height: auto;
  background: ${({ bColor }) => `${bColor}`};
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
export const ButtonChevron = styled.button`
  gap: 10%;
  align-items: center;
  display: flex;
  background: none;
  border: none;
  cursor: pointer;
`
export const Logout = styled.div<{ display: string }>`
  display: ${({ display }) => `${display}`};
  position: absolute;
  top: 60px;
  right: 35px;
  padding: 10px 0;
  flex-direction: column;
  background: white;
  border-radius: 15px 0px 15px 15px;
  box-shadow: 0px 7px 30px rgba(187, 192, 205, 0.4);
  & :hover {
    background: #c5cfff;
    border-radius: 5px;
  }
`
export const ButtonLogout = styled.button`
  display: flex;
  padding: 10px 20px;
  background: transparent;
  gap: 10px;
  align-items: center;
  border: none;
  cursor: pointer;
`
