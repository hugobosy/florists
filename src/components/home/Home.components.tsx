import React from "react";
import { Hero } from "../../modules/hero/Hero.component";
import { Footer } from "../../modules/footer/Footer.component";
import { Gifts } from "../../modules/gitfts/Gifts.component";

export const Home = () => (
  <>
    <Hero/>
    <Gifts/>
    <Footer/>
  </>
);
