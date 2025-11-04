import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

interface BackgroundFXProps {
  activeStep: number;
  totalSteps: number;
}

interface Particle {
  id: number;
  x: number;
  y: number;
  delay: number;
  duration: number;
  scale: number;
}

// Paleta de gradientes oscuros con bordeaux que cambian según el step activo
const gradientSteps = [
  "from-black via-bordeaux-dark/80 to-black",
  "from-bordeaux-dark via-black to-bordeaux-dark/90",
  "from-black/95 via-bordeaux/60 to-black",
  "from-bordeaux-dark/90 via-bordeaux-light/40 to-black",
  "from-black via-bordeaux-hover/30 to-bordeaux-dark",
];

// Genera partículas aleatorias
const generateParticles = (count: number): Particle[] => {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 2,
    duration: 3 + Math.random() * 4,
    scale: 0.5 + Math.random() * 0.5,
  }));
};

export function BackgroundFX({ activeStep, totalSteps }: BackgroundFXProps) {
  const [particles, setParticles] = useState<Particle[]>([]);
  const { scrollYProgress } = useScroll();

  // Regenerar partículas cuando cambia el step activo
  useEffect(() => {
    setParticles(generateParticles(25));
  }, [activeStep]);

  // Transformaciones parallax basadas en scroll
  const yParallax = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const xParallax = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 5]);

  // Índice del gradiente basado en el step activo
  const gradientIndex = Math.min(activeStep, gradientSteps.length - 1);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-clip">
      {/* Gradiente animado principal */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`gradient-${activeStep}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className={`absolute inset-0 bg-gradient-to-br ${gradientSteps[gradientIndex]}`}
          style={{
            y: yParallax,
            willChange: "transform",
          }}
        />
      </AnimatePresence>

      {/* Grid tecnológico con bordeaux */}
      <motion.div
        className="absolute inset-0 opacity-40"
        style={{
          x: xParallax,
          rotate,
          willChange: "transform",
          backgroundImage: `
            linear-gradient(to right, rgba(255, 61, 111, 0.3) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 61, 111, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Partículas flotantes luminosas con bordeaux */}
      <AnimatePresence>
        {particles.map((particle) => (
          <motion.div
            key={`${activeStep}-${particle.id}`}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 0.9, 1, 0.9, 0],
              scale: [0, particle.scale * 1.5, particle.scale * 1.5, particle.scale * 1.5, 0],
              y: [0, -100, -200],
            }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute rounded-full bg-gradient-to-br from-bordeaux-hover via-bordeaux to-bordeaux-light shadow-lg shadow-bordeaux-hover/50"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: "12px",
              height: "12px",
              willChange: "transform, opacity",
              filter: "blur(2px)",
            }}
          />
        ))}
      </AnimatePresence>

      {/* Chips luminosos con bordeaux más visibles */}
      <AnimatePresence>
        {Array.from({ length: 8 }).map((_, i) => {
          const chipX = (i * 15) + (activeStep * 5) % 100;
          const chipY = 10 + (i * 12) % 85;
          
          return (
            <motion.div
              key={`chip-${activeStep}-${i}`}
              initial={{ opacity: 0, rotate: 0, scale: 0 }}
              animate={{
                opacity: [0, 0.8, 0.7, 0],
                rotate: [0, 180, 360],
                scale: [0, 1.2, 1.2, 0],
              }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{
                duration: 8,
                delay: i * 0.4,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute rounded-lg bg-gradient-to-br from-bordeaux-hover/60 to-bordeaux/40 backdrop-blur-sm border border-bordeaux-hover/50 shadow-xl shadow-bordeaux-hover/40"
              style={{
                left: `${chipX}%`,
                top: `${chipY}%`,
                width: "32px",
                height: "32px",
                willChange: "transform, opacity",
              }}
            />
          );
        })}
      </AnimatePresence>

      {/* Onda circular bordeaux que pulsa desde el centro */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        initial={{ scale: 0, opacity: 0 }}
        animate={{
          scale: [0, 2.5, 3],
          opacity: [0.6, 0.3, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeOut",
        }}
        style={{
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          border: "3px solid #ff3d6f",
          boxShadow: "0 0 30px rgba(255, 61, 111, 0.5)",
          willChange: "transform, opacity",
        }}
      />

      {/* Segunda onda bordeaux con delay */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        initial={{ scale: 0, opacity: 0 }}
        animate={{
          scale: [0, 2.5, 3],
          opacity: [0.6, 0.3, 0],
        }}
        transition={{
          duration: 4,
          delay: 2,
          repeat: Infinity,
          ease: "easeOut",
        }}
        style={{
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          border: "3px solid #730028",
          boxShadow: "0 0 30px rgba(115, 0, 40, 0.5)",
          willChange: "transform, opacity",
        }}
      />

      {/* Overlay oscuro sutil para mantener legibilidad */}
      <div className="absolute inset-0 bg-black/10 backdrop-blur-[0.5px]" />
    </div>
  );
}

