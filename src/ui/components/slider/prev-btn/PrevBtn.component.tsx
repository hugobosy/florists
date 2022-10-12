import { MdChevronLeft } from "react-icons/md";
import { PrevBtnTypes } from "./PrevBtn.types";

export const PrevBtn: React.FC<PrevBtnTypes> = ({ className, onClick }) => {
  return (
    <div className={className} onClick={onClick}>
      <MdChevronLeft size={45} color="#fff" />
    </div>
  );
};