import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

export function Testimonials() {
  const { ref, isVisible } = useScrollAnimation();

  const testimonials = [
    {
      quote: "Trabajar con este equipo transformó toda nuestra infraestructura digital. Su experiencia y dedicación a nuestro éxito fueron evidentes desde el primer día. Vimos un aumento del 40% en eficiencia operativa.",
      author: "Sarah Johnson",
      role: "CEO, TechCorp",
    },
    {
      quote: "Las perspectivas estratégicas y soluciones innovadoras proporcionadas nos han posicionado por delante de nuestra competencia. Su enfoque consultivo marcó toda la diferencia en nuestro viaje de transformación.",
      author: "Michael Chen",
      role: "CTO, InnovateX",
    },
    {
      quote: "Servicio excepcional y resultados más allá de nuestras expectativas. El profundo conocimiento de la industria del equipo y su compromiso con la excelencia los convierten en un socio invaluable para cualquier organización.",
      author: "Emma Williams",
      role: "Directora de Operaciones, GlobalTech",
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
            data-testid="text-testimonials-title"
          >
            Lo Que Dicen Nuestros Clientes
          </h2>
          
          <p 
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            data-testid="text-testimonials-subtitle"
          >
            Historias reales de clientes reales que han logrado resultados extraordinarios
          </p>
        </div>

        <div 
          className={`grid md:grid-cols-3 gap-8 transition-all duration-700 delay-200 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.author}
              className="bg-black/40 border-2 border-gray-700 hover:border-bordeaux-hover transition-all duration-500 hover:-translate-y-1"
              data-testid={`card-testimonial-${index}`}
            >
              <CardContent className="p-8">
                <Quote className="w-10 h-10 text-bordeaux-hover mb-4" />
                
                <p className="text-gray-300 italic text-lg leading-relaxed mb-6">
                  "{testimonial.quote}"
                </p>
                
                <div className="border-t border-gray-700 pt-4">
                  <p className="text-white font-semibold">
                    {testimonial.author}
                  </p>
                  <p className="text-gray-400 text-sm">
                    {testimonial.role}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
