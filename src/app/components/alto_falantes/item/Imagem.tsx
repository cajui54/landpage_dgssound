"use client";
import Image, { StaticImageData } from "next/image";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
interface Props {
  path: StaticImageData;
  title: string;
}
const ImagemContainer = ({ path, title }: Props) => {
  useEffect(() => {
    AOS.init({ duration: 2000, easing: "ease-in-out-quart" });
  }, []);
  return <Image src={path} alt={title} data-aos="fade-up" />;
};

export default ImagemContainer;
