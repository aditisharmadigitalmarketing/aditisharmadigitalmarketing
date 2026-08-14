export default function Blog() {
  const posts = [
    ["June 2026", "SEO", "Five SEO Basics Most Small Business Websites Get Wrong"],
    ["May 2026", "Content", "How to Build a Content Calendar That You Will Actually Follow"],
    ["April 2026", "Paid Media", "Google Ads vs Meta Ads, Which One Should You Start With"],
    ["March 2026", "Social", "Why Posting More Often Is Not the Same as Growing Faster"],
    ["February 2026", "Email", "The Welcome Email Sequence Every New Business Should Have"],
    ["January 2026", "Analytics", "Three Marketing Metrics Worth Watching Every Month"],
  ];

  return (
    <main>
      <section className="max-w-5xl mx-auto px-6 pt-14 pb-10">
        <span className="stamp mb-6">The Archive</span>
        <h1 className="masthead-title text-5xl md:text-6xl mt-4">
          Notes on marketing that works
        </h1>
        <p className="mt-6 text-lg max-w-2xl">
          Short, practical pieces on SEO, content, paid ads, and social media,
          written for business owners who want to understand their
          marketing, not just outsource it.
        </p>
      </section>

      <div className="rule" />

      <section className="max-w-5xl mx-auto px-6 py-14">
        <div className="grid md:grid-cols-2 gap-x-10 gap-y-10">
          {posts.map(([date, tag, title]) => (
            <article key={title} className="border-t-2 border-ink pt-4">
              <div className="byline flex gap-3 mb-3 text-ink/60">
                <span>{date}</span>
                <span className="text-accent">{tag}</span>
              </div>
              <h2 className="masthead-title text-2xl mb-3">{title}</h2>
              <a href="#" className="text-link text-sm">
                Read the article
              </a>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
