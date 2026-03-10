import type { ReactNode } from "react";
import { cookies } from "next/headers";
import type { Locale } from "@/data/dictionaries/types";
import { I18nProvider } from "@/components/i18n/I18nProvider";
import { Manrope } from "next/font/google";

function getLocale(raw?: string): Locale {
  return raw === "en" ? "en" : "pt";
}

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  const cookieStore = await cookies();
  const raw = cookieStore.get("locale")?.value;
  const locale = getLocale(raw);

  return (
    <html lang={locale}>
      <body className={manrope.className}>
        <I18nProvider initialLocale={locale}>
          {children}
        </I18nProvider>
      </body>
    </html>
  );
}