import burger from './assets/svg/burger-menu.svg'

export default function BurgerMenu() {
  return (
    <>
          <div className="burger-btn-wrapper">
            <img src={burger} className="burger-btn" alt="burger logo" />
          </div>
    </>
  )
}