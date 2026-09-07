import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Christopher S Murphy — Web Developer | Kansas" },
      {
        name: "description",
        content:
          "Hire a web developer in Kansas at a low local price. Fast, conversion-focused websites for Coffey County, surrounding counties, and all of Kansas. Out-of-state projects +$50.",
      },
      {
        property: "og:title",
        content: "Christopher S Murphy — Web Developer | Kansas",
      },
      {
        property: "og:description",
        content:
          "Hire a web developer in Kansas at a low local price. Fast, conversion-focused websites for Coffey County, surrounding counties, and all of Kansas. Out-of-state projects +$50.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
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

          {/* Footer */}
          <footer className="relative flex flex-col items-center justify-between gap-3 border-t border-chrome/10 pt-8 sm:flex-row">
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
