import React from "react";
import MyPhoto from "./../../Static/Images/my-photo.png";
import TelegramIcon from "./../../Static/Images/telegram-icon.svg";
import InstagramIcon from "./../../Static/Images/instagram-icon.svg";
import VkIcon from "./../../Static/Images/vk-icon.svg";
import "./style.scss";

import { connect } from "react-redux";
import { changeTheme } from "./../../../Store/actions";

class Header extends React.Component {
  render() {
    return (
      <header className={"header theme_" + this.props.theme}>
        <div className="header__left-side transition_bg">
          <div className="container-mini">
            <img
              className="header__logo"
              src={MyPhoto}
              alt="Фото Ивана Смирнова"
            />
          </div>
        </div>
        <div className="header__right-side transition_bg">
          <div className="container">
            <div className="header__functions">
              <div className="switch-language">
                <div className="switch-language__subscription">Язык:</div>
                <button
                  className="switch-language__button"
                  onClick={() => {
                    console.log("Русский язык");
                  }}
                >
                  Русский
                </button>
                <div className="switch-language__slash">/</div>
                <button
                  className="switch-language__button switch-language__button_active"
                  onClick={() => {
                    console.log("Английский язык");
                  }}
                >
                  English
                </button>
              </div>
              <label className="switch-topic">
                <input
                  className="switch-topic__input"
                  type="checkbox"
                  value={this.props.theme === "dark"}
                  onChange={() => {
                    this.props.theme === "light"
                    ? this.props.changeTheme('dark')
                    : this.props.changeTheme('light')
                  }}
                />
                <div className="switch-topic__slider" />
              </label>
            </div>
            <h1 className="header__title">Иван Смирнов</h1>
            <div className="header__more-info">
              <div className="header__desired-position">
                Middle front-end developer
              </div>
              <div className="header__social-links">
                <a
                  href="https://teleg.run/ducker_t"
                  className="header__social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="header__telegram-icon"
                    src={TelegramIcon}
                    alt="Иконка Telegram"
                  />
                </a>
                <a
                  href="https://instagram.com/ducker_life"
                  className="header__social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="header__instagram-icon"
                    src={InstagramIcon}
                    alt="Иконка Instagram"
                  />
                </a>
                <a
                  href="https://vk.com/ducker_vk"
                  className="header__social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="header__vk-icon"
                    src={VkIcon}
                    alt="Иконка Vk"
                  />
                </a>
              </div>
            </div>
            <hr className="header__hr" />
            <div className="header__contacts">
              <div className="header__contact">
                <div className="header__contact-title">Расположение</div>
                <span className="header__contact-content header__contact-address">
                  Тольяти, Россия
                </span>
              </div>
              <div className="header__contact">
                <div className="header__contact-title">Телефон</div>
                <a
                  className="header__contact-content"
                  href="tel:+79377918200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  +7 (937)-791-82-00
                </a>
              </div>
              <div className="header__contact">
                <div className="header__contact-title">GitHub</div>
                <a
                  className="header__contact-content"
                  href="https://github.com/ducker-dev"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  github.com/ducker-dev
                </a>
              </div>
              <div className="header__contact">
                <div className="header__contact-title">Почта</div>
                <a
                  className="header__contact-content"
                  href="mailto:the.ivan.smirnov@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  the.ivan.smirnov@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    theme: state.theme
  }
};

const mapDispatchToProps = {
  changeTheme
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
