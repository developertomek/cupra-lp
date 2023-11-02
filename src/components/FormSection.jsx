import React from "react";
import { Button } from "./Button";
import cupraFormentor from "./../img/formentor.png";

export const FormSection = () => {
  return (
    <section className="App-form">
      <div className="container">
        <div className="App-form-subtitle">Jazda próbna</div>
        <div className="App-form-title">Umów się na bezpłatną jazdę próbną</div>
        <div className="App-form-select">
          <img
            src={cupraFormentor}
            className="App-form-select-img"
            alt="CUPRA formentor"
          />
          <div className="App-form-select-text">Cupra Formentor</div>
        </div>
        <form>
          <input
            type="text"
            className="App-form-input"
            placeholder="Imię *"
            required
          />
          <input
            type="text"
            className="App-form-input"
            placeholder="Nazwisko (opcjonalnie)"
          />
          <input
            type="text"
            className="App-form-input"
            placeholder="Adres e-mail *"
            required
          />
          <input
            type="text"
            className="App-form-input"
            placeholder="Numer telefonu *"
            required
          />
          <div className="dim">*Pole wymagane</div>
          <p className="App-form-des">
            Masz prawo do wglądu, modyfikacji, ograniczenia przetwarzania i
            usunięcia swoich danych oraz do wycofania w każdym momencie swojej
            zgody.
          </p>
          <p className="App-form-des">
            Twoje dane będą przetwarzane tylko w stopniu umożliwiającym
            realizację wymienionego celu.
          </p>
          <p className="App-form-des">
            Administratorem Twoich danych jest Plichta spółka z ograniczoną
            odpowiedzialnością Spółka Komandytowa, z siedzibą w Wejherowie przy
            ulicy Gdańskiej 13c. Zapraszamy do zapoznania się z naszą polityką
            prywatności umieszczoną pod linkiem:
            https://www.plichta.com.pl/polityka-prywatnosci
          </p>
          <Button type="dark">Umów jazdę próbną</Button>
        </form>
      </div>
    </section>
  );
};
