import { MouseEventHandler, ReactNode } from 'react'
import {
  BkgIconTable,
  StyledTable,
  CardTable,
  HeadTable,
  ButtonToggle,
} from './TableDashboard.styled'

type HeaderTable = {
  icon: ReactNode
  toggle: MouseEventHandler<HTMLButtonElement>
  tableTitle: string
  bkg: string
  headerTable: ReactNode
  bodyTable: ReactNode
  clickStatus: string
  bColor: string
}

export function TableDashboard({
  icon,
  toggle,
  tableTitle,
  bkg,
  headerTable,
  bodyTable,
  clickStatus,
  bColor,
}: HeaderTable) {
  return (
    <CardTable>
      <HeadTable>
        <div>
          <BkgIconTable color={bkg}>{icon}</BkgIconTable>
          <div>{tableTitle}</div>
        </div>
        <ButtonToggle type="button" bColor={bColor} onClick={toggle}>
          {clickStatus}
        </ButtonToggle>
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
