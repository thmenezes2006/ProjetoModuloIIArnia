// import { ReactNode } from 'react'
import { RadialBar } from '../RadialChart/RadialBar'
import { MiniCardDash, RadialStyled } from './CardDash.styled'

type CardDashProp = {
  text: string
  radial: number
  total: number
  variacaoTotal: string
}
export function CardDash({ text, radial, total, variacaoTotal }: CardDashProp) {
  return (
    <div>
      <MiniCardDash>
        <RadialStyled>
          <div>
            <RadialBar radialPercentage={radial} />
          </div>
          <div>
            <p>{text}</p>
            <div>{total}</div>
            <div>{variacaoTotal}</div>
          </div>
        </RadialStyled>
      </MiniCardDash>
    </div>
  )
}
