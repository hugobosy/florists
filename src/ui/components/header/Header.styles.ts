import styled, { css } from "styled-components";
import { HeaderTypes } from "./Header.types";

const sizes = {
  'extra-small': css `
    font-size: ${({theme}) => theme.font.size.xs};
    padding: 10px 0;
  `,
  small: css`
    font-size: ${({ theme }) => theme.font.size.sm};
    padding: 10px 0;

    ${({ theme }) => theme.media.lg} {
      font-size: ${({ theme }) => theme.font.size.m};
      padding: 0;
    }
  `,
  medium: css`
    font-size: ${({ theme }) => theme.font.size.sm};
    padding: 15px 0;

    ${({ theme }) => theme.media.lg} {
      font-size: ${({ theme }) => theme.font.size.xxl};
      padding: 0;
    }
  `,
  large: css`
    font-size: ${({ theme }) => theme.font.size.xl};

    ${({ theme }) => theme.media.md} {
      font-size: ${({ theme }) => theme.font.size.xxl};
    }

    ${({ theme }) => theme.media.lg} {
      font-size: ${({ theme }) => theme.font.size.xxxl};
    }
  `
};

const colors = {
  default: css`
    color: ${({ theme }) => theme.color.primary.dark};
  `,
  light: css`
    color: ${({ theme }) => theme.color.light};
  `,
  "extra-light": css`
  `
};

const aligns = {
  left: css`
    justify-content: left;
  `,
  center: css`
    justify-content: center;
  `,
  right: css`
    justify-content: right;
  `
};

const Wrapper = styled.div<Partial<HeaderTypes>> `
  display: flex;
  ${({ align }) => align && aligns[align]};
`

const Header = styled.h1<Partial<HeaderTypes>>`
  font-family: ${({ theme }) => theme.font.family.secondary};
  text-transform: uppercase;
  ${({ color }) => color && colors[color]};
  ${({ size }) => size && sizes[size]};
`;

export default { Wrapper, Header };
