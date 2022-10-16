import styled from 'styled-components'

export const CardPredStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 290px;
  box-shadow: 0px 0px 25px rgba(163, 163, 163, 0.2);
  border-radius: 16px;
  padding: 20px;
  background: #ffffff;
`
export const CardHeader = styled.div`
  display: flex;
  gap: 5%;
  margin-bottom: 10px;
`
export const TablePred = styled.div`
  background: #eeeeee;
  border-radius: 16px;
  padding: 10px 0;
  table {
    text-align: justify;
    border-spacing: 10px 10px;
    width: 100%;
  }
  tr {
    font-size: 12px;
    font-weight: 400;
    color: #424242;
    display: flex;
    justify-content: space-between;
    padding: 5px;
  }
  th {
    font-size: 12px;
    font-weight: 400;
    color: #796ce0;
  }
  td {
    text-align: justify;
    font-weight: 400;
  }
`
