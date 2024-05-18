import React from "react";
import styles from "./styles.module.scss";
import { falanteData } from "@/app/datas/falantesDatas";
import Items from "./item/items";
const AltoFalantes = () => {
  return (
    <div className={styles.mainAltoFalantes}>
      <div className={styles.containerTitle}>
        <h2>Alto Falantes</h2>
      </div>

      <div className={styles.itemsContainer}>
        {falanteData.map((data, index) => {
          return (
            <div key={index}>
              <Items {...data} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AltoFalantes;
