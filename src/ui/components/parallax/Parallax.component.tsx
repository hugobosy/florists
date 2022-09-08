import S from "./Parallax.styles";
import { ParallaxTypes } from "./Parallax.types";

export const Parallax: React.FC<ParallaxTypes> = ({ children, image }) => (
  <S.Parallax image={image}>
    {children}
  </S.Parallax>
);
