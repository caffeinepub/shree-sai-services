import { Toaster } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import About from "./components/About";
import Contact from "./components/Contact";
import FAQ from "./components/FAQ";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import QuoteForm from "./components/QuoteForm";
import Services from "./components/Services";
import StatsStrip from "./components/StatsStrip";
import Testimonials from "./components/Testimonials";
import WhyChooseUs from "./components/WhyChooseUs";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="font-poppins">
        <div className="w-full bg-navy py-3 px-4 text-center">
          <h1 className="text-2xl sm:text-3xl lg:text-5xl font-extrabold text-white tracking-widest uppercase leading-tight">
            SHREE SAI SERVICES
          </h1>
          <p className="text-green text-xs sm:text-sm font-medium tracking-widest uppercase mt-1">
            Manpower &amp; Cleaning Services &middot; Pune
          </p>
        </div>
        <Navbar />
        <Hero />
        <StatsStrip />
        <About />
        <Services />
        <WhyChooseUs />
        <Gallery />
        <Testimonials />
        <FAQ />
        <QuoteForm />
        <Contact />
        <Footer />
        <FloatingWhatsApp />
        <Toaster />
      </div>
    </QueryClientProvider>
  );
}
