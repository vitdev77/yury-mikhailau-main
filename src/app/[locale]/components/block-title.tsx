import { Separator } from "@/components/ui/separator";

interface BlockTitleProps {
  title: string;
}

export function BlockTitle({ title }: BlockTitleProps) {
  return (
    <>
      <h2 className="text-2xl font-semibold text-muted-foreground uppercase tracking-widest mb-4">
        {title}
      </h2>
      <Separator className="my-3 block md:hidden" />
    </>
  );
}
