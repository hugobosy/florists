import { Container } from "../../ui/components/container/Container.component";
import { HeaderSection } from "../../components/header-section/HeaderSection.component";
import S from "./Gifts.styles";
import { Paragraph } from "../../ui/components/paragraph/Paragraph.component";
import { BackImg } from "../../ui/components/back-img/BackImg.component";
import { ListItemSection } from "../../components/list-item-section/ListItemSection.component";
import image from './img/bucket.jpg';

export const Gifts = () => (
  <S.Wrapper>
    <Container>
      <S.Columns>
        <S.Column>
          <HeaderSection captionTitle="Wonderful Gifts" captionHeader="From Florenso" size="medium" align="left" />
          <Paragraph
            captionId="Extensively delivered to our clients on time, Flower Decoration services are rendered by most skillful and experienced professionals of our team."
            color="light" />
          <ul>
            <ListItemSection captionId="Bouquets & Compositions" />
            <ListItemSection captionId="Bouquets & Compositions" />
            <ListItemSection captionId="Bouquets & Compositions" />
            <ListItemSection captionId="Bouquets & Compositions" />
            <ListItemSection captionId="Bouquets & Compositions" />
          </ul>
        </S.Column>
        <S.Column>
          <S.Image
            src={image}
            alt="kwiat" />
        </S.Column>
      </S.Columns>
      <S.BackImgWrapper>
        <BackImg />
      </S.BackImgWrapper>
    </Container>
  </S.Wrapper>
);