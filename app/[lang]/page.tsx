import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getDictionary } from "@/lib/dictionaries";
import { hasLocale, links } from "@/lib/site";

const phoneIcons: Record<string, string> = {
  parking: "🚗",
  bulky: "🛋️",
  police: "👮",
  "311": "☎️",
};

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const t = getDictionary(lang);
  const otherLang = lang === "es" ? "en" : "es";
  // Send people to the group once it's linked; until then, the Page.
  const facebook = links.facebookGroup
    ? { href: links.facebookGroup, label: t.hero.ctaGroup }
    : links.facebookPage
      ? { href: links.facebookPage, label: t.hero.ctaPage }
      : null;

  const shareText = [
    t.share.text,
    ...t.phoneList.map((p) => `• ${p.title}: ${p.number}`),
    "🚨 911",
  ].join("\n");

  return (
    <>
      <header className="sticky top-0 z-20 border-b border-white/10 bg-teal-deep/95 text-cream backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center gap-3 px-4 py-3">
          <Link href={`/${lang}`} className="flex items-center gap-2.5">
            <Image src="/logo.png" alt="" width={36} height={36} className="rounded-full" />
            <span className="font-display text-lg font-bold leading-none">{t.hero.title}</span>
          </Link>
          <nav className="ml-auto flex items-center gap-1 text-sm font-medium">
            <a href="#numeros" className="hidden rounded-full px-3 py-2 hover:bg-white/10 sm:block">
              {t.nav.phones}
            </a>
            <a href="#reportar" className="hidden rounded-full px-3 py-2 hover:bg-white/10 sm:block">
              {t.nav.report}
            </a>
            <Link
              href={`/${otherLang}`}
              hrefLang={otherLang}
              aria-label={t.nav.switchAria}
              className="rounded-full border border-cream/40 px-3 py-1.5 hover:bg-cream hover:text-teal-deep"
            >
              {t.nav.switchLabel}
            </Link>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-linear-to-br from-teal to-teal-deep text-cream">
          <div className="relative z-10 mx-auto max-w-5xl px-4 pt-16 pb-28 text-center sm:pt-24 sm:pb-36">
            <p className="text-xs font-bold tracking-[0.3em] text-amber uppercase sm:text-sm">
              {t.hero.kicker}
            </p>
            <h1 className="mt-4 font-display text-5xl leading-[0.95] font-extrabold tracking-tight sm:text-7xl">
              {t.hero.title}
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-cream/85 sm:text-xl">{t.hero.lead}</p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="#numeros"
                className="w-full rounded-full bg-cream px-6 py-3.5 font-bold text-teal-deep hover:bg-white sm:w-auto"
              >
                {t.hero.ctaPrimary}
              </a>
              {facebook && (
                <a
                  href={facebook.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full rounded-full border-2 border-cream/60 px-6 py-3 font-bold hover:bg-white/10 sm:w-auto"
                >
                  {facebook.label}
                </a>
              )}
            </div>
          </div>
          <Rooftops />
        </section>

        {/* Emergency */}
        <section className="mx-auto -mt-8 max-w-5xl px-4">
          <div className="relative z-10 flex flex-col gap-3 rounded-2xl bg-rust p-5 text-white shadow-lg sm:flex-row sm:items-center sm:gap-5">
            <a
              href="tel:911"
              className="shrink-0 rounded-xl bg-white px-5 py-3 text-center font-display text-3xl font-extrabold text-rust"
            >
              911
            </a>
            <div>
              <p className="font-display text-xl font-bold">{t.emergency.title}</p>
              <p className="text-white/90">{t.emergency.body}</p>
            </div>
          </div>
        </section>

        {/* Phone numbers */}
        <section id="numeros" className="mx-auto max-w-5xl scroll-mt-20 px-4 pt-16">
          <SectionHeading title={t.phones.heading} sub={t.phones.sub} />
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {t.phoneList.map((p) => (
              <article
                key={p.id}
                className="flex flex-col rounded-2xl border border-line bg-white p-6 shadow-sm"
              >
                <div className="flex items-start gap-3">
                  <span aria-hidden className="text-3xl">
                    {phoneIcons[p.id]}
                  </span>
                  <div>
                    <h3 className="font-display text-xl leading-tight font-bold">{p.title}</h3>
                    <p className="text-sm font-semibold tracking-wide text-muted uppercase">{p.agency}</p>
                  </div>
                </div>
                <a
                  href={`tel:${p.tel}`}
                  className="mt-4 font-display text-3xl font-extrabold tracking-tight text-teal hover:text-rust"
                >
                  {p.number}
                </a>
                <p className="mt-4 text-sm font-semibold text-muted">{p.lead}</p>
                <ul className="mt-2 space-y-1.5">
                  {p.examples.map((ex) => (
                    <li key={ex} className="flex gap-2">
                      <span aria-hidden className="mt-2 size-1.5 shrink-0 rounded-full bg-amber" />
                      <span>{ex}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={`tel:${p.tel}`}
                  className="mt-6 rounded-full bg-teal py-3 text-center font-bold text-cream hover:bg-teal-deep sm:hidden"
                >
                  {t.phones.call} {p.number}
                </a>
              </article>
            ))}
          </div>

          <div className="mt-5 flex flex-col gap-4 rounded-2xl bg-cream p-6 sm:flex-row sm:items-center">
            <div className="flex-1">
              <p className="font-display text-xl font-bold">{t.app311.title}</p>
              <p className="mt-1 text-muted">{t.app311.body}</p>
              <p className="mt-1 text-sm text-muted">{t.app311.outside}</p>
            </div>
            <a
              href={links.myla311}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 rounded-full bg-teal px-6 py-3 text-center font-bold text-cream hover:bg-teal-deep"
            >
              {t.app311.cta} ↗
            </a>
          </div>
        </section>

        {/* How to report */}
        <section id="reportar" className="mx-auto max-w-5xl scroll-mt-20 px-4 pt-20">
          <SectionHeading title={t.report.heading} sub={t.report.sub} />
          <ol className="mt-8 grid gap-4 md:grid-cols-2">
            {t.report.steps.map((step, i) => (
              <li key={step.title} className="flex gap-4 rounded-2xl border border-line bg-white p-5">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-amber font-display text-lg font-extrabold text-teal-deep">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-display text-lg leading-snug font-bold">{step.title}</h3>
                  <p className="mt-1 text-muted">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* Share */}
        <section className="mx-auto max-w-5xl px-4 py-20">
          <div className="rounded-3xl bg-teal px-6 py-10 text-center text-cream">
            <h2 className="font-display text-3xl font-extrabold">{t.share.heading}</h2>
            <p className="mx-auto mt-2 max-w-lg text-cream/85">{t.share.body}</p>
            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={`https://wa.me/?text=${encodeURIComponent(shareText)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full rounded-full bg-[#25D366] px-6 py-3.5 font-bold text-[#08331a] hover:brightness-105 sm:w-auto"
              >
                {t.share.whatsapp}
              </a>
              {facebook && (
                <a
                  href={facebook.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full rounded-full bg-cream px-6 py-3.5 font-bold text-teal-deep hover:bg-white sm:w-auto"
                >
                  {facebook.label}
                </a>
              )}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-line bg-cream">
        <div className="mx-auto flex max-w-5xl flex-col gap-4 px-4 py-10 text-sm text-muted sm:flex-row sm:items-start">
          <Image src="/logo.png" alt="" width={56} height={56} className="rounded-full" />
          <div className="space-y-2">
            <p className="font-semibold text-ink">{t.footer.about}</p>
            <p>{t.footer.verify}</p>
            {links.facebookPage && (
              <a
                href={links.facebookPage}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-teal underline"
              >
                {t.footer.page}
              </a>
            )}
          </div>
        </div>
      </footer>
    </>
  );
}

function SectionHeading({ title, sub }: { title: string; sub: string }) {
  return (
    <div>
      <h2 className="font-display text-3xl leading-tight font-extrabold tracking-tight text-teal-deep sm:text-4xl">
        {title}
      </h2>
      <p className="mt-2 text-lg text-muted">{sub}</p>
    </div>
  );
}

function Rooftops() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 1640 120"
      preserveAspectRatio="xMidYMax slice"
      className="absolute inset-x-0 bottom-0 h-24 w-full text-black/20 sm:h-28"
    >
      <g fill="currentColor">
        <path d="M0 40 60 6l60 34v80H0z" />
        <path d="M140 20h90v100h-90z" />
        <path d="M250 40l70-34 70 34v80H250z" />
        <path d="M1240 40l65-34 65 34v80h-130z" />
        <path d="M1390 20h100v100h-100z" />
        <path d="M1510 40l65-34 65 34v80h-130z" />
      </g>
      <rect y="112" width="1640" height="8" fill="var(--amber)" />
    </svg>
  );
}
