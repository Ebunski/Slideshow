import React, { useState, useEffect } from "react";

import Slide from "./Slide";
import data from "./data";

function App() {
  const [index, setIndex] = useState(0);

  function checker(value) {
    if (value < 0) return data.length - 1;
    if (value > data.length - 1) return 0;
    return value;
  } // can also use useEffect to run anytime the index or data changes

  function prev() {
    setIndex((prev) => checker(prev - 1));
  }

  function next() {
    setIndex((next) => checker(next + 1));
    console.log(index);
  }

  ///////////////////////////----slider----///////////////
  useEffect(() => {
    let slider = setInterval(() => next(), 3000);
    return () => clearInterval(slider);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);
  ///////////////////////////----slider----///////////////

  return (
    <main className="section">
      <div className="title">
        <h2>
          <span className="icon">/</span>reviews
        </h2>
      </div>

      <Slide data={data} next={next} prev={prev} current={index} />
    </main>
  );
}

export default App;
