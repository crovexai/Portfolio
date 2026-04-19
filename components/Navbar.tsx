import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="nav">
      <Link href="/">MAIN PAGE</Link>
      <Link href="/fashion">FASHION</Link>
      <Link href="/fitness">FITNESS</Link>
      <Link href="/lifestyle">LIFESTYLE</Link>
    </nav>
  );
}
