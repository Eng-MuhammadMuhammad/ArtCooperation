import React from "react";

import Header from './components/Header/Header'
import Landing from './components/Landing/Landing' 
import Services from './components/Services/Services'
import Design from './components/Design/Design'
import Protfolio from './components/Portfolio/Portfolio'
import Video from './components/Video/Video'
import About from './components/About/About'
import Stats from './components/Stats/Stats'
import Skills from './components/Skills/Skills'
import Quote from './components/Quote/Quote'
import Pricing from './components/Pricing/Pricing'
import Subscribe from './components/Subscribe/Subscribe'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'




function App() {
  return (
    <div>
        <Header/>
        <Landing/>
        <Services/>
        <Design/>
        <Protfolio/>
        <Video/>
        <About/>
        <Stats/>
        <Skills/>
        <Quote/>
        <Pricing/>
        <Subscribe/>
        <Contact/>
        <Footer/> 
    </div>
  );
}

export default App;
