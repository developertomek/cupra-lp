import React from "react";
import cupra048 from "./../img/CUPRAFORMENTOR048.png";
import cupra002 from "./../img/CUPRAFORMENTOR002.png";
import { Button } from "./Button";

export const Try = () => {
  return (
    <section className="App-tryIt">
      <div className="tryIt-container">
        <div className="App-tryIt-text">
          <div className="App-tryIt-text-title">WYPRÓBUJ</div>
          <p className="App-tryIt-text-des">
            Zobacz, poczuj i przekonaj się, czym jest CUPRA. Poznaj samochody,
            które są wyjątkowym połączeniem technologii, mocy, elegancji i
            komfortu.
          </p>
        </div>
        <div className="App-tryIt-images">
          <div className="App-tryIt-images-left">
            <img
              src={cupra048}
              className="App-tryIt-images-left-img"
              alt="CUPRA FORMENTOR 048"
            />
            <p className="App-tryIt-images-left-des">
              Design inspirowany wyścigami, stworzony z niezwykłą dbałością o
              detale.
            </p>
            <div className="App-tryIt-images-left-text">
              <div className="App-tryIt-images-left-text-title">
                TYLKO DLA ODWAŻNYCH
              </div>
              <p className="App-tryIt-images-left-text-des">
                Model CUPRA, który idealnie wpisuje się w DNA marki. Unikalny
                SUV coupé, wyjątkowy, odważny i innowacyjny – zapewni Ci to, co
                najlepsze w marce CUPRA.
              </p>
              <Button type="sand">Umów jazdę próbną</Button>
            </div>
          </div>
          <div className="App-tryIt-images-right">
            <img
              src={cupra002}
              className="App-tryIt-images-right-img"
              alt="CUPRA FORMENTOR 002"
            />{" "}
            <p className="App-tryIt-images-right-des">
              Podróżuj z rozmachem bez kompromisów.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
