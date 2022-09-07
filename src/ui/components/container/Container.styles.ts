import styled from "styled-components";

const Container = styled.div`
  max-width: 1600px;
  margin: 0 auto;

  ${({ theme }) => theme.media.xs} {
    padding: 0 20px;
  }

  ${({ theme }) => theme.media.md} {
    padding: 0 40px;
  }
`;

export default { Container };