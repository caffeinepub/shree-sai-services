const stats = [
  { id: "years", number: "20+", label: "Years Experience" },
  { id: "clients", number: "500+", label: "Clients Served" },
  { id: "projects", number: "2000+", label: "Projects Done" },
  { id: "staff", number: "1200+", label: "Trained Staff" },
];

export default function StatsStrip() {
  return (
    <section className="bg-navy py-12 lg:py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div
              key={stat.id}
              className="text-center"
              data-ocid={`stats.item.${i + 1}`}
            >
              <div className="text-4xl lg:text-5xl font-extrabold text-green mb-2">
                {stat.number}
              </div>
              <div className="text-white/70 text-sm lg:text-base font-medium uppercase tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
