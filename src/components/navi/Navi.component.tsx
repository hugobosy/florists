import { Links } from "./links/Links.component";
import S from './Navi.styles';
import { Burger } from "../../ui/components/burger/Burger.component";

export const Navi = () => (
  <>
    <S.Mobile>
      <Burger/>
      <Links display="mobile"/>
    </S.Mobile>
    <S.Desktop>
      <Links display="desktop"/>
    </S.Desktop>

  </>
);