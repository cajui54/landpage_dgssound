import React from "react";
import styles from "./styles.module.scss";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaWhatsappSquare,
} from "react-icons/fa";
import Link from "next/link";
import { FaLocationDot } from "react-icons/fa6";

const SocialMedia = () => {
  return (
    <div className={styles.mainSocial}>
      <Link
        href="https://www.facebook.com/dgssoundaltofalantesautomotivos"
        target="_blank"
      >
        <FaFacebookSquare />
      </Link>
      <Link href="https://www.instagram.com/dgs_sound_/" target="_blank">
        <FaInstagramSquare />
      </Link>
      <Link href="https://wa.me/557481339077" target="_blank">
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
