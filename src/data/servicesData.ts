import {
  Baby,
  UserRound,
  HeartHandshake,
  Brain,
  Scale,
  Apple,
} from "lucide-react";

import type { ForwardRefExoticComponent, RefAttributes } from "react";
import type { LucideProps } from "lucide-react";

export type LucideIcon = ForwardRefExoticComponent<
  Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
>;

export type ServiceItem = {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
};

export const servicesData: ServiceItem[] = [
  {
    icon: Baby,
    title: "Infantojuvenil",
    description: "Acompañamiento especializado para niños y adolescentes.",
    features: [
      "Evaluación del desarrollo y emocional",
      "Intervención en dificultades conductuales",
      "Orientación familiar y escolar",
    ],
  },
  {
    icon: UserRound,
    title: "Individual (Adultos)",
    description:
      "Terapia para el manejo emocional, crecimiento personal y desafíos de la vida adulta.",
    features: [
      "Ansiedad, estrés y depresión",
      "Autoestima y gestión emocional",
      "Acompañamiento en duelos y cambios",
    ],
  },
  {
    icon: HeartHandshake,
    title: "Familiar y de Pareja",
    description:
      "Intervenciones sistémicas para mejorar la comunicación y resolver conflictos.",
    features: [
      "Dinámicas familiares y roles",
      "Resolución de conflictos y acuerdos",
      "Fortalecimiento del vínculo",
    ],
  },
  {
    icon: Brain,
    title: "Neurodivergencias",
    description:
      "Evaluación y apoyo para TDAH, TEA y otras condiciones del neurodesarrollo.",
    features: [
      "Detección y evaluación funcional",
      "Estrategias de apoyo en el hogar",
      "Coordinación con entorno educativo",
    ],
  },
  {
    icon: Scale,
    title: "Psicología Forense / Peritaje",
    description: "Informes periciales y asesoramiento en procesos legales.",
    features: [
      "Evaluación objetiva y metodológica",
      "Elaboración de informes periciales",
      "Ratificación en sede judicial",
    ],
  },
  {
    icon: Apple,
    title: "Nutrición Clínica",
    description:
      "Asesoramiento dietético-nutricional para el manejo de patologías y bienestar integral.",
    features: [
      "Planes nutricionales personalizados",
      "Educación alimentaria sostenible",
      "Acompañamiento y seguimiento",
    ],
  },
];
