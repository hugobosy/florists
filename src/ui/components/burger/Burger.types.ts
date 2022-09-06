import { Dispatch, SetStateAction } from "react";

export interface BurgerTypes {
  setIsVisibility: Dispatch<SetStateAction<boolean>>;
  isVisibility: boolean;
}