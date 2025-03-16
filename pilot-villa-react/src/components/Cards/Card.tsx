import { CardProps } from "../interface"

export default function Card( props: CardProps ) {
  return (
    <div>
      <img src={props.mainViewSrc} alt="" />
      <div>{props.title}</div>
    </div>
  )
}