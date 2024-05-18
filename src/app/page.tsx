import Image from "next/image";
import styles from "./page.module.scss";
import Hero from "./components/hero/hero";
import AboutCompany from "./components/about/about";
import AltoFalantes from "./components/alto_falantes";

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <AboutCompany />
      <AltoFalantes />
    </main>
  );
}
