import React from "react";
import { Navbar } from "../../components";
import Home from "../home/Home";
import Projects from "../Projects/Projects";
import Skill from "../Skill/Skill";

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
    </div>
  );
};

export default MainPage;
