import { InputTypes } from "./Input.types";
import S from "./Input.styles";

export const Input: React.FC<InputTypes> = ({ type, placeholder }) => (
  <S.Input type={type} placeholder={placeholder} />
);
