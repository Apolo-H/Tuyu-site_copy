import React from "react";
import Logo from "../assets/images/logo__tuyu.png";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faTwitter,
  faInstagram,
  faYoutube,
  faTiktok,
  faFacebook,
  faWeibo,
  faBilibili,
} from "@fortawesome/free-brands-svg-icons";

import { faHeadphones } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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

import useScroll from "../script/script";
import "../style/fonts.css";
import "../style/Header.css";

const Header = () => {
  const scrolled = useScroll(1920); // Variável que armazena até quantos PX ela ativara.

  return (
    <header id="header">
      <div className="header__content">
        <div className="header__logo">
          <a
            href="/"
            className={
              scrolled // Retorna um valor de uma condição de um valor Booleano, " True or False ". ? = True, : = False.
                ? "scrolled"
                : "header__logo-img-link"
            }
          >
            <img src={Logo} alt="Logo" className="header__logo-img" />
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
            <li className="header__navegation-lang lang">
              <a href="/">JP</a>
              <span>|</span>
              <p>ENG</p>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
