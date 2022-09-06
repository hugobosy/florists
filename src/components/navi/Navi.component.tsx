import { Links } from "./links/Links.component";
import S from "./Navi.styles";
import { Burger } from "../../ui/components/burger/Burger.component";
import { useState } from "react";

export const Navi = () => {
  const [isVisibility, setIsVisibility] = useState(true);
  return (
    <>
      <S.Mobile>
        <Burger setIsVisibility={setIsVisibility} isVisibility={isVisibility}/>
        <Links display="mobile" isVisibility={isVisibility} />
      </S.Mobile>
      <S.Desktop>
        <Links display="desktop" />
      </S.Desktop>

    </>
  );
};