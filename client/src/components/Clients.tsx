import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export function Clients() {
  const { ref, isVisible } = useScrollAnimation();

  const clients = [
    { 
      name: "Boca Juniors", 
      logo: "/client-logos/Boca.png",
      description: "Club de Fútbol"
    },
    { 
      name: "Luigi Bosca", 
      logo: "/client-logos/Luigi-bosca.png",
      description: "Bodega Premium"
    },
    { 
      name: "RE/MAX", 
      logo: "/client-logos/Remax.png",
      description: "Inmobiliaria"
    },
    { 
      name: "KOLAPSE", 
      logo: "/client-logos/Kolapse.png",
      description: "Tecnología"
    },
    { 
      name: "El Hilodariadna", 
      logo: "/client-logos/ElHiloDariadna.png",
      description: "Cultura"
    },
    { 
      name: "Buenos Aires Ciudad", 
      logo: "/client-logos/BuenosAiresCiudad.png",
      description: "Gobierno"
    },
    { 
      name: "MALBA", 
      logo: "/client-logos/Malba.png",
      description: "Museo"
    },
    { 
      name: "Pública", 
      logo: "/client-logos/Pública.png",
      description: "Medios"
    },
    { 
      name: "River Plate", 
      logo: "/client-logos/River.png",
      description: "Club de Fútbol"
    },
  ];

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="py-24 bg-gradient-to-b from-bordeaux-dark via-black to-black"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          className={`text-center mb-16 transition-all duration-700 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <h2 
            className="text-4xl sm:text-5xl font-bold text-white mb-6"
            data-testid="text-clients-title"
          >
            Nuestros Clientes
          </h2>
          
          <p 
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            data-testid="text-clients-subtitle"
          >
            Confianza de líderes de la industria en todo el mundo
          </p>
        </div>

        <div 
          className={`flex flex-wrap justify-center items-center gap-12 transition-all duration-700 delay-200 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {clients.map((client, index) => (
            <div
              key={client.name}
              className="flex items-center justify-center group"
              data-testid={`item-client-${index}`}
            >
              <div className="w-40 h-40 rounded-full bg-white flex items-center justify-center hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-bordeaux-hover/30 p-4 border-2 border-transparent hover:border-bordeaux-hover overflow-hidden">
                <img 
                  src={client.logo} 
                  alt={`Logo de ${client.name}`}
                  className="w-full h-full object-contain scale-110"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
