import { useEffect, useState } from 'react'
import { IconSearch } from '../../assets/icons/components/IconSearch'
import { CardPred } from '../../components/CardPred/CardPred'
import { getPredicao } from '../../services/gets/predicao/getPredicao'
import { DivSearch, PredicoesContent, PredicoesTable } from './Predicoes.styled'

type PredicaoType = {
  id: number
  nome: string
  produtos: {
    id: number
    nome: string
    proximaCompra: string
  }[]
}[]

export function Predicoes() {
  const [predicao, setPredicao] = useState<PredicaoType>([])

  useEffect(() => {
    ;(async () => {
      const result = await getPredicao()
      if (result.message) {
        alert(result.message)
      } else {
        setPredicao(result.content)
      }
    })()
  }, [])

  return (
    <PredicoesContent>
      <h4>Predições</h4>
      <DivSearch>
        <input type="text" placeholder="Pesquise uma palavra-chave" />
        <button type="button">
          <IconSearch />
        </button>
      </DivSearch>
      <div>
        <PredicoesTable>
          {predicao.map(item => (
            <div>
              <CardPred
                dadosDistribuidor={<h5>{item.nome}</h5>}
                dadosProdutos={item.produtos.map(subItem => (
                  <tr>
                    <td>{subItem.nome}</td>
                    <td>{subItem.proximaCompra}</td>
                  </tr>
                ))}
              />
            </div>
          ))}
        </PredicoesTable>
      </div>
    </PredicoesContent>
  )
}

/* <h3>{nomeDistribuidor}</h3>
<h6>{statusDistribuidor}</h6> 
<tr>
<td>{produto}</td>
<td>{dataCompra}</td>
</tr> */
