import { ReactNode } from 'react'
import {
  BkgIconTable,
  StyledTable,
  CardTable,
  HeadTable,
} from './TableDashboard.styled'

type HeaderTable = {
  icon: ReactNode
  toggle: ReactNode
  tableTitle: string
  bkg: string
}

export function TableDashboard({ icon, toggle, tableTitle, bkg }: HeaderTable) {
  return (
    <CardTable>
      <HeadTable>
        <div>
          <BkgIconTable color={bkg}>{icon}</BkgIconTable>
          <div>{tableTitle}</div>
        </div>
        <div>{toggle}</div>
      </HeadTable>
      <StyledTable>
        <table>
          <tr>
            <th>Id</th>
            <th>Produto</th>
            <th>Percentual</th>
          </tr>
          <tr>
            <td>1</td>
            <td>Exemplo</td>
            <td>ex%</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Exemplo2</td>
            <td>ex2%</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Exemplo3</td>
            <td>ex3%</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Exemplo3</td>
            <td>ex3%</td>
          </tr>
          <tr>
            <td>5</td>
            <td>Exemplo3</td>
            <td>ex3%</td>
          </tr>
          <tr>
            <td>6</td>
            <td>Exemplo3</td>
            <td>ex3%</td>
          </tr>
        </table>
      </StyledTable>
    </CardTable>
  )
}
