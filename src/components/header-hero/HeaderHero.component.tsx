import { Logo } from "../../ui/components/logo/Logo.component";
import { Socials } from "./socials/Socials.component";
import { Navi } from "../navi/Navi.component";
import React from "react";
import S from './HeaderHero.styles';

export const HeaderHero = () => (
  <S.Wrapper>
    <Logo />
    <Navi />
    <Socials />
  </S.Wrapper>
);
