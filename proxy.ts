import { NextResponse, type NextRequest } from "next/server";
import { defaultLocale, locales } from "./lib/site";

// Spanish is the default: any path without a locale goes to /es.
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const hasLocale = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
  );
  if (hasLocale) return;

  request.nextUrl.pathname = `/${defaultLocale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: ["/((?!_next|icon.png|logo.png|og.png|favicon.ico).*)"],
};
