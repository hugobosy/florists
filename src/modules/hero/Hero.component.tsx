import S from "./Hero.styles";
import { HeaderHero } from "../../components/header-hero/HeaderHero.component";
import { TitleSection } from "../../ui/components/title-section/TitleSection.component";
import { Header } from "../../ui/components/header/Header.component";
import { Paragraph } from "../../ui/components/paragraph/Paragraph.component";
import { Button } from "../../ui/components/button/Button.component";

export const Hero = () => (
  <S.Wrapper>
      <HeaderHero />
      <S.Content>
        <TitleSection captionId="Welcome" size="large" isUnderline />
        <Header captionId="Inspired by the beauty of nature" />
        <Paragraph
          captionId="You can easily transform your home interior and create an amazingly bright and unforgettable atmosphere of colorful greenery" />
        <Button captionId="Call2Action" align="left" />
      </S.Content>
  </S.Wrapper>
);