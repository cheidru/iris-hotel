import Card from "./Card"
import { CardProps } from "../../services/interface"


export default function MainCard( props: CardProps ) {

 
  const sliderContent = props.cards?.map((card, index) => 
    <Card key={index} src={card.src} descr={card.descr} />
  )
  
  return (
    <>
      <div className="main-card-title">
        <h2>{props.title}</h2>
        <Card src={props.src}
            title={props.descr} />
      </div>

      { props.screen == "mobile" ?
          <div className="slider-wrapper">
            <div className="slider">
              {sliderContent}
            </div>
          </div> :
          <div className="grid-wrapper">
            {sliderContent}
          </div>
      }


    </>

  )
}