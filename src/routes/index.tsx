import { createFileRoute, Link } from "@tanstack/react-router";

const contactPhone = "620-606-1604";
const contactPhoneHref = "tel:+16206061604";
const contactEmail = "chrislaptopm@gmail.com";
const contactEmailHref = "mailto:chrislaptopm@gmail.com";

const counties = [
  "Coffey County",
  "Osage County",
  "Lyon County",
  "Greenwood County",
  "Woodson County",
  "Allen County",
  "Anderson County",
];

const towns = [
  "Burlington",
  "Emporia",
  "Ottawa",
  "Iola",
  "Topeka",
  "Wichita",
  "Lawrence",
  "Overland Park",
  "Kansas City",
  "Garnett",
  "Yates Center",
  "Eureka",
];

const services = [
  {
    title: "Affordable Small Business Websites",
    body: "Hand-coded 3–6 page websites for Kansas small businesses. Fast, mobile-friendly, and priced local — not agency-priced.",
  },
  {
    title: "Website Redesign & Cleanup",
    body: "Got an old, slow, or clunky site? I rebuild it into a modern, fast-loading design that actually turns visitors into calls.",
  },
  {
    title: "Local SEO Setup",
    body: "Titles, descriptions, structured data, and Google Business Profile basics so people searching for your service in Kansas find you.",
  },
  {
    title: "Landing Pages That Convert",
    body: "One focused page built around a single action — call, book, or submit a form. Ideal for ads and campaigns.",
  },
];

const faqs = [
  {
    q: "How much does a cheap website cost in Kansas?",
    a: "Far less than an agency. I work solo with no overhead, so Kansas small businesses get a hand-coded site at a low local price. Tell me your budget and I'll tell you honestly what fits it. Out-of-state projects add a flat $50 fee.",
  },
  {
    q: "Do you only work in Coffey County?",
    a: "No — Coffey County is home base, but I build websites for businesses anywhere in Kansas, including Emporia, Topeka, Wichita, Lawrence, Ottawa, Iola, and the Kansas City metro. Everything can be handled remotely or in person nearby.",
  },
  {
    q: "How fast can my website be live?",
    a: "Most small business sites go live in one to two weeks once I have your content. Single landing pages are often done in a few days.",
  },
];

const businessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "/#business",
  name: "Christopher S Murphy — Web Designer",
  alternateName: "Christopher S Murphy Web Design",
  description:
    "Affordable web designer serving all of Kansas. Cheap, hand-coded small business websites, redesigns, and local SEO at a low local price. Out-of-state projects +$50.",
  url: "/",
  telephone: contactPhone,
  email: contactEmail,
  priceRange: "$",
  image: "/favicon.ico",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Burlington",
    addressRegion: "KS",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 38.1936,
    longitude: -95.7422,
  },
  founder: {
    "@type": "Person",
    name: "Christopher S Murphy",
    jobTitle: "Web Developer",
    telephone: contactPhone,
    email: contactEmail,
  },
  knowsAbout: [
    "Web design",
    "Website development",
    "Local SEO",
    "Small business websites",
  ],
  areaServed: [
    { "@type": "State", name: "Kansas" },
    ...counties.map((name) => ({ "@type": "AdministrativeArea", name })),
    ...towns.map((name) => ({ "@type": "City", name })),
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Web design services in Kansas",
    itemListElement: services.map((s) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: s.title, description: s.body },
    })),
  },
};

const pageTitle = "Affordable Kansas Web Designer | Cheap Website Design";
const pageDescription =
  "Cheap, affordable website design in Kansas by Christopher S Murphy. Small business sites, redesigns & local SEO at a low local price. Call (620) 606-1604.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: pageTitle },
      { name: "description", content: pageDescription },
      {
        name: "keywords",
        content:
          "cheap website designer Kansas, affordable web designer Kansas, website designers in Kansas, low cost web design Coffey County, small business website Kansas",
      },
      { name: "geo.region", content: "US-KS" },
      { name: "geo.placename", content: "Burlington, Kansas" },
      { property: "og:title", content: pageTitle },
      { property: "og:description", content: pageDescription },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:title", content: pageTitle },
      { name: "twitter:description", content: pageDescription },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(businessSchema),
      },
    ],
  }),
  component: Index,
});


