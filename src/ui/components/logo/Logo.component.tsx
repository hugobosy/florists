import logo from "./img/logo.png";
import S from "./Logo.styles";
import { TitleSection } from "../title-section/TitleSection.component";

export const Logo = () => (
  <S.Wrapper>
    <S.Logo src={logo} />
    <TitleSection captionId="Nika" size="medium" />
  </S.Wrapper>
);
