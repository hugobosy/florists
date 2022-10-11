import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Testimonial.css";
import { Avatar } from "@mui/material";
import { testimonials } from "../../../data/testimonials";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const PreviousBtn = (props: any) => {
  console.log(props);
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <MdChevronLeft style={{ color: "gray", fontSize: "45px" }} />
    </div>
  );
};
const NextBtn = (props: any) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <MdChevronRight style={{ color: "gray", fontSize: "45px" }} />
    </div>
  );
};
export const TestimonialSlider = () => {
  return (
    <div
      className="testimonial"
      style={{ display: "flex", justifyContent: "center", marginTop: 50 }}
    >
      <div style={{ width: "50%", textAlign: "center" }}>
        <Slider prevArrow={<PreviousBtn />} nextArrow={<NextBtn />} dots>
          {testimonials.map(({testimonial, avatar, author}) => <Card img={avatar} testimonial={testimonial} name={author} />)}
        </Slider>
      </div>
    </div>
  );
};

const Card = ({ img, testimonial, name }: any) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        textAlign: "center",
        color: "gray",
      }}
    >
      <Avatar
        imgProps={{ style: { borderRadius: "50%" } }}
        src={img}
        style={{
          width: 120,
          height: 120,
          border: "1px solid lightgray",
          padding: 7,
          marginBottom: 20,
        }}
      />
      <p>
        {testimonial}
      </p>
      <p style={{ fontStyle: "italic", marginTop: 25 }}>
        <span style={{ fontWeight: 500, color: "green" }}>{name}</span> ,
        Media Analyst
      </p>
    </div>
  );
};

export default TestimonialSlider;
