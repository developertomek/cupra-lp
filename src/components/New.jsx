import React from "react";
import { Button } from "./Button";
import cupraborn from "./../img/cupraborn.png";

export const New = () => {
  return (
    <section className="App-new">
      <div className="new-container">
        <div className="App-new-title">Nowa CUPRA Born</div>
        <div className="App-new-car">
          <img
            src={cupraborn}
            className="App-new-car-img"
            alt="Nowa CUPRA Born"
          />
          <div className="App-new-car-des">
            Akumulator 58 kWh moc do 204 KM²
          </div>
          <div className="App-new-car-info">
            <div className="App-new-car-info-el">
              Dostępny w leasingu z 0% opłaty własnej
            </div>
            <div className="App-new-car-info-el">
              Rata netto/mies. od*
              <br />
              <b>1943 zł</b>
            </div>
            <div className="App-new-car-info-el">
              Cena brutto już od <br />
              <b>179 600 zł</b>
            </div>
          </div>
          <Button type="dark">Umów jazdę próbną</Button>
        </div>
      </div>
    </section>
  );
};
