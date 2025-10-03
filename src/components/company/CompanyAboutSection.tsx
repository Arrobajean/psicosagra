import React, { useEffect, useRef } from "react";
import { Target, Eye, Heart } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CompanyAboutSection = () => {
  const cardsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!cardsRef.current) return;
    gsap.fromTo(
      cardsRef.current.querySelectorAll(".about-card"),
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        stagger: 0.18,
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  const values = [
    {
      icon: Target,
      title: "Misión",
      description:
        "Mejorar la calidad de vida de nuestros pacientes ofreciendo un tratamiento integral que aborde tanto su salud mental como física, con profesionalidad, empatía y un compromiso genuino con su bienestar.",
    },
    {
      icon: Eye,
      title: "Visión",
      description:
        "Ser el centro de referencia en Psicología y Nutrición Clínica en Illescas, reconocidos por nuestra excelencia profesional, enfoque integral y el impacto positivo y duradero en la vida de nuestros pacientes.",
    },
    {
      icon: Heart,
      title: "Valores",
      description:
        "Nos guiamos por la ética profesional, la confidencialidad absoluta, el respeto a cada persona, la empatía en el trato, la actualización constante de conocimientos y un espacio libre de juicios donde te sientas seguro.",
    },
  ];

  return (
    <section
      className="min-h-dvh bg-white overflow-hidden"
      style={{ paddingTop: "var(--header-height)" }}
    >
      <div className="container mx-auto px-6 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h2 className="text-sm font-medium text-gray-500 mb-4 tracking-wider uppercase">
              El corazón del centro
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-black mb-6">
              Transformando vidas a través del bienestar integral
            </h3>
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <h4 className="text-lg font-semibold text-black mb-4">
                Nuestra Historia
              </h4>
              <p>
                En <strong className="text-black">Psicosagra</strong>, somos un
                centro especializado en Psicología y Nutrición Clínica ubicado
                en Illescas. Nuestro enfoque único combina el cuidado de la
                mente y el cuerpo para ofrecer un tratamiento integral que
                aborda tu bienestar desde todas las perspectivas.
              </p>
              <p>
                Nuestra especialización en{" "}
                <strong className="text-black">
                  terapia psicológica, nutrición clínica y atención
                  personalizada
                </strong>{" "}
                nos ha convertido en un centro de referencia en Illescas, donde
                cada paciente recibe un plan de tratamiento diseñado a medida
                con la máxima calidad y profesionalidad.
              </p>
              <p className="text-sm text-gray-500 mt-4">
                Nuestro compromiso es ofrecer un espacio seguro y de confianza,
                donde puedas sentirte escuchado, comprendido y acompañado en tu
                proceso de cambio hacia una vida más plena y saludable.
              </p>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-black">500+</div>
                <div className="text-sm text-gray-500">Pacientes</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-black">6</div>
                <div className="text-sm text-gray-500">Profesionales</div>
              </div>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-md">
            <img
              src="/placeholder.svg"
              alt="Centro de Psicología y Nutrición Psicosagra en Illescas"
              className="w-full h-80 object-cover"
              loading="lazy"
            />
          </div>
        </div>
        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-black mb-4">
            Lo que nos mueve en Psicosagra
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            No solo tratamos síntomas, acompañamos procesos de cambio real hacia
            una vida más plena, equilibrada y saludable en todos los aspectos.
          </p>
        </div>
        <div
          ref={cardsRef}
          className="grid md:grid-cols-3 gap-8 about-card-group"
        >
          {values.map(({ icon: Icon, title, description }, index) => (
            <article
              key={index}
              className="about-card glass-card rounded-2xl p-8 h-full text-center shadow-md"
            >
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-black mb-2">{title}</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyAboutSection;
