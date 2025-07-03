
import createMiddleware from "next-intl/middleware";
import { NextResponse } from "next/server";

const intlMiddleware = createMiddleware({
  locales: ["az", "en", "ru"], // Supported locales
  defaultLocale: "az", // Default locale
  localePrefix: "as-needed", // Add prefix only when necessary
  localeDetection: false, // Disable browser locale detection
  urlMappingStrategy: "rewriteDefault", // Rewrite default locale without prefix
});

export default function middleware(req) {
  const { cookies } = req;
  const nextLocale = cookies.get("NEXT_LOCALE")?.value; // Get locale from the cookie
  const { pathname } = req.nextUrl;

  // Exclude static files from localization
  const isStaticAsset =
    /\.(jpg|jpeg|png|gif|svg|ttf|woff|woff2|eot|otf|mp4|webm|json|css|js)$/.test(
      pathname
    );
  if (isStaticAsset) {
    return NextResponse.next(); // Skip processing for static files
  }

  // Check if the pathname includes a locale
  const hasLocale = /^\/(az|ru|en)(\/|$)/.test(pathname);

  if (nextLocale && !hasLocale) {
    const url = req.nextUrl.clone();
    // Only redirect if the NEXT_LOCALE is not az (since it's the default)
    if (nextLocale !== "az") {
      url.pathname = `/${nextLocale}${pathname === "/" ? "" : pathname}`;
      return NextResponse.redirect(url);
    }
  }

  // Handle regular localization using intlMiddleware
  return intlMiddleware(req);
}

export const config = {
  matcher: ["/", "/((?!api|_next|.\\..).*)"], // Match all routes except static files
};