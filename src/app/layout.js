import {
  Inter,
  Instrument_Serif,
  Prata,
  Bodoni_Moda,
  Noto_Serif_Display,
  Roboto,
  Playfair_Display,
} from "next/font/google";
import "./globals.css";

export const metadata = {
  title: "karthik gurram",
  description: "software engineer",
};

const inter = Inter({ subsets: ["latin"] });

const instrument_serif = Instrument_Serif({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

const noto = Noto_Serif_Display({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

const roboto = Roboto({
  subsets: ["latin"],
  display: "swap",
  weight: "300",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={playfair.className}>{children}</body>
    </html>
  );
}
