import React from "react";
import AnimatedSection from "@/components/common/AnimatedSection";
import { motion } from "framer-motion";
import Masonry from "react-masonry-css";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const AboutUsSection = () => {
  const breakpointColumnsObj = {
    default: 2, // Desktop/Tablet: dos columnas
    640: 1, // Mobile: una columna
  };

  return (
    <section
      id="quienes-somos"
      className="min-h-dvh bg-background flex items-center"
    >
      <div className="container mx-auto px-6 py-20">
        {/* Títulos centrados */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-medium text-gray-500 mb-4 tracking-wider uppercase">
            Quiénes somos
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-black mb-6">
            Profesionalidad y Cercanía para tu Bienestar Integral
          </h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            En Psicosagra, no somos solo una consulta; somos tu socio en salud
            integral, especializados en Psicología y Nutrición Clínica en
            Illescas.
          </p>
        </div>

        {/* Contenido: texto a la izquierda, imágenes a la derecha */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection animation="slideRight" delay={0.2}>
            <div className="space-y-6 text-gray-600 leading-relaxed">
              {/* Texto para móvil */}
              <div className="md:hidden">
                <p>
                  En Psicosagra, no somos solo una consulta; somos tu socio en
                  salud integral, especializados en Psicología y Nutrición
                  Clínica en Illescas. Entendemos que el bienestar verdadero
                  florece en la armonía entre la mente y el cuerpo, y nuestro
                  equipo está aquí para guiarte en esa conexión.
                </p>
                <p className="text-black font-semibold">
                  Más Allá del Tratamiento
                </p>
                <p>
                  Nuestra filosofía va más allá de ofrecer terapias o planes
                  dietéticos aislados. Brindamos un espacio seguro, profesional
                  y libre de juicios donde puedes iniciar una transformación
                  real y sostenible. Con años de experiencia y formación
                  continua, nuestro equipo altamente cualificado se dedica a
                  escucharte con respeto y a acompañarte con herramientas
                  rigurosas y humanas. Aplicamos una metodología probada que se
                  enfoca en las causas profundas, no solo en los síntomas.
                </p>
                <p className="text-black font-semibold">
                  Atención Personalizada para Todas las Etapas
                </p>
                <p>
                  Sabemos que cada persona y cada familia es un universo. Por
                  eso, si buscas orientación individual para superar un desafío
                  personal, apoyo para tu hijo en su desarrollo, o soluciones
                  para mejorar la dinámica familiar, encontrarás en Psicosagra
                  una atención profundamente personalizada. Estamos aquí para
                  ayudarte a construir un equilibrio y una conciencia que te
                  permitirán vivir una vida más plena, saludable y consciente.
                  Tu camino hacia una vida mejor comienza con la comprensión;
                  estamos listos para comprenderte.
                </p>
              </div>

              {/* Texto para escritorio */}
              <div className="hidden md:block">
                <p>
                  En Psicosagra, no somos solo una consulta; somos tu socio en
                  salud integral, especializados en{" "}
                  <strong className="text-black">Psicología</strong> y
                  <strong className="text-black"> Nutrición Clínica</strong> en
                  Illescas. Entendemos que el bienestar verdadero florece en la
                  armonía entre la mente y el cuerpo, y nuestro equipo está aquí
                  para guiarte en esa conexión.
                </p>
                <p className="text-black font-semibold">
                  Más Allá del Tratamiento
                </p>
                <p>
                  Nuestra filosofía va más allá de ofrecer terapias o planes
                  dietéticos aislados. Brindamos un espacio seguro, profesional
                  y libre de juicios donde puedes iniciar una transformación
                  real y sostenible. Con años de experiencia y formación
                  continua, nuestro equipo altamente cualificado se dedica a
                  escucharte con respeto y a acompañarte con herramientas
                  rigurosas y humanas. Aplicamos una metodología probada que se
                  enfoca en las causas profundas, no solo en los síntomas.
                </p>
                <p className="text-black font-semibold">
                  Atención Personalizada para Todas las Etapas
                </p>
                <p>
                  Sabemos que cada persona y cada familia es un universo. Por
                  eso, si buscas orientación individual para superar un desafío
                  personal, apoyo para tu hijo en su desarrollo, o soluciones
                  para mejorar la dinámica familiar, encontrarás en Psicosagra
                  una atención profundamente personalizada. Estamos aquí para
                  ayudarte a construir un equilibrio y una conciencia que te
                  permitirán vivir una vida más plena, saludable y consciente.
                  Tu camino hacia una vida mejor comienza con la comprensión;
                  estamos listos para comprenderte.
                </p>
              </div>
            </div>
            <div className="mt-8 flex justify-center">
              <Link to="/blog">
                <Button className="group flex items-center glass-button-white-bg px-8 py-3 rounded-lg border-0">
                  <span>Ver nuestro blog</span>
                  <ArrowRight
                    size={22}
                    className="ml-2 sm:opacity-0 sm:translate-x-4 sm:group-hover:opacity-100 sm:group-hover:translate-x-0 opacity-100 translate-x-0 transition-all duration-300 ease-out"
                  />
                </Button>
              </Link>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="slideLeft" delay={0.4}>
            <div className="masonry-container">
              <Masonry
                breakpointCols={breakpointColumnsObj}
                className="flex gap-6"
                columnClassName="masonry-column"
              >
                {[
                  {
                    src: "/images/UI/mujer_sana_ilustracion.jpg",
                    alt: "Mujer sonriendo con corazón y bienestar mental",
                    description:
                      "Acompañamiento psicológico cercano para cultivar autoestima, calma y bienestar emocional.",
                    style: "tall",
                    tag: "Psicología",
                  },
                  {
                    src: "/images/UI/neuronas_ilustracion.jpg",
                    alt: "Ilustración de neuronas abrazando, autocuidado",
                    description:
                      "Herramientas basadas en evidencia para regular emociones y fortalecer tu salud mental.",
                    style: "wide",
                    tag: "Bienestar",
                  },
                  {
                    src: "/images/UI/mano_ilustracion.jpg",
                    alt: "Mano sosteniendo florecimiento del cerebro",
                    description:
                      "Intervenciones integrales de Psicología y Nutrición para un crecimiento real y sostenible.",
                    style: "square",
                    tag: "Integral",
                  },
                  {
                    src: "/images/UI/hombre_sano_ilustracion.jpg",
                    alt: "Hombre con calma y equilibrio interior",
                    description:
                      "Planes personalizados que te ayudan a recuperar el equilibrio en tu día a día.",
                    style: "medium",
                    tag: "Equilibrio",
                  },
                ].map(({ src, alt, description, style, tag }, idx) => (
                  <motion.div
                    key={idx}
                    className={`glass-card rounded-2xl shadow-glass mb-4 overflow-hidden cursor-pointer relative group ${
                      style === "tall"
                        ? "h-80"
                        : style === "wide"
                        ? "h-48"
                        : style === "square"
                        ? "h-64"
                        : "h-56"
                    }`}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <img
                      src={src}
                      alt={alt}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <p className="text-white text-sm font-medium leading-tight">
                        {description}
                      </p>
                    </div>
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                      <span className="text-xs font-semibold text-gray-800">
                        {tag}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </Masonry>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
