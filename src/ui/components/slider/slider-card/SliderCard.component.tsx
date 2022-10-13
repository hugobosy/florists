import { Avatar } from "@mui/material";
import { SliderCardTypes } from "./SliderCard.types";
import S from './SliderCard.styles';

export const SliderCard: React.FC<SliderCardTypes> = ({ img, testimonial, name }) => {
  return (
    <S.Wrapper>
      <Avatar
        imgProps={{ style: { borderRadius: "50%" } }}
        src={img}
        style={{
          width: 120,
          height: 120,
          border: "1px solid #fff",
          padding: 7,
          marginBottom: 20
        }}
      />
      <S.Testimonial>
        {testimonial}
      </S.Testimonial>
      <S.Author>
        {name}
      </S.Author>
    </S.Wrapper>
  );
};