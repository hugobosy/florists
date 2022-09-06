import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${({ theme }) => theme.media.md} {
    flex-direction: row;
    justify-content: space-around;
  }`;

export default { Wrapper };
