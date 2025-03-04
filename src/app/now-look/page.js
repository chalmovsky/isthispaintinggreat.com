import React from "react";
import PaintingsBrowser from "@/components/PaintingsBrowser/PaintingsBrowser";
import paintingNumberOne from "../../../public/todays-paintings/painting-number-0.jpg";
import paintingNumberTwo from "../../../public/todays-paintings/painting-number-1.jpg";
import paintingNumberThree from "../../../public/todays-paintings/painting-number-2.jpg";
import paintingNumberFour from "../../../public/todays-paintings/painting-number-3.jpg";
import paintingNumberFive from "../../../public/todays-paintings/painting-number-4.jpg";

export default async function NowLook() {
  //TODO: when the paintings are moved to some other hosting, i will have many more of them
  // and i will do this dynamically
  const paintings = [
    paintingNumberOne,
    paintingNumberTwo,
    paintingNumberThree,
    paintingNumberFour,
    paintingNumberFive,
  ];
  return <PaintingsBrowser paintings={paintings} />;
}
