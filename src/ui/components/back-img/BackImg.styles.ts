import styled from "styled-components";

const Img = styled.img`
  position: absolute;
  width: 250px;
  z-index: 1;
  filter: saturate(30%) opacity(.7);

  ${({ theme }) => theme.media.lg} {
    width: 550px;
  }
`;

export default { Img };
