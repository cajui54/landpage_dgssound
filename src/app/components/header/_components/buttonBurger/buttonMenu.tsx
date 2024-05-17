"use client";
import React from "react";
import styles from "./buttonMenu.module.scss";
import { useMenuContext } from "@/app/context/contextMenu";
const ButtonMenu = () => {
  const { menu, setMenu } = useMenuContext();
  const handleClickButton = () => {
    if (!menu.openMenu) {
      setMenu!({ openMenu: true, classMenu: "open", classNavbar: "" });
    } else {
      setMenu!({ openMenu: false, classMenu: "", classNavbar: "moveMenu" });
    }
  };
  return (
    <div
      className={`${styles.menu} ${menu.classMenu}`}
      onClick={handleClickButton}
    >
      <div className={`button_burger`}></div>
    </div>
  );
};

export default ButtonMenu;
