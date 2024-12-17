import { useTranslations } from "next-intl";
import Link from "next/link";

export function MainNav() {
  const t = useTranslations("Index");

  return (
    <div>
      <Link href="/">{t("siteWelcomeText")}</Link>
    </div>
  );
}
