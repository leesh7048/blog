import Link from "next/link";
import MobileMenu from "./MobileMenu";

export default function Header() {
  return (
    <header className="flex justify-between items-center py-4 text-white border-b border-white/[0.1]">
      <Link href="/">
        <h1 className="text-3xl font-bold">S-Blog</h1>
      </Link>
      <nav className="hidden sm:flex gap-4">
        <Link className="hover:text-[#0085FF]" href="/">
          Home
        </Link>
        <Link className="hover:text-[#0085FF]" href="/posts">
          Posts
        </Link>
        <Link className="hover:text-[#0085FF]" href="/projects">
          Projects
        </Link>
      </nav>
      <MobileMenu />
    </header>
  );
}
