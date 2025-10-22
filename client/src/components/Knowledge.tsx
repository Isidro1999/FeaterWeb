import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Card, CardContent } from "@/components/ui/card";
import analyticsImage from "@assets/generated_images/Business_analytics_dashboard_d0e456ad.png";
import consultationImage from "@assets/generated_images/Business_consultation_presentation_658279a9.png";
import { ArrowRight } from "lucide-react";

export function Knowledge() {
  const { ref, isVisible } = useScrollReveal();

  const articles = [
    {
      image: analyticsImage,
      category: "Tendencias de la Industria",
      title: "El Futuro del Análisis Empresarial en 2025",
      description: "Descubrí cómo la IA y el aprendizaje automático están redefiniendo la toma de decisiones basada en datos en todas las industrias.",
    },
    {
      image: consultationImage,
      category: "Mejores Prácticas",
      title: "Planificación Estratégica para la Transformación Digital",
      description: "Aprendé los pasos clave para navegar exitosamente el viaje de evolución digital de tu organización.",
    },
  ];

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="py-24 bg-gradient-to-b from-black to-bordeaux-dark"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          className={`text-center mb-16 transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <h2 
            className="text-4xl sm:text-5xl font-bold text-white mb-6"
            data-testid="text-knowledge-title"
          >
            Mantenete a la Vanguardia con Conocimiento Experto
          </h2>
          
          <p 
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            data-testid="text-knowledge-subtitle"
          >
            Perspectivas, tendencias y estrategias prácticas de líderes de la industria para mantenerte informado y competitivo
          </p>
        </div>

        <div 
          className={`grid md:grid-cols-2 gap-8 transition-all duration-1000 delay-200 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          {articles.map((article, index) => (
            <Card
              key={article.title}
              className="bg-black/40 border-2 border-gray-700 hover:border-bordeaux-hover transition-all duration-500 hover:-translate-y-1 overflow-hidden group cursor-pointer"
              data-testid={`card-article-${index}`}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="text-xs font-semibold text-bordeaux-hover uppercase tracking-wide">
                    {article.category}
                  </span>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-bordeaux-hover transition-colors duration-300">
                  {article.title}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {article.description}
                </p>
                <div className="flex items-center text-bordeaux-hover font-medium group-hover:translate-x-2 transition-transform duration-300">
                  Leer Más
                  <ArrowRight className="ml-2 w-4 h-4" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
