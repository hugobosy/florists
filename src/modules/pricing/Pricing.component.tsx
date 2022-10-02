import React from "react";
import { HeaderSection } from "../../components/header-section/HeaderSection.component";
import { Container } from "../../ui/components/container/Container.component";
import S from "./Pricing.styles";
import { PricingCard } from "../../components/pricing-card/PricingCard.component";

export const Pricing = () => (
  <S.Wrapper>
    <Container>
      <HeaderSection captionTitle="Pricing" captionHeader="Our pricing" size="medium" align="center" isLine />
      <S.PricingWrapper>
        <PricingCard price={195} title="Wedding" text="Vivamus suscipit, Tortor eget felis, Porttitor volutpat, Vivamus magna justo, Lacinia consectetu" />
        <PricingCard price={195} title="Wedding" text="Vivamus suscipit, Tortor eget felis, Porttitor volutpat, Vivamus magna justo, Lacinia consectetu" />
        <PricingCard price={195} title="Wedding" text="Vivamus suscipit, Tortor eget felis, Porttitor volutpat, Vivamus magna justo, Lacinia consectetu" />
      </S.PricingWrapper>
    </Container>
  </S.Wrapper>
);
