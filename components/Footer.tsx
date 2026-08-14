const links: [string, string, string, string][] = [
  ["Medium", "https://medium.com/@aditisharmadigitalmarketing", "#000000", "#fff"],
  ["GitHub", "https://github.com/aditisharmadigitalmarketing/", "#24292E", "#fff"],
  ["Hashnode", "https://aditisharmadigitalmarketingspecialist.hashnode.dev/", "#2962FF", "#fff"],
  ["Spreaker", "https://www.spreaker.com/podcast/aditi-sharma-digital-marketing-specialist--7137764", "#F5C300", "#12100A"],
  ["Linktree", "https://linktr.ee/aditisharmadigitalmarketing", "#43E660", "#12100A"],
  ["Crunchbase", "https://www.crunchbase.com/person/aditi-sharma-digital-marketing-specialist", "#146AFF", "#fff"],
  ["F6S", "https://f6s.com/aditisharmadigitalmarketing#about", "#0072CE", "#fff"],
  ["SoundCloud", "https://soundcloud.com/aditisharmaexpert", "#FF5500", "#fff"],
  ["Pinterest", "https://www.pinterest.com/aditisharmadigitalmarketing/", "#E60023", "#fff"],
  ["Reddit", "https://www.reddit.com/user/aditisharmamarketing/", "#FF4500", "#fff"],
  ["Substack", "https://substack.com/@aditisharmadigitalmarketing", "#FF6719", "#fff"],
  ["Quora", "https://aditisharmadigitalmarketingspecialist.quora.com/", "#B92B27", "#fff"],
];

function initials(name: string) {
  if (name.length <= 2) return name;
  const parts = name.replace(/[^A-Za-z ]/g, "").split(" ");
  if (parts.length > 1) return (parts[0][0] + parts[1][0]).toUpperCase();
  return name.slice(0, 2);
}

export default function Footer() {
  return (
    <footer className="border-t-4 border-ink mt-24">
      <div className="max-w-5xl mx-auto px-6 py-10">
        <p className="byline mb-4">Also Featured On</p>
        <div className="flex flex-wrap gap-3 mb-10">
          {links.map(([label, href, bg, fg]) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              title={label}
              aria-label={label}
              className="w-10 h-10 rounded-full flex items-center justify-center font-mono text-xs font-bold hover:opacity-80 transition-opacity"
              style={{ backgroundColor: bg, color: fg }}
            >
              {initials(label)}
            </a>
          ))}
        </div>
        <div className="rule-thin mb-6" />
        <div className="flex flex-wrap items-center justify-between gap-4 byline">
          <span>&copy; 2026 Aditi Sharma. All rights reserved.</span>
          <span>Aditi Sharma Digital Marketing Specialist</span>
        </div>
      </div>
    </footer>
  );
}
