import { Align, Color, Size } from "../../types/types";

export interface ParagraphTypes {
  captionId: string;
  color?: Color;
  align?: Align;
  padding?: number;
  textTransform?: boolean;
  size?: Size;
}
