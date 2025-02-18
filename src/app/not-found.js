import Link from "next/link";

export default function NotFound() {
  return (
    <>
      {"404"}
      <Link href={"/"}>go back to the main page</Link>
    </>
  );
}
