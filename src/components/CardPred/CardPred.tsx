import { IconUser } from '../../assets/icons/IconUser'
import { IconUserStyled } from '../TopBar/TopBar.styled'
import { CardHeader, CardPredStyled, TablePred } from './CardPred.styled'

type CardPredProps = {
  nomeDistribuidor: string
  statusDistribuidor: string
  produto: string
  dataCompra: string
}

export function CardPred({
  nomeDistribuidor,
  statusDistribuidor,
  produto,
  dataCompra,
}: CardPredProps) {
  return (
    <CardPredStyled>
      <CardHeader>
        <IconUserStyled bColor="#C5CFFF">
          <IconUser color="#001C98" size="22" />
        </IconUserStyled>
        <div>
          <h3>{nomeDistribuidor}</h3>
          <h6>{statusDistribuidor}</h6>
        </div>
      </CardHeader>
      <TablePred>
        <table>
          <tr>
            <th>Produto</th>
            <th>Próx. Compra</th>
          </tr>
          <tr>
            <td>{produto}</td>
            <td>{dataCompra}</td>
          </tr>
        </table>
      </TablePred>
    </CardPredStyled>
  )
}
