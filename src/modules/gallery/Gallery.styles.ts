import styled from "styled-components";

const Wrapper = styled.div`
  padding-top: 70px;
  background-color: ${({theme}) => theme.color.secondary.light};
  
  ${({theme}) => theme.media.lg} {
    padding-top: 150px;
  }
`;

const Gallery = styled.div `
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding-top: 30px;
  
  ${({theme}) => theme.media.md} {
    grid-template-columns: repeat(4, 1fr);
    padding-top: 70px;
  }
`

const Image = styled.img `
  width: 100%;
  cursor: pointer;
  transition: .3s;
  
  &:hover {
    filter: brightness(.6);
  }
`

export default { Wrapper, Gallery, Image };