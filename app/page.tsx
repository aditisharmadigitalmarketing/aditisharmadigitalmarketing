import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 pt-14 pb-10">
        <div className="grid md:grid-cols-[1fr_320px] gap-10 items-start">
          <div>
            <span className="stamp mb-6">Issue No. 01 / Digital Marketing</span>
            <h1 className="masthead-title text-5xl md:text-7xl leading-[0.95] mt-4">
              Aditi Sharma Digital Marketing Specialist
            </h1>
            <p className="mt-6 text-lg max-w-xl">
              Aditi Sharma Digital Marketing Specialist helps small and mid
              sized businesses turn their websites and social pages into
              steady sources of leads. Aditi Sharma Digital Marketing Expert
              works across SEO, content strategy, paid advertising, and email
              marketing, building campaigns around real customer behaviour
              instead of guesswork, so every rupee of marketing spend is
              doing measurable work.
            </p>
            <div className="mt-8 flex gap-4">
              <Link
                href="/contact"
                className="bg-primary text-paper px-6 py-3 byline hover:bg-accent transition-colors"
              >
                Start a Project
              </Link>
              <Link
                href="/about"
                className="border border-primary px-6 py-3 byline hover:border-accent hover:text-accent transition-colors"
              >
                Read the Profile
              </Link>
            </div>
          </div>
          <figure className="border-2 border-ink">
            <div className="relative aspect-[4/5]">
              <Image
                src="/aditi-sharma.jpg"
                alt="Aditi Sharma, Digital Marketing Specialist and Digital Marketing Expert"
                fill
                className="object-cover"
                priority
              />
            </div>
            <figcaption className="byline border-t-2 border-ink px-3 py-2">
              Aditi Sharma, Digital Marketing Specialist
            </figcaption>
          </figure>
        </div>
      </section>

      <div className="rule" />

      {/* Services as "The Desk" */}
      <section className="max-w-5xl mx-auto px-6 py-14">
        <p className="byline mb-2">The Desk</p>
        <h2 className="masthead-title text-3xl md:text-4xl mb-4">
          Six beats, one publication
        </h2>
        <p className="max-w-2xl mb-8 text-ink/80">
          Every business needs a different mix of channels, and Aditi Sharma
          designs each service to work well on its own or fit into a larger
          marketing plan. The goal stays the same across every beat: fewer
          wasted clicks and more customers who stay.
        </p>
        <div className="grid md:grid-cols-3 gap-x-8 gap-y-10">
          {[
            ["Search", "On page fixes, technical audits, keyword research, and content planning that help a site rank for the searches customers are actually typing, not just the ones a business assumes matter."],
            ["Content", "Blog systems, service pages, and website copy that answer real buyer questions and quietly build trust long before anyone picks up the phone or fills out a form."],
            ["Paid Media", "Google and Meta campaigns set up with tracked conversions and clear goals, with budgets that are reviewed every week instead of left running on autopilot for a month."],
            ["Email", "Welcome sequences, newsletters, and promotional campaigns that turn a single purchase into a pattern of repeat ones, without needing constant new traffic to grow revenue."],
            ["Social", "Posting systems and campaign ideas for Instagram, LinkedIn, and Pinterest that keep one consistent brand voice across every channel a business shows up on."],
            ["Analytics", "Plain language monthly reports and dashboards so a business always knows what is working, what is not, and exactly what is changing next, in numbers, not adjectives."],
          ].map(([title, copy]) => (
            <div key={title} className="border-t-2 border-ink pt-4">
              <h3 className="masthead-title text-xl mb-2">{title}</h3>
              <p className="text-sm text-ink/80">{copy}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="rule" />

      {/* Why work with her */}
      <section className="max-w-5xl mx-auto px-6 py-14">
        <p className="byline mb-2">The Editorial Line</p>
        <h2 className="masthead-title text-3xl md:text-4xl mb-4">
          A straightforward approach to marketing
        </h2>
        <p className="max-w-2xl mb-8 text-ink/80">
          Aditi Sharma keeps the process simple on purpose, because
          complicated dashboards and confusing reports rarely help a business
          owner make better decisions. Every principle below shows up in how
          a project is actually run, not just how it is pitched.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            ["Strategy before tactics", "Before touching a single ad account or blog post, Aditi Sharma takes time to understand the business, its customers, and its competitors, so tactics only get chosen once they fit inside a plan."],
            ["Clear communication", "Every update is written in plain language, so a client always knows what is being worked on, why it matters, and what to expect next, without needing a translator for the report."],
            ["Data informed decisions", "Every campaign is tested, measured, and adjusted rather than left to run on assumptions about what should work, so underperforming channels get changed early, not at the end of a quarter."],
            ["Long term thinking", "Quick wins matter, but the real goal is a curve that keeps climbing well after the first invoice is paid, built on infrastructure rather than a single lucky campaign."],
          ].map(([title, copy]) => (
            <div key={title} className="border-l-2 border-primary pl-5">
              <h3 className="masthead-title text-lg mb-2">{title}</h3>
              <p className="text-sm text-ink/80">{copy}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="rule" />

      {/* Pull quote */}
      <section className="max-w-3xl mx-auto px-6 py-16 text-center">
        <p className="pull-quote text-3xl md:text-4xl">
          &ldquo;Good marketing should never feel like guesswork. Every number
          tells you what to do next, if you are willing to look at it
          honestly.&rdquo;
        </p>
        <p className="byline mt-6">Aditi Sharma, Digital Marketing Specialist</p>
      </section>

      <div className="rule" />

      {/* Letters to the editor / testimonials */}
      <section className="max-w-5xl mx-auto px-6 py-14">
        <p className="byline mb-2">Letters</p>
        <h2 className="masthead-title text-3xl md:text-4xl mb-8">
          What clients write in
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            ["Our organic traffic nearly tripled in two quarters, and the reporting made it easy to see exactly why.", "Founder, D2C skincare brand"],
            ["She rebuilt our content plan and it finally matched what our customers were searching for.", "Marketing Lead, SaaS startup"],
            ["Ad spend went down while leads went up. That combination is rare.", "Owner, local services business"],
          ].map(([quote, source]) => (
            <div key={source} className="border-l-2 border-accent pl-5">
              <p className="text-sm mb-3">&ldquo;{quote}&rdquo;</p>
              <p className="byline text-ink/60">{source}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="rule" />

      {/* CTA */}
      <section className="max-w-5xl mx-auto px-6 py-16 text-center">
        <h2 className="masthead-title text-3xl md:text-5xl mb-4">
          Ready for the next issue?
        </h2>
        <p className="mb-8 max-w-xl mx-auto">
          Tell Aditi Sharma about your business and what you are hoping to
          grow. Most messages get a reply within one business day.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-primary text-paper px-8 py-3 byline hover:bg-accent transition-colors"
        >
          Get In Touch
        </Link>
      </section>
    </main>
  );
}
