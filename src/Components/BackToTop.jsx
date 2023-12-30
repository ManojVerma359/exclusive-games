import React from "react";
import { BackTop } from "./SvgIcon";

function BackToTop() {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
      document.getElementById("Top").style.display = "flex";
    } else {
      document.getElementById("Top").style.display = "none";
    }
  });

  function up() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  return (
    <>
      <div id="Top" className="cursor-pointer d_none backtops" onClick={up}>
        <BackTop/>
      </div>
    </>
  );
}
export default BackToTop;
