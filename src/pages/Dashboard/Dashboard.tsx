import { useEffect, useState } from 'react'
import { IconPeoples } from '../../assets/icons/IconPeoples'
import { IconProduct } from '../../assets/icons/components/IconsSideMenu/IconProduct'
import { CardDash } from '../../components/CardDash/CardDash'
import { TableDashboard } from '../../components/TableDashboard/TableDashboard'
import {
  ContentDash,
  DivDash,
  BodyStyled,
  TopDash,
  TableDiv,
  DivCardDash,
} from './Dashboard.styled'
import { IconCalendar } from '../../assets/icons/IconCalendar'
import { getProductsDash } from '../../services/gets/dashboard/getProductsDash'
import { getClientsDash } from '../../services/gets/dashboard/getClientsDash'
import { getResumeDash } from '../../services/gets/dashboard/getResumeDash'

type ProductType = {
  id: number
  nome: string
  percentual: number
}[]

type ResumeType = {
  percentualTotalProdutosAlta: number
  percentualVariacaoProdutosAlta: number
  quantidadeProdutosAlta: number
  percentualTotalProdutosBaixa: number
  percentualVariacaoProdutosBaixa: number
  quantidadeProdutosBaixa: number
  percentualTotalClientesAlta: number
  percentualVariacaoClientesAlta: number
  quantidadeClientesAlta: number
  percentualTotalClientesBaixa: number
  percentualVariacaoClientesBaixa: number
  quantidadeClientesBaixa: number
}

export function Dashboard() {
  const [productsDash, setProductsDash] = useState<ProductType>([])
  const [clients, setClients] = useState<ProductType>([])
  const [resume, setResume] = useState<ResumeType>()

  const [statusProd, setStatusProdutos] = useState<boolean>(true)
  const [statusClie, setStatusClientes] = useState<boolean>(true)
  const [statusPredProdutos, setStatusPredProdutos] = useState('EM_ALTA')
  const [statusPredClientes, setStatusPredClientes] = useState('EM_ALTA')

  const isStatusProdutos = () => {
    if (statusProd === true) {
      setStatusProdutos(false)
      setStatusPredProdutos('EM_BAIXA')
    } else {
      setStatusProdutos(true)
      setStatusPredProdutos('EM_ALTA')
    }
  }

  const isStatusClientes = () => {
    if (statusClie === true) {
      setStatusClientes(false)
      setStatusPredClientes('EM_BAIXA')
    } else {
      setStatusClientes(true)
      setStatusPredClientes('EM_ALTA')
    }
  }
  const statusProdutos = statusPredProdutos
  const statusClientes = statusPredClientes
  const dateInicial = '15/09/2022'

  useEffect(() => {
    ;(async () => {
      const result = await getProductsDash({ statusProdutos, dateInicial })
      if (result.message) {
        alert(result.message)
      } else {
        setProductsDash(result)
      }
    })()
  }, [statusPredProdutos])

  useEffect(() => {
    ;(async () => {
      const result = await getClientsDash({ statusClientes, dateInicial })
      if (result.message) {
        alert(result.message)
      } else {
        setClients(result)
      }
    })()
  }, [statusPredClientes])

  useEffect(() => {
    ;(async () => {
      const result = await getResumeDash()
      if (result.message) {
        alert(result.message)
      } else {
        setResume(result)
      }
    })()
  }, [])

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
            radial={resume?.percentualTotalProdutosAlta || 0}
            total={resume?.quantidadeProdutosAlta || 0}
            variacaoTotal={resume?.percentualVariacaoProdutosAlta || 0}
            bColor="#00C247"
          />
          <CardDash
            text="Total de Produtos em baixa"
            radial={resume?.percentualTotalProdutosBaixa || 0}
            total={resume?.quantidadeProdutosBaixa || 0}
            variacaoTotal={resume?.percentualVariacaoProdutosBaixa || 0}
            bColor="#FF3333"
          />
          <CardDash
            text="Total de Clientes em alta"
            radial={resume?.percentualTotalClientesAlta || 0}
            total={resume?.quantidadeClientesAlta || 0}
            variacaoTotal={resume?.percentualVariacaoClientesAlta || 0}
            bColor="#00C247"
          />
          <CardDash
            text="Total de Clientes em baixa"
            radial={resume?.percentualTotalClientesBaixa || 0}
            total={resume?.quantidadeClientesBaixa || 0}
            variacaoTotal={resume?.percentualVariacaoClientesBaixa || 0}
            bColor="#FF3333"
          />
        </DivCardDash>
      </TopDash>

      <BodyStyled>
        <TableDiv>
          <TableDashboard
            headerTable={
              <tr>
                <th>ID</th>
                <th>Produtos</th>
                <th>Porcentagem</th>
              </tr>
            }
            bodyTable={productsDash.map(item => (
              <tr>
                <td>{item.id}</td>
                <td>{item.nome}</td>
                <td>{item.percentual}%</td>
              </tr>
            ))}
            bkg="#C5CFFF"
            icon={<IconProduct h="20" w="20" c="#001c98" />}
            tableTitle="Produtos"
            toggle={() => isStatusProdutos()}
            clickStatus={
              statusPredProdutos === 'EM_ALTA' ? 'Em Alta' : 'Em Baixa'
            }
            bColor={statusPredProdutos === 'EM_ALTA' ? '#00C247' : '#FF3333'}
          />
        </TableDiv>
        <TableDiv>
          <TableDashboard
            headerTable={
              <tr>
                <th>ID</th>
                <th>Clientes</th>
                <th>Porcentagem</th>
              </tr>
            }
            bodyTable={clients.map(item => (
              <tr>
                <td>{item.id}</td>
                <td>{item.nome}</td>
                <td>{item.percentual}%</td>
              </tr>
            ))}
            bkg="#001c98"
            icon={<IconPeoples w="20" h="20" c="white" />}
            tableTitle="Clientes"
            toggle={() => isStatusClientes()}
            clickStatus={
              statusPredClientes === 'EM_ALTA' ? 'Em Alta' : 'Em Baixa'
            }
            bColor={statusPredClientes === 'EM_ALTA' ? '#00C247' : '#FF3333'}
          />
        </TableDiv>
      </BodyStyled>
    </ContentDash>
  )
}
