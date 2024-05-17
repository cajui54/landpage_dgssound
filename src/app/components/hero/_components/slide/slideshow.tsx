"use client";
import React, { useState } from "react";
import styles from "./slideshow.module.scss";
import Image from "next/image";
import { images } from "./config/datas";
const Slideshow = () => {
  const [index, setIndex] = useState<number>(0);

  /*setTimeout(() => {
    if (index < images.length - 1) {
      setIndex(index + 1);
      console.log(index);
    } else {
      setIndex(0);
    }
  }, 5000);*/

  return (
    <div className={styles.mainSlide}>
      <Image src={images[index].path} alt={images[index].alt} />
      <div></div>
    </div>
  );
};

export default Slideshow;
