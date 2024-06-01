"use client";
import Image, { StaticImageData } from "next/image";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
interface IProps {
  image: StaticImageData;
  about: string;
}
const ImagesItem = ({ image, about }: IProps) => {
  useEffect(() => {
    AOS.init({ duration: 2000, easing: "ease-in-out-quart" });
  }, []);
  return <Image src={image} alt={about} data-aos="fade-up" />;
};

export default ImagesItem;
