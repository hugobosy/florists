import styled, { css } from "styled-components";
import { LinksTypes } from "./Links.types";

const displays = {
  mobile: css`
    display: flex;
    flex-direction: column;
    padding: 16px 0;
    margin: 0 24px;
    background-color: ${({ theme }) => theme.color.light};
    border: 2px solid ${({ theme }) => theme.color.secondary.dark};
    row-gap: 16px;
    translate: 0 -150%;
    opacity: 0;
    transition: .3s;

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