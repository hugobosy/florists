import { LinkTypes } from "./Link.types";
import S from "./Link.styles";

export const Link: React.FC<LinkTypes> = ({ captionId, href }) => (
  <S.Link href={href}>{captionId}</S.Link>
);
