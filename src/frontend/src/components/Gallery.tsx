import { X, ZoomIn } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const images = [
  {
    id: "before-after",
    src: "/assets/generated/gallery-before-after.dim_800x500.jpg",
    alt: "Before & After Deep Cleaning",
    caption: "Before & After Deep Cleaning",
  },
  {
    id: "equipment",
    src: "/assets/generated/gallery-equipment.dim_800x500.jpg",
    alt: "Professional Cleaning Equipment",
    caption: "Advanced Equipment & Machines",
  },
  {
    id: "team",
    src: "/assets/generated/gallery-team.dim_800x500.jpg",
    alt: "Our Professional Team",
    caption: "Our Trained & Verified Team",
  },
];

export default function Gallery() {
  const [lightbox, setLightbox] = useState<number | null>(null);
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

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-muted" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-14 scroll-reveal">
          <span className="text-green font-semibold text-sm uppercase tracking-widest">
            Gallery
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-navy mt-2 mb-4">
            Our Work in Action
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            See the quality of our cleaning services, our professional team, and
            the equipment we use.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {images.map((img, i) => (
            <button
              key={img.id}
              type="button"
              className="scroll-reveal relative group rounded-2xl overflow-hidden shadow-card cursor-pointer card-hover text-left w-full"
              onClick={() => setLightbox(i)}
              data-ocid={`gallery.item.${i + 1}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-navy/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <ZoomIn className="text-white" size={36} />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-navy/80 to-transparent p-4">
                <p className="text-white text-sm font-medium">{img.caption}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {lightbox !== null && (
        <dialog
          open
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 w-full h-full max-w-none m-0 border-0"
          onClick={() => setLightbox(null)}
          onKeyDown={(e) => e.key === "Escape" && setLightbox(null)}
          data-ocid="gallery.modal"
        >
          <button
            type="button"
            className="absolute top-6 right-6 text-white hover:text-green transition-colors"
            onClick={() => setLightbox(null)}
            data-ocid="gallery.close_button"
          >
            <X size={32} />
          </button>
          <button
            type="button"
            className="max-w-4xl w-full flex flex-col items-center bg-transparent border-0 cursor-default"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={images[lightbox].src}
              alt={images[lightbox].alt}
              className="max-w-4xl w-full max-h-[80vh] object-contain rounded-xl"
            />
            <div className="mt-4 text-white text-center">
              <p className="font-medium">{images[lightbox].caption}</p>
              <p className="text-white/50 text-sm mt-1">
                {lightbox + 1} / {images.length}
              </p>
            </div>
          </button>
        </dialog>
      )}
    </section>
  );
}
