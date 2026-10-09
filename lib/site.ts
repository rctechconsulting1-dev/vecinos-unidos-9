export const locales = ["es", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "es";

export const hasLocale = (value: string): value is Locale =>
  (locales as readonly string[]).includes(value);

// Paste the Facebook group / Page links here. Buttons stay hidden while empty.
export const links = {
  facebookGroup: "",
  facebookPage: "https://www.facebook.com/profile.php?id=61595353975638",
  myla311: "https://myla311.lacity.gov/",
};
