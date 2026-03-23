import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useEffect, useRef } from "react";

const faqs = [
  {
    id: "areas",
    q: "What areas in Pune do you serve?",
    a: "We serve all areas across Pune including Baner, Aundh, Wakad, Hinjewadi, Kothrud, Hadapsar, Viman Nagar, Kalyani Nagar, Balewadi, and surrounding areas. Contact us to confirm availability in your specific location.",
  },
  {
    id: "verified",
    q: "Do you provide trained and verified staff?",
    a: "Yes, absolutely. All our staff are police-verified, background-checked, and undergo thorough training before deployment. They wear uniforms with ID cards and follow strict professional conduct guidelines.",
  },
  {
    id: "deepclean",
    q: "What is included in a deep cleaning contract?",
    a: "Our deep cleaning service includes floor scrubbing, bathroom sanitization, kitchen degreasing, window cleaning, furniture wiping, fan and fixture cleaning, and waste disposal. We customize the scope based on your property size and requirements.",
  },
  {
    id: "deploy",
    q: "How quickly can you deploy staff?",
    a: "For standard housekeeping contracts, we can deploy staff within 48–72 hours of agreement signing. For emergency or urgent requirements, we can often arrange staff within 24 hours depending on availability.",
  },
  {
    id: "monthly",
    q: "Do you offer monthly maintenance contracts?",
    a: "Yes, we offer flexible AMC (Annual Maintenance Contract) and monthly contracts. These include regular scheduled services, dedicated staff allocation, supervisor oversight, and monthly reporting. Contracts can be customized to your society's needs.",
  },
  {
    id: "quote",
    q: "How do I get a free quote?",
    a: "Simply fill in the 'Get Free Quote' form on this page, or call us directly at 9765651882 / 8805216165. We'll schedule a free site visit and provide a detailed, transparent quote with no hidden charges within 24 hours.",
  },
];

export default function FAQ() {
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
    <section className="py-20 lg:py-28 bg-muted" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
        <div className="text-center mb-14 scroll-reveal">
          <span className="text-green font-semibold text-sm uppercase tracking-widest">
            FAQ
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-navy mt-2 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground">
            Got questions? We have answers. If you need more info, feel free to
            call us.
          </p>
        </div>

        <div className="scroll-reveal">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={faq.id}
                value={`faq-${faq.id}`}
                className="bg-card rounded-xl px-6 border-0 shadow-card"
                data-ocid={`faq.item.${i + 1}`}
              >
                <AccordionTrigger className="text-navy font-semibold text-left hover:no-underline py-5 text-sm lg:text-base">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
