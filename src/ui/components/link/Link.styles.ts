import styled from "styled-components";

const Link = styled.a`
  padding: 0 20px;
  font-family: ${({ theme }) => theme.font.family.primary};
  font-size: ${({ theme }) => theme.font.size.xxxxs};
  font-weight: ${({theme}) => theme.font.weight.semiBold};
  line-height: 18px;
  text-transform: uppercase;
  transition: 0.3s;

  &:hover {
    color: ${({ theme }) => theme.color.secondary.dark};
  }
`;

export default { Link };
