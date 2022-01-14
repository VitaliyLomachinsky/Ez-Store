import s from "../Header/Header.module.css";
import shop_img from "../../Images/avd437689ef3a02914ac1.png";
import basket_img from "../../Images/shopping_cart_PNG10.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className={s.header}>
      <div className={s.container}>
        <Link to="/">
          <div className={s.logo_div}>
            <img src={shop_img} className={s.img_logo}></img>
            <div className={s.text_logo}>
              <div className={s.title}>Ez Store</div>
              <div className={s.little_title}>Cheap video game service</div>
            </div>
          </div>
        </Link>
        <div className={s.basket}>
          <Link to="/basket">
            <div className={s.basket_inside}>
              <div className={s.price}>
                782<p className={s.valut}> $</p>
              </div>
              <div className={s.basket_btn}>
                <img className={s.basket_icon} src={basket_img}></img>
                <p className={s.number}> 3</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
