import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import heroImage from "@assets/generated_images/Dark_tech_hero_background_dbdb8358.png";
import { ArrowRight } from "lucide-react";

export function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
      
      {/* Content */}
      <div 
        className={`relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center transition-all duration-1000 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h1 
          className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
          data-testid="text-hero-title"
        >
          Transform Your Business
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-bordeaux-hover to-bordeaux mt-2">
            With Premium Solutions
          </span>
        </h1>
        
        <p 
          className="text-xl sm:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto"
          data-testid="text-hero-subtitle"
        >
          Innovative strategies and cutting-edge technology to drive your success in the digital age
        </p>
        
        <Button
          size="lg"
          variant="outline"
          className="border-2 border-white text-white hover:bg-white/10 hover:border-bordeaux-hover transition-all duration-500 text-lg px-8 py-6 group"
          data-testid="button-hero-cta"
        >
          Get Started
          <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
        </Button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-white/50 rounded-full" />
        </div>
      </div>
    </section>
  );
}
