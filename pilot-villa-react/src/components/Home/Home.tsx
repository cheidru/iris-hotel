import heroImage from '../../assets/img/hero/hero.jpg'

export default function Home() {
  return (
    <main>
      <h1 className="title">Отель "Усадьба лётчика"</h1>
      <img className="hero-image" src={heroImage} alt="koktebel overview" />
  </main>
  )
}