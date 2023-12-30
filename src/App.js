import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header";
import Nuestra from "./Components/Nuestra";
import Marca from "./Components/Marca";
import Jackpot from "./Components/Jackpot";
import Por from "./Components/Por";
import Mas from './Components/Mas'
import Silver from "./Components/Silver";
import Luxury from "./Components/Luxury";
import Platinum from "./Components/Platinum";
import Ellos from "./Components/Ellos";
import MYAccordion from "./Components/MYAccordion";
import Lanza from "./Components/Lanza";
import My_footer from "./Components/My_footer";
import BackToTop from "./Components/BackToTop";
import Aos from 'aos';
import "aos/dist/aos.css"
import { useEffect } from 'react';
import Preloder from "./Components/Preloder";

const App = () => {
  <script>

  </script>
    useEffect(() => {
      Aos.init({ duration: 1500,once:true });
    }, [])
  return (
    <div className="bg_clr2 overflow-hidden">
      <Preloder/>
      <BackToTop/>
      <Header />
      <Nuestra />
      <Marca/>
      <Jackpot/>
      <Por/>
      <Mas/>
      <Silver/>
      <Luxury/>
      <Platinum/>
      <Ellos/>
      <MYAccordion/>
      <Lanza/>
      <My_footer/>
     
    </div>
  );
};

export default App;
