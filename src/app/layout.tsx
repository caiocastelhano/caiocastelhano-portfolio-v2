import type { Metadata } from "next";
import type { ReactNode } from "react";
import { cookies } from "next/headers";
import type { Locale } from "@/data/dictionaries/types";
import { I18nProvider } from "@/components/i18n/I18nProvider";
import { Manrope } from "next/font/google";

export const metadata: Metadata = {
  metadataBase: new URL("https://caiocastelhano-portfolio-v2.vercel.app"),

  title: "Caio Castelhano | Desenvolvedor Full-Stack",

  description:
    "Portfólio de Caio Castelhano, desenvolvedor full-stack com experiência em React, Next.js e Ruby on Rails, com foco em performance, acessibilidade e aplicações web modernas.",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Caio Castelhano | Desenvolvedor Full-Stack",

    description:
      "Portfólio de Caio Castelhano, desenvolvedor full-stack com experiência em React, Next.js e Ruby on Rails.",

    url: "/",

    siteName: "Caio Castelhano",

    images: [
      {
        url: "/assets/og-image.png",
        width: 1200,
        height: 630,
        alt: "Portfólio de Caio Castelhano",
      },
    ],

    type: "website",
  },

  robots: {
    index: false,
    follow: false,
  },
};

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