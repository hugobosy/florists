import { Container } from "../../ui/components/container/Container.component";
import { Logo } from "../../ui/components/logo/Logo.component";
import { Paragraph } from "../../ui/components/paragraph/Paragraph.component";
import S from "./Footer.styles";
import { Header } from "../../ui/components/header/Header.component";
import { Social } from "../../ui/components/social/Social.component";
import { FaFacebookF, FaGooglePlusG, FaInstagramSquare, FaPinterestP, FaTwitter } from "react-icons/fa";

export const Footer = () => (
  <S.Wrapper>
    <Container>
      <S.GridWrapper>
        <S.Column>
          <Logo color="light" />
          <Paragraph
            captionId="We understand your day is very special, and we offer a very personalized service for your most important event. We custom make beautiful wedding flowers."
            color="extra-light" />
        </S.Column>

        <S.Column>
          <Header captionId="Information" color="extra-light" />
          <S.InfoWrapper>
            <S.Map size={25} />
            <Paragraph
              captionId="4801 South University Drive, Suite 237, Ft. Lauderdale"
              color="extra-light" />
          </S.InfoWrapper>
          <S.InfoWrapper>
            <S.Envelope size={25} />
            <Paragraph
              captionId="contacts@info.com"
              color="extra-light" />
          </S.InfoWrapper>
          <S.InfoWrapper>
            <S.Phone size={25} />
            <Paragraph
              captionId="(123) 456-7890"
              color="extra-light" />
          </S.InfoWrapper>
        </S.Column>

        <S.Column>
          <Header captionId="Social" color="extra-light" />
          <S.Socials>
            <Social icon={<FaTwitter size={15} />} isFooter />
            <Social icon={<FaFacebookF size={15} />} isFooter />
            <Social icon={<FaPinterestP size={15} />} isFooter />
            <Social icon={<FaInstagramSquare size={15} />} isFooter />
            <Social icon={<FaGooglePlusG size={15} />} isFooter />
          </S.Socials>
          <Paragraph captionId="Copyright © 2019. All rights reserved." color="extra-light"/>
        </S.Column>
      </S.GridWrapper>
    </Container>
  </S.Wrapper>
);
