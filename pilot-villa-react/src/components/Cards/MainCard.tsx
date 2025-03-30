import Card from "./Card"
import { CardProps } from "../../services/interface"
import arrowBTN from "../../assets/svg/arrow-left.svg"
import { useEffect, useState } from "react"


export default function MainCard( props: CardProps ) {
  const [sliderPage, setSliderPage] = useState(0)

  useEffect(() => {
    if (props.screen == "mobile") {
      const cardContainer = document.getElementById(props.id as string) as HTMLElement
      const shiftDistance = sliderPage * 30
      console.log('sliderPage = ', sliderPage, 'shiftDistance = ', shiftDistance);
      cardContainer.style.transform = `translateX(-${shiftDistance}rem)`
    }
  }, [sliderPage, props.screen, props.id]
)

  function moveSlide(direction: string) {
      if (direction === 'left' && sliderPage > 0) {
        setSliderPage(prevPage => prevPage - 1)
      } else if (direction === 'right' && cardQTY && sliderPage < cardQTY -1) {
        console.log('cardQTY = ', cardQTY, 'sliderPage = ', sliderPage);
        setSliderPage(prevPage => prevPage + 1)
      }
      console.log(sliderPage);
    }
 
  const sliderContent = props.cards?.map((card, index) => 
    <Card key={index} src={card.src} descr={card.descr}/>
  )

  const cardQTY = sliderContent?.length

  function shootModal() {
    const card = event?.target as HTMLElement
    console.log('card.id = ', card.id);
    if (card.id === "card-title" || 
        card.id === "card-wrapper" || 
        card.id === props.id) return
    // Set title value if besides img Card has Title field
    let cardTitle = ''
    if (card.parentElement?.children) {
        cardTitle = card.parentElement?.children.length > 1 && 
        card.parentElement?.parentElement?.id !== 'title-card' ?
        card.parentElement?.children[1].textContent as string : ''
    }

    if (props.setModal) {
      props.setModal({
        src: card.getAttribute('src') as string,
        title: cardTitle,
        modalOn: true,
      }
    )}
  }
  
  return (
    <>
      <div className="main-card-title">
        <h2>{props.title}</h2>
        <div onClick={shootModal} id="title-card">
          <Card src={props.src}
                title={props.descr}
                setModal={props.setModal} />
        </div>
      </div>

      { props.screen == "mobile" ?
          // Slider
          <div className="slider-wrapper">
            <div className="slider-btn left-btn" onClick={() => moveSlide('left')}><img src={arrowBTN} alt="slider button left" /></div>
            <div className="slider-window">
              <div className="slider-card-wrapper" id={props.id} onClick={shootModal}>
                {sliderContent}
              </div>
            </div>
            <div className="slider-btn right-btn" onClick={() => moveSlide('right')}><img src={arrowBTN} alt="slider button right" /></div>
          </div> :
          // Grid
          <div className="grid-wrapper" id={props.id} onClick={shootModal}>
            {sliderContent}
          </div>
      }
    </>
  )
}