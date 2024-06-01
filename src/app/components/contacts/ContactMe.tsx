"use client";
import React, { useEffect } from "react";
import styles from "./styles.module.scss";
import Link from "next/link";
import { FaLocationDot } from "react-icons/fa6";
import { SiGooglestreetview } from "react-icons/si";
import { LuBinary } from "react-icons/lu";
import { PiWhatsappLogoDuotone } from "react-icons/pi";
import { MdMarkEmailRead } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";

const ContactMe = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div className={styles.mainContact} id="scrollContact">
      <h2>
        <FaLocationDot className="svgLocation" /> Localização:
      </h2>
      <div className={`${styles.containerMap}`} data-aos="fade-up"></div>
      <ul className={styles.listInfo}>
        <li>
          <address>
            <p>Distrito de Gameleira - Jaguarari / BA</p>
          </address>
        </li>
        <li>
          <address>
            <SiGooglestreetview className="svgStreet" />
            Rua: Do Campo n° 90
          </address>
        </li>
        <li>
          <LuBinary className="svgCEP" />
          CPE: 48960-000 Brasil
        </li>
        <li>
          <PiWhatsappLogoDuotone className="svgWhats" />

          <Link href="https://wa.me/557481339077">(74) 8133-9077</Link>
        </li>
        <li>
          <MdMarkEmailRead className="svgEmail" /> dgssound01@gmail.com
        </li>
      </ul>
    </div>
  );
};

export default ContactMe;
