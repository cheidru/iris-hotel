import { CardProps } from "../../services/interface"

export default function Card( props: CardProps ) {
  return (
    <div className="card-wrapper">
      <img src={props.src} alt="card image" />
      {props.title && <div>{props.title}</div>}
    </div>
  )
}