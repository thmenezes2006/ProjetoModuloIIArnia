import styled from 'styled-components'

export const LogoDivStyled = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 30px 0px;
`
export const DivMenuStyled = styled.div`
  & :hover {
    background: #1f369c;
    border-radius: 8px;
    cursor: pointer;
  }
`
export const SideLeftStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`

export const ButtonMenu = styled.div`
  display: flex;
  align-items: center;
  margin: 0px 7px;
  padding-left: 20px;
  margin: 10px 5px;
`

export const ButtonStyled = styled.button`
  display: flex;
  gap: 20px;
  padding: 10px;

  font-size: 14px;
  font-weight: 300;
  background: rgba(241, 240, 255, 0);
  color: white;
  border-color: rgba(241, 240, 255, 0);

  width: 94%;
`
export const HelpStyled = styled.div`
  display: flex;
  background: #6959cd;
  height: 140px;
  border-radius: 15px;
  width: 150px;
  margin: 0px 15px;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
`
export const HandsStyled = styled.img`
  display: flex;
  margin-top: -75px;
  margin-bottom: -40px;
  width: 130px;
`
export const P = styled.div`
  display: flex;
  width: 120px;
`
export const ButtonHelpStyled = styled.button`
  display: flex;
  align-items: center;
  background: #001c98;
  border-radius: 30px;
  border: none;
  color: #fff;
  padding: 10px 30px;
  margin-top: -5px;
  font-size: 11px;
  cursor: pointer;
`
