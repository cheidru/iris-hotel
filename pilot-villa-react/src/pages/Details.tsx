import { useParams } from "react-router-dom"

export default function Details() {
  const param = useParams();
  return (
    <main>
      <h1>Detailed description about {param.id}</h1>
    </main>
  )
}