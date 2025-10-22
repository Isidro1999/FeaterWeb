import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Lightbulb, LineChart, Shield, Zap } from "lucide-react";

export function Solutions() {
  const { ref, isVisible } = useScrollReveal();

  const solutions = [
    {
      title: "Transformación Digital",
      description: "Modernizá tus operaciones con soluciones digitales de vanguardia que optimizan procesos y mejoran la experiencia del cliente.",
      icon: Zap,
    },
    {
      title: "Análisis de Datos",
      description: "Desbloqueá el poder de tus datos con análisis avanzados e insights impulsados por IA para una toma de decisiones más inteligente.",
      icon: LineChart,
    },
    {
      title: "Consultoría Estratégica",
      description: "Navegá desafíos complejos con orientación experta y estrategias personalizadas alineadas con tus objetivos empresariales.",
      icon: Lightbulb,
    },
    {
      title: "Ciberseguridad",
      description: "Protegé tus activos digitales con soluciones de seguridad integrales y gestión proactiva de amenazas.",
      icon: Shield,
    },
  ];

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="py-24 bg-gradient-to-b from-black via-bordeaux-dark to-black"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          className={`text-center mb-16 transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <h2 
            className="text-4xl sm:text-5xl font-bold text-white mb-6"
            data-testid="text-solutions-title"
          >
            Explorá Nuestras Soluciones
          </h2>
          
          <p 
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            data-testid="text-solutions-subtitle"
          >
            Servicios integrales diseñados para acelerar tu crecimiento y transformar tu panorama empresarial
          </p>
        </div>

        <div 
          className={`grid md:grid-cols-2 gap-8 transition-all duration-1000 delay-200 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <Card
                key={solution.title}
                className="bg-black/40 border-2 border-gray-700 hover:border-bordeaux-hover transition-all duration-500 hover:-translate-y-1 group"
                data-testid={`card-solution-${index}`}
              >
                <CardHeader>
                  <div className="w-12 h-12 rounded-md bg-bordeaux/20 flex items-center justify-center mb-4 group-hover:bg-bordeaux/30 transition-colors duration-300">
                    <Icon className="w-6 h-6 text-bordeaux-hover" />
                  </div>
                  <CardTitle className="text-2xl text-white">
                    {solution.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300 text-base leading-relaxed">
                    {solution.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
