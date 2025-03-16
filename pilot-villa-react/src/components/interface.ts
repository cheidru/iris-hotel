export type CardProps = {
  title: string;
  mainViewSrc: string;
  mainDescr?: string; 
  cards?: CardData[];
}

type CardData = {
  src: string;
  descr: string;
}