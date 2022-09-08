import { ListItemSectionTypes } from "./ListItemSection.types";
import S from "./ListItemSection.styles";

export const ListItemSection: React.FC<ListItemSectionTypes> = ({ captionId }) => (
  <S.ListItem>
    <S.Icon size={20} /><S.Text>{captionId}</S.Text>
  </S.ListItem>
);
