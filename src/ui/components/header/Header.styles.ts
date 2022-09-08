import styled, { css } from "styled-components";
import { HeaderTypes } from "./Header.types";

const colors = {
  default: css`
    color: ${({ theme }) => theme.color.primary.dark};
  `,
  light: css`
    color: ${({ theme }) => theme.color.light};
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
  `,
};

const Header = styled.h1<Partial<HeaderTypes>>`
  font-family: ${({ theme }) => theme.font.family.secondary};
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.font.size.s};
  ${({ color }) => color && colors[color]};
  ${({ align }) => align && aligns[align]};

  ${({ theme }) => theme.media.sm} {
    font-size: ${({ theme }) => theme.font.size.m};
  }

  ${({ theme }) => theme.media.lg} {
    font-size: ${({ theme }) => theme.font.size.l};
  }
`;

export default { Header };
