import styled from "styled-components";

const Burger = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 5px;
  width: 50px;
  height: 50px;
  padding: 10px;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.color.secondary.dark};
  cursor: pointer;
  z-index: 99;
  
  hr {
    border-radius: 2px;
    border: none;
    width: 100%;
    height: 4px;
    background-color: #fff;
  }
`;

export default { Burger };