import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function WhoWeAre() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="py-24 bg-gradient-to-b from-black to-bordeaux-dark"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          className={`grid md:grid-cols-2 gap-12 items-center transition-all duration-700 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {/* Video */}
          <div className="relative group">
          <div className="absolute inset-0 bg-transparent rounded-md transform transition-transform duration-500 group-hover:scale-105 pointer-events-none z-10" />

            <video
              autoPlay
              loop
              muted
              playsInline
              className="relative rounded-md w-full h-auto shadow-2xl transform transition-transform duration-500 group-hover:scale-[1.02]"
              data-testid="video-who-we-are"
            >
              <source src="/video-web-feater.mp4" type="video/mp4" />
              Tu navegador no soporta videos HTML5.
            </video>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <h2 
              className="text-4xl sm:text-5xl font-bold text-white"
              data-testid="text-who-we-are-title"
            >
              Quiénes Somos
            </h2>
            
            <p 
              className="text-lg text-gray-300 leading-relaxed"
              data-testid="text-who-we-are-description"
            >
              En Feater creemos que el contenido es el activo más poderoso de una marca. Diseñamos y desarrollamos plataformas inteligentes que permiten a los equipos centralizar, organizar y compartir todo su material audiovisual de forma simple y colaborativa.
            </p>
            
            <p className="text-lg text-gray-400 leading-relaxed">

            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
            Trabajamos junto a empresas, productoras y organizaciones para que puedan enfocarse en crear, mientras la tecnología se encarga del resto. Somos la conexión entre las ideas, los equipos y los contenidos que las hacen posibles.
            </p>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white/10 hover:border-bordeaux-hover transition-all duration-500 mt-4 group"
              data-testid="button-learn-more"
            >
              Conocer Más
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
