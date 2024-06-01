import Image from "next/image";
import styles from "./page.module.scss";
import Hero from "./components/hero/hero";
import AboutCompany from "./components/about/about";
import AltoFalantes from "./components/alto_falantes";
import Acessorios from "./components/acessorios";
import Recondicionamento from "./components/recondicionamento/Recondicionamento";
import SlideImage from "./components/galeryPhotos/SlideImage";
import Footer from "./components/footer/Footer";
import ContactMe from "./components/contacts/ContactMe";
import ButtonFixed from "./components/buttonFixed/ButtonFixed";

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <ButtonFixed />
      <ContactMe />
      <AboutCompany />
      <AltoFalantes />
      <Acessorios />
      <Recondicionamento />
      <SlideImage />
      <Footer />
    </main>
  );
}
