import heroImage from '../../assets/img/hero/hero.jpg'

export default function Home() {
  return (
    <main className="title">
      <h1 className="title-head">Отель «Усадьба Лётчика»</h1>
      <h3 className="title-text">Тихое, спокойное и закрытое место для уединённого отдыха,
         со старинной, легендарной историей и прохладой от фруктового сада, расположенное по 
         улице Мичурина в Коктебеле в 5 минутах ходьбы от моря и центра.
      </h3>
      <img className="hero-image" src={heroImage} alt="koktebel overview" />
      <div className='home-footer'></div>
    </main>
  )
}