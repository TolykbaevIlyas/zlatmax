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
import CatalogKnives1 from "./assets/img/CatalogKnives1.png";
import CatalogKnives2 from "./assets/img/CatalogKnives2.png";
import CatalogKnives3 from "./assets/img/CatalogKnives3.png";
import CatalogKnives4 from "./assets/img/CatalogKnives4.png";
import CatalogKnives5 from "./assets/img/CatalogKnives5.png";
import CatalogKnives6 from "./assets/img/CatalogKnives6.png";
import ProductSection from "./components/ProductSection";
import NewProducts from "./components/NewProducts";
import ArticleKnives from "./assets/img/ArticleKnives.png";
import Liteshot from "./assets/img/Liteshot.png";
import ProductCard from "./components/ProductCard";
import LIgthIcon from "./assets/img/LIgthIcon.png";
import PhoneIcon from "./assets/img/PhoneIcon.js";
import ProfileIcon from "./assets/img/ProfileIcon.js";
import BurgerIcon from "./assets/img/BurgerIcon.js";

function App() {
  const articles = [
    { name: "Все о ножах: как правильно выбрать", img: ArticleKnives },
    { name: "Все о ножах: как правильно выбрать", img: ArticleKnives },
    { name: "Все о ножах: как правильно выбрать", img: ArticleKnives },
    { name: "Все о ножах: как правильно выбрать", img: ArticleKnives },
  ];
  const catalog = [
    { name: "Каталог ножей", img: CatalogKnives1 },
    { name: "Среднеклинковое оружие", img: CatalogKnives2 },
    { name: "Длинноклинковое оружие", img: CatalogKnives3 },
    { name: "Сувенирные изделия", img: CatalogKnives4 },
    { name: "Сопутствующие товары", img: CatalogKnives5 },
    { name: "Ножевая мастерская", img: CatalogKnives6 },
  ];

  return (
    <>
      <header className="header">
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
          <nav className="header_nav-mobile">
            <PhoneIcon />
            <ProfileIcon />
            <FavouriteIcon color="white" />
            <CartIcon color="white" />
            <BurgerIcon />
          </nav>
          <div className="header_middle-mobile">
            <div className="header_logo">
              <img src={Logo} alt="Logo" />
            </div>
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
        <section className="catalog">
          <div className="catalog_content container">
            {catalog.map((item) => (
              <article className="catalog_item">
                <div className="catalog_item-left">
                  <h3 className="catalog_name">{item.name}</h3>
                  <hr
                    align="left"
                    width="50"
                    size="4"
                    className="catalog-line text-color-gold"
                  />
                  <ul className="catalog_list">
                    <li className="catalog_list-item">Разделочные</li>
                    <li className="catalog_list-item">Туристические</li>
                    <li className="catalog_list-item">Охотничьи</li>
                  </ul>
                </div>
                <img
                  src={item.img}
                  alt="Catalog img"
                  className="catalog_item-img"
                />
              </article>
            ))}
          </div>
        </section>
        <ProductSection name={"Хиты продаж"} />
        <NewProducts />
        <ProductSection name={"Акции"} />
        <ProductSection name={"Акции"} />
        <NewProducts />
        <ProductSection name={"Акции"} />
        <ProductSection name={"Акции"} />
        <section className="articles container">
          <h3 className="article_title">Наши статьи</h3>
          <div className="articles_content">
            {articles.map((article) => (
              <div className="articles_item">
                <img src={article.img} alt="Knives" />
                <div className="article_text">
                  <h5 className="article_name">{article.name}</h5>
                  <p className="article_date">24.07.2019</p>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="lighting_category container">
          <article className="lighting_content">
            <div className="lighting_item">
              <div className="lighting_text">
                <div>
                  <h4 className="lighting_main-text">Тактические фонари</h4>
                  <hr className="lighting_line" />
                </div>
                <p className="lighting_additional-text">
                  Lorem;alskjdfkajsd;lkfjalksjd;fl
                  Lorem;alskjdfkajsd;lkfjalksjd;fls
                </p>
                <button className="button-main">Подробнее</button>
              </div>
              <img src={Liteshot} alt={"lightShot"} className="lighting_img" />
            </div>
            <div className="lighting_item">
              <div className="lighting_text">
                <div>
                  <h4 className="lighting_main-text">Тактические фонари</h4>
                  <hr className="lighting_line" />
                </div>
                <p className="lighting_additional-text">
                  Lorem;alskjdfkajsd;lkfjalksjd;fl
                  Lorem;alskjdfkajsd;lkfjalksjd;fl
                </p>
                <button className="button-main">Подробнее</button>
              </div>
              <img src={Liteshot} alt={"lightShot"} className="lighting_img" />
            </div>
          </article>
        </section>
        <section className="product">
          <h3 className="product-title container">Фонари</h3>
          <article className="product_content container">
            {[1, 2, 3, 4].map(() => (
              <ProductCard icon={LIgthIcon} />
            ))}
          </article>
        </section>
      </main>
      <footer className="footer">
        <div className="footer_top-bar">
          <div className="footer_top-content container">
            <h4 className="footer_top-title">
              Златоустовские ножи интернет-магазин "ЗЛАТМАКС"
            </h4>
            <p className="footer_top-text">
              Наш интернет-магазин "ЗЛАТМАКС" предлагает Вам ножи очень высокого
              качества из города оружейников - Златоуста. Златоустовские ножи
              известны и популярны среди потребителей как на российским рынке,
              так и за рубежом: ножи охотничьи, хозяйственные, туристические,
              рыбацкие, складные и метательные. Нож Златоуста - это идеальный
              друг и товарищ в повседневной жизни и в экстремальных ситуациях.
              На многую продукцию распространяется гарантия до 10 лет - это один
              из главных показателей качества. Для Вас на нашем сайте "zlatmax"
              предложен огромный ассортимент Златоустовских ножей. Наши
              менеджеры помогут определиться и подобрать самый лучший
              Златоустовский нож, ориентируясь на Ваши пожелания.
            </p>
          </div>
        </div>
        <div className="footer_middle-bar">
          <div className="footer_middle-content container">
            <ul className="footer_middle-list">
              <p className="middle_list-title">Информация</p>
              <li className="middle_list-item">
                Златоустовкие ножи в Москве и Московкой области
              </li>
              <li className="middle_list-item">Ножевые стали</li>
              <li className="middle_list-item">О нас</li>
              <li className="middle_list-item">Условия оплаты и доставки</li>
              <li className="middle_list-item">Политика конфиденциальности</li>
            </ul>
            <ul className="footer_middle-list">
              <p className="middle_list-title">Служба поддержки</p>
              <li className="middle_list-item">Контканая информация</li>
              <li className="middle_list-item">Возврат товара</li>
              <li className="middle_list-item">Карта сайта</li>
            </ul>
            <ul className="footer_middle-list">
              <p className="middle_list-title">Дополнительно</p>
              <li className="middle_list-item">Подарочные сертификаты</li>
              <li className="middle_list-item">Парнеры</li>
              <li className="middle_list-item">ТОвары со скидкой</li>
            </ul>
            <ul className="footer_middle-list">
              <p className="middle_list-title">Личный кабинет</p>
              <li className="middle_list-item">Личный кабинет</li>
              <li className="middle_list-item">История заказов</li>
              <li className="middle_list-item">Мои закладки</li>
              <li className="middle_list-item">Рассылки новостей</li>
            </ul>
          </div>
          <hr className="container" />
          <div className="footer_middle-content container">
            <ul className="footer_middle-list">
              <p className="middle_list-title">Контакты</p>
              <li className="middle_list-item">8 800 777 49 67</li>
              <li className="middle_list-item">Пн-ПТ</li>
              <li className="middle_list-item">Златоуст ул.Шоссейная</li>
              <li className="middle_list-item">info@mgail.ru</li>
            </ul>
            <ul className="footer_middle-list">
              <p className="middle_list-title">Полезные ссылки</p>
              <li className="middle_list-item">Способы оплаты и доставки</li>
            </ul>
            <ul className="footer_middle-list">
              <p className="middle_list-title">Наша гарантия</p>
              <li className="middle_list-item">
                Недовольны своей покупкой? Вы можете вернуть ее в течении 30
                дней с даты получения, согласно{" "}
                <p className="text-color-gold">нашим правилам</p>
              </li>
            </ul>
            <ul className="footer_middle-list">
              <p className="middle_list-title">Новостная рассылка</p>
              <li className="middle_list-item">Подпишитесь прямо сейчас</li>
              <div className="middle_list-send">
                <input
                  type="text"
                  id="fname"
                  name="fname"
                  className="middle_list-input"
                  placeholder="Введите ваш email"
                />
                <button className="button-main">></button>
              </div>
            </ul>
          </div>
          <hr className="container" />
          <div className="footer_bottom-bar container">
            <p className="footer-bottom-text">
              Все материалы, размещенные на сайте, носят справочный характер и
              не являются публичной офертой, определяемойположениями Статьи 437
              Гражданского кодекса Российской Федерации. При копировании
              материалов гиперссылка на www.zlatmax.ru обязательна!
            </p>
            <p className="footer-bottom-text">
              Златоустовские ножи www.zlatmax.ru ©
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
