import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
  
  .slick-arrow.slick-prev,
  .slick-arrow.slick-next {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
    border-radius: 5px;
  }
;

  .slick-prev::before,
  .slick-next::before {
    display: none;
  }
;

  .slick-arrow.slick-next {
    right: -70px;
  }
;

  .slick-arrow.slick-prev {
    left: -70px;
  }
;

  .slick-dots li button:before {
    font-size: 15px;
  }
;

  .slick-dots li {
    top: 15px;
  }
;
`;

export default { Wrapper }
