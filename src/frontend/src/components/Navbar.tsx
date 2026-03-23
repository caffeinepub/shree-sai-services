import { Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "shadow-lg" : ""} bg-navy`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <div className="flex items-center gap-3">
            <img
              src="/assets/generated/logo-transparent.dim_400x120.png"
              alt="Shree Sai Services"
              className="h-10 lg:h-12 w-auto object-contain"
            />
          </div>

          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <button
                key={link.href}
                type="button"
                onClick={() => handleNav(link.href)}
                className="text-white/80 hover:text-white text-sm font-medium transition-colors duration-200 cursor-pointer"
                data-ocid="nav.link"
              >
                {link.label}
              </button>
            ))}
            <button
              type="button"
              onClick={() => handleNav("#quote")}
              className="bg-green text-white px-5 py-2 rounded-full text-sm font-semibold hover:opacity-90 transition-all duration-200 shadow-sm"
              data-ocid="nav.primary_button"
            >
              Get a Quote
            </button>
          </nav>

          <a
            href="tel:9765651882"
            className="hidden xl:flex items-center gap-2 text-white/80 hover:text-white text-sm transition-colors"
          >
            <Phone size={14} />
            9765651882
          </a>

          <button
            type="button"
            className="lg:hidden text-white p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            data-ocid="nav.toggle"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="lg:hidden bg-navy-dark border-t border-white/10">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <button
                key={link.href}
                type="button"
                onClick={() => handleNav(link.href)}
                className="text-white/80 hover:text-white text-base font-medium py-2 text-left transition-colors"
                data-ocid="nav.link"
              >
                {link.label}
              </button>
            ))}
            <button
              type="button"
              onClick={() => handleNav("#quote")}
              className="bg-green text-white px-5 py-2.5 rounded-full text-sm font-semibold w-fit"
              data-ocid="nav.primary_button"
            >
              Get a Quote
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
