export type CardProps = {
  id?: number;
  screen?: string;
  title?: string;
  src: string;
  descr?: string; 
  cards?: CardData[];
}

type CardData = {
  src: string;
  descr: string;
}

export type ScreenType = {
  screenType: string
}