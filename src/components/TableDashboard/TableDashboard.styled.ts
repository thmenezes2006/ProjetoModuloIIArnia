import styled from 'styled-components'

export const CardTable = styled.div``

export const HeadTable = styled.div`
  display: flex;
  justify-content: space-between;
  border-radius: 15px;
  padding: 20px;
  div {
    display: flex;
    align-items: center;
    font-family: 'Sora', sans-serif;
    font-weight: 600;
    color: #212121;
  }
`
export const BkgIconTable = styled.div<{ color: string }>`
  background: ${({ color }) => `${color}`};
  padding: 10px;
  border-radius: 8px;
  margin-right: 10px;
  display: flex;
`
export const StyledTable = styled.div`
  margin: 0 20px;
  overflow-y: auto;
  height: 35vh;
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
    text-align: center;
    border-collapse: separate;
    border-spacing: 0 5px;
    border: 2px solid transparent;
    border-collapse: collapse;
    border-radius: 15px;
    overflow: hidden;
  }
  td {
    padding: 12px;
    font-size: 14px;
    font-weight: 600;
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
export const ButtonToggle = styled.button<{ bColor: string }>`
  background: ${({ bColor }) => `${bColor}`};
  border: none;
  padding: 5px 15px;
  border-radius: 10px;
  color: white;
  width: 100px;
  cursor: pointer;
`
