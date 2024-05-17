import React from "react";
import styles from "./about.module.scss";
import SlideImageAbout from "./_components/slide/slide";

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
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto
            consequatur, adipisci eveniet magnam tenetur eligendi amet maiores
            ratione dolores quos vero aliquam dolorum error natus asperiores,
            cumque repellat cupiditate unde.
          </p>
        </article>
      </div>
    </div>
  );
};

export default AboutCompany;
