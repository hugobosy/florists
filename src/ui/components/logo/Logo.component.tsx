import logo from "./img/logo.png";
import S from "./Logo.styles";
import { TitleSection } from "../title-section/TitleSection.component";
import { LogoTypes } from "./Logo.types";

export const Logo: React.FC<LogoTypes> = ({color}) => (
  <S.Wrapper>
    <S.Logo src={logo} />
    <TitleSection captionId="Nika" size="medium" color={color}/>
  </S.Wrapper>
);
