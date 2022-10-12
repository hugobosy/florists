import { MdChevronRight } from "react-icons/md";
import { NextBtnTypes } from "./NextBtn.types";

export const NextBtn: React.FC<NextBtnTypes> = ({ className, onClick }) => {
  return (
    <div className={className} onClick={onClick}>
      <MdChevronRight size={45} color="#fff" />
    </div>
  );
};