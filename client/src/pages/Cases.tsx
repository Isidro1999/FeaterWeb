import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Card, CardContent } from "@/components/ui/card";
import analyticsImage from "@assets/generated_images/Business_analytics_dashboard_d0e456ad.png";
import consultationImage from "@assets/generated_images/Business_consultation_presentation_658279a9.png";
import teamImage from "@assets/generated_images/Professional_team_collaboration_image_8419cb3a.png";
import { ArrowRight } from "lucide-react";

export default function Cases() {
  const { ref, isVisible } = useScrollReveal();

  const caseStudies = [
    {
      title: "Global Financial Services Transformation",
      client: "TechCorp Financial",
      image: analyticsImage,
      challenge: "Legacy systems preventing digital innovation",
      solution: "Implemented cloud-native architecture with AI-powered analytics",
      results: "40% increase in operational efficiency, $2M cost savings annually",
    },
    {
      title: "Manufacturing Digital Overhaul",
      client: "InnovateX Manufacturing",
      image: consultationImage,
      challenge: "Disconnected systems and manual processes",
      solution: "Integrated IoT platform with real-time monitoring and automation",
      results: "60% reduction in downtime, 35% productivity improvement",
    },
    {
      title: "Healthcare Data Platform",
      client: "GlobalTech Health",
      image: teamImage,
      challenge: "Data silos limiting patient care coordination",
      solution: "Built unified data platform with advanced security and compliance",
      results: "99.9% uptime, 50% faster patient processing times",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-bordeaux-dark to-black">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">
            Case Studies
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            Real-world success stories showcasing how we've helped organizations achieve transformative results.
          </p>
        </div>
      </section>

      {/* Case Studies */}
      <section
        ref={ref as React.RefObject<HTMLElement>}
        className="py-16 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-6xl mx-auto">
          <div 
            className={`space-y-12 transition-all duration-1000 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            {caseStudies.map((caseStudy, index) => (
              <Card
                key={caseStudy.title}
                className="bg-black/40 border-2 border-gray-700 hover:border-bordeaux-hover transition-all duration-500 hover:-translate-y-1 overflow-hidden group"
                data-testid={`card-case-study-${index}`}
              >
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative h-80 md:h-auto overflow-hidden">
                    <img
                      src={caseStudy.image}
                      alt={caseStudy.title}
                      className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
                  </div>
                  
                  <CardContent className="p-8 flex flex-col justify-center">
                    <div className="mb-2">
                      <span className="text-sm font-semibold text-bordeaux-hover uppercase tracking-wide">
                        {caseStudy.client}
                      </span>
                    </div>
                    
                    <h3 className="text-3xl font-bold text-white mb-6 group-hover:text-bordeaux-hover transition-colors duration-300">
                      {caseStudy.title}
                    </h3>
                    
                    <div className="space-y-4 mb-6">
                      <div>
                        <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-1">
                          Challenge
                        </h4>
                        <p className="text-gray-300">
                          {caseStudy.challenge}
                        </p>
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-1">
                          Solution
                        </h4>
                        <p className="text-gray-300">
                          {caseStudy.solution}
                        </p>
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-1">
                          Results
                        </h4>
                        <p className="text-white font-semibold">
                          {caseStudy.results}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-center text-bordeaux-hover font-medium group-hover:translate-x-2 transition-transform duration-300">
                      View Full Case Study
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
