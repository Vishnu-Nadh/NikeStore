import React from "react";
import { Hero, Sales } from "./components";
import { heroapi } from "./data/data";

const App = () => {
  return (
    <>
      <main>
        <Hero heroapi={heroapi} />
        <Sales />
      </main>
    </>
  );
};

export default App;
