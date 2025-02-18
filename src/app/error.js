"use client";
import Link from "next/link";
import React from "react";

export default function Error() {
  return (
    <>
      Sorry, there has been an error
      <Link href={"/"}>go back to the main page</Link>
    </>
  );
}
