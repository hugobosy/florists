import React from "react";
import { HeaderSection } from "../../components/header-section/HeaderSection.component";
import { Container } from "../../ui/components/container/Container.component";
import S from './Pricing.styles';
import { PricingCard } from "../../components/pricing-card/PricingCard.component";

export const Pricing = () => (
  <S.Wrapper>
    <Container>
      <HeaderSection captionTitle="Pricing" captionHeader="Our pricing" size="medium" align="center" isLine />
      <PricingCard price={195} title="Wedding" text="lorem" />
    </Container>
  </S.Wrapper>
)