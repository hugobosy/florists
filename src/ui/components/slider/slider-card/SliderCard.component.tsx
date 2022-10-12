import { Avatar } from "@mui/material";
import { SliderCardTypes } from "./SliderCard.types";

export const SliderCard: React.FC<SliderCardTypes> = ({ img, testimonial, name }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        textAlign: "center",
        color: "#fefefe"
      }}
    >
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
      <p style={{ fontSize: "12px" }}>
        {testimonial}
      </p>
      <p style={{ marginTop: 25 }}>
        {name}
      </p>
    </div>
  );
};