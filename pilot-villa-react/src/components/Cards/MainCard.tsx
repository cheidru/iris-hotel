import Card from "./Card"
import { CardProps } from "../interface"

export default function MainCard( props: CardProps ) {
  const sliderContent = props.cards?.map(() => (
    <Card />
  )
 )
  return (
    <>
      <h2>{props.title}</h2>
      <Card mainViewSrc={props.mainViewSrc}
            title={props.title} />
      <div className="slider-wrapper" >
        <div className="slider">
          {sliderContent}
        </div>
      </div>
    </>

  )
}