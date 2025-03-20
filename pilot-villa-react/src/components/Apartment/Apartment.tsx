import MainCard from "../Cards/MainCard"
import { twoRoomAppart } from "../../services/data"
import { ScreenType } from "../../services/interface"

export default function Apartment( props: ScreenType ) {
  return (
    <main>
        <MainCard 
          {...twoRoomAppart}
          screen={props.screenType} />
    </main>
  )
}