import React, { useState } from "react";
import logo from "./../img/logo.svg";
import { Button } from "./Button";

export const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="App-header">
      <div className="header-container">
        <div className="App-header-left">
          <img src={logo} className="App-logo" alt="logo" />
        </div>

        <ul className="App-header-nav">
          <li>
            <a href="#">Samochody</a>
          </li>
          <li>
            <a href="#">Jazda próbna</a>
          </li>
          <li>
            <a href="#">Oferta</a>
          </li>
          <li>
            <a href="#">Salony Cupra</a>
          </li>
        </ul>
        <div className="App-header-right">
          <span className="App-header-right-number">+48 58 506 65 65</span>
          <Button type="light">
            <a href="#">Zapytaj o oferte</a>
          </Button>
          <Button type="dark">
            <a href="#">Umów jazdę próbną</a>
          </Button>
        </div>

        <div className="App-header-right-m" onClick={() => setShowMenu(true)}>
          &equiv;
        </div>
        <div className={"showMenu-" + showMenu}>
          <div className="close-btn" onClick={() => setShowMenu(false)}>
            &#x2715;
          </div>
          <ul className="App-header-links">
            <li>
              <a href="#">Samochody</a>
            </li>
            <li>
              <a href="#">Jazda próbna</a>
            </li>
            <li>
              <a href="#">Oferta</a>
            </li>
            <li>
              <a href="#">Salony Cupra</a>
            </li>
            <li className="App-header-right-number">+48 58 506 65 65</li>
            <li>
              <Button type="light">
                <a href="#">Zapytaj o oferte</a>
              </Button>
            </li>
            <li>
              <Button type="dark">
                <a href="#">Umów jazdę próbną</a>
              </Button>
            </li>
          </ul>
        </div>
      </div>
      <div className="App-header-hero">
        <div className="hero-container">
          <div className="App-header-hero-text">
            <div className="App-header-hero-text-subtitle">CUPRA Formentor</div>
            <div className="App-header-hero-text-title">
              Wejdź do świata Cupra. Poznaj prawdziwą moc i sportowego ducha
              marki.
            </div>
            <Button type="sand">Ruszaj na jazdę testową</Button>
          </div>
        </div>
      </div>
    </header>
  );
};
