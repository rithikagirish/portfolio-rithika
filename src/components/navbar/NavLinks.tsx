import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

interface NavLinkItem {
  label: string;
  href: string;
}

const links: NavLinkItem[] = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const NavLinks = () => {
  const location = useLocation();

  const isActive = (href: string) => {
    const hash = location.hash;
    return hash === href;
  };

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
    <nav className="hidden lg:flex items-center gap-1">
      {links.map((link) => (
        <Link
          key={link.label}
          to={link.href}
          onClick={(e) => handleClick(e, link.href)}
          className={cn(
            "px-3 py-2 text-sm font-medium transition-colors rounded-xl font-heading",
            isActive(link.href) ? "text-foreground" : "text-muted-foreground hover:text-foreground"
          )}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
};

export default NavLinks;
