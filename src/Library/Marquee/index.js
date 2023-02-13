import React from "react";
import { primaryColor } from "../../Utils/staticData";

function Marquee({ content }) {
  function mouseHover() {
    const marquee = document.getElementById("marq");
    marquee.stop();
  }

  function mouseOut() {
    const marquee = document.getElementById("marq");
    marquee.start();
  }
  return (
    <marquee
      id="marq"
      scrollamount={5}
      onMouseOver={mouseHover}
      onMouseOut={mouseOut}
      style={{ color: "red" }}
    >
      {content}
    </marquee>
  );
}

export default Marquee;
