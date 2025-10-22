import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { TrendingUp, Clock, Shield, Award } from "lucide-react";

export default function Value() {
  const { ref, isVisible } = useScrollReveal();

  const values = [
    {
      title: "Increased Revenue",
      description: "Our solutions drive measurable business growth with an average 35% increase in revenue for our clients within the first year.",
      icon: TrendingUp,
      metric: "35%",
    },
    {
      title: "Time Savings",
      description: "Streamline operations and reduce manual processes, saving your team hundreds of hours each month.",
      icon: Clock,
      metric: "60%",
    },
    {
      title: "Risk Mitigation",
      description: "Protect your business with enterprise-grade security and compliance frameworks that minimize vulnerabilities.",
      icon: Shield,
      metric: "99.9%",
    },
    {
      title: "Quality Assurance",
      description: "Deliver exceptional experiences with our rigorous quality standards and continuous improvement processes.",
      icon: Award,
      metric: "4.9/5",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-bordeaux-dark to-black">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">
            The Value We Deliver
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            Tangible results that transform your business and position you for long-term success in a competitive marketplace.
          </p>
        </div>
      </section>

      {/* Value Propositions */}
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
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.title}
                  className="p-8 rounded-md border-2 border-gray-700 hover:border-bordeaux-hover transition-all duration-500 hover:-translate-y-1 bg-black/40"
                  data-testid={`card-value-${index}`}
                >
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-md bg-bordeaux/20 flex items-center justify-center">
                        <Icon className="w-8 h-8 text-bordeaux-hover" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-baseline gap-3 mb-3">
                        <h3 className="text-2xl font-bold text-white">
                          {value.title}
                        </h3>
                        <span className="text-3xl font-bold text-bordeaux-hover">
                          {value.metric}
                        </span>
                      </div>
                      <p className="text-gray-300 text-base leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
