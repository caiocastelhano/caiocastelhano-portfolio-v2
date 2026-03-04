import type { ReactNode } from "react";
import { cookies } from "next/headers";
import type { Locale } from "@/data/dictionaries/types";
import { I18nProvider } from "@/components/i18n/I18nProvider";

function getLocale(raw?: string): Locale {
  return raw === "en" ? "en" : "pt";
}

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
      <body>
        <I18nProvider initialLocale={locale}>
          {children}
        </I18nProvider>
      </body>
    </html>
  );
}