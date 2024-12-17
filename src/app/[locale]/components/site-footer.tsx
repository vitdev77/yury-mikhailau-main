import { Button } from "@/components/ui/button";

export function SiteFooter() {
  return (
    <footer className="hidden lg:block md:py-0 print:hidden">
      <div className="container flex flex-col items-center justify-center gap-2 h-auto md:flex-row sm:h-24 text-balance text-center text-sm leading-loose text-muted-foreground">
        <Button variant="ghost">
          <a href="https://nextjs.org/" target="_blank" rel="noreferrer">
            Next.js
          </a>
        </Button>
        <Button variant="ghost">
          <a
            href="https://next-intl-docs.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            next-intl
          </a>
        </Button>
        <Button variant="ghost">
          <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer">
            Tailwind CSS
          </a>
        </Button>
        <Button variant="ghost">
          <a href="https://ui.shadcn.com/" target="_blank" rel="noreferrer">
            shadcn
          </a>
        </Button>
        <Button variant="ghost">
          <a
            href="https://react-icons.github.io/react-icons/"
            target="_blank"
            rel="noreferrer"
          >
            React Icons
          </a>
        </Button>
        <Button variant="ghost">
          <a href="https://lucide.dev/" target="_blank" rel="noreferrer">
            Lucide
          </a>
        </Button>
      </div>
    </footer>
  );
}
