import { Social } from "../../../ui/components/social/Social.component";
import { FaFacebookF, FaGooglePlusG, FaInstagramSquare, FaPinterestP, FaTwitter } from "react-icons/fa";
import S from "./Socials.styles";

export const Socials = () => (
  <S.Wrapper>
    <Social icon={<FaTwitter size={15} />} isBackground />
    <Social icon={<FaFacebookF size={15} />} isBackground />
    <Social icon={<FaPinterestP size={15} />} isBackground />
    <Social icon={<FaInstagramSquare size={15} />} isBackground />
    <Social icon={<FaGooglePlusG size={15} />} isBackground />
  </S.Wrapper>
);
