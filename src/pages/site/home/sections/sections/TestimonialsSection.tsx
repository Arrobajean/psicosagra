import React from "react";
import { Star } from "lucide-react";
import AnimatedSection from "@/components/common/AnimatedSection";
import { motion, AnimatePresence } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Lucía Serrano Hernández",
      reformType: "Reseña tomada de Google",
      text: "Estoy muy agradecida por el trato de Mari Carmen. Es una profesional excepcional desde el primer momento, me he sentido escuchada y en un entorno de confianza y seguro. Gracias por su trabajo, acompañamiento y guía en cada sesión, ha sido una parte fundamental en mi proceso personal y la recomendaría sin duda.",
      rating: 5,
    },
    {
      name: "juan carlos serrano cosano",
      reformType: "Reseña tomada de Google",
      text: "Mi experiencia en este centro ha sido siempre excelente. Desde el primer día me sentí escuchada y comprendida. Hay un equipo muy profesional, cercano y empatico que hace que se tenga un ambiente de confianza en cada sesión. Se nota su profesionalidad. Sin duda lo recomiendo a cualquiera que busca una ayuda seria, humana y efectiva.",
      rating: 5,
    },
    {
      name: "Noemi González Ibáñez",
      reformType: "Reseña tomada de Google",
      text: "Quería agradecer y recomendar a todos esta consulta de Psicología, en especial a Mari Carmen. Hace ya tres años que empecé con ella y solo puedo decir GRACIAS. Mari Carmen es una psicóloga increíble que ha hecho un gran trabajo conmigo, gracias a su gran profesionalidad, su cercanía y su trato tan amable, mi vida ahora es diferente y todo gracias a ella. De verdad decir que si alguien quiere sanar, superar, afrontar, tener las herramientas necesarias, etc, la recomiendo muchísimo. No dudaré en volver si la necesito. Gracias de verdad.",
      rating: 5,
    },
    {
      name: "Vanessa Rico",
      reformType: "Reseña tomada de Google",
      text: "Dar con una profesional como Vanesa me salvó la vida, literalmente. A veces nos resistimos a ir a terapia pensando que podemos con todo y cuando llegamos a esos extremos, es crucial que quien te atienda, te coja de la mano desde el minuto uno. Así fue desde mi primera sesión.",
      rating: 5,
    },
    {
      name: "Samuel Lopez puñal",
      reformType: "Reseña tomada de Google",
      text: "Quiero dar las Gracias a Laura por qué nos salvo la vida a mí Madre y a mí hoy día ya todo en nuestra vida es diferente y mejor Gracias por existir ojalá rezo a Dios Padre no tener que recurrir porque esté bien pero si algún día no puedo más suerte que han llegado amigos de verdad a nuestras vidas solo falta una nueva mujer de pareja para mí Madre por lo demás en esa oscuridad contigo ambos mi Madre y yo encontramos luz Gracias Laura Dios te proteja 😘🌹✝️🛐💟",
      rating: 5,
    },
    {
      name: "May Cas",
      reformType: "Reseña tomada de Google",
      text: "Llevo ya unos meses con ellos y la verdad que muy contenta, Cristina ha conseguido sacar mucho de mi y me está ayudando mucho en todos los aspectos de m vida.\nSolo puedo decir gracias",
      rating: 5,
    },
    {
      name: "Claudia Guerrero",
      reformType: "Reseña tomada de Google",
      text: "La mejor decisión de mi vida, gracias a laura por toda la atencion y dedicación y a sus conpañer@s se adaptan a tus horarios y a ti en totalidad. Gracias a ellos mi vida esta mas calmada🫶🏼",
      rating: 5,
    },
    {
      name: "carolina casado puerta",
      reformType: "Reseña tomada de Google",
      text: "Estoy feliz del proceso tan profundo y sanador que estoy haciendo de la mano de la psicóloga, Vanesa con su sensibilidad y profesionalidad a sabido entender lo que voy necesitando en cada sesión para poder ir liberando todo lo que me impedía vivir, estoy profundamente agradecida y seguiremos avanzando. Gracias",
      rating: 5,
    },
  ];

  const [expandedByIndex, setExpandedByIndex] = React.useState<
    Record<number, boolean>
  >({});
  const [textByIndex, setTextByIndex] = React.useState<Record<number, string>>(
    {}
  );

  const getExcerpt = (text: string, maxLength = 220) => {
    const normalized = text.replace(/\n+/g, " ").trim();
    if (normalized.length <= maxLength) return normalized;
    return normalized.slice(0, maxLength).trimEnd() + "…";
  };

  const toggleExpanded = (index: number) => {
    const isCurrentlyExpanded = expandedByIndex[index];

    if (isCurrentlyExpanded) {
      // Al cerrar: primero contraer, luego cambiar texto
      setExpandedByIndex((prev) => ({ ...prev, [index]: false }));
      setTimeout(() => {
        setTextByIndex((prev) => ({
          ...prev,
          [index]: getExcerpt(testimonials[index].text),
        }));
      }, 500);
    } else {
      // Al abrir: cambiar texto inmediatamente, luego expandir
      setTextByIndex((prev) => ({
        ...prev,
        [index]: testimonials[index].text,
      }));
      setTimeout(() => {
        setExpandedByIndex((prev) => ({ ...prev, [index]: true }));
      }, 10);
    }
  };

  React.useEffect(() => {
    // Inicializar textos con extractos
    const initialTexts: Record<number, string> = {};
    testimonials.forEach((testimonial, idx) => {
      initialTexts[idx] = getExcerpt(testimonial.text);
    });
    setTextByIndex(initialTexts);
  }, []);

  return (
    <section id="resenas" className="min-h-dvh bg-background flex items-center">
      <div className="container mx-auto px-6 py-20">
        <AnimatedSection animation="slideUp">
          <div className="text-center mb-16">
            <h2 className="text-sm font-medium text-muted-foreground mb-4 tracking-wider uppercase">
              Testimonios
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-black mb-6">
              Lo que dicen nuestros clientes
            </h3>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="slideUp" delay={0.3}>
          <div className="relative">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {testimonials.map((testimonial, index) => (
                  <CarouselItem
                    key={index}
                    className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3"
                  >
                    <motion.div
                      className="bg-muted/50 rounded-lg p-6 md:p-8 flex flex-col"
                      whileHover={{
                        scale: 1.02,
                        y: -5,
                        transition: { duration: 0.3 },
                      }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: index * 0.1,
                        duration: 0.5,
                        ease: "easeOut",
                      }}
                    >
                      <motion.div
                        className="flex mb-4"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.3 + index * 0.05 }}
                      >
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <motion.div
                            key={i}
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            transition={{
                              delay: 0.4 + index * 0.05 + i * 0.05,
                            }}
                          >
                            <Star className="w-4 h-4 md:w-5 md:h-5 text-yellow-400 fill-current" />
                          </motion.div>
                        ))}
                      </motion.div>

                      <div
                        className={`mb-4 overflow-hidden transition-all duration-500 ease-in-out ${
                          expandedByIndex[index]
                            ? "max-h-[800px]"
                            : "max-h-[120px]"
                        }`}
                      >
                        <p className="text-muted-foreground leading-relaxed italic text-sm md:text-base">
                          "{textByIndex[index] || getExcerpt(testimonial.text)}"
                        </p>
                      </div>
                      {testimonial.text.length > 220 && (
                        <button
                          type="button"
                          onClick={() => toggleExpanded(index)}
                          className="mb-6 text-xs md:text-sm font-medium text-primary hover:underline self-start transition-colors"
                          aria-expanded={!!expandedByIndex[index]}
                        >
                          {expandedByIndex[index] ? "Ver menos" : "Ver más"}
                        </button>
                      )}

                      <div className="mt-auto">
                        <h4 className="font-semibold text-primary text-sm md:text-base">
                          {testimonial.name}
                        </h4>
                        {testimonial.city && (
                          <p className="text-xs md:text-sm text-muted-foreground">
                            {testimonial.city}
                          </p>
                        )}
                        <p className="text-xs md:text-sm text-muted-foreground font-medium mt-1">
                          {testimonial.reformType}
                        </p>
                      </div>
                    </motion.div>
                  </CarouselItem>
                ))}
              </CarouselContent>

              <div className="hidden md:block">
                <CarouselPrevious className="absolute -left-4 lg:-left-12 top-[250px]" />
                <CarouselNext className="absolute -right-4 lg:-right-12 top-[250px]" />
              </div>

              {/* Controles móviles */}
              <div className="flex md:hidden justify-center gap-4 mt-6">
                <CarouselPrevious className="relative top-0 left-0 translate-x-0 translate-y-0" />
                <CarouselNext className="relative top-0 right-0 translate-x-0 translate-y-0" />
              </div>
            </Carousel>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default TestimonialsSection;
