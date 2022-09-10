import { Paragraph } from "../../ui/components/paragraph/Paragraph.component";
import { Social } from "../../ui/components/social/Social.component";
import { FaFacebookF, FaInstagram, FaPinterestP, FaTwitter } from "react-icons/fa";
import S from './TeamCard.styles';
import { TeamCardTypes } from "./TeamCard.types";

export const TeamCard: React.FC<TeamCardTypes> = ({ image, name, position }) => (
  <S.Wrapper>
    <S.Image>
      <img src={image} alt="Working" />
    </S.Image>
    <S.ParagraphName>{name}</S.ParagraphName>
    <Paragraph captionId={position} color="light" align="center" />
    <S.Socials>
      <Social icon={<FaTwitter size={15}/>} />
      <Social icon={<FaFacebookF size={15}/>} />
      <Social icon={<FaPinterestP size={15}/>} />
      <Social icon={<FaInstagram size={15}/>} />
    </S.Socials>
  </S.Wrapper>
);