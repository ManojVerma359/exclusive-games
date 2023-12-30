import React from "react";
const Preloder = () => {
  const Preloder = document.getElementById("Preloder");
  setTimeout(() => {
    document.getElementById("Preloder").classList.add("d_none");
    document.body.classList.remove("overflow-hidden");
  }, 3000);


    return (
      <>
        <div
          id="Preloder"
          class=" overflow-y-hidden  position-relative loader_bg "
        >
          <div class=" bg-black vh-100 d-flex align-items-center justify-content-center  position-fixed  top-0 start-0 w-100 ">
            <div class="d-flex align-items-center justify-content-center preloder-img ">
              <div class="loading-bar">Loading</div>
            </div>
          </div>
        </div>
      </>
    );}
  

export default Preloder;
// function App() {
//     const Preloder = document.getElementById("Preloder");
//     setTimeout(() => {
//       document.getElementById("Preloder").classList.add("d_none");
//       document.body.classList.remove("overflow-hidden");
//     }, 1000)};
