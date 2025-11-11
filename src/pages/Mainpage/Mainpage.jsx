import React from "react";
import { Navbar } from "../../components";
import Home from "../home/Home";
import Projects from "../Projects/Projects";
import Skill from "../Skill/Skill";
import Experience from "../experience/Experience";
import Footer from "../footer/Footer";

const MainPage = () => {
 
  return (
    <div style={{ margin: 0 }}>
      <Navbar />
      <section id="home">
        <Home />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="skills">
        <Skill />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <Footer/>
    </div>
  );
};

export default MainPage;
