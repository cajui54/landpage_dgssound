"use client";
import React, { useState } from "react";
import styles from "./slide.module.scss";
import { navOption } from "@/app/assets/images";
import Image from "next/image";
const SlideImageAbout = () => {
  const [move, setMove] = useState<number>(1);
  return (
    <div>
      <div className={styles.mainSlide}>
        <Image src={navOption[move].path} alt={navOption[move].alt} />

        <nav className={styles.navAbout}>
          {navOption.map((item, index) => (
            <Image
              key={index}
              src={item.path}
              alt={item.alt}
              onClick={() => setMove(index)}
            />
          ))}
        </nav>
      </div>
    </div>
  );
};

export default SlideImageAbout;
