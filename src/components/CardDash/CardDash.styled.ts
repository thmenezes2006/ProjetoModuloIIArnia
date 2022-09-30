import styled from 'styled-components'

export const MiniCardDash = styled.div<{ bColor: string }>`
  display: block;
  background: ${({ bColor }) => `${bColor}`};
  border-radius: 20px;
  width: 100%;
  height: 80%;
`

export const RadialStyled = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
  font-weight: 300;
  color: white;
  padding: 10px 20px 30px 0px;
  gap: 5px;
`

export const CardBodyStyled = styled.div<{ bColor: string }>`
  display: flex;
  font-family: 'Sora', sans-serif;
  gap: 10%;
  margin-top: 10px;
  h3 {
    font-size: 30px;
    font-weight: 600;
  }
  h5 {
    font-size: 11px;
    font-weight: 400;
    margin: 12px 0;
    background: ${({ bColor }) => `${bColor}`};
    border-radius: 10px;
    padding: 3px 8px;
  }
`
