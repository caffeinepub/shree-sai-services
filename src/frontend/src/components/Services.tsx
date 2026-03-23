import { ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";

const services = [
  {
    id: "housekeeping",
    title: "Housekeeping Staff for Societies",
    description:
      "Professionally trained housekeeping staff for daily cleaning of lobbies, corridors, lifts, and common areas in residential societies.",
    image: "/assets/generated/service-housekeeping.dim_600x400.jpg",
  },
  {
    id: "labor",
    title: "Skilled & Unskilled Labor Supply",
    description:
      "Reliable supply of skilled and unskilled workers for construction, maintenance, loading/unloading, and general facility work.",
    image: "/assets/generated/service-labor.dim_600x400.jpg",
  },
  {
    id: "cleaning",
    title: "Flat & Building Deep Cleaning",
    description:
      "Comprehensive deep cleaning for new flats, post-renovation, or periodic refresh using advanced equipment and eco-friendly products.",
    image: "/assets/generated/service-cleaning.dim_600x400.jpg",
  },
  {
    id: "society",
    title: "Society Maintenance & Cleaning",
    description:
      "Monthly/annual AMC contracts for complete society upkeep — gardens, parking, water tanks, common areas, and waste management.",
    image: "/assets/generated/service-society.dim_600x400.jpg",
  },
];

export default function Services() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) e.target.classList.add("revealed");
        }
      },
      { threshold: 0.1 },
    );
    const els = ref.current?.querySelectorAll(".scroll-reveal") ?? [];
    for (const el of els) observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const scrollToQuote = () => {
    const el = document.querySelector("#quote");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className="py-20 lg:py-28 bg-muted" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-14 scroll-reveal">
          <span className="text-green font-semibold text-sm uppercase tracking-widest">
            Our Services
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-navy mt-2 mb-4">
            Complete Manpower &amp; Cleaning Solutions
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            From daily housekeeping to annual maintenance contracts — we have
            you covered.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, i) => (
            <div
              key={service.id}
              className="scroll-reveal bg-card rounded-2xl overflow-hidden shadow-card card-hover"
              data-ocid={`services.item.${i + 1}`}
            >
              <div className="h-52 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-navy mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <button
                  type="button"
                  onClick={scrollToQuote}
                  className="flex items-center gap-1 text-green font-semibold text-sm hover:gap-2 transition-all"
                >
                  Get Quote <ArrowRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
