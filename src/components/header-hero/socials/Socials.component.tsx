import { Social } from "../../../ui/components/social/Social.component";
import { FaFacebookF, FaGooglePlusG, FaInstagramSquare, FaPinterestP, FaTwitter } from "react-icons/fa";
import S from "./Socials.styles";

export const Socials = () => (
  <S.Wrapper>
    <Social icon={<FaTwitter />} isBackground />
    <Social icon={<FaFacebookF />} isBackground />
    <Social icon={<FaPinterestP />} isBackground />
    <Social icon={<FaInstagramSquare />} isBackground />
    <Social icon={<FaGooglePlusG />} isBackground />
  </S.Wrapper>
);
