import React from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import { TiArrowDownOutline } from "react-icons/ti";
import logoDGS from "../../../assets/images/dgslogo.png";
import { IRecond } from "@/app/interface/Recondi";
import ImagesItem from "./ImagesItem";

const CardItem = ({ imgA, imgB, about }: IRecond) => {
  return (
    <div className={styles.mainCard}>
      <div className={styles.containerBefore}>
        <div className={styles.containerImage}>
          <ImagesItem image={imgB} about={about} />
        </div>
        <h3>
          <TiArrowDownOutline /> Antes
        </h3>
      </div>

      <div className={styles.containerBefore}>
        <div className={styles.containerImage}>
          <ImagesItem image={imgA} about={about} />
        </div>
        <h3>
          <Image className={styles.imgLogo} src={logoDGS} alt="logo dgssound" />
          Depois
        </h3>
      </div>
    </div>
  );
};

export default CardItem;
