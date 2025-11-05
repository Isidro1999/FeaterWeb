import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Building2, Cpu, Factory, HeartPulse, Landmark, ShoppingCart, Tv2 } from "lucide-react";

export function Industries() {
  const { ref, isVisible } = useScrollAnimation();

  const industries = [
    { name: "Medios y Entretenimiento", icon: Tv2 },
    { name: "Tecnología", icon: Cpu },
    { name: "Gobierno y Sector Público", icon: Factory },
    { name: "Real Estate y Construcción", icon: HeartPulse },
    { name: "Deportes", icon: ShoppingCart },
    { name: "Educación y Cultura", icon: Building2 },
  ];

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="py-24 bg-gradient-to-b from-bordeaux-dark to-black"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          className={`grid md:grid-cols-2 gap-16 items-center transition-all duration-700 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {/* Content */}
          <div className="space-y-8">
            <h2 
              className="text-4xl sm:text-5xl font-bold text-white"
              data-testid="text-industries-title"
            >
              Industrias
            </h2>
            
            <p 
              className="text-lg text-gray-300 leading-relaxed"
              data-testid="text-industries-description"
            >
              Nuestra experiencia abarca múltiples industrias, brindando soluciones personalizadas que abordan desafíos y oportunidades únicas de cada sector.
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

          {/* Circular Visual */}
          <div className="relative flex items-center justify-center">
            <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-bordeaux-hover/30 shadow-2xl relative group">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                data-testid="video-industries"
              >
                <source src="/video2.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
