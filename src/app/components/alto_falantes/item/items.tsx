import React from "react";
import { IPropsItem } from "../../../interface/Items";
import styles from "./styles.module.scss";
import Image from "next/image";
import Link from "next/link";
import { links } from "@/app/assets/links";
import ButtonWhats from "../../Links/ButtonWhats";
import ImagemContainer from "./Imagem";
const Item = ({ path, title, description }: IPropsItem) => {
  return (
    <div className={styles.mainItem}>
      <Link
        href={links.whats}
        target="_blank"
        className={styles.containerImage}
      >
        <ImagemContainer path={path} title={title} />
      </Link>
      <h2>{title}</h2>
      <p>{description}</p>
      <ButtonWhats heigth={-5} />
    </div>
  );
};

export default Item;
