import React from "react";
import { Check } from "lucide-react";
import AnimatedSection from "@/components/common/AnimatedSection";
import { motion } from "framer-motion";

interface WhyChooseUsSectionProps {
  cityName?: string;
  experience?: string;
  guarantee?: string;
  reasons?: string[];
}

const WhyChooseUsSection = ({
  cityName,
  experience,
  guarantee,
  reasons,
}: WhyChooseUsSectionProps = {}) => {
  // Default content for main page
  const defaultReasons = [
    "<strong>Enfoque Integral Único:</strong> Somos un centro donde la Psicología y la Nutrición Clínica trabajan de la mano. Abordamos tu bienestar desde la perspectiva de la mente y el cuerpo, asegurando resultados más completos y duraderos.",
    "<strong>Atención Personalizada y Cercana:</strong> Creemos que cada persona es única. Recibirás un plan de tratamiento diseñado a medida, con la calidez y la empatía necesarias para que te sientas seguro y escuchado en todo momento.",
    "<strong>Profesionalidad y Rigor Ético:</strong> Nuestro equipo está formado por expertos cualificados y en constante actualización. Aplicamos metodologías rigurosas y basadas en la ética profesional para garantizar la máxima calidad en tu atención.",
    "<strong>Espacio Seguro y Libre de Juicios:</strong> Te ofrecemos un entorno de confianza total, donde puedes expresarte libremente, sin miedo a ser juzgado. Tu bienestar y privacidad son nuestra máxima prioridad.",
  ];

  const title = cityName
    ? `¿Por qué contratarnos en ${cityName}?`
    : "¿Por qué trabajar con Psicosagra?";
  const subtitle = cityName
    ? `${
        experience || "Años de experiencia"
      } nos avalan. Motivos para elegir Psicosagra en ${cityName}.`
    : "Elegirnos significa optar por un camino de bienestar integral, donde el rigor profesional se une a la cercanía humana. Estas son las razones clave para comenzar tu proceso con nosotros en Illescas:";

  const displayReasons = reasons || defaultReasons;

  return (
    <section className="min-h-dvh bg-background text-black flex items-center">
      <div className="container mx-auto px-6 py-20">
        <AnimatedSection animation="slideUp">
          <div className="text-center mb-16">
            <h2 className="text-sm font-medium text-gray-500 mb-4 tracking-wider uppercase">
              Por qué elegirnos
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-6">{title}</h3>
            <p className="text-lg text-black max-w-3xl mx-auto">{subtitle}</p>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="slideUp" delay={0.3}>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {displayReasons.map((reason, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 glass-card-dark rounded-xl p-6"
                >
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                      <Check className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <p
                    className="text-gray-700 leading-relaxed text-lg"
                    dangerouslySetInnerHTML={{ __html: reason }}
                  />
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
