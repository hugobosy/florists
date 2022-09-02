import React from 'react';
import {Header} from "../../ui/components/header/Header.component";
import {Paragraph} from "../../ui/components/paragraph/Paragraph.component";
import {Button} from "../../ui/components/button/Button.component";

export const Home = () => (
    <>
        <Header captionId="Nagłówek"/>
        <Paragraph captionId="Paragraf" color="light" align="center"/>
        <Button captionId="Button"/>
    </>
)
