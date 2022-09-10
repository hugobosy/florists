import { Container } from "../../ui/components/container/Container.component";
import { HeaderSection } from "../../components/header-section/HeaderSection.component";
import S from "./HardWork.styles";
import { BackImg } from "../../ui/components/back-img/BackImg.component";
import { TeamCard } from "../../components/team-card/TeamCard.component";
import image from "./img/portrait.jpg";

export const HardWork = () => (
  <S.Wrapper>
    <Container>
      <HeaderSection captionTitle="Hard Work" captionHeader="Our Team" size="medium" align="center" isLine />
      <S.BackImgWrapper>
        <BackImg />
      </S.BackImgWrapper>
      <S.Team>
        <TeamCard image={image} name="Amber Green" position="Founder" />
        <TeamCard image={image} name="Amy Hunter" position="Florist" />
        <TeamCard image={image} name="Mason Robinson" position="Designer" />
      </S.Team>
    </Container>
  </S.Wrapper>
);