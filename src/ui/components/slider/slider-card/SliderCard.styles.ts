import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
  color: ${({ theme }) => theme.color.light};
`;

const Testimonial = styled.p`
  font-size: ${({theme}) => theme.font.size.xxxxxs};
  
  ${({theme}) => theme.media.md} {
    font-size: ${({theme}) => theme.font.size.xxs};
  }
`;
const Author = styled.p`
  font-size: ${({theme}) => theme.font.size.xxs};
  font-family: ${({theme}) => theme.font.family.accent};
  margin-top: 25px;

  ${({theme}) => theme.media.md} {
    font-size: ${({theme}) => theme.font.size.s};
  }
`;

export default { Wrapper, Testimonial, Author };
