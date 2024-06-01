"use client";
import React from "react";
import styles from "./nav.module.scss";
import { Link } from "react-scroll";
import { useMenuContext } from "@/app/context/contextMenu";
import { MdAddToHomeScreen, MdPhoneIphone } from "react-icons/md";
import { AiTwotoneSound } from "react-icons/ai";
import { HiOutlineWrenchScrewdriver } from "react-icons/hi2";
import { FaPlus } from "react-icons/fa";

const Navbar = () => {
  const { menu, setMenu } = useMenuContext();

  const handleCloseMenu = () => {
    setMenu!({ openMenu: false, classMenu: "", classNavbar: "moveMenu" });
  };
  const handleSetActive = (to: any) => {
    console.log(to);
  };

  return (
    <nav className={`${styles.navbarMain} ${menu.classNavbar}`}>
      <Link
        to="scrollHero"
        spy={true}
        smooth={true}
        offset={-50}
        duration={500}
        onSetActive={handleSetActive}
        onClick={handleCloseMenu}
      >
        <span>
          <MdAddToHomeScreen />
          Home
        </span>
        <div></div>
      </Link>

      <Link
        activeClass="active"
        to="altofalantes"
        spy={true}
        smooth={true}
        offset={-50}
        duration={500}
        onSetActive={handleSetActive}
        onClick={handleCloseMenu}
      >
        <span>
          <AiTwotoneSound />
          Alto Falantes
        </span>
        <div></div>
      </Link>
      <Link
        activeClass="active"
        to="scrollRecond"
        spy={true}
        smooth={true}
        offset={-50}
        duration={500}
        onClick={handleCloseMenu}
      >
        <HiOutlineWrenchScrewdriver />

        <span>Recondicionamento</span>
        <div></div>
      </Link>
      <Link
        activeClass="active"
        to="scrollGalery"
        spy={true}
        smooth={true}
        offset={-50}
        duration={500}
        onClick={handleCloseMenu}
      >
        <span>
          <FaPlus />
          Fotos DGS
        </span>
        <div></div>
      </Link>
      <Link
        activeClass="active"
        to="scrollAbout"
        spy={true}
        smooth={true}
        offset={-50}
        duration={500}
        onClick={handleCloseMenu}
      >
        <span>Serviços DGS</span>
        <div></div>
      </Link>
      <Link
        activeClass="active"
        to="scrollContact"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        onClick={handleCloseMenu}
      >
        <span>
          <MdPhoneIphone />
          Contatos
          <div></div>
        </span>
      </Link>
    </nav>
  );
};

export default Navbar;
