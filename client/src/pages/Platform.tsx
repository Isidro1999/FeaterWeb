import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Cloud, Database, Lock, Smartphone } from "lucide-react";

export default function Platform() {
  const { ref, isVisible } = useScrollReveal();

  const features = [
    {
      title: "Cloud Infrastructure",
      description: "Scalable, reliable cloud solutions built for enterprise performance and security.",
      icon: Cloud,
    },
    {
      title: "Data Management",
      description: "Advanced data warehousing and real-time processing capabilities for critical business insights.",
      icon: Database,
    },
    {
      title: "Security First",
      description: "Enterprise-grade security with end-to-end encryption and compliance certifications.",
      icon: Lock,
    },
    {
      title: "Mobile Ready",
      description: "Native mobile applications and responsive experiences across all devices.",
      icon: Smartphone,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-bordeaux-dark to-black">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">
            Our Platform
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            A comprehensive technology platform designed to power digital transformation and drive innovation at scale.
          </p>
        </div>
      </section>

      {/* Features */}
      <section
        ref={ref as React.RefObject<HTMLElement>}
        className="py-16 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <div 
            className={`grid md:grid-cols-2 gap-8 transition-all duration-1000 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card
                  key={feature.title}
                  className="bg-black/40 border-2 border-gray-700 hover:border-bordeaux-hover transition-all duration-500 hover:-translate-y-1"
                  data-testid={`card-platform-feature-${index}`}
                >
                  <CardHeader>
                    <div className="w-12 h-12 rounded-md bg-bordeaux/20 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-bordeaux-hover" />
                    </div>
                    <CardTitle className="text-2xl text-white">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-300 text-base leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
