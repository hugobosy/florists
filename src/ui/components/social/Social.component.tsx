import {SocialTypes} from "./Social.types";
import S from './Social.styles';

export const Social: React.FC<SocialTypes> = ({icon, isBackground}) => (
    <S.Social isBackground={isBackground}>{icon}</S.Social>
)
