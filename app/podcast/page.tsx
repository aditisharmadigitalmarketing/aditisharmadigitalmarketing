export default function Podcast() {
  const alsoOn: [string, string, string][] = [
    ["Apple Podcasts", "The full show, updated automatically as new episodes go live.", "https://podcasts.apple.com/us/podcast/id6796629820"],
    ["Spotify", "Follow the show to get new episodes as soon as they publish.", "https://open.spotify.com/show/033QYUcYlZ3DMbIAHfdiwE"],
    ["Amazon Music", "Also available through Amazon Music and Audible.", "https://music.amazon.com/podcasts/b3c661e8-f3cb-4802-9f62-519a6b6c932c"],
    ["iHeart", "Streaming on iHeartRadio's podcast network.", "https://iheart.com/podcast/339051945"],
    ["Deezer", "Available for streaming through Deezer.", "https://www.deezer.com/show/1003419212"],
    ["Castbox", "Subscribe on Castbox for new episode notifications.", "https://castbox.fm/channel/id7321834"],
    ["Podcast Addict", "Follow the show on Podcast Addict.", "https://podcastaddict.com/podcast/aditi-sharma-digital-marketing-specialis/7115649"],
    ["Podchaser", "Episode credits, ratings, and reviews on Podchaser.", "https://www.podchaser.com/podcasts/aditi-sharma-digital-marketing-6552199"],
    ["Pocket Casts", "Also distributed through the Pocket Casts app.", "https://pocketcasts.com/podcast/aditi-sharma-digital-marketing-specialist/ca038e50-6979-013f-3454-02de017721dd"],
  ];

  const manual: [string, string, string][] = [
    ["Audiomack", "Episodes uploaded directly to the Aditi Sharma Audiomack profile.", "https://audiomack.com/aditisharmadigitalmarketing"],
    ["HubHopper", "Episodes also distributed through HubHopper.", "https://listen.hubhopper.com/podcast/aditi-sharma-digital-marketing-specialist/485609?s=hh-web-app"],
    ["PodOMatic", "An alternate archive of episodes hosted on PodOMatic.", "https://www.podomatic.com/podcasts/aditisharmadigitalmarketingpodcast"],
    ["Audio.com", "Additional uploads hosted on Audio.com.", "https://audio.com/aditi-sharma-digital-marketing-specialist"],
  ];

  return (
    <main>
      <section className="max-w-5xl mx-auto px-6 pt-14 pb-10">
        <span className="stamp mb-6">Podcast</span>
        <h1 className="masthead-title text-5xl md:text-6xl mt-4">
          The Aditi Sharma Digital Marketing Specialist Podcast
        </h1>
        <p className="mt-6 text-lg max-w-2xl">
          Conversations on SEO, content, paid media, and building marketing
          that businesses can actually measure. New episodes appear here
          automatically as soon as they go live on Spreaker.
        </p>
        <div className="mt-8 flex gap-4">
          <a
            href="https://www.spreaker.com/podcast/aditi-sharma-digital-marketing-specialist--7137764"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-paper px-6 py-3 byline hover:bg-accent transition-colors"
          >
            Listen on Spreaker
          </a>
          <a
            href="/contact"
            className="border border-primary px-6 py-3 byline hover:border-accent hover:text-accent transition-colors"
          >
            Suggest a Topic
          </a>
        </div>
      </section>

      <div className="rule" />

      <section className="max-w-5xl mx-auto px-6 py-14">
        <p className="byline mb-2">Latest Episodes</p>
        <h2 className="masthead-title text-2xl mb-4">Always up to date, automatically</h2>
        <p className="text-sm max-w-2xl mb-6 text-ink/80">
          This player is connected directly to the Spreaker show feed. The
          moment a new episode is published, it appears here, no manual
          updates needed on this site.
        </p>
        <div className="border-2 border-ink">
          <iframe
            src="https://widget.spreaker.com/player?show_id=7137764&theme=light&chapters-image=true&playlist=show&playlist-continuous=true&hide_logo=false"
            width="100%"
            height="400"
            frameBorder="0"
            title="Aditi Sharma Digital Marketing Specialist podcast player"
          />
        </div>
      </section>

      <div className="rule" />

      <section className="max-w-5xl mx-auto px-6 py-14">
        <p className="byline mb-2">Also Streaming Live</p>
        <h2 className="masthead-title text-2xl mb-4">Also listen on SoundCloud</h2>
        <div className="border-2 border-ink">
          <iframe
            width="100%"
            height="300"
            scrolling="no"
            frameBorder="0"
            title="Aditi Sharma on SoundCloud"
            src="https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/aditisharmaexpert&color=%23531c81&auto_play=false&show_user=true&show_reposts=false&show_teaser=true&visual=false"
          />
        </div>
      </section>

      <div className="rule" />

      <section className="max-w-5xl mx-auto px-6 py-14">
        <p className="byline mb-2">Also On</p>
        <h2 className="masthead-title text-2xl mb-4">
          Every major podcast app, kept current automatically
        </h2>
        <p className="text-sm max-w-2xl mb-8 text-ink/80">
          These apps pull episodes straight from the Spreaker feed, so
          anything published there reaches every link below without any
          extra work on this page.
        </p>
        <div className="grid md:grid-cols-3 gap-x-8 gap-y-8">
          {alsoOn.map(([title, copy, href]) => (
            <div key={title} className="border-t-2 border-ink pt-4">
              <h3 className="masthead-title text-lg mb-2">{title}</h3>
              <p className="text-sm text-ink/80 mb-3">{copy}</p>
              <a href={href} target="_blank" rel="noopener noreferrer" className="text-link text-sm">
                Listen on {title}
              </a>
            </div>
          ))}
        </div>
      </section>

      <div className="rule" />

      <section className="max-w-5xl mx-auto px-6 py-14">
        <p className="byline mb-2">Also Uploaded Manually</p>
        <h2 className="masthead-title text-2xl mb-4">A few more places episodes live</h2>
        <p className="text-sm max-w-2xl mb-8 text-ink/80">
          These platforms only support one episode at a time, so rather than
          show an outdated player here, the links below always go straight
          to the live, current profile.
        </p>
        <div className="grid md:grid-cols-2 gap-x-8 gap-y-8">
          {manual.map(([title, copy, href]) => (
            <div key={title} className="border-t-2 border-ink pt-4">
              <h3 className="masthead-title text-lg mb-2">{title}</h3>
              <p className="text-sm text-ink/80 mb-3">{copy}</p>
              <a href={href} target="_blank" rel="noopener noreferrer" className="text-link text-sm">
                Listen on {title}
              </a>
            </div>
          ))}
        </div>
      </section>

      <div className="rule" />

      <section className="max-w-5xl mx-auto px-6 py-14">
        <p className="byline mb-2">What The Show Covers</p>
        <h2 className="masthead-title text-2xl mb-4">Why this podcast exists</h2>
        <div className="grid md:grid-cols-3 gap-x-8 gap-y-8">
          {[
            ["01", "SEO and Content", "How search engine optimisation and content work together to bring in the right visitors and keep them there."],
            ["02", "Paid Media and Analytics", "Reading a campaign like a dashboard, and knowing which numbers actually deserve attention each week."],
            ["03", "Behind the Strategy", "Aditi Sharma on the everyday decisions behind building marketing systems for small and mid sized businesses."],
          ].map(([num, title, copy]) => (
            <div key={title} className="border-t-2 border-ink pt-4">
              <p className="byline text-accent mb-2">{num}</p>
              <h3 className="masthead-title text-lg mb-2">{title}</h3>
              <p className="text-sm text-ink/80">{copy}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="rule" />

      <section className="max-w-3xl mx-auto px-6 py-16 text-center">
        <p className="pull-quote text-3xl">
          &ldquo;Good marketing should never feel like guesswork. Every
          number tells you what to do next, if you are willing to look at it
          honestly.&rdquo;
        </p>
        <p className="byline mt-6">Aditi Sharma, Digital Marketing Specialist</p>
      </section>

      <div className="rule" />

      <section className="max-w-5xl mx-auto px-6 py-14">
        <p className="byline mb-2">In The Press</p>
        <h2 className="masthead-title text-2xl mb-4">Recent coverage</h2>
        <p className="text-sm max-w-2xl text-ink/80">
          The story behind how Aditi Sharma Digital Marketing Specialist
          helps businesses achieve sustainable online growth was also
          covered on{" "}
          <a
            href="https://www.prlog.org/13159050-aditi-sharma-digital-marketing-specialist-helps-businesses-achieve-sustainable-online-growth.html"
            target="_blank"
            rel="noopener noreferrer"
            className="text-link"
          >
            PRLog
          </a>{" "}
          and{" "}
          <a
            href="https://www.issuewire.com/aditi-sharma-digital-marketing-specialist-talks-about-the-value-of-ethical-marketing-1871302317764925"
            target="_blank"
            rel="noopener noreferrer"
            className="text-link"
          >
            IssueWire
          </a>
          .
        </p>
      </section>

      <div className="rule" />

      <section className="max-w-5xl mx-auto px-6 py-16 text-center">
        <p className="byline mb-2">Listen Anywhere</p>
        <h2 className="masthead-title text-2xl mb-4">Prefer another app?</h2>
        <p className="text-sm max-w-xl mx-auto text-ink/80">
          The show is hosted on{" "}
          <a
            href="https://www.spreaker.com/podcast/aditi-sharma-digital-marketing-specialist--7137764"
            target="_blank"
            rel="noopener noreferrer"
            className="text-link"
          >
            Spreaker
          </a>
          , and episodes are also available wherever you already listen to
          podcasts. If your preferred app is not listed above, search
          &ldquo;Aditi Sharma Digital Marketing Specialist&rdquo; directly
          within it.
        </p>
      </section>
    </main>
  );
}
