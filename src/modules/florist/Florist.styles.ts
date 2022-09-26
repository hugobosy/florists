import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  padding: 150px 30px;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1200px;
  gap: 50px;
  margin: 0 auto;
  
  ${({theme}) => theme.media.lg} {
    flex-direction: row;
  }
`;

const ImageWrapper = styled.div `
  width: 100%;
`

const Image = styled.img`
  display: block;
  width: 100%;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px 0;
  width: 100%;
`;

const BackImgWrapper = styled.div `
  position: absolute;
  top: -50px;
  left: -50px;
  z-index: -1;
  
`

export default { Wrapper, Card, ImageWrapper, Image, Content, BackImgWrapper };