function Index() {
  return (
    <div className="dark min-h-screen bg-ink font-display text-chrome antialiased">
      {/* Ambient glows + grid texture */}
      <div className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
        >
          <div
            className="absolute left-[15%] top-[-5%] h-[50vh] w-[60vw] -translate-x-1/2 rounded-full bg-brand/20 blur-[150px]"
            aria-hidden="true"
          />
          <div
            className="absolute right-[-5%] top-[10%] h-[45vh] w-[45vw] rounded-full bg-accent-chrome/15 blur-[150px]"
            aria-hidden="true"
          />
        </div>
        <div
          className="pointer-events-none absolute inset-0 bg-grid-chrome opacity-[0.12]"
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-6xl px-6 py-10 sm:px-10">
          {/* Header */}
          <header className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="grid size-9 place-items-center rounded-full bg-gradient-to-br from-accent-chrome to-brand shadow-brand-glow-sm">
                <span className="font-mono text-sm font-bold text-ink">CM</span>
              </div>
              <div className="leading-tight">
                <p className="text-sm font-bold tracking-wide text-foreground">
                  Christopher S Murphy
                </p>
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-brand/70">
                  Web Developer
                </p>
              </div>
            </div>
            <nav className="hidden items-center gap-7 font-mono text-xs uppercase tracking-[0.18em] text-chrome/60 sm:flex">
              <Link to="/" className="transition-colors hover:text-brand">
                Intake
              </Link>
            </nav>
          </header>

          {/* Hero */}
          <div className="mt-20 grid items-center gap-12 pb-24 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-7">
              <p className="inline-flex items-center gap-2 rounded-full border border-accent-chrome/40 bg-accent-chrome/[0.08] px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.25em] text-accent-chrome">
                Now booking new builds
              </p>

              <h1 className="mt-7 max-w-[20ch] text-balance text-5xl font-bold leading-[0.95] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
                Web Developer for{" "}
                <span className="bg-gradient-to-r from-brand via-accent-light to-accent-chrome bg-clip-text text-transparent">
                  all of Kansas
                </span>{" "}
                at a low local price
              </h1>

              <p className="mt-7 max-w-xl text-lg leading-relaxed text-chrome/70">
                I'm Christopher — I build fast, conversion-ready websites for
                businesses anywhere in Kansas, with Coffey County and the
                surrounding area as home base. Hand-coded, premium results
                without the agency overhead. Out-of-state projects add a $50 fee.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {[
                  "All Kansas",
                  "Coffey",
                  "Osage",
                  "Lyon",
                  "Greenwood",
                  "Woodson",
                  "Allen",
                  "Anderson",
                ].map((county) => (
                  <span
                    key={county}
                    className="rounded-md border border-chrome/15 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.15em] text-chrome/50"
                  >
                    {county}
                  </span>
                ))}
              </div>
            </div>

            {/* Intake form */}
            <div className="lg:col-span-5">
              <form
                action="https://formspree.io/f/mnpqgllv"
                method="POST"
                className="relative rounded-2xl border border-chrome/25 bg-gradient-to-br from-foreground/10 to-foreground/5 p-7 shadow-brand-glow backdrop-blur-xl transition-transform duration-300 hover:-translate-y-1 sm:p-8"
              >
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-top-glow" />

                <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-brand">
                  Lead intake
                </p>
                <h2 className="mt-3 text-2xl font-bold text-foreground">
                  Free UI Concept Intake
                </h2>
                <p className="mt-2 text-sm text-chrome/60">
                  Tell me where you are. I'll sketch a free layout concept — no
                  cost, no obligation.
                </p>

                <div className="mt-7 space-y-5">
                  <div>
                    <label
                      htmlFor="business_name"
                      className="font-mono text-[11px] uppercase tracking-[0.15em] text-chrome/50"
                    >
                      01 — Business
                    </label>
                    <input
                      id="business_name"
                      name="business_name"
                      type="text"
                      placeholder="Your Business Name"
                      required
                      className="mt-2 w-full rounded-lg border border-chrome/20 bg-ink/60 px-4 py-3 text-sm text-foreground outline-none transition placeholder:text-chrome/40 focus:border-brand focus:ring-2 focus:ring-brand/50"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="current_website"
                      className="font-mono text-[11px] uppercase tracking-[0.15em] text-chrome/50"
                    >
                      02 — Current site
                    </label>
                    <input
                      id="current_website"
                      name="current_website"
                      type="url"
                      placeholder="Current Website Link (Optional)"
                      className="mt-2 w-full rounded-lg border border-chrome/20 bg-ink/60 px-4 py-3 text-sm text-foreground outline-none transition placeholder:text-chrome/40 focus:border-brand focus:ring-2 focus:ring-brand/50"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="client_email"
                      className="font-mono text-[11px] uppercase tracking-[0.15em] text-chrome/50"
                    >
                      03 — Email
                    </label>
                    <input
                      id="client_email"
                      name="client_email"
                      type="email"
                      placeholder="Your Best Email"
                      required
                      className="mt-2 w-full rounded-lg border border-chrome/20 bg-ink/60 px-4 py-3 text-sm text-foreground outline-none transition placeholder:text-chrome/40 focus:border-brand focus:ring-2 focus:ring-brand/50"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="mt-7 w-full rounded-lg bg-gradient-to-r from-brand-light to-accent-chrome py-4 text-sm font-bold uppercase tracking-[0.12em] text-ink shadow-accent-glow transition hover:brightness-110 active:scale-[0.99]"
                >
                  Generate My Free Layout Concept
                </button>

                <p className="mt-4 text-center font-mono text-[10px] uppercase tracking-[0.15em] text-chrome/40">
                  Out-of-state projects billed +$50 · Replied within 24h
                </p>
              </form>
            </div>
          </div>

          {/* Direct contact */}
          <section
            aria-labelledby="contact-heading"
            className="relative mx-auto mt-20 max-w-3xl rounded-2xl border border-chrome/20 bg-gradient-to-br from-foreground/10 to-foreground/5 p-8 shadow-brand-glow backdrop-blur-xl sm:p-10"
          >
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-top-glow" />
            <div className="text-center">
              <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-brand">
                Direct contact
              </p>
              <h2
                id="contact-heading"
                className="mt-3 text-2xl font-bold text-foreground sm:text-3xl"
              >
                Prefer to talk directly?
              </h2>
              <p className="mx-auto mt-3 max-w-lg text-chrome/70">
                Call or text anytime. I reply fast and can walk through your
                project on the spot.
              </p>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <a
                href={contactPhoneHref}
                className="group flex items-center gap-4 rounded-xl border border-chrome/15 bg-ink/40 p-5 transition hover:border-brand/50 hover:bg-ink/60"
              >
                <div className="grid size-10 place-items-center rounded-full bg-brand/10 text-brand transition group-hover:bg-brand/20">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div className="text-left">
                  <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-chrome/50">
                    Call or text
                  </p>
                  <p className="text-lg font-semibold text-foreground">
                    (620) 606-1604
                  </p>
                </div>
              </a>

              <a
                href={contactEmailHref}
                className="group flex items-center gap-4 rounded-xl border border-chrome/15 bg-ink/40 p-5 transition hover:border-accent-chrome/50 hover:bg-ink/60"
              >
                <div className="grid size-10 place-items-center rounded-full bg-accent-chrome/10 text-accent-chrome transition group-hover:bg-accent-chrome/20">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </div>
                <div className="text-left">
                  <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-chrome/50">
                    Email
                  </p>
                  <p className="text-lg font-semibold text-foreground">
                    chrislaptopm@gmail.com
                  </p>
                </div>
              </a>
            </div>
          </section>

          {/* Footer */}
          <footer className="relative mt-20 flex flex-col items-center justify-between gap-3 border-t border-chrome/10 pt-8 sm:flex-row">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-chrome/40">
              © {new Date().getFullYear()} Christopher S Murphy — Coffey County,
              KS
            </p>
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-chrome/40">
              Hand-coded · Premium dark system
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
}
