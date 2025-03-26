import heroImage from '../../assets/img/hero/hero.jpg'

export default function Home() {
  return (
    <main className="title">
      <h1 className="title-head">Отель «Усадьба Лётчика»</h1>
      <h3 className="title-text">Уникальные условия для отдыха позволят тихо 
        и уединенно отдохнуть каждой семье в своём отдельном коттедже или в апартаментах</h3>
      <img className="hero-image" src={heroImage} alt="koktebel overview" />
      <div className='home-footer'></div>
    </main>
  )
}