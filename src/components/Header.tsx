import { HomeIcon, File, UsersRound, LogOut } from "lucide-react";
import { NavButton } from "@/components/NavButton";
import Link from "next/link";
import { ModeToggle } from "@/components/ModeToggle";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="animate-slide bg-background h-12 p-2 border-b sticky top-0 z-20">
      <div className="flex h-8 items-center justify-between  w-full ">
        {/*LEFT  */}
        <div className="flex items-center gap-2">
          <NavButton icon={HomeIcon} label="Home" href="/home" />
          <Link href="/home" className="flex items-center gap-2" title="Home">
            <h1 className="hidden sm:block text-xl font-bold">
              Computer Repair Shop
            </h1>
          </Link>
        </div>
        {/* RIGHT  */}
        <div className="flex items-center">
          <NavButton icon={File} label="Tickets" href="/tickets" />
          <NavButton icon={UsersRound} label="Customers" href="/customers" />
          <ModeToggle />
          <Button
            variant={"ghost"}
            size={"icon"}
            aria-label="Logout"
            title="Logout"
            className="rounded-full"
            asChild
          >
            <LogoutLink>
              <LogOut />
            </LogoutLink>
          </Button>
        </div>
      </div>
    </header>
  );
}
