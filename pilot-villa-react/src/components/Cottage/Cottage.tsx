import MainCard from "../Cards/MainCard"
import { ModalProps, ScreenType } from "../../services/interface"
import { cottageJapan, cottageBamboo } from "../../services/data"
import { useState } from "react"
import Modal from "../Modal/Modal"

export default function Cottage( props: ScreenType ) {
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
          {...cottageJapan}
          id="japan"
          screen={props.screenType}
          setModal={setModalPic} />
        <MainCard 
          {...cottageBamboo}
          id="bamboo"
          screen={props.screenType}
          setModal={setModalPic} />
    </main>
  )
}