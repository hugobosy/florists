import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 300px;

  ${({ theme }) => theme.media.md} {
    flex-direction: row;
    justify-content: space-around;
    height: auto;
  }`;

export default { Wrapper };
