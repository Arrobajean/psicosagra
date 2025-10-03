import React from "react";
import AnimatedSection from "@/components/common/AnimatedSection";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "¿Cómo sé si necesito ir a terapia psicológica?",
      answer:
        "Si sientes que tus emociones, pensamientos o comportamientos interfieren en tu vida diaria, relaciones o bienestar, puede ser un buen momento para buscar ayuda profesional. No necesitas estar en crisis para acudir a terapia; es una herramienta de crecimiento personal y prevención.",
    },
    {
      question: "¿Cuánto dura una sesión?",
      answer:
        "Las sesiones de psicología tienen una duración aproximada de 50-60 minutos, mientras que las consultas de nutrición duran entre 45-60 minutos. La primera sesión puede ser un poco más extensa para conocer tu caso en profundidad.",
    },
    {
      question: "¿Qué servicios de nutrición ofrecen?",
      answer:
        "Ofrecemos consultas nutricionales personalizadas para control de peso, alimentación saludable, dietas específicas (deportiva, vegetariana, intolerancias), educación nutricional y seguimiento continuo para alcanzar tus objetivos de salud.",
    },
    {
      question: "¿Ofrecen sesiones online?",
      answer:
        "Sí, tanto las sesiones de psicología como las consultas de nutrición están disponibles en formato online con la misma calidad y profesionalidad que las presenciales. Es una opción flexible que te permite recibir atención desde cualquier lugar.",
    },
    {
      question: "¿Cuánto tiempo dura un proceso terapéutico o nutricional?",
      answer:
        "La duración varía según cada persona y sus objetivos. Algunos procesos breves pueden resolverse en 3-6 meses, mientras que otros requieren más tiempo. Trabajamos de forma personalizada para que alcances tus metas de la manera más eficiente posible.",
    },
    {
      question: "¿Trabajan con niños y adolescentes?",
      answer:
        "Sí, contamos con especialistas en psicología infanto-juvenil que trabajan con niños y adolescentes. También ofrecemos orientación nutricional adaptada a las diferentes etapas del crecimiento, colaborando con las familias en el proceso.",
    },
    {
      question: "¿Necesito una derivación médica para nutrición?",
      answer:
        "No es necesario. Puedes solicitar una cita directamente con nuestro servicio de nutrición. Sin embargo, si tienes alguna patología específica, es recomendable que lo comentes en la primera consulta para una atención más personalizada.",
    },
    {
      question: "¿Cómo puedo solicitar una cita?",
      answer:
        "Puedes contactarnos directamente por WhatsApp, teléfono o a través del formulario de contacto. Te responderemos lo antes posible para agendarte en el horario que mejor se ajuste a tu disponibilidad.",
    },
  ];

  return (
    <section id="preguntas-frecuentes" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection animation="slideUp">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-sm font-medium text-muted-foreground mb-4 tracking-wider uppercase">
              Preguntas Frecuentes
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Resolvemos tus dudas
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Encuentra respuestas a las preguntas más comunes sobre nuestros
              servicios de psicología y nutrición
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="slideUp" delay={0.2}>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-background rounded-lg px-6 border-none shadow-sm"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-5">
                    <span className="text-base md:text-lg font-semibold text-black">
                      {faq.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed text-sm md:text-base pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default FAQSection;
