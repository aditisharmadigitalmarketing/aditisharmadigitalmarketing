import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b-4 border-ink">
      <div className="max-w-5xl mx-auto px-6 pt-6 pb-3 flex items-center justify-between">
        <span className="byline">Digital Marketing Journal</span>
        <span className="byline">Est. 2020</span>
      </div>
      <div className="rule" />
      <div className="max-w-5xl mx-auto px-6 py-5 flex flex-wrap items-center justify-between gap-4">
        <Link href="/" className="masthead-title text-3xl md:text-4xl">
          Aditi Sharma
        </Link>
        <nav className="byline flex gap-6">
          <Link href="/" className="hover:text-accent">Home</Link>
          <Link href="/about" className="hover:text-accent">About</Link>
          <Link href="/blog" className="hover:text-accent">Blog</Link>
          <Link href="/podcast" className="hover:text-accent">Podcast</Link>
          <Link href="/contact" className="hover:text-accent">Contact</Link>
        </nav>
      </div>
      <div className="rule-thin" />
    </header>
  );
}
