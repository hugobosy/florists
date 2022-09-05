import styled, { css } from "styled-components";
import { SocialTypes } from "./Social.types";

const Social = styled.div<Partial<SocialTypes>>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  color: ${({ theme }) => theme.color.primary.dark};
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    color: ${({ theme }) => theme.color.secondary.dark};
  }

  ${({ theme }) => theme.media.xl} {
    width: 25px;
    height: 25px;
  }

  ${({ isBackground }) =>
    isBackground &&
    css`
      background-color: ${({ theme }) => theme.color.secondary.dark};
      color: ${({ theme }) => theme.color.light};

      &:hover {
        color: ${({ theme }) => theme.color.primary.dark};
      }
    `}
`;

export default { Social };
