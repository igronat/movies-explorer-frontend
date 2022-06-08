import React from "react";

function Techs() {
  return (
    <>
      <section className="techs">
        <h3 className="title">Технологии</h3>
        <div className="techs__paragraph">
          <h2 className="techs__title">7 технологий</h2>
          <p className="techs__text">
            На курсе веб-разработки мы освоили технологии, которые применили в
            дипломном проекте.
          </p>
        </div>

        <ul className="techs__list">
          <li className="techs__element">HTML</li>
          <li className="techs__element">CSS</li>
          <li className="techs__element">JS</li>
          <li className="techs__element">React</li>
          <li className="techs__element">Git</li>
          <li className="techs__element">Express.js</li>
          <li className="techs__element">mongoDB</li>
        </ul>
      </section>
    </>
  );
}

export default Techs;
