"use client";
import React from "react";
import { Link } from "react-scroll";
import styles from "./styles.module.scss";
import { FaArrowCircleUp } from "react-icons/fa";

const ButtonFixed = () => {
  const handleSetActive = (to: any) => {
    console.log(to);
  };
  return (
    <div className={styles.mainButton}>
      <Link
        activeClass="active"
        to="scrollHero"
        spy={true}
        smooth={true}
        offset={-50}
        duration={500}
        onSetActive={handleSetActive}
      >
        <FaArrowCircleUp />
      </Link>
    </div>
  );
};

export default ButtonFixed;
