import styled from 'styled-components'

export const ContentDash = styled.div`
  justify-content: center;
  margin: 20px;
`
export const TopDash = styled.div<{ bColor: string }>`
  background: ${({ bColor }) => `${bColor}`};
  width: 100%;
  height: 220px;
  border-radius: 15px;
  margin-bottom: 20px;
`
export const DivDash = styled.div`
  font-family: 'Sora', sans-serif;
  font-weight: 600;
  font-size: 28px;
  padding: 30px;
  color: white;
  display: flex;
  justify-content: space-between;
  button {
    align-items: center;
    display: flex;
    padding: 5px 10px;
    border-radius: 10px;
    border: none;
    p {
      padding: 0 5px;
      color: #424242;
      font-size: 15px;
      font-weight: 400;
    }
    select {
      font-family: 'Poppins', sans-serif;
      font-size: 15px;
      font-weight: 600;
      color: #001c98;
      border: none;
      background: none;
    }
  }
`
export const Select = styled.select`
  background-color: white;
  padding: 0 10px;
  border-radius: 5px;
  border: none;
`
export const BodyStyled = styled.div`
  display: flex;
  gap: 20px;
`
export const TableDiv = styled.div`
  width: 100%;
  box-shadow: 0px 7px 30px rgba(187, 192, 205, 0.4);
  border-radius: 24px;
`

export const DivCardDash = styled.div`
  display: flex;
  justify-content: space-evenly;
`
