import { TitleSection } from "../../ui/components/title-section/TitleSection.component";
import { HeaderSectionTypes } from "./HeaderSection.types";
import { Header } from "../../ui/components/header/Header.component";

export const HeaderSection: React.FC<HeaderSectionTypes> = ({
  captionTitle,
  size,
  isLine,
  isUnderline,
  captionHeader,
  align,
  color,
}) => (
  <div>
    <TitleSection
      captionId={captionTitle}
      size={size}
      isLine={isLine}
      isUnderline={isUnderline}
      align={align}
    />
    <Header captionId={captionHeader} align={align} color={color} />
  </div>
);
