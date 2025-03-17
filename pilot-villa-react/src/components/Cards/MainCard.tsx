import Card from "./Card"
import { CardProps } from "../../services/interface"
import {useEffect, useState} from "react"

export default function MainCard( props: CardProps ) {
  const [winWidth, setWinWidth] = useState(getWinWidth())

  function getWinWidth() {
    return window.innerWidth
  }

  useEffect(() => {
    function handleWinResize() {
      setWinWidth(getWinWidth())
    }

    window.addEventListener('resize', handleWinResize)

    return () => window.removeEventListener('resize', handleWinResize)
  }, [])
 
  const sliderContent = props.cards?.map((card) => 
    <Card src={card.src} descr={card.descr} />
  )
  
  return (
    <>
      <h2>{props.title}</h2>
      <Card src={props.src}
            title={props.descr} />
      { winWidth < 700 ?
          <div className="slider-wrapper">
            <h2>winWidth more than 700</h2>
            <div className="slider">
              {sliderContent}
            </div>
          </div> :
          <div className="grid-wrapper">
              <h2>winWidth less than 700</h2>
            {sliderContent}
          </div>
      }


    </>

  )
}