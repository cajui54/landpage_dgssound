"use client";
import React, { useEffect } from "react";
import styles from "./nav.module.scss";
import Link from "next/link";
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

  return (
    <nav className={`${styles.navbarMain} ${menu.classNavbar}`}>
      <Link href="/" onClick={handleCloseMenu}>
        <span>
          <MdAddToHomeScreen />
          Home
        </span>
        <div></div>
      </Link>
      <Link href="/">
        <span>
          <AiTwotoneSound />
          Alto Falantes
        </span>
        <div></div>
      </Link>
      <Link href="/">
        <HiOutlineWrenchScrewdriver />

        <span>Recondicionamento</span>
        <div></div>
      </Link>
      <Link href="/">
        <span>
          <FaPlus />
          Informações
        </span>
        <div></div>
      </Link>
      <Link href="/">
        <span>Sobre</span>
        <div></div>
      </Link>
      <Link href="/">
        <span>
          <MdPhoneIphone />
          Contatos
        </span>
      </Link>
    </nav>
  );
};

export default Navbar;
