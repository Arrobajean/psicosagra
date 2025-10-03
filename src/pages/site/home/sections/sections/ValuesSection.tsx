import React, { useRef } from "react";
import { Target, Eye, Heart } from "lucide-react";
import AnimatedSection from "@/components/common/AnimatedSection";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";

const ValuesSection = () => {
  const values = [
    {
      icon: Target,
      title: "Misión",
      description:
        "Ser tu centro de referencia en Illescas, ofreciendo servicios de Psicología y Nutrición Clínica de alta calidad. Nuestro compromiso es facilitar un acompañamiento profesional y humano para que cada persona alcance su máximo bienestar y equilibrio integral.",
    },
    {
      icon: Eye,
      title: "Visión",
      description:
        "Consolidarnos como el modelo de atención integral en la Sagra, reconocido por la excelencia, la cercanía y la innovación en tratamientos combinados de salud mental y nutricional. Queremos ser el lugar donde las personas inician un cambio de vida sostenible.",
    },
    {
      icon: Heart,
      title: "Nuestros Valores",
      description:
        "Nuestra práctica se basa en la Profesionalidad ética y rigurosa; la Cercanía y Empatía para generar confianza; la Atención Integral combinando Psicología y Nutrición Clínica; la Personalización de cada plan de tratamiento; y el Compromiso total con tu progreso y bienestar continuo.",
    },
  ];

  return (
    <section className="min-h-dvh bg-background flex items-center">
      <div className="container mx-auto px-6 py-20">
        <AnimatedSection animation="slideUp">
          <div className="text-center mb-16">
            <h2 className="text-sm font-medium text-gray-500 mb-4 tracking-wider uppercase">
              Compromiso
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Lo que nos mueve en Psicosagra
            </h3>
            <p className="text-lg text-gray-600">
              Te ayudamos a consturir el bienestar sobre el que viviras cada dia
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="slideUp">
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <AnimatedSection
                key={index}
                animation="slideUp"
                delay={index * 0.15}
              >
                <div className="text-center h-full">
                  <div className="glass-card rounded-2xl p-8 h-full group">
                    <IconWithRotateInView>
                      <value.icon className="w-8 h-8 text-white" />
                    </IconWithRotateInView>
                    <h3 className="text-xl md:text-2xl font-semibold text-black mb-4">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

function IconWithRotateInView({ children }: { children: React.ReactNode }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
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
      className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#2563eb] transition-colors duration-300"
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

export default ValuesSection;
