import { useEffect, useState } from 'react'
import { IconSearch } from '../../assets/icons/components/IconSearch'
import { IconFilter } from '../../assets/icons/IconFilter'
import { TableProducts } from '../../components/TableProducts/TableProducts'
import { StyledTable } from '../../components/TableProducts/TableProducts.styled'
import { getProducts } from '../../services/gets/getProducts'
import {
  DivSearch,
  ButtonFilter,
  ProductsContent,
  ButtonSearch,
} from './Produtos.styled'

type ProductType = {
  id: number
  nome: string
  classificacao: string
  percentual: number
}[]

export function Produtos() {
  const [products, setProducts] = useState<ProductType>([])

  useEffect(() => {
    ;(async () => {
      const result = await getProducts()
      if (result.message) {
        alert(result.message)
      } else {
        setProducts(result.content)
      }
    })()
  }, [])

  return (
    <ProductsContent>
      <h4>Produtos</h4>
      <DivSearch>
        <input type="text" placeholder="Pesquise uma palavra-chave" />
        <ButtonSearch type="button">
          <IconSearch />
        </ButtonSearch>
        <ButtonFilter type="button">
          <IconFilter />
        </ButtonFilter>
        <StyledTable>
          <TableProducts
            headerTable={
              <tr>
                <th>ID</th>
                <th>Produtos</th>
                <th>Status</th>
                <th>Porcentagem</th>
              </tr>
            }
            bodyTable={products.map(item => (
              <tr>
                <td>{item.id}</td>
                <td>{item.nome}</td>
                <td>{item.classificacao}</td>
                <td>{item.percentual}%</td>
              </tr>
            ))}
          />
        </StyledTable>
      </DivSearch>
    </ProductsContent>
  )
}
