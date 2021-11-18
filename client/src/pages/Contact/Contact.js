import React from "react";
import Navbar from "../../layout/Navbar/Navbar";

import s from "./contact.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNode } from "@fortawesome/free-brands-svg-icons";
import sequelize from "../../img/sequelize.jpg";

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className={s.contentAbout}></div>
      <div className={s.cardContainer}>
        <div className={s.textContainer}>
          <h1 className={s.h1Title}>App Foods</h1>
          <p className={s.pText}>
            Este Proyecto lo cree desde 0, mediante tecnologias Full Stack,
            tanto Back-end como Front-end
          </p>
        </div>
        <div className={s.cardContent}>
          <div className={s.cardTitle}>
            <h2 className={s.h1Title2}>Tecnologías Aplicadas</h2>
            <div className={s.tecContent}>
              <div>
                <img
                  className={s.js}
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
                  alt="js"
                />
                <h1 className={s.jsh1}>Javascript</h1>
              </div>
              <div>
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
                  alt="html"
                />
                <h1 className={s.tecH1}>HTML 5</h1>
              </div>
              <div>
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
                  alt="css"
                />
                <h1 className={s.tecH1}>CSS 3</h1>
              </div>
              <div>
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
                  alt="react"
                />
                <h1 className={s.tecH1}>React</h1>
              </div>
              <div>
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg"
                  alt="redux"
                />
                <h1 className={s.tecH1}>Redux</h1>
              </div>
              <div>
                <FontAwesomeIcon className={s.icons} icon={faNode} />
                <h1 className={s.node}>Node Js</h1>
              </div>
              <div>
                <img
                  className={s.express}
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg"
                  alt="express"
                />
                <h1 className={s.tecH1}>Express</h1>
              </div>
              <div>
                <img
                  className={s.sequelizeimg}
                  src={sequelize}
                  alt="sequelize"
                />
                <h1 className={s.tecH1}>Sequelize ORM</h1>
              </div>
              <div>
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg"
                  alt="postgre"
                />
                <h1 className={s.tecH1}>PostgreSQL</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
