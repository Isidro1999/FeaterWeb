import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Button } from "@/components/ui/button";
import teamImage from "@assets/generated_images/Professional_team_collaboration_image_8419cb3a.png";
import { ArrowRight } from "lucide-react";

export function WhoWeAre() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="py-24 bg-gradient-to-b from-black to-bordeaux-dark"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          className={`grid md:grid-cols-2 gap-12 items-center transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          {/* Image */}
          <div className="relative group">
            <div className="absolute inset-0 bg-bordeaux-hover/20 rounded-md transform transition-transform duration-500 group-hover:scale-105" />
            <img
              src={teamImage}
              alt="Professional team collaboration"
              className="relative rounded-md w-full h-auto shadow-2xl transform transition-transform duration-500 group-hover:scale-[1.02]"
              data-testid="img-who-we-are"
            />
          </div>

          {/* Content */}
          <div className="space-y-6">
            <h2 
              className="text-4xl sm:text-5xl font-bold text-white"
              data-testid="text-who-we-are-title"
            >
              Who We Are
            </h2>
            
            <p 
              className="text-lg text-gray-300 leading-relaxed"
              data-testid="text-who-we-are-description"
            >
              We are a team of passionate innovators and industry experts dedicated to transforming businesses through cutting-edge technology and strategic insights. With decades of combined experience, we deliver solutions that drive measurable results.
            </p>
            
            <p className="text-lg text-gray-400 leading-relaxed">
              Our approach combines deep industry knowledge with agile methodologies, ensuring that every solution is tailored to your unique challenges and objectives. We don't just consult—we partner with you for long-term success.
            </p>
            
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white/10 hover:border-bordeaux-hover transition-all duration-500 mt-4 group"
              data-testid="button-learn-more"
            >
              Learn More
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
