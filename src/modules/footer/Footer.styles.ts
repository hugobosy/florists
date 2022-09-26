import styled from "styled-components";
import { BiEnvelope, BiMap, BiPhone } from "react-icons/bi";

const Wrapper = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.color.dark};`;

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  padding: 100px 20px;
  gap: 100px;

  ${({ theme }) => theme.media.md} {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  width: 80%;
`;

const InfoWrapper = styled.div`
  display: grid;
  grid-template-columns: 50px 1fr;
  align-items: center
`;

const Socials = styled.div`
  display: flex;
  column-gap: 10px;`;

const Map = styled(BiMap)`
  color: ${({ theme }) => theme.color.secondary.dark};
`;

const Envelope = styled(BiEnvelope)`
  color: ${({ theme }) => theme.color.secondary.dark};
`;

const Phone = styled(BiPhone)`
  color: ${({ theme }) => theme.color.secondary.dark};
`;

export default { GridWrapper, Column, Wrapper, InfoWrapper, Map, Envelope, Phone, Socials };
