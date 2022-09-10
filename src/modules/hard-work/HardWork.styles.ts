import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  padding: 70px 0;
  overflow: hidden;

  ${({ theme }) => theme.media.lg} {
    padding: 150px 0;
  }
`;

const BackImgWrapper = styled.div`
  position: absolute;
  top: 20px;
  right: 150px;

  ${({ theme }) => theme.media.sm} {
    right: 250px;
  }

  ${({ theme }) => theme.media.md} {
    right: 350px;
  }

  ${({ theme }) => theme.media.lg} {
    right: 450px;
  }
`;

const Team = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  row-gap: 30px;
  
  ${({theme}) => theme.media.md} {
    flex-direction: row;
    column-gap: 30px;
    padding-top: 50px;
  }
`;

export default { Wrapper, BackImgWrapper, Team };
