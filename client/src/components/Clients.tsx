import { useScrollReveal } from "@/hooks/useScrollReveal";

export function Clients() {
  const { ref, isVisible } = useScrollReveal();

  const clients = [
    { name: "TechCorp", logo: "TC" },
    { name: "InnovateX", logo: "IX" },
    { name: "GlobalTech", logo: "GT" },
    { name: "DataSystems", logo: "DS" },
    { name: "FutureNet", logo: "FN" },
    { name: "SmartSolutions", logo: "SS" },
  ];

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="py-24 bg-gradient-to-b from-bordeaux-dark via-black to-black"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          className={`text-center mb-16 transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
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
          className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 transition-all duration-1000 delay-200 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          {clients.map((client, index) => (
            <div
              key={client.name}
              className="flex items-center justify-center p-6 rounded-md border border-gray-700 hover:border-bordeaux-hover transition-all duration-500 hover:-translate-y-1 bg-black/20 group"
              data-testid={`item-client-${index}`}
            >
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-2 rounded-md bg-gradient-to-br from-bordeaux to-bordeaux-dark flex items-center justify-center text-white font-bold text-xl group-hover:scale-110 transition-transform duration-300">
                  {client.logo}
                </div>
                <span className="text-sm text-gray-400 group-hover:text-white transition-colors duration-300">
                  {client.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
