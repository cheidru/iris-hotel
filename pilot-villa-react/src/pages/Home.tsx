import heroImage from '../assets/img/hero/hero.jpg'

export default function Home() {
  return (
    <main className="title">
      <div className="title-block">
        <h1 className="title-head">«Усадьба Лётчика»</h1>
        <h3 className="title-text">Уединённый семейный отдых в Коктебеле на ул. 
          Мичурина в трех минутах ходьбы от моря.
        </h3>
        <h4 className="title-text-small">Тихое и закрытое место для уединенного отдыха в отдельных семейных коттеджах.</h4>
      </div>
      <img className="hero-image" src={heroImage} alt="koktebel overview" />
      <div className='home-footer'></div>
    </main>
  )
}