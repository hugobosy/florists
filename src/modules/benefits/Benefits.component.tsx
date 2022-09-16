import { Container } from "../../ui/components/container/Container.component";
import { HeaderSection } from "../../components/header-section/HeaderSection.component";
import S from "./Benefits.styles";
import { BenefitCard } from "./benefit-card/BenefitCard.component";
import { data } from "./Benefits.utils";

export const Benefits = () => (
  <S.Wrapper>
    <Container>
      <HeaderSection captionTitle="Our Benefits" captionHeader="Your main features" size="medium" align="center"
                     isLine />
      <S.Benefits>
        {data.map(item => (
          <BenefitCard icon={item.icon} captionHeader={item.title} captionParagraph={item.text} />
        ))}

      </S.Benefits>
    </Container>
  </S.Wrapper>
);
