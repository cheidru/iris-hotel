import Card from "../components/Card"
import { ScreenType } from "../services/interface"
// import { ModalProps, ScreenType } from "../services/interface"
import { cottageSpain, cottageWood, cottageBamboo } from "../services/data"
// import { useState } from "react"
// import Modal from "../components/Modal"

export default function Cottage( props: ScreenType ) {
    // const [modalPic, setModalPic] = useState({
    //       src: undefined,
    //       title: undefined,
    //       slideNo: undefined,
    //       gallery: undefined,
    //       modalOn: false
    //     } as ModalProps)

  return (
    <main>
        {/* {modalPic.modalOn && <Modal 
                                src={modalPic.src} 
                                title={modalPic.title}
                                slideNo={modalPic.slideNo}
                                gallery={modalPic.gallery}
                                setModal={setModalPic} />} */}

        <h3>Гостям предлагается размещение в 3-х коттеджах под ключ 
          с отдельными кухнями и в двухкомнатных апартаментах. 
          Каждый коттедж для одной отдельной семьи. 
          У каждого коттеджа есть своя территория с зоной отдыха, 
          своя веранда-кухня-гостиная, комфортабельные номера.</h3>

        <Card 
          {...cottageSpain}
          id="spn"
          screen={props.screenType}
          // setModal={setModalPic} 
          />
        <Card 
          {...cottageBamboo}
          id="bam"
          screen={props.screenType}
          // setModal={setModalPic} 
          />
        <Card 
          {...cottageWood}
          id="wod"
          screen={props.screenType}
          // setModal={setModalPic} 
          />
    </main>
  )
}