import { ParagraphTypes } from "./Paragraph.types";
import S from "./Paragraph.styles";

export const Paragraph: React.FC<ParagraphTypes> = ({
  captionId,
  align,
  color,
  padding,
}) => (
  <S.Paragraph color={color} align={align} padding={padding}>
    {captionId}
  </S.Paragraph>
);
