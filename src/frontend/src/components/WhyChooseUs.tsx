import { CheckCircle2 } from "lucide-react";
import { useEffect, useRef } from "react";

const reasons = [
  {
    id: "experience",
    title: "20+ Years Experience",
    desc: "Two decades of proven track record in Pune's residential sector.",
  },
  {
    id: "staff",
    title: "Trained & Verified Staff",
    desc: "All staff are police-verified, trained, and uniformed for professionalism.",
  },
  {
    id: "equipment",
    title: "Advanced Equipment & Machines",
    desc: "We use industrial vacuum cleaners, floor scrubbers, and modern tools.",
  },
  {
    id: "pricing",
    title: "Affordable & Transparent Pricing",
    desc: "No hidden charges. Fixed monthly rates with detailed service agreements.",
  },
  {
    id: "ontime",
    title: "On-Time Completion Guarantee",
    desc: "We respect your deadlines and honor every commitment we make.",
  },
];

export default function WhyChooseUs() {
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

  return (
    <section className="py-20 lg:py-28 bg-background" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="scroll-reveal order-2 lg:order-1">
            <div className="relative">
              <img
                src="/assets/generated/gallery-team.dim_800x500.jpg"
                alt="Our professional team"
                className="w-full rounded-2xl shadow-card object-cover h-[420px]"
              />
              <div className="absolute -bottom-5 -right-5 bg-navy text-white p-5 rounded-2xl shadow-lg text-center">
                <div className="text-3xl font-extrabold text-green">20+</div>
                <div className="text-xs uppercase tracking-wide text-white/70">
                  Years of
                  <br />
                  Trust
                </div>
              </div>
            </div>
          </div>

          <div className="scroll-reveal order-1 lg:order-2">
            <span className="text-green font-semibold text-sm uppercase tracking-widest">
              Why Choose Us
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-navy mt-2 mb-8">
              Why Hundreds of Societies Trust Shree Sai Services
            </h2>
            <div className="space-y-6">
              {reasons.map((r, i) => (
                <div
                  key={r.id}
                  className="flex items-start gap-4"
                  data-ocid={`why.item.${i + 1}`}
                >
                  <CheckCircle2
                    className="text-green shrink-0 mt-1"
                    size={22}
                  />
                  <div>
                    <h4 className="font-semibold text-navy">{r.title}</h4>
                    <p className="text-muted-foreground text-sm mt-1">
                      {r.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
