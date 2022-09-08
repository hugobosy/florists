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

const Paragraph = styled.p<Partial<ParagraphTypes>>`
  padding: 20px 0;
  line-height: 1.8;
  font-family: ${({ theme }) => theme.font.family.primary};
  font-size: ${({ theme }) => theme.font.size.xxxxs};
  ${({ color }) => color && colors[color]};
  ${({ align }) => align && aligns[align]};

  ${({ theme }) => theme.media.md} {
    font-size: ${({ theme }) => theme.font.size.xxs};
  }
`;

export default { Paragraph };
