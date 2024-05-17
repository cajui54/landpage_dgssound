import type { Metadata } from "next";
import { Oxygen, Roboto } from "next/font/google";
import "./globals.scss";
import Header from "./components/header/header";
import { MenuContextProvider } from "./context/contextMenu";

export const metadata: Metadata = {
  title: "DGS Sound Alto Falantes Automotivo",
  description: "DGS Sound é uma assistência técnica de alto falantes",
  keywords:
    "alto, falantes, automotivos, recondicionamento, assistência, som, áudio, música  ",
  icons: {
    icon: ["/dgsLogo.jpg"],
    apple: ["/dgsLogo.jpg"],
    shortcut: ["dgsLogo.jpg"],
  },
};
const roboto = Roboto({
  subsets: ["cyrillic"],
  weight: ["100", "300", "400", "900"],
  style: ["normal"],
  variable: "--font-roboto",
});
const oxygen = Oxygen({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  style: ["normal"],
  variable: "--font-oxygen",
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${roboto.variable} ${oxygen.variable}`}>
        <MenuContextProvider>
          <Header />
          {children}
        </MenuContextProvider>
      </body>
    </html>
  );
}
