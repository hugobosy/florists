import styled from "styled-components";

const Wrapper = styled.div `
  display: flex;
  align-items: center;
  gap: 30px;
`

const Logo = styled.img`
  width: 100px;
 filter: drop-shadow(0 0 .01em ${({theme}) => theme.color.secondary.dark});
`;

export default { Logo, Wrapper };
