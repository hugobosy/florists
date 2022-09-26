import React from "react";
import { BackImg } from "../../ui/components/back-img/BackImg.component";
import { HeaderSection } from "../../components/header-section/HeaderSection.component";
import { Paragraph } from "../../ui/components/paragraph/Paragraph.component";
import S from "./Florist.styles";
import image from "./img/gallery.jpg";
import { ProgressBar } from "../../ui/components/progress-bar/ProgressBar.component";
import { Container } from "../../ui/components/container/Container.component";

export const Florist = () => (
  <S.Wrapper>
    <S.BackImgWrapper>
      <BackImg />
    </S.BackImgWrapper>
    <Container>
      <S.Card>
        <S.ImageWrapper>
          <S.Image src={image} />
        </S.ImageWrapper>
        <S.Content>
          <HeaderSection captionTitle="Florist" captionHeader="Joanna Kurczab" size="small" align="left" />
          <Paragraph
            captionId="Nulla porttitor accumsan tincidunt. Donec sollicitudin molestie malesuada. Nulla porttitor accumsan tincidunt"
            color="light" />
          <div>
            <ProgressBar title="Professionalism" progress={97} />
            <ProgressBar title="Passionate" progress={88} />
            <ProgressBar title="Energetic" progress={82} />
          </div>
        </S.Content>
      </S.Card>
    </Container>
  </S.Wrapper>
);
