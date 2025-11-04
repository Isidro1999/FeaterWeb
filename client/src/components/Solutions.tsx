import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Lightbulb, LineChart, Shield, Zap } from "lucide-react";

export function Solutions() {
  const { ref, isVisible } = useScrollAnimation();

  const solutions = [
    {
      title: "Desarrollo de Plataformas",
      description: "Creamos soluciones digitales personalizadas para la gestión, organización y distribución de contenido audiovisual. Integraciones seguras, interfaces modernas y experiencias centradas en el usuario.",
      icon: Zap,
    },
    {
      title: "Gestión de Contenido",
      description: "Diseñamos sistemas que simplifican la administración de materiales multimedia: carga, etiquetado, búsqueda avanzada y descarga. Todo desde un entorno colaborativo y fácil de usar.",
      icon: LineChart,
    },
    {
      title: "Optimización y Análisis",
      description: "Incorporamos herramientas de analítica y seguimiento para entender cómo se usa el contenido y tomar decisiones basadas en datos. Desde estadísticas de descarga hasta métricas de engagement.",
      icon: Lightbulb,
    },
    {
      title: "Implementación y Soporte",
      description: "Acompañamos a cada cliente en todo el proceso: desde la puesta en marcha y capacitación, hasta la evolución continua de la plataforma. Soporte técnico, actualizaciones y asesoramiento permanente.",
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
          className={`text-center mb-16 transition-all duration-700 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
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
          className={`grid md:grid-cols-2 gap-8 transition-all duration-700 delay-200 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
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
