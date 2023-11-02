import React from "react";
import { Button } from "./Button";
import cupra294 from "./../img/CUPRAFORMENTOR294.png";
import cupra418 from "./../img/CUPRAFORMENTOR418.png";
import cupra381 from "./../img/CUPRAFORMENTOR381.png";

export const Summary = () => {
  return (
    <section className="App-summary">
      <div className="summary-container">
        <div className="App-summary-el">
          <img src={cupra294} className="App-summary-el-img" alt="cupra 294" />
          <div className="App-summary-el-text">
            <div className="App-summary-el-text-subtitle">Technologia</div>
            <div className="App-summary-el-text-title">
              Poczuj pełną wolność jazdy dzięki licznym innowacjom.
            </div>
            <Button type="sand">Umów jazdę próbną</Button>
          </div>
        </div>
        <div className="App-summary-el reverse">
          <img src={cupra418} className="App-summary-el-img" alt="cupra 418" />
          <div className="App-summary-el-text">
            <div className="App-summary-el-text-subtitle">Potęga Designu</div>
            <div className="App-summary-el-text-title">
              Crossover emanujący gracją, dynamizmem i czystym wyrafinowaniem.
            </div>
            <Button type="sand">Umów jazdę próbną</Button>
          </div>
        </div>
        <div className="App-summary-el">
          <img src={cupra381} className="App-summary-el-img" alt="cupra 381" />
          <div className="App-summary-el-text">
            <div className="App-summary-el-text-subtitle">Design wnętrza</div>
            <div className="App-summary-el-text-title">
              Idealny komfort. Unikalny wystrój wnętrza stworzony w stylu CUPRY.
            </div>
            <Button type="sand">Umów jazdę próbną</Button>
          </div>
        </div>
      </div>
    </section>
  );
};
