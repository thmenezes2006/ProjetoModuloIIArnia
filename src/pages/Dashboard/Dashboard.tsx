import { IconPeoples } from '../../assets/icons/components/IconPeoples'
import { IconProduct } from '../../assets/icons/components/IconsSideMenu/product'
import { TableContent } from '../../components/TableContent/TableContent'
import { Toggle } from '../../components/Toggle/Toggle'
import {
  ContentDash,
  DivDash,
  Select,
  BodyStyled,
  TopDash,
  TableDiv,
} from './Dashboard.styled'

export function Dashboard() {
  return (
    <ContentDash>
      <TopDash>
        <DivDash>
          <h4>Dashboard</h4>
          <Select>
            <option>Mostrar: Esse Mês</option>
          </Select>
        </DivDash>
      </TopDash>

      <BodyStyled>
        <TableDiv>
          <TableContent
            bkg="#C5CFFF"
            icon={<IconProduct h="20" w="20" c="#001c98" />}
            tableTitle="Produtos"
            toggle={Toggle()}
          />
        </TableDiv>
        <TableDiv>
          <TableContent
            bkg="#001c98"
            icon={<IconPeoples w="20" h="20" c="white" />}
            tableTitle="Clientes"
            toggle={Toggle()}
          />
        </TableDiv>
      </BodyStyled>
    </ContentDash>
  )
}
