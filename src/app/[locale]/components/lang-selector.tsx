import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LuChevronDown, LuCheck } from "react-icons/lu";
import Link from "next/link";

interface LangSelectorProps {
  localeTitle: string;
}

export function LangSelector({ localeTitle }: LangSelectorProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="flex gap-2">
          {localeTitle.toUpperCase()} <LuChevronDown />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <Link href="/en">
          <DropdownMenuItem className="justify-between">
            English{localeTitle === "en" && <LuCheck />}
          </DropdownMenuItem>
        </Link>
        <Link href="/pl">
          <DropdownMenuItem className="justify-between">
            Polska{localeTitle === "pl" && <LuCheck />}
          </DropdownMenuItem>
        </Link>
        <Link href="/de">
          <DropdownMenuItem className="justify-between">
            Deutsch{localeTitle === "de" && <LuCheck />}
          </DropdownMenuItem>
        </Link>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
