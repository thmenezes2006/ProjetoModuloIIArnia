// import { ReactNode } from 'react'
import { RadialBar } from '../RadialChart/RadialBar'
import { CardBodyStyled, MiniCardDash, RadialStyled } from './CardDash.styled'

type CardDashProp = {
  text: string
  radial: number
  total: number
  variacaoTotal: number
  bColor: string
}
export function CardDash({
  text,
  radial,
  total,
  variacaoTotal,
  bColor,
}: CardDashProp) {
  return (
    <div>
      <MiniCardDash bColor=" #02156A">
        <RadialStyled>
          <div>
            <RadialBar radialPercentage={radial} />
          </div>
          <div>
            <p>{text}</p>
            <CardBodyStyled bColor={bColor}>
              <h3>{total}</h3>
              <h5>{variacaoTotal}</h5>
            </CardBodyStyled>
          </div>
        </RadialStyled>
      </MiniCardDash>
    </div>
  )
}
