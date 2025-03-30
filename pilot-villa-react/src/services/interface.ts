import { SetStateAction } from "react";

export type CardProps = {
  id?: string;
  screen?: string;
  title?: string;
  src: string;
  descr?: string; 
  cards?: CardData[];
  setModal?: React.Dispatch<SetStateAction<ModalProps>>;
}

type CardData = {
  src: string;
  descr: string;
}
export interface ModalProps {
  src?: string;
  title?: string;
  modalOn?: boolean;
  setModal?: React.Dispatch<SetStateAction<ModalProps>>;
}

export type ScreenType = {
  screenType: string
}

export type BurgerProps = {
  burgerMnuOn: boolean;
  toggleBurgerMnu: () => (void);
}