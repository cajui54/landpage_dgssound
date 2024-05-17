"use client";
import React, { useState } from "react";
import styles from "./navItems.module.scss";
import Link from "next/link";
import Image from "next/image";
import imgFalante from "../../../assets/images/falante01.jpg";
import imgFix from "../../../assets/images/reforma01.jpg";
import imgAcess from "../../../assets/images/acess.jpg";
import imgGameleira from "../../../assets/images/gameleiraCity.jpg";
import imgClient from "../../../assets/images/descontracao.jpg";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";

const NavItems = () => {
  const [move, setMove] = useState(-15);
  const handleMoveClickRight = () => {
    if (move >= -140) {
      setMove(move - 20);
    } else {
      setMove(-20);
    }
  };
  const handleMoveClickLeft = () => {
    if (move <= -20) {
      setMove(move + 20);
    } else {
      setMove(-140);
    }
  };
  return (
    <div className={styles.containerMenu}>
      <button onClick={handleMoveClickLeft}>
        <FaChevronCircleLeft />
      </button>
      <button onClick={handleMoveClickRight}>
        <FaChevronCircleRight />
      </button>
      <div className={styles.mainNav}>
        <div className={styles.containerNav} style={{ marginLeft: move }}>
          <Link href="/">
            <div>
              <Image src={imgFalante} alt="Alto falante" />
            </div>
            <span>Alto Falantes</span>
          </Link>
          <Link href="/">
            <div>
              <Image src={imgFix} alt="Alto falante" />
            </div>
            <span>Recondicionamento</span>
          </Link>
          <Link href="/">
            <div>
              <Image src={imgAcess} alt="Alto falante" />
            </div>
            <span>Acessórios</span>
          </Link>
          <Link href="/">
            <div>
              <Image src={imgGameleira} alt="Alto falante" />
            </div>
            <span>Localização</span>
          </Link>
          <Link href="/">
            <div>
              <Image src={imgClient} alt="Alto falante" />
            </div>
            <span>Fotos</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavItems;
