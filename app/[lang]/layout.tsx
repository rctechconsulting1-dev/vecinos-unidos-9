import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Inter, Inter_Tight } from "next/font/google";
import { getDictionary } from "@/lib/dictionaries";
import { hasLocale, locales } from "@/lib/site";
import "../globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: ["700", "800"],
});

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const { meta } = getDictionary(lang);
  return {
    title: meta.title,
    description: meta.description,
    alternates: { languages: { es: "/es", en: "/en" } },
    openGraph: {
      title: meta.title,
      description: meta.description,
      images: [{ url: "/og.png", width: 1640, height: 624 }],
      locale: lang === "es" ? "es_US" : "en_US",
    },
  };
}

export default async function RootLayout({ children, params }: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  return (
    <html lang={lang} className={`${inter.variable} ${interTight.variable} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
