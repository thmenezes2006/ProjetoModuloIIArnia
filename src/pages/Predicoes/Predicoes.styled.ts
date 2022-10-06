import styled from 'styled-components'

export const PredicoesContent = styled.div`
  margin: 30px;
  h4 {
    font-family: 'Sora', sans-serif;
    font-size: 30px;
    font-weight: 600;
  }
`
export const DivSearch = styled.div`
  box-shadow: 0px 0px 25px rgba(163, 163, 163, 0.2);
  padding: 20px;
  margin: 30px 0;
  background: #ffffff;
  border-radius: 20px;
  input {
    position: relative;
    padding: 12px 35px 12px 10px;
    width: 300px;
    border-radius: 10px;
    border: 0.5px solid #e0e0e0;
  }
  button {
    position: absolute;
    left: 500px;
    margin-top: 12px;
    font-size: 5px;
    border: none;
    background: none;
  }
`
export const PredicoesTable = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 60vh;
  gap: 20px;
  overflow-y: auto;
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
`
