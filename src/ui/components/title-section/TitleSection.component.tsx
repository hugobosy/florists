import { TitleSectionTypes } from "./TitleSection.types";
import S from "./TitleSection.styles";

export const TitleSection: React.FC<TitleSectionTypes> = ({
  captionId,
  size,
  isUnderline,
  isLine,
  align,
  color,
}) => (
  <S.Wrapper align={align}>
    <S.TitleSection size={size} isUnderline={isUnderline} isLine={isLine} color={color}>
      {captionId}
    </S.TitleSection>
  </S.Wrapper>
);
