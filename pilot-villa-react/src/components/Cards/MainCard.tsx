import Card from "./Card"
import { CardProps } from "../../services/interface"
import arrowBTN from "../../assets/svg/arrow-left.svg"
import { useEffect, useState } from "react"


export default function MainCard( props: CardProps ) {
  const [sliderPage, setSliderPage] = useState(0)

  useEffect(() => {
    
  }, [sliderPage]
)

  function moveSlide(direction: string) {
      if (direction === 'left' && sliderPage > 0) {
        setSliderPage(prevPage => prevPage - 1)
      } else if (direction === 'right' && cardQTY && sliderPage < cardQTY) {
        setSliderPage(prevPage => prevPage + 1)
      }
      console.log(sliderPage);
    }
 
  const sliderContent = props.cards?.map((card, index) => 
    <Card key={index} src={card.src} descr={card.descr} />
  )

  const cardQTY = sliderContent?.length
  
  return (
    <>
      <div className="main-card-title">
        <h2>{props.title}</h2>
        <Card src={props.src}
            title={props.descr} />
      </div>

      { props.screen == "mobile" ?
          // Slider
          <div className="slider-wrapper">
            <div className="slider-btn left-btn" onClick={() => moveSlide('left')}><img src={arrowBTN} alt="slider button left" /></div>
            <div className="slider-window">
              <div className="slider-card-wrapper">
                {sliderContent}
              </div>
            </div>
            <div className="slider-btn right-btn" onClick={() => moveSlide('right')}><img src={arrowBTN} alt="slider button right" /></div>
          </div> :
          // Grid
          <div className="grid-wrapper">
            {sliderContent}
          </div>
      }


    </>

  )
}