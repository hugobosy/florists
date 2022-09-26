import { ButtonTypes } from "./Button.types";
import S from "./Button.styles";

export const Button: React.FC<ButtonTypes> = ({ captionId, align }) => (
  <S.Button align={align}>{captionId}</S.Button>
);
