import styled from "styled-components";
import image from "./img/pricing_card-bg.jpg";

const Wrapper = styled.div`
  margin: 20px 0;
  padding: 30px 50px;
  background-image: url(${image});
  background-position: center;
  background-size: cover;
`;
const Content = styled.div`
`;
const Price = styled.div`
  padding: 20px 0;
  background-color: ${({theme}) => theme.color.secondary.darkOpacity};
`;
const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  padding: 50px 0;
  background-color: ${({theme}) => theme.color.lightOpacity};

`;
const Title = styled.div`
  font-weight: ${({theme}) => theme.font.weight.medium};
`;
const Text = styled.div`
  line-height: 25px;
  font-size: ${({theme}) => theme.font.size.xxxs};
  text-align: center;
  color: ${({theme}) => theme.color.primary.light}
`;

export default { Wrapper, Content, Price, Description, Text, Title };