import { ReactNode } from 'react'

type HeaderTable = {
  headerTable: ReactNode
  bodyTable: ReactNode
}

export function TableProducts({ headerTable, bodyTable }: HeaderTable) {
  return (
    <div>
      <table>
        {headerTable}
        {bodyTable}
      </table>
    </div>
  )
}
