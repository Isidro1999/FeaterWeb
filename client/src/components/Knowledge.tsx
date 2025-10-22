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
      category: "Industry Insights",
      title: "The Future of Business Analytics in 2025",
      description: "Discover how AI and machine learning are reshaping data-driven decision-making across industries.",
    },
    {
      image: consultationImage,
      category: "Best Practices",
      title: "Strategic Planning for Digital Transformation",
      description: "Learn the key steps to successfully navigate your organization's digital evolution journey.",
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
            Stay Ahead With Expert Knowledge
          </h2>
          
          <p 
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            data-testid="text-knowledge-subtitle"
          >
            Insights, trends, and practical strategies from industry leaders to keep you informed and competitive
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
                  Read More
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
