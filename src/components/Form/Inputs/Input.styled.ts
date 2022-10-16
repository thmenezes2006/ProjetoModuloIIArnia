import styled from 'styled-components'

export const InputStyled = styled.input<{ color: string }>`
  width: 400px;
  border-radius: 14px;
  border: 1px solid ${({ color }) => `${color}`};
  height: 48px;
  margin-top: 40px;
  padding-left: 10px;
  padding-right: 40px;
  outline: 0;
  .div {
    display: flex;
  }
`
export const LabelStyled = styled.label`
  position: absolute;
  margin-left: 15px;
  font-weight: 400;
  font-size: 14px;
  color: #757575;
  margin-top: 29px;
  padding: 0px 3px;
  z-index: 1;
  background: white;
  border-radius: 20px;
  & ::after {
    p {
      border: 1px solid white;
    }
  }
`
