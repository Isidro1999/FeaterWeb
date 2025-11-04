import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Sparkles, Wrench, Rocket, Handshake, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BackgroundFX } from "@/components/BackgroundFX";

interface MethodologyStep {
  id: number;
  icon: React.ElementType;
  title: string;
  subtitle: string;
  body: string;
}

const methodologySteps: MethodologyStep[] = [
  {
    id: 1,
    icon: Sparkles,
    title: "Entendemos tu ecosistema",
    subtitle: "Análisis profundo de tus contenidos y flujos",
    body: "Iniciamos con una inmersión en tu entorno digital y operativo: analizamos cómo producís, organizás y compartís contenido. Definimos objetivos, audiencias y necesidades reales del equipo para sentar las bases de una plataforma que potencie tu trabajo y centralice todos tus activos audiovisuales.",
  },
  {
    id: 2,
    icon: Wrench,
    title: "Diseñamos la estructura ideal",
    subtitle: "Experiencia visual, performance y escalabilidad",
    body: "Creamos la arquitectura de información, jerarquías de contenido y flujos de navegación. Diseñamos una interfaz visual clara y moderna, priorizando usabilidad, velocidad y coherencia estética con tu marca. Cada decisión busca facilitar la gestión diaria y mejorar la experiencia del usuario final.",
  },
  {
    id: 3,
    icon: Rocket,
    title: "Construimos sobre tecnología real",
    subtitle: "Frontend ágil, CMS robusto y automatizaciones inteligentes",
    body: "Nuestro equipo desarrolla la plataforma con metodologías ágiles, permitiendo iteraciones rápidas y feedback continuo. Mantenemos la transparencia total con actualizaciones regulares sobre el progreso.",
  },
  {
    id: 4,
    icon: Check,
    title: "Habilitamos tu nuevo entorno digital",
    subtitle: "Testing, despliegue y acompañamiento personalizado",
    body: "Realizamos pruebas funcionales, de rendimiento y accesibilidad. Configuramos usuarios, permisos y entornos de publicación. Acompañamos a tu equipo en la adopción de la plataforma, con capacitaciones prácticas y documentación visual para garantizar un uso eficiente desde el primer día.",
  },
  {
    id: 5,
    icon: Handshake,
    title: "Seguimos optimizando juntos",
    subtitle: "Soporte, nuevas features y análisis de uso",
    body: "Monitoreamos métricas de uso y performance, proponemos mejoras y nuevas funcionalidades a partir de datos reales. Nuestro enfoque es evolutivo: cada plataforma FEATER crece junto con las necesidades de cada cliente, asegurando que siga siendo ágil, moderna y relevante en el tiempo.",
  },
];

function TimelineStep({ 
  step, 
  index, 
  onInView 
}: { 
  step: MethodologyStep; 
  index: number;
  onInView: (stepIndex: number) => void;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const isCurrentlyInView = useInView(ref, { margin: "-200px" });
  
  const Icon = step.icon;
  const isLeft = index % 2 === 0;

  useEffect(() => {
    if (isCurrentlyInView) {
      onInView(index);
    }
  }, [isCurrentlyInView, index, onInView]);

  return (
    <div ref={ref} className="relative">
      {/* Desktop Layout - Alternating */}
      <div className="hidden md:grid md:grid-cols-2 gap-8 items-center">
        {/* Left Side Content */}
        {isLeft && (
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-right"
          >
            <StepCard step={step} />
          </motion.div>
        )}
        
        {/* Center Timeline Dot */}
        <div className="flex justify-center">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.5, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="relative z-10"
          >
            <motion.div
              className="w-16 h-16 rounded-full bg-black border-4 border-bordeaux-dark flex items-center justify-center shadow-lg shadow-bordeaux-hover/50"
              animate={isInView ? { borderColor: "#ff3d6f" } : { borderColor: "#1a0008" }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ duration: 0.4, delay: 0.5 }}
              >
                <Icon className="w-7 h-7 text-bordeaux-hover" />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Right Side Content */}
        {!isLeft && (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-left"
          >
            <StepCard step={step} />
          </motion.div>
        )}

        {/* Empty cell for alignment */}
        {isLeft ? <div /> : <div />}
      </div>

      {/* Mobile Layout - Single Column */}
      <div className="md:hidden flex gap-4">
        {/* Timeline Dot */}
        <div className="flex flex-col items-center flex-shrink-0">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.5, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="relative z-10"
          >
            <motion.div
              className="w-12 h-12 rounded-full bg-black border-4 border-bordeaux-dark flex items-center justify-center shadow-lg shadow-bordeaux-hover/50"
              animate={isInView ? { borderColor: "#ff3d6f" } : { borderColor: "#1a0008" }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ duration: 0.4, delay: 0.5 }}
              >
                <Icon className="w-5 h-5 text-bordeaux-hover" />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex-1 pb-8"
        >
          <StepCard step={step} />
        </motion.div>
      </div>
    </div>
  );
}

