"use client";
import React, { useState } from "react";
import styles from "./navItems.module.scss";
import { Link } from "react-scroll";
import Image from "next/image";
import imgFalante from "../../../assets/images/falante01.jpg";
import imgFix from "../../../assets/images/reforma01.jpg";
import imgAcess from "../../../assets/images/acess.jpg";
import imgGameleira from "../../../assets/images/gameleiraCity.jpg";
import imgDGS from "../../../assets/images/05.jpg";
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
  const handleSetActive = (to: any) => {
    console.log(to);
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
          <Link
            activeClass="active"
            to="altofalantes"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            onSetActive={handleSetActive}
          >
            <div>
              <Image src={imgFalante} alt="Alto falante" />
            </div>
            <span>Alto Falantes</span>
          </Link>

          <Link
            activeClass="active"
            to="scrollRecond"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
          >
            <div>
              <Image src={imgFix} alt="Alto falante" />
            </div>
            <span>Recondicionamento</span>
          </Link>
          <Link
            activeClass="active"
            to="scrollAcessorios"
            spy={true}
            smooth={true}
            offset={-60}
            duration={500}
          >
            <div>
              <Image src={imgAcess} alt="Alto falante" />
            </div>
            <span>Acessórios</span>
          </Link>
          <Link
            activeClass="active"
            to="scrollContact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <div>
              <Image src={imgGameleira} alt="Alto falante" />
            </div>
            <span>Localização</span>
          </Link>
          <Link
            activeClass="active"
            to="scrollAbout"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
          >
            <div>
              <Image src={imgDGS} alt="Alto falante" />
            </div>
            <span>Sobre & DGS</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavItems;
