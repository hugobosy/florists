import styled from "styled-components";

const Wrapper = styled.div`
  padding: 50px 0;

  ${({ theme }) => theme.media.lg} {
    padding: 150px 0;
  }
`;

const Benefits = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 30px;
  padding-top: 60px;

  ${({ theme }) => theme.media.md} {
    flex-direction: row;
    padding-top: 80px;
  }
`;
export default { Wrapper, Benefits };
