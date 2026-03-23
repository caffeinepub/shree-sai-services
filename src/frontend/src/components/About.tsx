import { Award, Clock, Shield, Star, Users } from "lucide-react";
import { useEffect, useRef } from "react";

const features = [
  {
    icon: Award,
    text: "ISO compliant processes and quality standards",
    id: "iso",
  },
  {
    icon: Users,
    text: "Family-run business with personal accountability",
    id: "family",
  },
  {
    icon: Star,
    text: "Dedicated account manager for each client",
    id: "account",
  },
  { icon: Clock, text: "Punctual and disciplined workforce", id: "punctual" },
  {
    icon: Shield,
    text: "Police-verified and background-checked staff",
    id: "verified",
  },
];

export default function About() {
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
    <section id="about" className="py-20 lg:py-28 bg-background" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-14 scroll-reveal">
          <span className="text-green font-semibold text-sm uppercase tracking-widest">
            About Us
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-navy mt-2 mb-4">
            Two Decades of Trusted Service
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            A legacy built on hard work, dedication, and the trust of hundreds
            of residential societies across Pune.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="scroll-reveal">
            <div className="inline-flex items-center gap-3 bg-green/10 border border-green/30 px-5 py-3 rounded-xl mb-6">
              <span className="text-3xl font-extrabold text-green">2004</span>
              <div>
                <div className="text-xs text-muted-foreground uppercase tracking-wide">
                  Founded In
                </div>
                <div className="text-sm font-semibold text-navy">
                  Baner, Pune
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-navy/5 border border-navy/20 rounded-xl px-5 py-4 mb-7">
              <div className="w-14 h-14 rounded-full bg-navy flex items-center justify-center shrink-0">
                <span className="text-white font-extrabold text-xl">MM</span>
              </div>
              <div>
                <div className="text-xs text-muted-foreground uppercase tracking-wide">
                  Founder &amp; Owner
                </div>
                <div className="text-navy font-bold text-xl">Madhav Madle</div>
                <div className="text-muted-foreground text-sm">
                  20+ Years of Industry Leadership
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-navy mb-4">
              A Family-Run Business You Can Count On
            </h3>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Shree Sai Services was founded in 2004 by{" "}
              <strong className="text-navy">Madhav Madle</strong> with a single
              mission: to provide reliable, affordable, and professional
              manpower and cleaning services to residential societies and
              buildings across Pune.
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Under the personal leadership of{" "}
              <strong className="text-navy">Mr. Madhav Madle</strong>, we have
              grown into a trusted partner for more than 500 housing societies,
              property managers, and building owners. His vision of
              quality-first service guides every team we deploy.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              <strong className="text-navy">Madhav Madle</strong> believes in
              building long-term relationships — not just contracts. Clients
              stay with us because we deliver consistent results, transparent
              pricing, and the peace of mind that comes from working with a
              company that truly cares.
            </p>
          </div>

          <div className="scroll-reveal">
            <div className="bg-card rounded-2xl shadow-card p-8 space-y-5">
              <h4 className="font-bold text-navy text-lg mb-6">
                What Sets Us Apart
              </h4>
              {features.map((f) => (
                <div key={f.id} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-green/10 flex items-center justify-center shrink-0">
                    <f.icon className="text-green" size={20} />
                  </div>
                  <p className="text-foreground font-medium pt-2">{f.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
