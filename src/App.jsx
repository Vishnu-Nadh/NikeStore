import React from "react";
import { Hero, Sales } from "./components";
import {
  heroapi,
  popularsales,
  toprateslaes,
  highlight,
  sneaker,
  story,
  footerAPI,
} from "./data/data.js";

const App = () => {
  return (
    <>
      <main className="flex flex-col gap-24 relative">
        <Hero heroapi={heroapi} />
        <Sales endpoint={popularsales} ifExists />
        <Sales endpoint={toprateslaes} />
      </main>
    </>
  );
};

export default App;
