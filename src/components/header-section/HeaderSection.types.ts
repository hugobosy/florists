import { Align, Color, Size } from "../../ui/types/types";

export interface HeaderSectionTypes {
  captionTitle: string;
  captionHeader: string;
  size: Size;
  isLine?: boolean;
  isUnderline?: boolean;
  align: Align;
  color?: Color;
}
