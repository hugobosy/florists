import styled, { css } from "styled-components";
import { LinksTypes } from "./Links.types";

const displays = {
  mobile: css`
    flex-direction: column;
    padding: 16px 0;
    margin: 0 24px;
    background-color: ${({theme}) => theme.color.light};
    border: 2px solid ${({theme}) => theme.color.secondary.dark};
    row-gap: 16px;
    translate: 0 -100%;
    opacity: 0;
    
    ${({theme}) => theme.media.md} {
      display: none;
    }
  `,

  desktop: css`
    display: none;
    
    ${({theme}) => theme.media.md} {
      display: flex;
    }
  `
};

const List = styled.ul<Partial<LinksTypes>>`
  display: flex;
  ${({ display }) => display && displays[display]}
`;
const ListItem = styled.li`
`;

export default { List, ListItem };