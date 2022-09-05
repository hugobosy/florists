import { ButtonTypes } from "./Button.types";
import S from "./Button.styles";

export const Button: React.FC<ButtonTypes> = ({ captionId }) => (
  <S.Button>{captionId}</S.Button>
);
