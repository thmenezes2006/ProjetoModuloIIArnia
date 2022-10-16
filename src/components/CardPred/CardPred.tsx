import { ReactNode } from 'react'
import { IconUser } from '../../assets/icons/IconUser'
import { IconUserStyled } from '../TopBar/TopBar.styled'
import { CardHeader, CardPredStyled, TablePred } from './CardPred.styled'

type CardPredProps = {
  dadosDistribuidor: ReactNode
  dadosProdutos: ReactNode
}

export function CardPred({ dadosDistribuidor, dadosProdutos }: CardPredProps) {
  return (
    <CardPredStyled>
      <CardHeader>
        <IconUserStyled bColor="#C5CFFF">
          <IconUser color="#001C98" size="20" />
        </IconUserStyled>
        <div>{dadosDistribuidor}</div>
      </CardHeader>
      <TablePred>
        <table>
          <tr>
            <th>Produto</th>
            <th>Próx. Compra</th>
          </tr>
          {dadosProdutos}
        </table>
      </TablePred>
    </CardPredStyled>
  )
}
