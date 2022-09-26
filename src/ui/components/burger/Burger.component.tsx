import S from "./Burger.styles";
import { BurgerTypes } from "./Burger.types";


export const Burger: React.FC<BurgerTypes> = ({ setIsVisibility, isVisibility }) => {
  return (
    <S.Burger onClick={() => setIsVisibility(!isVisibility)}>
      <hr />
      <hr />
      <hr />
    </S.Burger>
  );

};