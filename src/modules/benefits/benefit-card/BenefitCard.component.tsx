import { Header } from "../../../ui/components/header/Header.component";
import { Paragraph } from "../../../ui/components/paragraph/Paragraph.component";
import S from "./BenefitCard.styles";
import { BenefitCardTypes } from "./BenefitCard.types";

export const BenefitCard: React.FC<BenefitCardTypes> = ({ icon, captionHeader, captionParagraph }) => (
  <S.Wrapper>
    <S.Icon>{icon}</S.Icon>
    <Header captionId={captionHeader} align="center" size="small" />
    <Paragraph captionId={captionParagraph} color="light" align="center" />
  </S.Wrapper>
);
