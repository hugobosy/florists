import styled from "styled-components";

const Wrapper = styled.div`
  padding: 50px 0;
  background-color: ${({ theme }) => theme.color.secondary.light};
  
  ${({theme}) => theme.media.md} {
    padding: 100px 0;
  }
`;

const PricingWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  
  ${({theme}) => theme.media.lg} {
    grid-template-columns: repeat(3, 1fr);
    gap: 40px;
  }
`

export default { Wrapper, PricingWrapper }
