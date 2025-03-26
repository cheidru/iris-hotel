import burger from './assets/svg/burger-menu.svg'
import { BurgerProps } from '../../services/interface'

export default function BurgerMenu( props: BurgerProps ) {
  return (
    <>
          <div className="burger-btn-wrapper" onClick={props.toggleBurgerMnu}>
            <img src={burger} className="burger-btn" alt="burger logo" />
          </div>

          {props.burgerMnuOn && 
          <div>
            
          </div>          
          }
    </>
  )
}