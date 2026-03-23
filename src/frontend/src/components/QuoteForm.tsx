import { useSubmitForm } from "@/hooks/useQueries";
import { CheckCircle2, Loader2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function QuoteForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const { mutate, isPending, isError } = useSubmitForm();
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;
    mutate(
      { name, phone, message, formType: "quote" },
      {
        onSuccess: () => {
          setSuccess(true);
          setName("");
          setPhone("");
          setMessage("");
        },
      },
    );
  };

  return (
    <section id="quote" className="py-20 lg:py-28 bg-navy" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10 scroll-reveal">
            <span className="text-green font-semibold text-sm uppercase tracking-widest">
              Free Quote
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mt-2 mb-4">
              Get Your Free Quote Today
            </h2>
            <p className="text-white/70">
              Fill in your details and we'll get back to you within 24 hours
              with a customized quote.
            </p>
          </div>

          {success ? (
            <div
              className="scroll-reveal bg-green/10 border border-green/30 rounded-2xl p-10 text-center"
              data-ocid="quote.success_state"
            >
              <CheckCircle2 className="text-green mx-auto mb-4" size={48} />
              <h3 className="text-white text-xl font-bold mb-2">Thank You!</h3>
              <p className="text-white/70">
                We've received your request. Our team will contact you within 24
                hours.
              </p>
              <button
                type="button"
                onClick={() => setSuccess(false)}
                className="mt-6 text-green hover:text-green/80 text-sm font-medium"
              >
                Submit another request
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="scroll-reveal bg-white/5 backdrop-blur rounded-2xl p-8 space-y-5"
              data-ocid="quote.panel"
            >
              <div>
                <label
                  htmlFor="quote-name"
                  className="text-white/80 text-sm font-medium mb-2 block"
                >
                  Full Name *
                </label>
                <input
                  id="quote-name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your full name"
                  required
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-green text-sm"
                  data-ocid="quote.input"
                />
              </div>

              <div>
                <label
                  htmlFor="quote-phone"
                  className="text-white/80 text-sm font-medium mb-2 block"
                >
                  Phone Number *
                </label>
                <input
                  id="quote-phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Your phone number"
                  required
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-green text-sm"
                  data-ocid="quote.input"
                />
              </div>

              <div>
                <label
                  htmlFor="quote-message"
                  className="text-white/80 text-sm font-medium mb-2 block"
                >
                  Message / Requirements
                </label>
                <textarea
                  id="quote-message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell us about your requirements (service type, number of staff, society size, etc.)"
                  rows={4}
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-green text-sm resize-none"
                  data-ocid="quote.textarea"
                />
              </div>

              {isError && (
                <p
                  className="text-red-400 text-sm"
                  data-ocid="quote.error_state"
                >
                  Something went wrong. Please try again or call us directly.
                </p>
              )}

              <button
                type="submit"
                disabled={isPending}
                className="w-full bg-green text-white font-semibold py-3.5 rounded-xl hover:opacity-90 transition-all flex items-center justify-center gap-2 disabled:opacity-70"
                data-ocid="quote.submit_button"
              >
                {isPending ? (
                  <>
                    <Loader2 size={18} className="animate-spin" /> Sending...
                  </>
                ) : (
                  "Send My Request"
                )}
              </button>

              <p className="text-white/40 text-xs text-center">
                By submitting, you agree to be contacted by our team.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
