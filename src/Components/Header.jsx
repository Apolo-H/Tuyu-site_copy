import React from "react";
// Import dos icon do Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faHeadphones } from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faInstagram,
  faYoutube,
  faTiktok,
  faFacebook,
  faWeibo,
  faBilibili,
} from "@fortawesome/free-brands-svg-icons";
library.add(
  faTwitter,
  faInstagram,
  faYoutube,
  faTiktok,
  faFacebook,
  faWeibo,
  faBilibili,
  faHeadphones
);
//import dos arquivos do css e script
import "../style/Header.css";
import useScroll from "../script/script";
import "../script/script";

const Header = () => {
  const scrolled = useScroll(651);

  return (
    <header className={scrolled ? "header_activate" : null} id="header">
      <div className="header__content">
        <div className="header__logo">
          <a href="#" className="header__logo-img-link">
            <img
              src="/logo__tuyu.png"
              alt="Logo"
              className="header__logo-img"
            />
          </a>
        </div>
        <nav className="header__navegation">
          <ul className="header__navegation-list">
            <li className="header__navegation-item">
              <a href="#">
                <FontAwesomeIcon icon={["fab", "twitter"]} />
              </a>
            </li>
            <li className="header__navegation-item">
              <a href="#">
                <FontAwesomeIcon icon={["fab", "twitter"]} />
                <p>
                  <small>STAFF</small>
                </p>
              </a>
            </li>
            <li className="header__navegation-item">
              <a href="#">
                <FontAwesomeIcon icon={["fab", "instagram"]} />
                <p>
                  <small>Rei</small>
                </p>
              </a>
            </li>
            <li className="header__navegation-item">
              <a href="#">
                <FontAwesomeIcon icon={["fab", "youtube"]} />
              </a>
            </li>
            <li className="header__navegation-item">
              <a href="#">
                <FontAwesomeIcon icon={["fab", "tiktok"]} />
              </a>
            </li>
            <li className="header__navegation-item">
              <a href="#">
                <FontAwesomeIcon icon="headphones" />
              </a>
            </li>
            <li className="header__navegation-item">
              <a href="#">
                <FontAwesomeIcon icon={["fab", "facebook"]} />
              </a>
            </li>
            <li className="header__navegation-item">
              <a href="#">
                <FontAwesomeIcon icon={["fab", "weibo"]} />
              </a>
            </li>
            <li className="header__navegation-item">
              <a href="#">
                <FontAwesomeIcon icon={["fab", "bilibili"]} />
              </a>
            </li>

            <li className="header__lang lang">
              <a href="/">JP</a>
              <span>|</span>
              <p>EN</p>
            </li>
            <li className="header__navegation-button">
              <a href="/">
                <img src="/ico_menu.png" alt="Button" />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
