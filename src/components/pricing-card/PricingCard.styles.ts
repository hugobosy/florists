import styled from "styled-components";
import image from "./img/pricing_card-bg.jpg";

const Wrapper = styled.div`
  padding: 30px;
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

`;
const Title = styled.div`

`;
const Text = styled.div`

`;

export default { Wrapper, Content, Price, Description, Text, Title };