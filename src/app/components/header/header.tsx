import React from "react";
import styles from "./header.module.scss";
import ButtonMenu from "./_components/buttonBurger/buttonMenu";
import Navbar from "./_components/navbar/navbar";
import Image from "next/image";
import img from "../../assets/images/dgslogo.png";
import Link from "next/link";
import Logo from "../Logo/logo";
import SocialMedia from "../social_media/social_media";
const Header = () => {
  return (
    <header className={styles.headerMain}>
      <SocialMedia />
      <ButtonMenu />
      <Navbar />
    </header>
  );
};

export default Header;
