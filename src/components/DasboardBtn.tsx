"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { WandSparkles } from "lucide-react";
import { useUserRole } from "@/hooks/useUserRole";

function DasboardBtn() {
  const { isCandidate, isLoading } = useUserRole();

  if (isCandidate || isLoading) return null;

  return (
    <Link href={"/dashboard"}>
      <Button className="gap-2 font-medium" size={"sm"}>
        <WandSparkles className="size-4" />
        Dashboard
      </Button>
    </Link>
  );
}
export default DasboardBtn;
