import "./globals.css";
import styles from "./homepage.module.css";
import Head from "next/head";
import { Comfortaa } from "next/font/google";
import Script from "next/script";

const mainFont = Comfortaa({
  subsets: ["latin"],
  display: "fallback",
  weight: "variable",
  variable: "--font-family",
});

export const metadata = {
  title: "is this painting Great?",
  description: "can you tell if a painting is Great by looking at it?",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={mainFont.className}>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"
        />
      </Head>
      <body>
        <main className={styles.homeWrapper}>{children}</main>
        {process.env.NODE_ENV === "production" && (
          <Script
            src={"https://stats.isthispaintinggreat.com/script.js"}
            data-website-id="80f24dc8-5106-4fd9-9ea1-7ff96dce254b"
          />
        )}
      </body>
    </html>
  );
}
