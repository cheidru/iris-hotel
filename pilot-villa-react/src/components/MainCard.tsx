// import Card from "./Card"
import { CardProps } from "../services/interface"
import arrowBTN from "../assets/svg/arrow-left.svg"
import { useEffect, useState } from "react"  


export default function MainCard( props: CardProps ) {
  const [sliderPage, setSliderPage] = useState(0)
   
  const sliderContent = props.cards?.map((card, index) => 
    // <Card key={index} src={card.src} descr={card.descr} imagePos={index}/>
    <img className="gallery-image" key={index} src={card.src} alt={card.descr} />
  )

  const cardQTY = sliderContent?.length

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
        setSliderPage(prevPage => prevPage + 1)
      }
      console.log(sliderPage);
    }

  function shootModal() {
    const card = event?.target as HTMLElement
    // If clicked outside an image
    if (card.id === "card-title" || 
        card.id === "card-wrapper" || 
        card.id === props.id) return
    // Temporary set empty cardTitle
    let cardTitle = ''
    // Set title value if beside img Card has Title field, means title image is clicked
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
        slideNo: card.getAttribute('data-imagekey') as string,
        gallery: props.cards,
      }
    )}
  }
  
  return (
    <div className="main-card-container">
      <div className="main-card-title">
        <h2>{props.title}</h2>
        <div onClick={shootModal} id="title-card">
          {/* <Card src={props.src}
                title={props.descr}
                setModal={props.setModal} /> */}
          <img src={props.src} alt="title-image" />
        </div>
      </div>

      { props.screen == "mobile" ?
          // Slider
          <div className="slider-wrapper">
            <div style={{opacity: sliderPage > 0 ? "1" : "0"}} className="slider-btn left-btn" onClick={() => moveSlide('left')}>
              <img src={arrowBTN} alt="slider button left" />
            </div>
            <div className="slider-window">
              <div className="slider-card-wrapper" id={props.id} onClick={shootModal}>
                {sliderContent}
              </div>
            </div>
            <div style={{opacity: cardQTY && sliderPage < cardQTY - 1 ? "1" : "0"}}  className="slider-btn right-btn" onClick={() => moveSlide('right')}>
                <img src={arrowBTN} alt="slider button right" />
              </div>
            
          </div> :
          // Grid
          <div className="grid-wrapper" id={props.id} onClick={shootModal}>
            {sliderContent}
          </div>
      }
      {props.video && 
        <div>
          {props.video?.descr && <div>{props.video?.descr}</div>}
          <div className="vk-video">
            <iframe src={props.video.src} width={props.video.width} height={props.video.height} allow={props.video.allow}></iframe>
          </div>
        </div>
      }
    </div>
  )
}