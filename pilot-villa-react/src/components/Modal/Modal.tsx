import { useEffect, useState } from "react"
import { ModalProps } from "../../services/interface"

export default function Modal(props: ModalProps) {
  const[touchStart, setTouchStart] = useState(0)
  const[touchEnd, setTouchEnd] = useState(0)
  // const[slideNumber, setSlideNumber] = useState(props.slideNo)

  function swipeStart(event: PointerEvent) {
    setTouchStart(event.clientX)
    console.log('start', event.clientX);
  }

  function swipeEnd(event: PointerEvent) {
    setTouchEnd(event.clientX)
    console.log('end', event.clientX);
  }

  function swipe() {
    if (touchStart - touchEnd > 10) {
      console.log('right swipe =', props);
    } else if (touchEnd - touchStart > 10) {
      console.log('left swipe =', props);
    }
  }

  useEffect(() => swipe(), [touchEnd, touchStart])

  useEffect(() => {
    toggleBodyScroll()
    return() => toggleBodyScroll()
  }, [])

  function turnModalOff() {
    if (props.setModal) {
      props.setModal({
        src: undefined,
        title: undefined,
        modalOn: false,
      }
    )} 
  }

  function toggleBodyScroll() {
    document.body.style.overflow = document.body.style.overflow === "hidden" ? "unset" : "hidden"
  }

  return (
    <div className="modal-power-layer" onClick={turnModalOff}>
      <div className="modal-wrapper">
        <img src={props.src} alt="modal image" onClick={turnModalOff} onPointerDown={() => swipeStart(event as PointerEvent)} onDragEnd={() => swipeEnd(event as PointerEvent)}/>
        <div className="modal-text">{props.title}</div>
      </div>
    </div>
  )
}