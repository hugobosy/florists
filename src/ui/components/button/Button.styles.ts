import styled, { css } from "styled-components";
import { ButtonTypes } from "./Button.types";

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

const Button = styled.button<Partial<ButtonTypes>>`
  min-width: 150px;
  padding: 12px 10px;
  font-size: ${({ theme }) => theme.font.size.xxxxxs};
  font-family: ${({ theme }) => theme.font.family.primary};
  font-weight: ${({ theme }) => theme.font.weight.semiBold};
  background-color: ${({ theme }) => theme.color.secondary.dark};
  border: 2px solid ${({ theme }) => theme.color.secondary.dark};
  color: ${({ theme }) => theme.color.light};
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;
  transition: 0.3s;
  ${({ align }) => align && aligns[align]};

  &:hover {
    background-color: ${({ theme }) => theme.color.light};
    color: ${({ theme }) => theme.color.secondary.dark};
  }

  ${({ theme }) => theme.media.lg} {
    min-width: 195px;
    padding: 17px 10px;
    font-size: ${({ theme }) => theme.font.size.xxxxs};
  }
`;

export default { Button };
