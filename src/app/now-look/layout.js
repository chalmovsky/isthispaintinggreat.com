import Script from "next/script";

export const metadata = {
  title: "Now look and see... is this painting Great?",
  description: "can you tell if the painting you are looking at is Great?",
};

export default async function NowLookLayout({ children }) {
  return children;
}
