import "@/styles/globals.css";
import type { Viewport } from "next";

import { getTranslations } from "next-intl/server";
import { fontSans } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/app/[locale]/components/theme-provider";
import { SiteHeader } from "@/app/[locale]/components/site-header";
// import { SiteFooter } from "@/app/[locale]/components/site-footer";

export async function generateMetadata() {
  const t = await getTranslations();

  return {
    title: `${t("Metadata.title")} - ${t("Index.personal.myFirstName")} ${t(
      "Index.personal.mySecondName"
    )}`,
    description: t("Index.siteWelcomeText"),
    keywords: t("Metadata.keywords"),
  };
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

interface RootLayoutProps {
  children: React.ReactNode;
  params: { locale: string };
}

export default function RootLayout({
  children,
  params: { locale },
}: RootLayoutProps) {
  return (
    <html lang={locale} suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.className
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col bg-background">
            <SiteHeader locale={locale} />
            <main className="flex-1">{children}</main>
            {/* <SiteFooter /> */}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
