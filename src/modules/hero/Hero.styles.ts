import hero from "./image/hero.jpg";
import styled from "styled-components";

const Wrapper = styled.div`
  min-height: 75vh;
  background-image: url(${hero});
  background-size: cover;
  background-position: center;
  padding: 0 30px;

  ${({ theme }) => theme.media.md} {
    padding-top: 20px;
    min-height: 85vh;
  }

  ${({ theme }) => theme.media.xl} {
    min-height: 100vh;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  height: 300px;
  width: 90%;
  margin-top: 50px;
  
`;

export default { Wrapper, Content };