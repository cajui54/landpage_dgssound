"use client";
import React, { useState } from "react";
import styles from "./styles.module.scss";
import { acessoriosData } from "@/app/datas/acessoriosDatas";
import Image from "next/image";
import ButtonWhats from "../Links/ButtonWhats";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

const Acessorios = () => {
  const [index, setIndex] = useState<number>(0);
  const moveRight = () => {
    if (index < acessoriosData.length - 1) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  };
  const moveLeft = () => {
    if (index > 0) {
      setIndex(index - 1);
    } else {
      setIndex(acessoriosData.length - 1);
    }
  };
  return (
    <div className={styles.mainAcessorios}>
      <h2>Acessórios:</h2>
      <div className={styles.containerSlide}>
        <div className={styles.slideImage}>
          <button onClick={moveLeft}>
            <FaArrowCircleLeft />
          </button>
          <button onClick={moveRight}>
            <FaArrowCircleRight />
          </button>
          <Image
            src={acessoriosData[index].path}
            alt={acessoriosData[index].title}
          />
        </div>
        <div className={styles.descriptionContainer}>
          <h2>{acessoriosData[index].title}</h2>
          <p>{acessoriosData[index].description}</p>
          <ButtonWhats />
        </div>
      </div>
    </div>
  );
};

export default Acessorios;
