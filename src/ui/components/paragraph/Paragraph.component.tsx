import {ParagraphTypes} from "./Paragraph.types";
import S from './Paragraph.styles';

export const Paragraph: React.FC<ParagraphTypes> = ({captionId, align, color}) => (
    <S.Paragraph color={color} align={align}>{captionId}</S.Paragraph>
)
