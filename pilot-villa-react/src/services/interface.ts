export type CardProps = {
  title?: string;
  src: string;
  descr?: string; 
  cards?: CardData[];
}

type CardData = {
  src: string;
  descr: string;
}