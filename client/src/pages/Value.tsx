import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { TrendingUp, Clock, Shield, Award } from "lucide-react";

export default function Value() {
  const { ref, isVisible } = useScrollReveal();

  const values = [
    {
      title: "Aumento de Ingresos",
      description: "Nuestras soluciones impulsan un crecimiento empresarial medible con un aumento promedio del 35% en los ingresos de nuestros clientes en el primer año.",
      icon: TrendingUp,
      metric: "35%",
    },
    {
      title: "Ahorro de Tiempo",
      description: "Optimizá operaciones y reducí procesos manuales, ahorrando a tu equipo cientos de horas cada mes.",
      icon: Clock,
      metric: "60%",
    },
    {
      title: "Mitigación de Riesgos",
      description: "Protegé tu negocio con seguridad de nivel empresarial y marcos de cumplimiento que minimizan vulnerabilidades.",
      icon: Shield,
      metric: "99.9%",
    },
    {
      title: "Garantía de Calidad",
      description: "Ofrecé experiencias excepcionales con nuestros rigurosos estándares de calidad y procesos de mejora continua.",
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
            El Valor Que Entregamos
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            Resultados tangibles que transforman tu negocio y te posicionan para el éxito a largo plazo en un mercado competitivo.
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
