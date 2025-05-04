import { CardProps } from "../services/interface"

export default function Card( props: CardProps ) {
  return (
    <div className="card-wrapper" id="card-wrapper">
      <img src={props.src} data-imagekey={props.imagePos} alt="card image" />
      {props.title && <div id="card-title">{props.title}</div>}
    </div>
  )
}