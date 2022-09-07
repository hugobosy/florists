import hero from "./image/hero.jpg";
import styled from "styled-components";

const Wrapper = styled.div`
  min-height: 75vh;
  background-image: url(${hero});
  background-size: cover;
  background-position: center;
  padding: 0 0 20px;

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
  align-items: flex-start;
  height: 300px;
  width: 90%;
  margin-top: 150px;
  padding-left: 20px;
  row-gap: 10px;
  
  ${({theme}) => theme.media.md} {
    margin-top: 50px;
    width: 50%;
    justify-content: center;
    translate: 130px 150%;
  }

  ${({theme}) => theme.media.lg} {
    width: 30%;
    row-gap: 30px;
  }
`;

export default { Wrapper, Content };