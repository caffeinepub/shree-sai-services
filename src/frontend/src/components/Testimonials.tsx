import { Quote, Star } from "lucide-react";
import { useEffect, useRef } from "react";

const testimonials = [
  {
    id: "rajesh",
    name: "Rajesh Sharma",
    role: "Secretary, Greenview Residency, Baner",
    rating: 5,
    text: "We have been working with Shree Sai Services for the past 5 years. Their housekeeping staff is always punctual, professional, and well-uniformed. Our society is always spotless. Highly recommended!",
  },
  {
    id: "priya",
    name: "Priya Kulkarni",
    role: "Property Manager, Skyline Towers, Aundh",
    rating: 5,
    text: "The deep cleaning contract we signed with them has been the best decision for our building. They use modern equipment and the results are excellent every single time. Very transparent pricing too.",
  },
  {
    id: "suresh",
    name: "Suresh Patil",
    role: "Chairman, Sunrise CHS, Wakad",
    rating: 5,
    text: "After trying 3 different agencies, we finally settled with Shree Sai Services. Their staff is verified and trained. The AMC package they offered covers everything we needed at a very reasonable cost.",
  },
  {
    id: "anita",
    name: "Anita Deshmukh",
    role: "Resident, Kasturi Park, Baner",
    rating: 5,
    text: "Booked them for a post-renovation flat cleaning. The team arrived on time, worked efficiently, and left the flat spotless. The attention to detail was impressive. Will definitely use again!",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-1 mb-4">
      {Array.from({ length: count }).map((_, j) => (
        // biome-ignore lint/suspicious/noArrayIndexKey: star position is fixed and meaningful
        <Star key={j} className="text-yellow-400 fill-yellow-400" size={16} />
      ))}
    </div>
  );
}

export default function Testimonials() {
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
    <section
      id="testimonials"
      className="py-20 lg:py-28 bg-background"
      ref={ref}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-14 scroll-reveal">
          <span className="text-green font-semibold text-sm uppercase tracking-widest">
            Testimonials
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-navy mt-2 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Real feedback from housing society secretaries and property managers
            across Pune.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={t.id}
              className="scroll-reveal bg-card rounded-2xl p-7 shadow-card card-hover relative"
              data-ocid={`testimonials.item.${i + 1}`}
            >
              <Quote
                className="text-green/20 absolute top-5 right-6"
                size={48}
              />
              <StarRating count={t.rating} />
              <p className="text-foreground leading-relaxed mb-6 text-sm">
                "{t.text}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-navy flex items-center justify-center text-white font-bold text-sm">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-navy text-sm">
                    {t.name}
                  </div>
                  <div className="text-muted-foreground text-xs">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
