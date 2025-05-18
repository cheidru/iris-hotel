import { Outlet } from "react-router-dom"
import Header from "./Header"
import { ScreenType } from "../services/interface"


export default function Layout( props: ScreenType ) {
  return (
    <>
        <Header screenType={props.screenType} />
        <Outlet />
    </>

  )
}