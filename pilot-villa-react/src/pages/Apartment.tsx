import Card from "../components/Card"
import { twoRoomAppart } from "../services/data"
import { ModalProps, ScreenType } from "../services/interface"
import Modal from "../components/Modal"
import { useState } from "react"

export default function Apartment( props: ScreenType ) {
  const [modalPic, setModalPic] = useState({
        src: undefined,
        title: undefined,
        modalOn: false
      } as ModalProps)
      
  return (
    <main>
        {modalPic.modalOn && <Modal 
                                src={modalPic.src} 
                                title={modalPic.title}
                                setModal={setModalPic} />}
        <Card 
          {...twoRoomAppart}
          id="apartments"
          screen={props.screenType}
          setModal={setModalPic} />
    </main>
  )
}