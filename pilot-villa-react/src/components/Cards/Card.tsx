import { CardProps } from "../../services/interface"

export default function Card( props: CardProps ) {
  return (
    <div>
      <img src={props.src} alt="" />
      <div>{props.title}</div>
    </div>
  )
}