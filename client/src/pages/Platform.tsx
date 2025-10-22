import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Cloud, Database, Lock, Smartphone } from "lucide-react";

export default function Platform() {
  const { ref, isVisible } = useScrollReveal();

  const features = [
    {
      title: "Infraestructura en la Nube",
      description: "Soluciones en la nube escalables y confiables construidas para el rendimiento y seguridad empresarial.",
      icon: Cloud,
    },
    {
      title: "Gestión de Datos",
      description: "Capacidades avanzadas de almacenamiento de datos y procesamiento en tiempo real para insights empresariales críticos.",
      icon: Database,
    },
    {
      title: "Seguridad Primero",
      description: "Seguridad de nivel empresarial con encriptación de extremo a extremo y certificaciones de cumplimiento.",
      icon: Lock,
    },
    {
      title: "Listo para Móviles",
      description: "Aplicaciones móviles nativas y experiencias responsivas en todos los dispositivos.",
      icon: Smartphone,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-bordeaux-dark to-black">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">
            Nuestra Plataforma
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            Una plataforma tecnológica integral diseñada para impulsar la transformación digital y la innovación a gran escala.
          </p>
        </div>
      </section>

      {/* Features */}
      <section
        ref={ref as React.RefObject<HTMLElement>}
        className="py-16 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <div 
            className={`grid md:grid-cols-2 gap-8 transition-all duration-1000 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card
                  key={feature.title}
                  className="bg-black/40 border-2 border-gray-700 hover:border-bordeaux-hover transition-all duration-500 hover:-translate-y-1"
                  data-testid={`card-platform-feature-${index}`}
                >
                  <CardHeader>
                    <div className="w-12 h-12 rounded-md bg-bordeaux/20 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-bordeaux-hover" />
                    </div>
                    <CardTitle className="text-2xl text-white">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-300 text-base leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
