import React from "react";
import styles from "./about.module.scss";
import SlideImageAbout from "./_components/slide/slide";
import { FaScrewdriverWrench } from "react-icons/fa6";

const AboutCompany = () => {
  return (
    <div className={styles.mainAbout}>
      <div className={styles.articleInfo}>
        <SlideImageAbout />
        <article>
          <div className={styles.titles}>
            <h3>DSG SOUND</h3>
            <h2>Alto Falantes Automotivos</h2>
          </div>
          <p>
            Assistência Técnica especializada em reforma de Alto Falantes
            automotivos e profissionais
          </p>
          <ul>
            <li>
              <FaScrewdriverWrench />
              Centralização de Imãs Drive
            </li>
            <li>
              <FaScrewdriverWrench />
              Centralização de Twitter
            </li>
            <li>
              <FaScrewdriverWrench />
              Troca de Cordoalhas
            </li>
            <li>
              <FaScrewdriverWrench />
              Troca de Protetores
            </li>
            <li>
              <FaScrewdriverWrench />
              Troca de Cones
            </li>
            <li>
              <FaScrewdriverWrench />
              Hidratação de Bordas e cones
            </li>
            <li>
              <FaScrewdriverWrench />
              Troca e Reparos de Driver
            </li>
            <li>
              <FaScrewdriverWrench />
              Troca e Reparos de Twitter
            </li>
            <li>
              <FaScrewdriverWrench />
              Acessórios de Alto Falantes em Gerais
            </li>
          </ul>
        </article>
      </div>
    </div>
  );
};

export default AboutCompany;
