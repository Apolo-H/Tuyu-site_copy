import React from "react";
import "../style/Main-content.css";

const Main = () => {
  return (
    <main id="main">
      <section id="hero">
        <div className="hero_btn-undermentality">
          <a href="/" target="_blank">
            <img src="/tuyu_hero_btn-en.png" alt="Undermnetality_box" />
          </a>
        </div>
      </section>
      <section className="banner">
        <div className="teste " data-scroll>
          <h1>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum
            maxime culpa porro eos sed obcaecati iure in autem earum repudiandae
            libero neque vitae velit nemo minima quibusdam fugit, incidunt
            suscipit.
          </h1>
        </div>
      </section>
    </main>
  );
};

export default Main;
