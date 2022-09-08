import React from "react";
import { Hero } from "../../modules/hero/Hero.component";
import { Footer } from "../../modules/footer/Footer.component";
import { Parallax } from "../../ui/components/parallax/Parallax.component";
import image from './parallax1.jpg';

export const Home = () => (
  <>
    <Hero/>
    <Parallax image={image}><h1>sislsls</h1></Parallax>
    <Footer/>
  </>
);
