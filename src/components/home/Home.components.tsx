import React from "react";
import { Hero } from "../../modules/hero/Hero.component";
import { Footer } from "../../modules/footer/Footer.component";
import { Gifts } from "../../modules/gitfts/Gifts.component";
import { Statistic } from "../../modules/statistic/Statistic.component";
import { HardWork } from "../../modules/hard-work/HardWork.component";

export const Home = () => (
  <>
    <Hero />
    <Gifts />
    <Statistic/>
    <HardWork/>
    <Footer />
  </>
);
