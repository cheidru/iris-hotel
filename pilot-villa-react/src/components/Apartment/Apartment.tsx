import MainCard from "../Cards/MainCard"
import { twoRoomAppart } from "../../services/data"
import { ModalProps, ScreenType } from "../../services/interface"
import Modal from "../Modal/Modal"
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
        <MainCard 
          {...twoRoomAppart}
          id="apartments"
          screen={props.screenType}
          setModal={setModalPic} />
    </main>
  )
}