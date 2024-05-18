import React from "react";
import { IPropsItem } from "../../../interface/Items";
import styles from "./styles.module.scss";
import Image from "next/image";
import Link from "next/link";
import { links } from "@/app/assets/links";
import ButtonWhats from "../../Links/ButtonWhats";
const Item = ({ path, title, description }: IPropsItem) => {
  return (
    <div className={styles.mainItem}>
      <Link
        href={links.whats}
        target="_blank"
        className={styles.containerImage}
      >
        <Image src={path} alt={title} />
        <div></div>
      </Link>
      <h2>{title}</h2>
      <p>{description}</p>
      <ButtonWhats heigth={-5} />
    </div>
  );
};

export default Item;
