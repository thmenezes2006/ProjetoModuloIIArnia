import { IconPeoples } from '../../assets/icons/IconPeoples'
import { IconProduct } from '../../assets/icons/components/IconsSideMenu/IconProduct'
import { CardDash } from '../../components/CardDash/CardDash'
import { TableContent } from '../../components/TableContent/TableContent'
import { Toggle } from '../../components/Toggle/Toggle'
import {
  ContentDash,
  DivDash,
  BodyStyled,
  TopDash,
  TableDiv,
  DivCardDash,
} from './Dashboard.styled'
import { IconCalendar } from '../../assets/icons/IconCalendar'

export function Dashboard() {
  return (
    <ContentDash>
      <TopDash bColor="#001C98">
        <DivDash>
          <h4>Dashboard</h4>
          <button type="button">
            <IconCalendar />
            <p>Mostrar:</p>
            <select>
              <option>Esse Mês</option>
              <option>60 Dias</option>
              <option>90 Dias</option>
              <option>120 Dias</option>
            </select>
          </button>
        </DivDash>
        <DivCardDash>
          <CardDash
            text="Total de Produtos em alta"
            radial={45}
            total={120}
            variacaoTotal="+13%"
            bColor="#00C247"
          />
          <CardDash
            text="Total de Produtos em baixa"
            radial={68}
            total={56}
            variacaoTotal="-29%"
            bColor="#FF3333"
          />
          <CardDash
            text="Total de Clientes em alta"
            radial={5}
            total={501}
            variacaoTotal="+25%"
            bColor="#00C247"
          />
          <CardDash
            text="Total de Clientes em baixa"
            radial={27}
            total={103}
            variacaoTotal="-15%"
            bColor="#FF3333"
          />
        </DivCardDash>
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
