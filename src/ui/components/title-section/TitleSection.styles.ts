import styled, {css} from "styled-components";
import {TitleSectionTypes} from "./TitleSection.types";

const sizes = {
    small: css`
      font-size: ${({theme}) => theme.font.size.sm};

      ${({theme}) => theme.media.lg} {
        font-size: ${({theme}) => theme.font.size.m};
      }`,
    medium: css`
      font-size: ${({theme}) => theme.font.size.sm};

      ${({theme}) => theme.media.lg} {
        font-size: ${({theme}) => theme.font.size.xl};
      }`,
    large: css`
      font-size: ${({theme}) => theme.font.size.m};

      ${({theme}) => theme.media.lg} {
        font-size: ${({theme}) => theme.font.size.xxxxl};
      }`,

}

const TitleSection = styled.p<Partial<TitleSectionTypes>>`
  position: relative;
  display: inline-block;
  font-family: ${({theme}) => theme.font.family.accent};
  color: ${({theme}) => theme.color.primary.dark};
  line-height: 1.2;
  letter-spacing: 1px;
  margin: 0 auto;
  ${({size}) => size && sizes[size]};
  ${({isUnderline}) => isUnderline && css
          `&::before {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            background-color: ${({theme}) => theme.color.secondary.dark};
            width: 100px;
            height: 4px;
          }`};
  ${({isLine}) => isLine && css`
    padding: 20px 0;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 50%;
      transform: translate(-50%, 0);
      width: 70px;
      height: 4px;
      background-color: ${({theme}) => theme.color.secondary.dark};
    }

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      right: 50%;
      transform: translate(50%, 0);
      width: 70px;
      height: 4px;
      background-color: ${({theme}) => theme.color.secondary.dark};
    }

    ${({theme}) => theme.media.md} {
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
  ;`
  }`

export default {TitleSection}
