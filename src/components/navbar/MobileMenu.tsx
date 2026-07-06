import { Menu } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet";

interface NavLinkItem {
  label: string;
  href: string;
}

const mainLinks: NavLinkItem[] = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const MobileMenu = () => {
  const location = useLocation();

  const isActive = (href: string) => location.hash === href;

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        window.history.pushState(null, "", href);
      }
    }
  };

  return (
    <div className="lg:hidden flex items-center gap-2">
      <Sheet>
        <SheetTrigger asChild>
          <button
            className="flex items-center justify-center w-10 h-10 rounded-xl border border-border text-muted-foreground transition-colors hover:text-foreground hover:border-muted-foreground/50"
            aria-label="Open menu"
          >
            <Menu className="w-5 h-5" />
          </button>
        </SheetTrigger>
        <SheetContent side="right" className="w-[300px] bg-background border-border">
          <SheetHeader>
            <SheetTitle className="text-foreground font-heading">Menu</SheetTitle>
          </SheetHeader>
          <nav className="flex flex-col gap-2 mt-8">
            {mainLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className={`px-4 py-3 text-base font-medium rounded-xl transition-colors font-heading ${
                  isActive(link.href)
                    ? "text-foreground bg-secondary"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileMenu;
