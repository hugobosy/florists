import styled from "styled-components";

const Wrapper = styled.div`
  padding: 20px 0;
  background-color: ${({ theme }) => theme.color.secondary.dark};
`;

const Statistic = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px 0;
  gap: 40px;

  ${({ theme }) => theme.media.md} {
    flex-direction: row;
    justify-content: space-around;
  }`;

export default { Wrapper, Statistic };
