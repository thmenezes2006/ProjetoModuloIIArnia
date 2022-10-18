import styled from 'styled-components'

export const StyledTable = styled.div`
  margin: 40px 20px;
  align-items: center;
  overflow-y: auto;
  height: 52vh;
  ::-webkit-scrollbar {
    width: 10px;
    margin: 5px;
  }
  ::-webkit-scrollbar-track {
    background: #c5cfff;
    border-radius: 10px;
    margin: 10px 0;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #02156a;
    border-radius: 10px;
  }
  table {
    width: 100%;
    border-collapse: separate;
    border-spacing: 0 5px;
    border: 2px solid transparent;
    border-spacing: 10px 10px;
    border-collapse: collapse;
    border-radius: 15px;
    overflow: hidden;
  }
  td {
    padding: 12px;
    font-size: 14px;
    font-weight: 600;
    text-align: center;
  }
  th {
    color: #c5cfff;
    background: #001c98;
    padding: 12px;
    font-size: 14px;
    font-weight: 600;
  }
  tr:nth-child(odd) {
    background-color: #f5f5f5;
  }
  tr:nth-child(even) {
    background-color: #fafafa;
  }
`
