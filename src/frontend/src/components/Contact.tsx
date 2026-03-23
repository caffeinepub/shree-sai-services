import { MapPin, MessageCircle, Phone } from "lucide-react";
import { useEffect, useRef } from "react";

export default function Contact() {
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
    <section id="contact" className="py-20 lg:py-28 bg-background" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-14 scroll-reveal">
          <span className="text-green font-semibold text-sm uppercase tracking-widest">
            Contact Us
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-navy mt-2 mb-4">
            Get in Touch
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Ready to improve your society's cleanliness and maintenance? Reach
            out today.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          <div className="scroll-reveal space-y-6">
            <div className="bg-card rounded-2xl p-7 shadow-card">
              <h3 className="font-bold text-navy text-lg mb-6">
                Contact Information
              </h3>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-navy rounded-lg flex items-center justify-center shrink-0">
                    <MapPin className="text-green" size={18} />
                  </div>
                  <div>
                    <div className="font-semibold text-navy text-sm">
                      Office Address
                    </div>
                    <div className="text-muted-foreground text-sm mt-1">
                      Baner, Pune — 411 045
                      <br />
                      Maharashtra, India
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-navy rounded-lg flex items-center justify-center shrink-0">
                    <Phone className="text-green" size={18} />
                  </div>
                  <div>
                    <div className="font-semibold text-navy text-sm mb-2">
                      Phone Numbers
                    </div>
                    <a
                      href="tel:9765651882"
                      className="flex items-center gap-2 bg-green text-white px-4 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition-all w-fit mb-2"
                      data-ocid="contact.primary_button"
                    >
                      <Phone size={14} /> Call: 97656 51882
                    </a>
                    <a
                      href="tel:8805216165"
                      className="flex items-center gap-2 bg-navy text-white px-4 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition-all w-fit"
                      data-ocid="contact.secondary_button"
                    >
                      <Phone size={14} /> Call: 88052 16165
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-green rounded-lg flex items-center justify-center shrink-0">
                    <MessageCircle className="text-white" size={18} />
                  </div>
                  <div>
                    <div className="font-semibold text-navy text-sm mb-2">
                      WhatsApp
                    </div>
                    <a
                      href="https://wa.me/919765651882"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-green text-white px-4 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition-all w-fit"
                      data-ocid="contact.primary_button"
                    >
                      <MessageCircle size={14} /> Chat on WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-navy rounded-2xl p-6 text-center">
              <p className="text-white/70 text-sm">Business Hours</p>
              <p className="text-white font-semibold mt-1">
                Monday – Saturday: 9:00 AM – 7:00 PM
              </p>
              <p className="text-white/50 text-xs mt-1">
                Sunday: By Appointment Only
              </p>
            </div>
          </div>

          <div className="scroll-reveal">
            <div className="rounded-2xl overflow-hidden shadow-card h-full min-h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15128.0!2d73.7898!3d18.5590!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sBaner%2C%20Pune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "400px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Shree Sai Services Location - Baner, Pune"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
