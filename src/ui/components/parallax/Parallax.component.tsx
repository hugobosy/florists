import S from "./Parallax.styles";
import { ParallaxTypes } from "./Parallax.types";

export const Parallax: React.FC<ParallaxTypes> = ({ children, image, isBackground }) => (
  <>
    <S.Parallax image={image} isBackground={isBackground}>
      {children}
    </S.Parallax>
  </>
);
