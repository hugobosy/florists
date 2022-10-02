import styled, { css } from "styled-components";
import { ParagraphTypes } from "./Paragraph.types";

const colors = {
  default: css`
    color: ${({ theme }) => theme.color.primary.dark};
  `,
  light: css`
    color: ${({ theme }) => theme.color.primary.light};
  `,
  "extra-light": css`
    color: ${({ theme }) => theme.color.light};
  `
};

const aligns = {
  left: css`
    text-align: left;
  `,
  center: css`
    text-align: center;
  `,
  right: css`
    text-align: right;
  `
};

const sizes = {
  "extra-small": css`
    font-size: ${({theme}) => theme.font.size.xxxxs};
  `,
  small: css`
    font-size: ${({theme}) => theme.font.size.xxxs};
  `,
  medium: css`
    font-size: ${({theme}) => theme.font.size.xxs};
  `,
  large: css``
};

const Paragraph = styled.p<Partial<ParagraphTypes>>`
  line-height: 1.8;
  font-family: ${({ theme }) => theme.font.family.primary};
  font-size: ${({ theme }) => theme.font.size.xxxxs};
  ${({ color }) => color && colors[color]};
  ${({ align }) => align && aligns[align]};
  ${({ size }) => size && sizes[size]};
  ${({ padding }) => padding && css`padding: ${padding}px 0`};
  ${({ textTransform }) => textTransform && css`text-transform: uppercase;`};

  ${({ theme }) => theme.media.md} {
    font-size: ${({ theme }) => theme.font.size.xxs};
  }
`;

export default { Paragraph };
