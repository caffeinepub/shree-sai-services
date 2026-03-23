import { MapPin, MessageCircle, Phone } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  const handleNav = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-navy-dark pt-16 pb-8">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          <div>
            <img
              src="/assets/generated/logo-transparent.dim_400x120.png"
              alt="Shree Sai Services"
              className="h-10 w-auto object-contain mb-4 brightness-150"
            />
            <p className="text-white/60 text-sm leading-relaxed mb-3">
              Pune's most trusted manpower and cleaning services provider since
              2004. Serving 500+ societies with professionalism and care.
            </p>
            <p className="text-white/80 text-sm font-medium mb-5">
              Founded &amp; led by{" "}
              <span className="text-green font-semibold">Madhav Madle</span>
            </p>
            <a
              href="https://wa.me/919765651882"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green text-white px-4 py-2 rounded-full text-sm font-medium hover:opacity-90 transition-all"
            >
              <MessageCircle size={14} /> WhatsApp Us
            </a>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-5">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <button
                    type="button"
                    onClick={() => handleNav(link.href)}
                    className="text-white/60 hover:text-green text-sm transition-colors cursor-pointer"
                    data-ocid="footer.link"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-5">Contact Us</h4>
            <div className="space-y-4">
              <div className="text-white/80 text-sm font-medium">
                <span className="text-green">Madhav Madle</span> &mdash; Owner
                &amp; Director
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="text-green shrink-0 mt-0.5" size={16} />
                <span className="text-white/60 text-sm">
                  Baner, Pune &mdash; 411 045
                  <br />
                  Maharashtra, India
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-green shrink-0" size={16} />
                <div className="text-white/60 text-sm">
                  <a
                    href="tel:9765651882"
                    className="hover:text-green block transition-colors"
                  >
                    9765651882
                  </a>
                  <a
                    href="tel:8805216165"
                    className="hover:text-green block transition-colors"
                  >
                    8805216165
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/40 text-sm">
              &copy; {year} Shree Sai Services by Madhav Madle. All Rights
              Reserved.
            </p>
            <p className="text-white/30 text-xs">
              Built with &#10084;&#65039; using{" "}
              <a
                href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white/60 transition-colors"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
