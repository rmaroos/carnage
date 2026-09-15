import { Link } from "@tanstack/react-router";
import { Search, User, ShoppingBag, Menu } from "lucide-react";
import { useEffect, useState } from "react";

const NAV = ["Women", "Men", "Accessories", "Last Chance", "Gift Cards"];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-background text-foreground shadow-sm" : "bg-transparent text-background"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-[1600px] items-center justify-between px-5 md:px-8">
        <div className="flex items-center gap-4">
          <button
            aria-label="Open menu"
            className="md:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            <Menu className="size-5" />
          </button>
          <Link to="/" className="heading-italic text-2xl tracking-[0.15em]">
            CARNAGE
          </Link>
        </div>

        <nav className="hidden items-center gap-7 md:flex">
          {NAV.map((item) => (
            <a key={item} href="#collections" className="nav-link">
              {item}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-5">
          <button aria-label="Search">
            <Search className="size-5" />
          </button>
          <button aria-label="Account" className="hidden sm:block">
            <User className="size-5" />
          </button>
          <button aria-label="Cart">
            <ShoppingBag className="size-5" />
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background text-foreground md:hidden">
          <nav className="flex flex-col px-5 py-4">
            {NAV.map((item) => (
              <a key={item} href="#collections" className="nav-link py-3">
                {item}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
