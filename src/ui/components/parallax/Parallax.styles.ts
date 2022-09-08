import styled, { css } from "styled-components";
import { ParallaxTypes } from "./Parallax.types";

const Parallax = styled.div<Partial<ParallaxTypes>>`
  min-height: 300px;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  ${({ image }) => image && css`background-image: url(${image})`}
`;

export default { Parallax };
