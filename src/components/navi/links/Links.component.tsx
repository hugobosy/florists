import { Link } from "../../../ui/components/link/Link.component";
import S from "./Links.styles";
import { LinksTypes } from "./Links.types";

export const Links: React.FC<LinksTypes> = ({ display, isVisibility }) => {

  return (
    <>
      <S.List display={display} isVisibility={display === 'mobile' && isVisibility}>
        <S.ListItem><Link captionId="Oferta" href="/oferta" /></S.ListItem>
        <S.ListItem><Link captionId="Galeria" href="/oferta" /></S.ListItem>
        <S.ListItem><Link captionId="Cennik" href="/oferta" /></S.ListItem>
        <S.ListItem><Link captionId="Kontakt" href="/oferta" /></S.ListItem>
      </S.List>
    </>
  );

};
