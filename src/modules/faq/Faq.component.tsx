import React from "react";
import { HeaderSection } from "../../components/header-section/HeaderSection.component";
import { Container } from "@mui/material";
import S from './Faq.styles';

export const Faq = () => {

  return (
    <S.Wrapper>
      <Container>
        <HeaderSection
          captionTitle="FAQ"
          captionHeader="Najczęściej zadawane pytania"
          size="small"
          align="center"
          isLine
        />
      </Container>
    </S.Wrapper>
  );
};