import React, { useRef } from "react";
import { Search, FileText, Calendar, Wrench, Key } from "lucide-react";
import AnimatedSection from "@/components/common/AnimatedSection";
import { motion, useInView } from "framer-motion";

const ProcessSection = () => {
  const steps = [
    {
      icon: Search,
      title: "Consulta inicial gratuita",
      description:
        "Evaluación de necesidades, análisis de la situación y recomendaciones sobre el tipo de terapia más adecuada.",
    },
    {
      icon: FileText,
      title: "Plan de tratamiento personalizado",
      description:
        "Diseño de un plan terapéutico adaptado a tus necesidades específicas con objetivos claros y medibles.",
    },
    {
      icon: Calendar,
      title: "Sesiones programadas",
      description:
        "Establecimiento de horarios regulares y preparación del entorno terapéutico para tu comodidad.",
    },
    {
      icon: Wrench,
      title: "Intervención especializada",
      description:
        "Aplicación de técnicas terapéuticas basadas en evidencia científica y adaptadas a tu caso particular.",
    },
    {
      icon: Key,
      title: "Seguimiento y mantenimiento",
      description:
        "Evaluación de progresos, ajustes del tratamiento y herramientas para mantener los logros alcanzados.",
    },
  ];

  return (
    <section className="min-h-dvh bg-background flex items-center">
      <div className="container mx-auto px-6 py-12">
        <AnimatedSection animation="slideUp">
          <div className="text-center mb-8">
            <h2 className="text-sm font-medium text-gray-500 mb-4 tracking-wider uppercase">
              Nuestro proceso
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Nuestro proceso de trabajo
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Metodología especializada en psicología clínica. Resultado
              profesional y duradero para tu bienestar.
            </p>
          </div>
        </AnimatedSection>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Línea vertical - solo visible en desktop */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-200 hidden lg:block"></div>

            <div className="space-y-4 md:space-y-6">
              {steps.map((step, index) => (
                <AnimatedSection
                  key={index}
                  animation="slideUp"
                  delay={0.2 + index * 0.1}
                >
                  <div className="relative flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-6 group">
                    {/* Ícono */}
                    <div className="flex-shrink-0 relative mx-auto md:mx-0">
                      <IconWithRotateInView>
                        <step.icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
                      </IconWithRotateInView>
                    </div>

                    {/* Contenido */}
                    <div className="flex-1 glass-card rounded-xl p-6 hover:shadow-glass-lg transition-all duration-300 w-full">
                      <h3 className="text-xl md:text-2xl font-semibold text-black mb-3 text-center md:text-left">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-center md:text-left text-sm md:text-base">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

function IconWithRotateInView({ children }: { children: React.ReactNode }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  return (
    <motion.div
      ref={ref}
      initial={{ rotate: -180, opacity: 0, scale: 0.5 }}
      animate={
        isInView
          ? {
              rotate: 0,
              opacity: 1,
              scale: 1,
              transition: {
                type: "spring",
                stiffness: 200,
                damping: 10,
                duration: 0.8,
              },
            }
          : {}
      }
      className="w-12 h-12 md:w-14 md:h-14 bg-black rounded-full flex items-center justify-center shadow-glass relative z-10 group-hover:bg-[#2563eb] transition-colors duration-300"
      whileHover={{
        scale: [1, 1.2, 1],
        transition: {
          duration: 0.6,
          times: [0, 0.5, 1],
          ease: "easeInOut",
        },
      }}
      whileTap={{
        scale: 0.95,
        transition: { duration: 0.1 },
      }}
    >
      {children}
    </motion.div>
  );
}

export default ProcessSection;
