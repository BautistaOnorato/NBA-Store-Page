"use client";

import { cn } from "@/lib/utils";
import { Category } from "@/models/models";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface MainNavProps {
  categories: Category[];
  className?: string
  textClassName?: string
  onOpen?: () => void
}

const MainNav: React.FC<MainNavProps> = ({ categories, className, textClassName, onOpen }) => {
  const pathname = usePathname();

  const routes = categories.map((route) => ({
    href: `/category/${route.id}?offset=0`,
    label: route.name,
    active: pathname === `/category/${route.id}`,
  }))

  routes.push({
    href: `/retro?offset=0`,
    label: 'Retro',
    active: pathname === `/retro`
  })

  return (
    <nav className={cn("flex gap-x-8", className)}>
      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={cn(
            "font-semibold transition-colors hover:text-gray-300 text-md", 
            textClassName,
            route.active && !className ? "text-gray-300" : "text-white",
          )}
          onClick={onOpen}
        >
          {route.label}
        </Link>
      ))}
    </nav>
  );
};

export default MainNav;
