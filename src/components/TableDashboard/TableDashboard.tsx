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
  headerTable: ReactNode
  bodyTable: ReactNode
}

export function TableDashboard({
  icon,
  toggle,
  tableTitle,
  bkg,
  headerTable,
  bodyTable,
}: HeaderTable) {
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
          {headerTable}
          {bodyTable}
        </table>
      </StyledTable>
    </CardTable>
  )
}
