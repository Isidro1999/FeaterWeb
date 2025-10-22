import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Target, Users, Rocket, RefreshCw } from "lucide-react";

export default function Methodology() {
  const { ref, isVisible } = useScrollReveal();

  const steps = [
    {
      title: "Descubrimiento y Análisis",
      description: "Comenzamos comprendiendo tus desafíos únicos, objetivos y contexto organizacional a través de un análisis integral.",
      icon: Target,
    },
    {
      title: "Planificación Colaborativa",
      description: "Trabajando en estrecha colaboración con tu equipo, desarrollamos una estrategia personalizada que se alinea con tus objetivos y recursos empresariales.",
      icon: Users,
    },
    {
      title: "Implementación",
      description: "Nuestros expertos ejecutan el plan con precisión, aprovechando las mejores prácticas y metodologías probadas para una entrega exitosa.",
      icon: Rocket,
    },
    {
      title: "Mejora Continua",
      description: "Monitoreamos resultados, recopilamos comentarios e iteramos para garantizar el éxito sostenido y la optimización continua.",
      icon: RefreshCw,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-bordeaux-dark to-black">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">
            Nuestra Metodología
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            Un enfoque comprobado que combina pensamiento estratégico, ejecución colaborativa y mejora continua para ofrecer resultados excepcionales.
          </p>
        </div>
      </section>

      {/* Methodology Steps */}
      <section
        ref={ref as React.RefObject<HTMLElement>}
        className="py-16 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-5xl mx-auto">
          <div 
            className={`space-y-12 transition-all duration-1000 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.title}
                  className="flex flex-col md:flex-row gap-6 p-8 rounded-md border-2 border-gray-700 hover:border-bordeaux-hover transition-all duration-500 hover:-translate-y-1 bg-black/40"
                  data-testid={`item-methodology-step-${index}`}
                >
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-md bg-bordeaux/20 flex items-center justify-center">
                      <Icon className="w-8 h-8 text-bordeaux-hover" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-3">
                      {index + 1}. {step.title}
                    </h3>
                    <p className="text-gray-300 text-lg leading-relaxed">
                      {step.description}
                    </p>
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
