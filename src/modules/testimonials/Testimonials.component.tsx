import React from "react";
import { Parallax } from "../../ui/components/parallax/Parallax.component";
import image from "./img/rose.jpg";
import { HeaderSection } from "../../components/header-section/HeaderSection.component";
import "swiper/css";
import TestimonialSlider from "../../ui/components/slider/TestimonialSlider.component";
import S from './Testimonials.styles';

export const Testimonials = () => {

  return (
    <Parallax image={image} isBackground isTestimonials>
      <S.Header>
        <HeaderSection captionTitle="People Say" captionHeader="Testimonials" size="medium" align="center" isLine
                       color="light" />
      </S.Header>
      <TestimonialSlider />
    </Parallax>
  );
};