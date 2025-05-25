import { CardProps } from "../services/interface"

export default function Card( props: CardProps ) {
  return (
    <div className="card-wrapper" id={props.id}>
      {props.screen === "mobile" ? <h2>{props.title}</h2> : undefined}
      <img src={props.src} alt="card image" />
      <div className="descr-wrapper">
        {props.screen !== "mobile" ? <h2>{props.title}</h2> : undefined}
        <div className="descr-text">{props.descr}</div>
        <button>Больше информации</button>
      </div>
    </div>
  )
}