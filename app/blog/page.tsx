import Link from "next/link";

export default function Blog() {
  const posts: [string, string, string, string][] = [
    ["June 2026", "SEO", "Five SEO Basics Most Small Business Websites Get Wrong", "A look at the common technical and content issues that quietly keep small business websites out of search results, and simple fixes for each one."],
    ["May 2026", "Content", "How to Build a Content Calendar That You Will Actually Follow", "Most content calendars fail because they are too ambitious. Here is a simpler way to plan blog posts and social content around the time you really have."],
    ["April 2026", "Paid Media", "Google Ads vs Meta Ads, Which One Should You Start With", "Both platforms work differently and suit different kinds of businesses. This piece breaks down how to choose based on your product and budget."],
    ["March 2026", "Social", "Why Posting More Often Is Not the Same as Growing Faster", "A common myth in social media marketing is that frequency alone drives growth. Here is what actually moves the needle instead."],
    ["February 2026", "Email", "The Welcome Email Sequence Every New Business Should Have", "A simple three email welcome series that introduces your brand, builds trust, and gently guides new subscribers toward their first purchase."],
    ["January 2026", "Analytics", "Three Marketing Metrics Worth Watching Every Month", "With so much data available, it is easy to get distracted. These are the few numbers that actually tell you if your marketing is working."],
  ];

  return (
    <main>
      <section className="max-w-5xl mx-auto px-6 pt-14 pb-10">
        <span className="stamp mb-6">The Archive</span>
        <h1 className="masthead-title text-5xl md:text-6xl mt-4">
          Notes on marketing that works
        </h1>
        <p className="mt-6 text-lg max-w-2xl">
          Short, practical pieces on SEO, content, paid ads, and social
          media, written for business owners who want to understand their
          marketing, not just outsource it. Each entry works through one
          idea at a time, without the shorthand that usually gets lost in a
          quick social post.
        </p>
      </section>

      <div className="rule" />

      <section className="max-w-5xl mx-auto px-6 py-14">
        <div className="grid md:grid-cols-2 gap-x-10 gap-y-10">
          {posts.map(([date, tag, title, excerpt]) => (
            <article key={title} className="border-t-2 border-ink pt-4">
              <div className="byline flex gap-3 mb-3 text-ink/60">
                <span>{date}</span>
                <span className="text-accent">{tag}</span>
              </div>
              <h2 className="masthead-title text-2xl mb-3">{title}</h2>
              <p className="text-sm text-ink/80 mb-3">{excerpt}</p>
              <a href="#" className="text-link text-sm">
                Read the article
              </a>
            </article>
          ))}
        </div>
      </section>

      <div className="rule" />

      <section className="max-w-5xl mx-auto px-6 py-16 text-center">
        <h2 className="masthead-title text-3xl md:text-4xl mb-4">
          Have a topic worth covering?
        </h2>
        <p className="mb-8 max-w-xl mx-auto text-ink/80">
          Send a question or idea, and it might turn into a future article on
          this page.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-primary text-paper px-8 py-3 byline hover:bg-accent transition-colors"
        >
          Suggest a Topic
        </Link>
      </section>
    </main>
  );
}
