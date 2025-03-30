import { ModalProps } from "../../services/interface"

export default function Modal(props: ModalProps) {
  function turnModalOff() {
    if (props.setModal) {
      props.setModal({
        src: undefined,
        title: undefined,
        modalOn: false,
      }
    )}
  }

  return (
    <div className="modal-power-layer" onClick={turnModalOff}>
      <div className="modal-wrapper" onClick={turnModalOff}>
        <img src={props.src} alt="modal image" />
        <div className="modal-text">{props.title}</div>
      </div>
    </div>
  )
}