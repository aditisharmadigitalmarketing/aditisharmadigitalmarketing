import Image from "next/image";

export default function About() {
  return (
    <main>
      <section className="max-w-5xl mx-auto px-6 pt-14 pb-10">
        <div className="grid md:grid-cols-[1fr_280px] gap-10 items-start">
          <div>
            <span className="stamp mb-6">The Profile</span>
            <h1 className="masthead-title text-5xl md:text-6xl mt-4">
              Aditi Sharma Digital Marketing Specialist
            </h1>
            <p className="mt-6 text-lg max-w-2xl">
              Aditi Sharma Digital Marketing Expert has spent more than six
              years helping small and mid sized businesses turn their
              websites and social pages into steady sources of leads.
            </p>
          </div>
          <figure className="border-2 border-ink">
            <div className="relative aspect-[4/5]">
              <Image
                src="/aditi-sharma.jpg"
                alt="Aditi Sharma, Digital Marketing Specialist and Digital Marketing Expert"
                fill
                className="object-cover"
              />
            </div>
            <figcaption className="byline border-t-2 border-ink px-3 py-2">
              Aditi Sharma, Digital Marketing Specialist
            </figcaption>
          </figure>
        </div>
      </section>

      <div className="rule" />

      <section className="max-w-5xl mx-auto px-6 py-14">
        <p className="byline mb-2">Background</p>
        <h2 className="masthead-title text-2xl mb-4">How this started</h2>
        <p className="mb-4 text-sm leading-relaxed max-w-3xl">
          Aditi Sharma Digital Marketing Specialist has spent more than six
          years helping small and mid sized businesses turn their websites
          and social pages into steady sources of leads. Aditi Sharma Digital
          Marketing Expert works across SEO, content strategy, paid
          advertising, and email marketing, building campaigns around real
          customer behaviour instead of guesswork, so every rupee of
          marketing spend is doing measurable work.
        </p>
        <p className="mb-4 text-sm leading-relaxed max-w-3xl">
          Aditi Sharma started out managing social media pages for a handful
          of local businesses, mostly out of curiosity about why some posts
          got attention and others disappeared. That curiosity turned into a
          full career once it became clear how much a clear, tested plan
          could change a small business, not through luck, but through
          consistent, measured work.
        </p>
        <p className="text-sm leading-relaxed max-w-3xl">
          Over the years, Aditi Sharma has worked across retail, healthcare,
          SaaS, hospitality, and professional services, bringing lessons from
          each industry into every new project. Today, Aditi Sharma works as
          an independent digital marketing specialist, partnering closely
          with a small number of clients at a time so that every account
          gets proper attention instead of being one of fifty on a
          spreadsheet.
        </p>
      </section>

      <div className="rule" />

      <section className="max-w-5xl mx-auto px-6 py-14 grid md:grid-cols-3 gap-10">
        <div className="md:col-span-2">
          <p className="byline mb-2">Experience</p>
          <h2 className="masthead-title text-2xl mb-4">Career timeline</h2>
          <p className="text-sm leading-relaxed mb-6">
            Aditi Sharma Digital Marketing Expert began her career in a
            digital marketing associate role, managing paid campaigns and
            social accounts for local businesses. That foundation led to a
            senior position at a marketing agency, leading SEO audits and
            managing multi channel campaigns for retail and SaaS clients.
            Since 2024, Aditi Sharma has worked independently, applying
            everything learned to a small, deliberately chosen group of
            clients.
          </p>
          <div className="space-y-6">
            {[
              ["2024 to Present", "Independent Digital Marketing Specialist", "Direct partnerships with founders on SEO, content, and paid media strategy."],
              ["2021 to 2024", "Senior Digital Marketing Executive", "Managed multi channel campaigns for retail and SaaS clients at a marketing agency."],
              ["2019 to 2021", "Digital Marketing Associate", "Started with social accounts and small ad budgets for local businesses."],
            ].map(([year, role, copy]) => (
              <div key={role} className="grid md:grid-cols-[140px_1fr] gap-4 border-t-2 border-ink pt-4">
                <span className="byline">{year}</span>
                <div>
                  <h3 className="masthead-title text-lg mb-1">{role}</h3>
                  <p className="text-sm text-ink/80">{copy}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <p className="byline mb-2">Skills</p>
          <ul className="text-sm space-y-2">
            {[
              "Search Engine Optimisation",
              "Content Strategy",
              "Paid Advertising",
              "Email Marketing",
              "Social Media Marketing",
              "Marketing Analytics",
            ].map((skill) => (
              <li key={skill} className="border-b border-ink/20 pb-2">
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <div className="rule" />

      <section className="max-w-5xl mx-auto px-6 py-14">
        <p className="byline mb-2">How She Works</p>
        <h2 className="masthead-title text-2xl mb-4">Strategy before tactics</h2>
        <p className="text-sm leading-relaxed max-w-3xl">
          Every project starts with an honest audit of what is currently
          working and where the fastest opportunity for growth sits,
          followed by a plan built around SEO, content, paid advertising, and
          email marketing, treated as one connected system rather than a
          list of separate services. Reporting stays simple and regular,
          written in plain language and backed by real figures, so a client
          is never left guessing what happened to their marketing budget
          that month. Businesses that choose to work with Aditi Sharma
          Digital Marketing Specialist are usually looking for one thing
          above everything else, marketing they can actually understand and
          trust.
        </p>
      </section>

      <div className="rule" />

      <section className="max-w-5xl mx-auto px-6 py-14">
        <p className="byline mb-2">Field Results</p>
        <h2 className="masthead-title text-2xl mb-4">A few numbers worth mentioning</h2>
        <p className="text-sm leading-relaxed max-w-3xl">
          A retail client saw organic search traffic nearly triple across two
          quarters after a rebuilt technical SEO and content plan. A local
          services business lowered its cost per lead while lead volume
          increased, and a small ecommerce brand built an email sequence
          that now accounts for a meaningful share of monthly revenue. These
          are not shared as a scoreboard, but as a sense of the kind of
          outcome Aditi Sharma Digital Marketing Expert aims for on every
          project, growth that holds up in a monthly review, not just a
          pitch deck.
        </p>
      </section>

      <div className="rule" />

      <section className="max-w-5xl mx-auto px-6 py-16 text-center">
        <h2 className="masthead-title text-3xl md:text-4xl mb-4">
          Want Aditi Sharma on your masthead?
        </h2>
        <a
          href="/contact"
          className="inline-block bg-primary text-paper px-8 py-3 byline hover:bg-accent transition-colors"
        >
          Contact Me
        </a>
      </section>
    </main>
  );
}
