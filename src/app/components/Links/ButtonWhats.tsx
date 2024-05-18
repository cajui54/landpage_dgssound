import React from "react";
import Link from "next/link";
import styles from "./styles.module.scss";
import { links } from "@/app/assets/links";
import { FaWhatsappSquare } from "react-icons/fa";
const ButtonWhats = () => {
  return (
    <Link href={links.whats} className={styles.mainButtonWhats}>
      <FaWhatsappSquare />
      <span>Informações </span>
    </Link>
  );
};

export default ButtonWhats;
