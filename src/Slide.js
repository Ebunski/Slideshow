import React from "react";
import { FaQuoteRight } from "react-icons/fa";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

export default function Slide(props) {
  //slides are initially stacked due to the absolute class of article
  // slides are placed on each other
  // dynamic styles with transform properties are used to place them left or right
  // opacity and overflow to hide

  ////compare with reviews project

  const slides = props.data.map((x, index) => {
    const { id, image, name, title, quote } = x; //note I'm not returning.

    let pos = "nextSlide";  
    if (index === props.current) pos = "activeSlide";
    if (
      index === props.current - 1 ||
      index === (props.current === 0 && props.data.length - 1)
    )
      pos = "lastSlide";

    return (
      <article key={id} className={pos}>
        {" "}
        <img className="person-img" src={image} alt={name} />
        <h4>{name}</h4>
        <p className="title">{title}</p>
        <p className="text">{quote}</p>
        <FaQuoteRight className="icon" />
      </article>
    );
  });

  /*
  ===========
  JSX
  ===========
  */

  return (
    <div className="section-center">
      {slides}
      <FiChevronRight className="next" onClick={props.next} />
      <FiChevronLeft className="prev" onClick={props.prev} />
    </div>
  );
}
