"use client";
import React, { useState } from "react";
import styles from "./styles.module.scss";
import { arrImages } from "@/app/datas/slideDatas";
import { FaArrowCircleLeft } from "react-icons/fa";

import Image from "next/image";
const SlideImage = () => {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    if (index < arrImages.length - 1) {
      setIndex((prev) => prev + 1);
    } else {
      setIndex(0);
    }
  };
  return (
    <div className={styles.mainGalery} id="scrollGalery">
      <h6>Confira nosso Trabalho:</h6>

      <div className={styles.containerImage}>
        <Image src={arrImages[index]} alt="carros com alto falantes" />
      </div>
      <div className={styles.containerMenu}>
        <button onClick={handleNext}>
          <FaArrowCircleLeft />
        </button>
        <div className={styles.containerOpitons}>
          {arrImages.map((img, index) => (
            <Image
              key={index}
              src={img}
              alt="carros e alto falantes"
              onClick={() => setIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SlideImage;
