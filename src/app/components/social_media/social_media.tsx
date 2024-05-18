import React from "react";
import styles from "./styles.module.scss";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaWhatsappSquare,
} from "react-icons/fa";
import Link from "next/link";
import { FaLocationDot } from "react-icons/fa6";
import { links } from "@/app/assets/links";

const SocialMedia = () => {
  return (
    <div className={styles.mainSocial}>
      <Link href={links.facebook} target="_blank">
        <FaFacebookSquare />
      </Link>
      <Link href={links.instagram} target="_blank">
        <FaInstagramSquare />
      </Link>
      <Link href={links.whats} target="_blank">
        <FaWhatsappSquare />
      </Link>

      <address className={styles.containerAddress}>
        <FaLocationDot />
        <div>
          <h2>Gameleira / Jaguarari - BA</h2>
          <h2>Rua Do Campo N 90</h2>
        </div>
      </address>
    </div>
  );
};

export default SocialMedia;
