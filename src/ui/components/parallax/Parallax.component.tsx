import S from "./Parallax.styles";
import { ParallaxTypes } from "./Parallax.types";

export const Parallax: React.FC<ParallaxTypes> = ({ children, image, isBackground, isTestimonials }) => (
  <>
    <S.Parallax image={image} isBackground={isBackground} isTestimonials={isTestimonials}>
      {children}
    </S.Parallax>
  </>
);
