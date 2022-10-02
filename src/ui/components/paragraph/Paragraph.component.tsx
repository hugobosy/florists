import { ParagraphTypes } from "./Paragraph.types";
import S from "./Paragraph.styles";

export const Paragraph: React.FC<ParagraphTypes> = ({
  captionId,
  align,
  color,
  padding,
  textTransform,
  size
}) => (
  <S.Paragraph color={color} align={align} padding={padding} textTransform={textTransform} size={size}>
    {captionId}
  </S.Paragraph>
);
