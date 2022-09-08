import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  overflow: hidden`;

const Columns = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 70px 0;
  z-index: 2;

  ${({ theme }) => theme.media.md} {
    flex-direction: row;
    padding: 150px 0;
  }`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

const Image = styled.img`
  display: block;
  max-width: 100%;
`;

const BackImgWrapper = styled.div`
  position: absolute;
  bottom: 120px;
  left: 0;
  z-index: -1;

  ${({ theme }) => theme.media.md} {
    bottom: 250px;
  }

  ${({ theme }) => theme.media.xl} {
    bottom: 350px;
  }
`;


export default { Column, Wrapper, Image, BackImgWrapper, Columns };
