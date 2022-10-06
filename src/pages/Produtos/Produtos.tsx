import { IconSearch } from '../../assets/icons/components/IconSearch'
import { IconFilter } from '../../assets/icons/IconFilter'
import { TableProducts } from '../../components/TableProducts/TableProducts'
import { StyledTable } from '../../components/TableProducts/TableProducts.styled'
import {
  DivSearch,
  ButtonFilter,
  ProductsContent,
  ButtonSearch,
} from './Produtos.styled'

export function Produtos() {
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
          <TableProducts />
        </StyledTable>
      </DivSearch>
    </ProductsContent>
  )
}
