import styled, { css } from "styled-components";
import { TitleSectionTypes } from "./TitleSection.types";

const sizes = {
  small: css`
    font-size: ${({ theme }) => theme.font.size.sm};

    ${({ theme }) => theme.media.lg} {
      font-size: ${({ theme }) => theme.font.size.m};
    }
  `,
  medium: css`
    font-size: ${({ theme }) => theme.font.size.sm};

    ${({ theme }) => theme.media.lg} {
      font-size: ${({ theme }) => theme.font.size.xl};
    }
  `,
  large: css`
    font-size: ${({ theme }) => theme.font.size.m};

    ${({ theme }) => theme.media.lg} {
      font-size: ${({ theme }) => theme.font.size.xxxxl};
    }
  `
};

const aligns = {
  left: css`
    justify-content: flex-start;
  `,
  center: css`
    justify-content: center;;
  `,
  right: css`
    justify-content: flex-end;
  `
};

const Wrapper = styled.div<Partial<TitleSectionTypes>>`
  display: flex;
  ${({ align }) => align && aligns[align]};
`;

const TitleSection = styled.h2<Partial<TitleSectionTypes>>`
  position: relative;
  display: inline-block;
  font-family: ${({ theme }) => theme.font.family.accent};
  color: ${({ theme }) => theme.color.primary.dark};
  line-height: 1.2;
  letter-spacing: 1px;
  ${({ size }) => size && sizes[size]};
  ${({ isUnderline }) =>
          isUnderline &&
          css`
            &::before {
              content: "";
              position: absolute;
              bottom: 0;
              left: 0;
              background-color: ${({ theme }) => theme.color.secondary.dark};
              width: 100px;
              height: 4px;
            }

            ${({ theme }) => theme.media.md} {
              margin-bottom: 50px;
            }
          `};
  ${({ isLine }) =>
          isLine &&
          css`
            padding: 20px 0;

            &::before {
              content: "";
              position: absolute;
              top: 0;
              left: 50%;
              transform: translate(-50%, 0);
              width: 70px;
              height: 4px;
              background-color: ${({ theme }) => theme.color.secondary.dark};
            }

            &::after {
              content: "";
              position: absolute;
              bottom: 0;
              right: 50%;
              transform: translate(50%, 0);
              width: 70px;
              height: 4px;
              background-color: ${({ theme }) => theme.color.secondary.dark};
            }

            ${({ theme }) => theme.media.md} {
              padding: 0 20px;

              &::before {
                top: 50%;
                left: 0;
                transform: translate(-100%, -50%);
              }

              &::after {
                top: 50%;
                right: 0;
                transform: translate(100%, -50%);
              }
            }
          ;
          `}
`;

export default { TitleSection, Wrapper };
