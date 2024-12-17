import { MainNav } from "@/app/[locale]/components/main-nav";
// import { ThemeSelector } from "@/app/[locale]/components/theme-selector";
import { LangSelector } from "@/app/[locale]/components/lang-selector";
import { ThemeToggle } from "@/app/[locale]/components/theme-toggle";

interface SiteHeaderProps {
  locale: string;
}

export function SiteHeader({ locale }: SiteHeaderProps) {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 print:hidden">
      <div className="container flex h-20 md:h-14 items-center justify-between">
        <MainNav />
        <nav className="flex items-center gap-2">
          <LangSelector localeTitle={locale} />
          {/* <ThemeSelector /> */}
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
