import "./App.css";
import Logo from "./assets/img/Logo.png";
import LocationIcon from "./assets/img/LocationIcon";
import FavouriteIcon from "./assets/img/FavouriteIcon";
import CartIcon from "./assets/img/CartIcon";
import PromoProgressBar from "./assets/img/PromoProgressBar.png";
import PromoIcon1 from "./assets/img/PromoIcon1";
import PromoIcon2 from "./assets/img/PromoIcon2";
import PromoIcon3 from "./assets/img/PromoIcon3";
import PromoIcon4 from "./assets/img/PromoIcon4";

function App() {
  return (
    <>
      <header>
        <div className="header_top-bar">
          <nav className="header_nav container">
            <ul className="header_nav-list">
              <li className="header_nav-item">О нас</li>
              <li className="header_nav-item">Оплата и доставка</li>
              <li className="header_nav-item">Новости</li>
              <li className="header_nav-item">Контакты</li>
            </ul>
            <button className="header_nav-button">Личный кабинет</button>
          </nav>
          <div className="header_middle-bar-wrapper">
            <div className="header_middle-bar container">
              <div className="header_logo">
                <img src={Logo} alt="Logo" />
              </div>
              <div class="header_search">
                <input
                  type="text"
                  class="header_search-input"
                  placeholder="Поиск"
                />
              </div>
              <div className="header_contacts">
                <ul className="header_contacts-list">
                  <li className="header_contacts-item">
                    <LocationIcon />
                    <span className="header_location">Москва</span>
                  </li>
                  <li className="header_contacts-item">
                    <span className="header_number">8-800-777-49-67</span>
                    <a
                      className="header_callback text-color-gold "
                      href="8-800-777-49-67"
                    >
                      Заказать звонок
                    </a>
                  </li>
                  <li className="header_contacts-item">
                    <div className="header_favourite">
                      <FavouriteIcon />
                    </div>
                  </li>
                  <li className="header_contacts-item">
                    <div className="header_cart">
                      <CartIcon />
                    </div>
                    <div className="header_cart-info">
                      <span className="header_cart-price">0 р.</span>
                      <span className="header_cart-buy text-color-gold ">
                        Оформить заказ
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="header_bottom-bar container">
            <ul className="header_menu">
              <li className="header_menu-item">Каталог ножей</li>
              <li className="header_menu-item">Клинковое оружие</li>
              <li className="header_menu-item">Сувенирные изделия</li>
              <li className="header_menu-item"> Фонари ARMYTEK</li>
              <li className="header_menu-item">Сопутствующие товары</li>
            </ul>
          </div>
        </div>
      </header>
      <main>
        <section className="promo">
          <div className="promo_content container">
            <div className="promo_item promo_text">
              <h1 className="promo_main-text">
                Интернет магазин сертифицированных златоустовских ножей
              </h1>
              <p className="promo_additional-text">
                Добро пожаловать на официальный сайт «ЗЛАТМАКС»! В нашем
                магазине представлен наиболее широкий выбор Златоустовских ножей
                от Златоустовских Оружейных Фабрик и компаний, мы являемся
                официальными поставщиками.
              </p>
              <button className="button-main">Подробнее</button>
              <img
                src={PromoProgressBar}
                alt="Promo Progress Bar"
                className="promo_progress-bar"
              />
            </div>
            <div className="promo_item promo_sertificates">
              <div className="promo_sertificates-item">
                <PromoIcon1 />
                <span className="sertificates_item-text">
                  Гарантия 100% возврата денежных средств
                </span>
              </div>
              <div className="promo_sertificates-item">
                <PromoIcon2 />
                <span className="sertificates_item-text">
                  Доставка по России, Казахстану и Белоруссии
                </span>
              </div>
              <div className="promo_sertificates-item">
                <PromoIcon3 />
                <span className="sertificates_item-text">
                  Возможность оформление заказа без регистрации.
                </span>
              </div>
              <div className="promo_sertificates-item">
                <PromoIcon4 />
                <span className="sertificates_item-text">
                  Скидки постоянным покупателям.{" "}
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
