import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-between items-center p-4 w-full max-w-screen-lg mx-auto">
      <Link href="/">
        <h1 className="text-3xl font-bold">S-Blog</h1>
      </Link>
      <nav className="flex gap-4">
        <Link href="/">Home</Link>
        <Link href="/posts">Posts</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/about">About</Link>
      </nav>
    </header>
  );
}
