import { HeaderTypes } from "./Header.types";
import S from "./Header.styles";

export const Header: React.FC<HeaderTypes> = ({ captionId, color, align }) => (
  <S.Header color={color} align={align}>
    {captionId}
  </S.Header>
);
