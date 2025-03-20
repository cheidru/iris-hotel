import MainCard from "../Cards/MainCard"
import { ScreenType } from "../../services/interface"
import { cottageJapan, cottageBamboo } from "../../services/data"

export default function Cottage( props: ScreenType ) {
  return (
    <main>
        <MainCard 
          {...cottageJapan}
          screen={props.screenType} />
        <MainCard 
          {...cottageBamboo}
          screen={props.screenType} />
    </main>
  )
}