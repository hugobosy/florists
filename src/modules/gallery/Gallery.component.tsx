import { HeaderSection } from "../../components/header-section/HeaderSection.component";
import S from "./Gallery.styles";
import image from "./img/gallery.jpg";

export const Gallery = () => (
  <S.Wrapper>
    <HeaderSection captionTitle="Some Images" captionHeader="Our Gallery" size="medium" align="center" isLine />
    <S.Gallery>
      <S.Image src={image} alt="Image" />
      <S.Image src={image} alt="Image" />
      <S.Image src={image} alt="Image" />
      <S.Image src={image} alt="Image" />
    </S.Gallery>
  </S.Wrapper>
);
