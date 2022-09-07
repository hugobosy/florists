import styled from "styled-components";

const Mobile = styled.div`
  position: relative;
  display: block;

  ${({ theme }) => theme.media.md} {
    display: none;
  }`;
const Desktop = styled.div`
  display: none;

  ${({ theme }) => theme.media.md} {
    display: block;
  }`;

export default { Mobile, Desktop };