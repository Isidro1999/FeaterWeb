import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

export function Testimonials() {
  const { ref, isVisible } = useScrollReveal();

  const testimonials = [
    {
      quote: "Working with this team transformed our entire digital infrastructure. Their expertise and dedication to our success were evident from day one. We've seen a 40% increase in operational efficiency.",
      author: "Sarah Johnson",
      role: "CEO, TechCorp",
    },
    {
      quote: "The strategic insights and innovative solutions provided have positioned us ahead of our competition. Their consultative approach made all the difference in our transformation journey.",
      author: "Michael Chen",
      role: "CTO, InnovateX",
    },
    {
      quote: "Exceptional service and results beyond our expectations. The team's deep industry knowledge and commitment to excellence make them an invaluable partner for any organization.",
      author: "Emma Williams",
      role: "Director of Operations, GlobalTech",
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
            data-testid="text-testimonials-title"
          >
            What Our Clients Say
          </h2>
          
          <p 
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            data-testid="text-testimonials-subtitle"
          >
            Real stories from real clients who've achieved remarkable results
          </p>
        </div>

        <div 
          className={`grid md:grid-cols-3 gap-8 transition-all duration-1000 delay-200 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
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
