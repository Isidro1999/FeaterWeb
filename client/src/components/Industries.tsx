import { useScrollReveal } from "@/hooks/useScrollReveal";
import industryImage from "@assets/generated_images/Advanced_manufacturing_technology_5545e766.png";
import { Building2, Cpu, Factory, HeartPulse, Landmark, ShoppingCart } from "lucide-react";

export function Industries() {
  const { ref, isVisible } = useScrollReveal();

  const industries = [
    { name: "Financial Services", icon: Landmark },
    { name: "Technology", icon: Cpu },
    { name: "Manufacturing", icon: Factory },
    { name: "Healthcare", icon: HeartPulse },
    { name: "Retail", icon: ShoppingCart },
    { name: "Real Estate", icon: Building2 },
  ];

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="py-24 bg-gradient-to-b from-bordeaux-dark to-black"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          className={`grid md:grid-cols-2 gap-16 items-center transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          {/* Content */}
          <div className="space-y-8">
            <h2 
              className="text-4xl sm:text-5xl font-bold text-white"
              data-testid="text-industries-title"
            >
              Industries We Serve
            </h2>
            
            <p 
              className="text-lg text-gray-300 leading-relaxed"
              data-testid="text-industries-description"
            >
              Our expertise spans across multiple industries, delivering tailored solutions that address unique sector challenges and opportunities.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {industries.map((industry, index) => {
                const Icon = industry.icon;
                return (
                  <div
                    key={industry.name}
                    className="flex items-center space-x-3 p-4 rounded-md border border-gray-700 hover:border-bordeaux-hover transition-all duration-500 hover:-translate-y-1 group"
                    data-testid={`item-industry-${index}`}
                  >
                    <Icon className="w-6 h-6 text-bordeaux-hover group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-white font-medium">{industry.name}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Circular Image */}
          <div className="relative flex items-center justify-center">
            <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-bordeaux-hover/30 shadow-2xl relative group">
              <div className="absolute inset-0 bg-bordeaux-hover/10 group-hover:bg-bordeaux-hover/20 transition-colors duration-500" />
              <img
                src={industryImage}
                alt="Advanced manufacturing technology"
                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                data-testid="img-industries"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
