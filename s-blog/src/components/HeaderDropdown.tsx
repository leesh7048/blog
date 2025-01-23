import Link from "next/link";

type HeaderDropdownProps = {
  setIsOpen: (isOpen: boolean) => void;
};

export default function HeaderDropdown({ setIsOpen }: HeaderDropdownProps) {
  return (
    <nav className="absolute top-full left-0 w-full bg-black/95 py-4 flex flex-col items-center gap-4 sm:hidden">
      <Link
        className="hover:text-[#0085FF]"
        href="/"
        onClick={() => setIsOpen(false)}
      >
        Home
      </Link>
      <Link
        className="hover:text-[#0085FF]"
        href="/posts"
        onClick={() => setIsOpen(false)}
      >
        Posts
      </Link>
      <Link
        className="hover:text-[#0085FF]"
        href="/projects"
        onClick={() => setIsOpen(false)}
      >
        Projects
      </Link>
    </nav>
  );
}
