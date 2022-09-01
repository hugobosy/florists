type Color = 'default' | 'light';
type Align = 'left' | 'center' | 'right';

export interface HeaderTypes {
    captionId: string;
    color?: Color;
    align?: Align;
}