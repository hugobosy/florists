import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 300px;
  width: 100vw;
  z-index: 999;

  ${({ theme }) => theme.media.md} {
    position: fixed;
    flex-direction: row;
    justify-content: space-around;
    height: auto;
    backdrop-filter: blur(20px) contrast(.95);
    box-shadow: 0 0 100px 0 ${({theme}) => theme.color.secondary.dark};
  }`;

export default { Wrapper };
