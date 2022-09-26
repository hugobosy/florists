import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  z-index: 1;
`;

const Image = styled.div`
  width: 100%;

  > img {
    width: 100%;
  }
`;

const ParagraphName = styled.p`
  font-size: 20px;
  text-transform: uppercase;
  text-align: center;
`;

const Socials = styled.div`
  display: flex;
  justify-content: center;
  column-gap: 10px;
`;

export default { Wrapper, Image, ParagraphName, Socials };
