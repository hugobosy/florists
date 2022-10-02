import { TitleSection } from "../../ui/components/title-section/TitleSection.component";
import { HeaderSectionTypes } from "./HeaderSection.types";
import { Header } from "../../ui/components/header/Header.component";
import S from './HeaderSection.styles';

export const HeaderSection: React.FC<HeaderSectionTypes> = ({
  captionTitle,
  size,
  isLine,
  isUnderline,
  captionHeader,
  align,
  color,
}) => (
  <S.Wrapper>
    <TitleSection
      captionId={captionTitle}
      size={size}
      isLine={isLine}
      isUnderline={isUnderline}
      align={align}
      color={color}
    />
    <Header captionId={captionHeader} align={align} color={color} size={size} />
  </S.Wrapper>
);
