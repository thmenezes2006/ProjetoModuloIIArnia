import styled from 'styled-components'

export const ProductsContent = styled.div`
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
`
export const ButtonSearch = styled.button`
  position: absolute;
  left: 500px;
  margin-top: 12px;
  font-size: 5px;
  border: none;
  background: none;
`
export const ButtonFilter = styled.button`
  background: #f5f5f5;
  border: none;
  border-radius: 10px;
  padding: 10px;
  position: absolute;
  left: 550px;
  cursor: pointer;
`
