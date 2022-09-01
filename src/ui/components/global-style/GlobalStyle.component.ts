import {createGlobalStyle} from "styled-components";
import {CommonGlobalStyle} from "../common-global-style/CommonGlobalStyle.component";

const GlobalStyle = createGlobalStyle`
${CommonGlobalStyle};

h1,h2,h3,h4,h5,h6 {
  font-weight: ${({theme}) => theme.font.weight.medium};
}
`

export default GlobalStyle
