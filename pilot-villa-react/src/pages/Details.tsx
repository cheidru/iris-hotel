import { useParams } from "react-router-dom"
import MainCard from "../components/MainCard";

export default function Details() {
  const param = useParams();
  return (
    <main>
      <MainCard
       />
      <h1>Detailed description about {param.id}</h1>
    </main>
  )
}