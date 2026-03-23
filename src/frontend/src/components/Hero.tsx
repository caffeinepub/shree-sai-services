import { FileText, Phone } from "lucide-react";

export default function Hero() {
  const scrollToQuote = () => {
    const el = document.querySelector("#quote");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center"
      style={{
        backgroundImage: "url('/assets/generated/hero-bg.dim_1600x900.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, rgba(11,62,91,0.92) 0%, rgba(11,62,91,0.80) 40%, rgba(11,62,91,0.40) 70%, transparent 100%)",
        }}
      />

      <div className="relative z-10 container mx-auto px-4 lg:px-8 pt-20">
        <div className="max-w-2xl">
          <div className="animate-fade-slide-up inline-flex items-center gap-2 bg-green/20 border border-green/40 text-green px-4 py-1.5 rounded-full text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-green rounded-full" />
            Trusted Since 2004 · Baner, Pune
          </div>

          <h1 className="animate-fade-slide-up delay-200 text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white leading-tight mb-5 uppercase tracking-tight">
            Trusted Manpower &amp; Cleaning Services in Pune for{" "}
            <span className="text-green">20+ Years</span>
          </h1>

          <p className="animate-fade-slide-up delay-400 text-lg lg:text-xl text-white/80 mb-8 leading-relaxed">
            Affordable, Efficient &amp; Reliable Workforce for Societies and
            Buildings
          </p>

          <div className="animate-fade-slide-up delay-600 flex flex-wrap gap-4">
            <a
              href="tel:9765651882"
              className="flex items-center gap-2 bg-green text-white px-7 py-3.5 rounded-full text-base font-semibold hover:opacity-90 transition-all shadow-lg"
              data-ocid="hero.primary_button"
            >
              <Phone size={18} />
              Call Now
            </a>
            <button
              type="button"
              onClick={scrollToQuote}
              className="flex items-center gap-2 bg-transparent border-2 border-white text-white px-7 py-3.5 rounded-full text-base font-semibold hover:bg-white hover:text-navy transition-all"
              data-ocid="hero.secondary_button"
            >
              <FileText size={18} />
              Get a Quote
            </button>
          </div>

          <div className="animate-fade-slide-up delay-600 mt-10 flex flex-wrap gap-6 text-white/70 text-sm">
            <span className="flex items-center gap-1.5">
              <span className="text-green">✓</span> 500+ Happy Clients
            </span>
            <span className="flex items-center gap-1.5">
              <span className="text-green">✓</span> Trained & Verified Staff
            </span>
            <span className="flex items-center gap-1.5">
              <span className="text-green">✓</span> On-Time Completion
            </span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex items-start justify-center pt-2">
          <div className="w-1.5 h-3 bg-white/60 rounded-full" />
        </div>
      </div>
    </section>
  );
}
