import React from "react";
import styles from "./hero.module.scss";
import Slideshow from "./_components/slide/slideshow";
import Image from "next/image";
import imgLogo from "../../assets/images/dgslogo.png";
import NavItems from "./navItems/navItems";
const Hero = () => {
  return (
    <div className={styles.mainHero}>
      <Slideshow />
      <div className={styles.containerLogo}>
        <Image src={imgLogo} alt="logo DGS Sound" />
      </div>
      <NavItems />
    </div>
  );
};

export default Hero;
