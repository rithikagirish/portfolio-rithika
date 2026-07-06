import Logo from "./Logo";
import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="flex items-center justify-between w-full max-w-[90rem] mx-auto px-4 md:px-8 py-4">
        <Logo />
        <div className="flex items-center gap-2">
          <NavLinks />
          <MobileMenu />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
