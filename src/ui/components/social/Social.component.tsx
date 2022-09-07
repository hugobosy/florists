import { SocialTypes } from "./Social.types";
import S from "./Social.styles";

export const Social: React.FC<SocialTypes> = ({ icon, isBackground, isFooter }) => (
  <S.Social isBackground={isBackground} isFooter={isFooter}>{icon}</S.Social>
);
