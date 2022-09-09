import { HeaderTypes } from "./Header.types";
import S from "./Header.styles";

export const Header: React.FC<HeaderTypes> = ({ captionId, color, align, size }) => (
  <S.Header color={color} align={align} size={size}>
    {captionId}
  </S.Header>
);
