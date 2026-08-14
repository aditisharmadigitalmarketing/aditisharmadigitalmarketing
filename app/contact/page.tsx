export default function Contact() {
  return (
    <main>
      <section className="max-w-5xl mx-auto px-6 pt-14 pb-10">
        <span className="stamp mb-6">Get In Touch</span>
        <h1 className="masthead-title text-5xl md:text-6xl mt-4">
          Let&apos;s talk marketing
        </h1>
        <p className="mt-6 text-lg max-w-2xl">
          Send a message with a short note on your business and what you are
          hoping to grow. Most messages get a reply within one business day.
        </p>
      </section>

      <div className="rule" />

      <section className="max-w-5xl mx-auto px-6 py-14 grid md:grid-cols-2 gap-12">
        <div>
          <p className="byline mb-2">Status</p>
          <ul className="text-sm space-y-3 mb-10">
            <li className="flex justify-between border-b border-ink/20 pb-2">
              <span className="text-ink/60">Email</span>
              <span>hello@aditisharmadigitalmarketing.com</span>
            </li>
            <li className="flex justify-between border-b border-ink/20 pb-2">
              <span className="text-ink/60">Response Time</span>
              <span>Within 1 business day</span>
            </li>
            <li className="flex justify-between border-b border-ink/20 pb-2">
              <span className="text-ink/60">Location</span>
              <span>Remote, worldwide</span>
            </li>
          </ul>
          <p className="byline mb-2">Follow Along</p>
          <p className="text-sm">
            You can also find more of Aditi Sharma&apos;s work on{" "}
            <a href="https://aditisharmadigitalmarketing.carrd.co/" target="_blank" rel="noopener noreferrer" className="text-link">
              Carrd
            </a>
            ,{" "}
            <a href="https://aditisharmadigitalmarketing.github.io/" target="_blank" rel="noopener noreferrer" className="text-link">
              GitHub
            </a>
            , and{" "}
            <a href="https://linktr.ee/aditisharmadigitalmarketing" target="_blank" rel="noopener noreferrer" className="text-link">
              Linktree
            </a>
            .
          </p>
        </div>

        <form className="space-y-5">
          <div>
            <label className="byline block mb-2">Name</label>
            <input
              type="text"
              placeholder="Your name"
              className="w-full border-2 border-ink bg-transparent px-4 py-3 text-sm focus:outline-none focus:border-accent"
            />
          </div>
          <div>
            <label className="byline block mb-2">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full border-2 border-ink bg-transparent px-4 py-3 text-sm focus:outline-none focus:border-accent"
            />
          </div>
          <div>
            <label className="byline block mb-2">Message</label>
            <textarea
              rows={5}
              placeholder="Tell me about your business and goals"
              className="w-full border-2 border-ink bg-transparent px-4 py-3 text-sm focus:outline-none focus:border-accent"
            />
          </div>
          <button
            type="submit"
            className="bg-primary text-paper px-8 py-3 byline hover:bg-accent transition-colors"
          >
            Send Message
          </button>
        </form>
      </section>

      <div className="rule" />

      <section className="max-w-5xl mx-auto px-6 py-14">
        <p className="byline mb-2">FAQ Log</p>
        <h2 className="masthead-title text-2xl mb-8">Common questions</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            ["What is the best way to reach you?", "Email is the fastest way to start a conversation. Include a short summary of your business and what you are hoping to achieve."],
            ["Do you work with businesses outside your local area?", "Yes, all work is done remotely, so location is not a limitation for a project."],
            ["How soon can we start?", "Most new projects begin within one to two weeks of an initial conversation, depending on current availability."],
            ["What information should I include first?", "A short overview of your business, your current marketing efforts, and the goal you care about most right now."],
          ].map(([q, a]) => (
            <div key={q} className="border-t-2 border-ink pt-4">
              <h3 className="masthead-title text-lg mb-2">{q}</h3>
              <p className="text-sm text-ink/80">{a}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
