import styled from "styled-components";

const Wrapper = styled.div`
  padding: 70px 0;
  background-color: ${({ theme }) => theme.color.secondary.light};
  
  ${({theme}) => theme.media.md} {
    padding: 150px 0 100px;
  }
`;

export default { Wrapper }