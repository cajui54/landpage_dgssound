import React from "react";
import styles from "./styles.module.scss";
import { GiAutoRepair } from "react-icons/gi";
import CardItem from "./_components/cardItem";
import { datasRecondi } from "@/app/datas/recondiDatas";
const Recondicionamento = () => {
  return (
    <div className={styles.mainRecondicionamento}>
      <div className={styles.containerTitle}>
        <h2>
          <GiAutoRepair />
          <span>Recondicionamentos</span>
        </h2>
      </div>
      <div className={styles.containerCard}>
        {datasRecondi.map((item, index) => (
          <div key={index}>
            <CardItem {...item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recondicionamento;
