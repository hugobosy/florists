import React from 'react';
import {Header} from "../../ui/components/header/Header.component";
import {Paragraph} from "../../ui/components/paragraph/Paragraph.component";
import {Button} from "../../ui/components/button/Button.component";
import {FaFacebookF} from "react-icons/fa";
import {Social} from "../../ui/components/social/Social.component";
import {TitleSection} from "../../ui/components/title-section/TitleSection.component";
import {HeaderSection} from "../header-section/HeaderSection.component";
import {Link} from "../../ui/components/link/Link.component";


export const Home = () => (
    <>
        <Header captionId="Nagłówek"/>
        <Paragraph captionId="Paragraf" color="light" align="center"/>
        <Button captionId="Button"/>
        <Social icon={<FaFacebookF/>} isBackground/>
        <TitleSection size="large" captionId="Welcome" align="center"/>
        <HeaderSection captionTitle="Tytuł" captionHeader="Nagłówek" size="large" align="center"/>
        <Link captionId="Gallery" href="/gallery"/>
    </>
)
