import { SetStateAction } from "react";

export type CardProps = {
  id?: string;
  imagePos?: number;
  screen?: string;
  title?: string;
  src: string;
  descr?: string; 
  cards?: CardData[];
  video?: VideoData;
  setModal?: React.Dispatch<SetStateAction<ModalProps>>;
}

type CardData = {
  src: string;
  descr: string;
}

type VideoData = {
  src: string;
  width: string;
  height: string;
  allow: string;
  descr: string;
}

export interface ModalProps {
  src?: string;
  title?: string;
  slideNo?: string;
  gallery?: CardData[];
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