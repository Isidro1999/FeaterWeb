import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { WhoWeAre } from "@/components/WhoWeAre";
import { Industries } from "@/components/Industries";
import { Solutions } from "@/components/Solutions";
import { Knowledge } from "@/components/Knowledge";
import { Clients } from "@/components/Clients";
import { Testimonials } from "@/components/Testimonials";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-bordeaux-dark to-black">
      <Navbar />
      <Hero />
      <WhoWeAre />
      <Industries />
      <Solutions />
      <Knowledge />
      <Clients />
      <Testimonials />
      <Footer />
    </div>
  );
}
