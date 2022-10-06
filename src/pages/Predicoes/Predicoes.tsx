import { IconSearch } from '../../assets/icons/components/IconSearch'
import { CardPred } from '../../components/CardPred/CardPred'
import { DivSearch, PredicoesContent, PredicoesTable } from './Predicoes.styled'

export function Predicoes() {
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
          <div>
            <CardPred
              nomeDistribuidor="distribuidor"
              statusDistribuidor="Em Alta"
              produto="papel higienico"
              dataCompra="02/09/2022"
            />
          </div>
          <div>
            <CardPred
              nomeDistribuidor="distribuidor2"
              statusDistribuidor="Em Alta"
              produto="alcool em gel"
              dataCompra="05/09/2022"
            />
          </div>
          <div>
            <CardPred
              nomeDistribuidor="distribuidor3"
              statusDistribuidor="Em Baixa"
              produto="agua sanitária"
              dataCompra="10/09/2022"
            />
          </div>
          <div>
            <CardPred
              nomeDistribuidor="distribuidor4"
              statusDistribuidor="Em Baixa"
              produto="papel higienico"
              dataCompra="02/09/2022"
            />
          </div>
          <div>
            <CardPred
              nomeDistribuidor="distribuidor5"
              statusDistribuidor="Em Alta"
              produto="papel higienico"
              dataCompra="02/09/2022"
            />
          </div>
          <div>
            <CardPred
              nomeDistribuidor="distribuidor"
              statusDistribuidor="Em Alta"
              produto="papel higienico"
              dataCompra="02/09/2022"
            />
          </div>
          <div>
            <CardPred
              nomeDistribuidor="distribuidor2"
              statusDistribuidor="Em Alta"
              produto="alcool em gel"
              dataCompra="05/09/2022"
            />
          </div>
          <div>
            <CardPred
              nomeDistribuidor="distribuidor3"
              statusDistribuidor="Em Baixa"
              produto="agua sanitária"
              dataCompra="10/09/2022"
            />
          </div>
          <div>
            <CardPred
              nomeDistribuidor="distribuidor4"
              statusDistribuidor="Em Baixa"
              produto="papel higienico"
              dataCompra="02/09/2022"
            />
          </div>
          <div>
            <CardPred
              nomeDistribuidor="distribuidor5"
              statusDistribuidor="Em Alta"
              produto="papel higienico"
              dataCompra="02/09/2022"
            />
          </div>
          <div>
            <CardPred
              nomeDistribuidor="distribuidor"
              statusDistribuidor="Em Alta"
              produto="papel higienico"
              dataCompra="02/09/2022"
            />
          </div>
          <div>
            <CardPred
              nomeDistribuidor="distribuidor2"
              statusDistribuidor="Em Alta"
              produto="alcool em gel"
              dataCompra="05/09/2022"
            />
          </div>
          <div>
            <CardPred
              nomeDistribuidor="distribuidor3"
              statusDistribuidor="Em Baixa"
              produto="agua sanitária"
              dataCompra="10/09/2022"
            />
          </div>
          <div>
            <CardPred
              nomeDistribuidor="distribuidor4"
              statusDistribuidor="Em Baixa"
              produto="papel higienico"
              dataCompra="02/09/2022"
            />
          </div>
          <div>
            <CardPred
              nomeDistribuidor="distribuidor5"
              statusDistribuidor="Em Alta"
              produto="papel higienico"
              dataCompra="02/09/2022"
            />
          </div>
          <div>
            <CardPred
              nomeDistribuidor="distribuidor"
              statusDistribuidor="Em Alta"
              produto="papel higienico"
              dataCompra="02/09/2022"
            />
          </div>
          <div>
            <CardPred
              nomeDistribuidor="distribuidor2"
              statusDistribuidor="Em Alta"
              produto="alcool em gel"
              dataCompra="05/09/2022"
            />
          </div>
          <div>
            <CardPred
              nomeDistribuidor="distribuidor3"
              statusDistribuidor="Em Baixa"
              produto="agua sanitária"
              dataCompra="10/09/2022"
            />
          </div>
          <div>
            <CardPred
              nomeDistribuidor="distribuidor4"
              statusDistribuidor="Em Baixa"
              produto="papel higienico"
              dataCompra="02/09/2022"
            />
          </div>
          <div>
            <CardPred
              nomeDistribuidor="distribuidor5"
              statusDistribuidor="Em Alta"
              produto="papel higienico"
              dataCompra="02/09/2022"
            />
          </div>
        </PredicoesTable>
      </div>
    </PredicoesContent>
  )
}
