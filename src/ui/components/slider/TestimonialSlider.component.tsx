import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { testimonials } from "../../../data/testimonials";
import { NextBtn } from "./next-btn/NextBtn.component";
import { PrevBtn } from "./prev-btn/PrevBtn.component";
import { SliderCard } from "./slider-card/SliderCard.component";
import S from './TestimonialSlider.styles';

export const TestimonialSlider = () => {
  return (
    <S.Wrapper>
      <div style={{ width: "50%", textAlign: "center" }}>
        <Slider
          prevArrow={<PrevBtn />}
          nextArrow={<NextBtn />}
          pauseOnHover={true}
          infinite={true}
          speed={1000}
          autoplaySpeed={3000}
          slidesToShow={1}
          slidesToScroll={1}
          autoplay={true}
        >
          {
            testimonials
              .map(({ testimonial, avatar, author }) =>
                <SliderCard img={avatar} testimonial={testimonial} name={author} />)
          }
        </Slider>
      </div>
    </S.Wrapper>
  );
};



export default TestimonialSlider;
