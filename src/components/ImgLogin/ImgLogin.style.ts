import styled from 'styled-components'

export const StyledLogin = styled.div`
  display: flex;
  position: relative;
`

export const StyledImg = styled.div<{
  mt: number
  mr: number
  mb: number
  ml: number
  h: number
  w: number
}>`
  display: flex;
  position: absolute;
  margin-top: ${({ mt }) => `${mt}vh`};
  margin-right: ${({ mr }) => `${mr}vh`};
  margin-bottom: ${({ mb }) => `${mb}vh`};
  margin-left: ${({ ml }) => `${ml}vh`};
  height: ${({ h }) => `${h}vh`};
  width: ${({ w }) => `${w}vh`};
`
