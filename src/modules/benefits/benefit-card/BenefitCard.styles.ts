import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  width: 100%;
`;

const Icon = styled.div`
  display: flex;
  justify-content: center;
  color: ${({theme}) => theme.color.secondary.dark}
`;

export default { Wrapper, Icon };