import React from "react";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/common/AnimatedSection";
import { motion } from "framer-motion";
import { HeartHandshake } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import { useWhatsApp, useResponsiveAnimation } from "@/hooks";

const HeroSection = () => {
  const { handleWhatsAppClick } = useWhatsApp();
  const timing = useResponsiveAnimation();

  return (
    <section
      className="relative h-screen overflow-hidden"
      role="banner"
      aria-label="Sección principal"
    >
      {/* Background with fallback */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-700" />

      {/* Glass Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/40" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-center text-white max-w-4xl mx-auto px-6">
          <div className="p-8 md:p-12">
            {/* H1 - Primera jerarquía */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: timing.h1.duration,
                delay: timing.h1.delay,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-4 text-balance">
                Cuida tu Mente. Nutre tu Vida.
              </h1>
            </motion.div>

            {/* Subtítulo - Segunda jerarquía */}
            <motion.div
              initial={{ y: 25, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: timing.subtitle.duration,
                delay: timing.subtitle.delay,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              <p className="text-lg md:text-xl mb-8 opacity-90 text-balance max-w-3xl mx-auto">
                El centro integral que necesitas en Illescas. Soluciones
                personalizadas de Psicología y Nutrición Clínica para todas las
                edades.
              </p>
            </motion.div>

            {/* Botones - Tercera jerarquía con bounce sutil */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: timing.buttons.duration,
                delay: timing.buttons.delay,
                ease: [0.34, 1.56, 0.64, 1], // Bounce sutil
              }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              {/* Botón principal - Cuarta jerarquía */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: timing.primaryButton.duration,
                  delay: timing.primaryButton.delay,
                  ease: [0.25, 0.46, 0.45, 0.94], // Bounce más sutil
                }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  size="lg"
                  onClick={handleWhatsAppClick}
                  className="group flex items-center glass-hero-button px-10 py-4 text-lg touch-optimized optimize-interactions border-0"
                  aria-label="Pedir Cita por Especialidad"
                >
                  <span>Pedir Cita por Especialidad</span>
                  <SiWhatsapp
                    size={20}
                    className="ml-3 opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 ease-out group-hover:text-[#25D366]"
                    aria-hidden="true"
                  />
                </Button>
              </motion.div>

              {/* Botón secundario - Quinta jerarquía */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: timing.secondaryButton.duration,
                  delay: timing.secondaryButton.delay,
                  ease: [0.25, 0.46, 0.45, 0.94], // Bounce más sutil
                }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  size="lg"
                  onClick={() => (window.location.href = "/proyectos")}
                  className="group flex items-center glass-hero-button px-10 py-4 text-lg touch-optimized optimize-interactions border-0"
                  aria-label="Hablemos de tu Bienestar"
                >
                  <span>Hablemos de tu Bienestar</span>
                  <HeartHandshake
                    size={20}
                    className="ml-3 opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 ease-out text-white"
                    aria-hidden="true"
                  />
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