function StepCard({ step }: { step: MethodologyStep }) {
  return (
    <div className="bg-black/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border-2 border-bordeaux/30 hover:border-bordeaux-hover hover:shadow-2xl hover:shadow-bordeaux-hover/20 transition-all duration-300">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-sm font-bold text-bordeaux-hover">PASO {step.id}</span>
      </div>
      <h3 className="text-2xl font-bold text-white mb-1">{step.title}</h3>
      <p className="text-sm font-medium text-bordeaux-hover mb-3">{step.subtitle}</p>
      <p className="text-gray-300 leading-relaxed">{step.body}</p>
    </div>
  );
}

export function Methodology() {
  const [activeStep, setActiveStep] = useState(0);
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-100px" });
  
  const ctaRef = useRef(null);
  const ctaInView = useInView(ctaRef, { once: true, margin: "-100px" });

  const handleStepInView = (stepIndex: number) => {
    setActiveStep(stepIndex);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-bordeaux-dark to-black">
      <Navbar />
      <section className="relative py-24 overflow-hidden">
      {/* Background FX animado dinámico */}
      <BackgroundFX activeStep={activeStep} totalSteps={methodologySteps.length} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Nuestra Metodología
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Un proceso probado que transforma ideas en soluciones digitales excepcionales.
            Cada paso está diseñado para garantizar el éxito de tu proyecto.
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Line - Desktop */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-bordeaux-hover via-bordeaux to-bordeaux-hover" />
          
          {/* Vertical Line - Mobile */}
          <div className="md:hidden absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-bordeaux-hover via-bordeaux to-bordeaux-hover" />

          {/* Steps */}
          <div className="space-y-16 md:space-y-24">
            {methodologySteps.map((step, index) => (
              <TimelineStep 
                key={step.id} 
                step={step} 
                index={index} 
                onInView={handleStepInView}
              />
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          ref={ctaRef}
          initial={{ opacity: 0, y: 30 }}
          animate={ctaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="mt-24 text-center"
        >
          <div className="bg-black/60 backdrop-blur-sm rounded-3xl p-12 shadow-2xl border-2 border-bordeaux hover:border-bordeaux-hover transition-all duration-300 max-w-2xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">
              ¿Listo para comenzar?
            </h3>
            <p className="text-lg text-gray-300 mb-8">
              Conversemos sobre cómo podemos ayudarte a alcanzar tus objetivos digitales.
            </p>
            <Button
              size="lg"
              className="bg-bordeaux-hover text-white hover:bg-bordeaux transition-all duration-300 rounded-full px-10 py-6 text-lg font-semibold shadow-lg shadow-bordeaux-hover/50 hover:shadow-xl hover:shadow-bordeaux-hover/70 hover:scale-105"
            >
              Solicitar demo
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
    <Footer />
    </div>
  );
}
