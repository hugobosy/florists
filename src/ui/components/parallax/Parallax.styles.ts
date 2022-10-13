import styled, { css } from "styled-components";
import { ParallaxTypes } from "./Parallax.types";

const Parallax = styled.div<Partial<ParallaxTypes>>`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 300px;
  padding: 60px;
  ${({ image }) => image && css`
    background: url(${image}) no-repeat fixed center;
    background-size: cover;
    z-index: -2;
  `};

  ${({ isBackground }) => isBackground && css`
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      background: linear-gradient(to bottom, rgba(0, 0, 0, .65) 30%, transparent 100%);
      width: 100%;
      height: 100%;
      z-index: -1;
    }
  `}

  ${({ isTestimonials }) => isTestimonials && css`display: block`};
`;

export default { Parallax };
