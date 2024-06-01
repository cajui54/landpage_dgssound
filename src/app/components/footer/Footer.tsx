import React from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import imgLogo from "../../assets/images/dgslogo.png";
const Footer = () => {
  return (
    <div className={styles.mainFooter}>
      <div className={styles.containerLogo}>
        <h2>Reformas e Fabricação de Alto Falantes</h2>
        <Image src={imgLogo} alt="Logo DGS SOUND" />
      </div>
    </div>
  );
};

export default Footer;
