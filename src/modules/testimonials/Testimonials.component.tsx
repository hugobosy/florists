import { Parallax } from "../../ui/components/parallax/Parallax.component";
import image from "./img/rose.jpg";
import { HeaderSection } from "../../components/header-section/HeaderSection.component";

export const Testimonials = () => {
  return (
    <Parallax image={image} isBackground>
      <HeaderSection captionTitle="People Say" captionHeader="Testimonials" size="medium" align="center" isLine
                     color="light" />
    </Parallax>
  );
};