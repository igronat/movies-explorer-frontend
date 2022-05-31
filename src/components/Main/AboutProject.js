import React from "react";

function AboutProject() {
  return (
    <>
      <section className="about">
        <h2 className="title">О проекте</h2>
        <div className="about__description">
          <div className="about__paragraph">
            <h3 className="about__title">Дипломный проект включал 5 этапов</h3>
            <p className="about__text">
              Составление плана, работу над бэкендом, вёрстку, добавление
              функциональности и финальные доработки.
            </p>
          </div>
          <div className="about__paragraph">
            <h3 className="about__title">
              На выполнение диплома ушло 5 недель
            </h3>
            <p className="about__text">
              У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
              соблюдать, чтобы успешно защититься.
            </p>
          </div>
        </div>

        <table className="about__table" >
          <tr height="36">
            <td bgcolor="#3456F3" className="about__table_type_white">1 неделя</td>
            <td bgcolor="#F2F2F2">4 недели</td>
          </tr>
          <tr height="36" className="about__table_type_grey">
            <td>Back-end</td>
            <td>Front-end</td>
          </tr>
        </table>
      </section>
    </>
  );
}

export default AboutProject;
