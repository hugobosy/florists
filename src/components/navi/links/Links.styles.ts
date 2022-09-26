import styled, { css } from "styled-components";
import { LinksTypes } from "./Links.types";

const displays = {
  mobile: css`
    position: absolute;
    left: -150px;
    display: flex;
    flex-direction: column;
    width: 300px;
    padding: 16px 0;
    margin: 0 24px;
    background-color: ${({ theme }) => theme.color.light};
    border: 2px solid ${({ theme }) => theme.color.secondary.dark};
    row-gap: 16px;
    translate: 0 -150%;
    opacity: 0;
    transition: .3s;
    z-index: 999;

    ${({ theme }) => theme.media.md} {
      display: none;
    }
  `,

  desktop: css`
    display: none;

    ${({ theme }) => theme.media.md} {
      display: flex;
    }
  `
};

const List = styled.ul<Partial<LinksTypes>>`
  
  ${({ display }) => display && displays[display]}
  ${({ isVisibility }) => isVisibility &&
          css`translate: 0 0;
            opacity: 1;
          `}
`;
const ListItem = styled.li`
`;

export default { List, ListItem };