import React from "react";
import "./App.scss";
import { Header } from "./components/Header";
import { Try } from "./components/Try";
import { New } from "./components/New";
import { Summary } from "./components/Summary";

import { FormSection } from "./components/FormSection";

function App() {
  return (
    <div className="App">
      <Header />
      <Try />
      <New />
      <Summary />
      <FormSection />
      <footer>SEAT CUPRA S.A.U.</footer>
    </div>
  );
}

export default App;
