import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  padding: 50px 0;
  
  ${({theme}) => theme.media.md} {
    padding: 150px 0;
  }
`;

export default { Wrapper };