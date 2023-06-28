import "./globals.css";
import { Roboto_Condensed } from "next/font/google";
import Script from "next/script";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

const robotoCondensed = Roboto_Condensed({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Dimaaro",
  description: "Hi, ich bin Dimaaro. Designer & Front End Entwickler",
  robots: "noindex,follow",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={robotoCondensed.className}>
        <Header />
        {children}
        <Footer />
        <Script src="/node_modules/bootstrap/dist/js/bootstrap.bundle.min.js" />
      </body>
    </html>
  );
}
