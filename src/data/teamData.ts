import { MessageSquare, Wrench, CheckCircle, Heart } from "lucide-react";

export interface TeamMember {
  name: string;
  role: string;
  description: string;
  image: string | null;
  specialties?: string[];
  education?: string[];
  experience?: string;
  approach?: string;
}

export interface ProcessStep {
  icon: any;
  title: string;
  description: string;
}

export const teamMembers: TeamMember[] = [
  {
    name: "Fernando Rodríguez",
    role: "Psicólogo Clínico",
    description:
      "Especialista en terapia cognitivo-conductual y tratamiento de ansiedad y depresión.",
    image: null,
    specialties: [
      "Terapia Cognitivo-Conductual",
      "Ansiedad y Depresión",
      "Terapia de Pareja",
      "Gestión del Estrés",
    ],
    education: [
      "Licenciado en Psicología por la Universidad Complutense de Madrid",
      "Máster en Psicología Clínica y de la Salud",
      "Formación en Terapia Cognitivo-Conductual",
    ],
    experience: "Más de 10 años de experiencia en práctica clínica",
    approach:
      "Mi enfoque se centra en proporcionar herramientas prácticas para que mis pacientes puedan gestionar sus emociones y pensamientos de manera efectiva, siempre desde un ambiente de respeto y confianza.",
  },
  {
    name: "Carmen Delgado",
    role: "Nutricionista Clínica",
    description:
      "Experta en nutrición terapéutica y planes alimentarios personalizados para mejorar la salud integral.",
    image: null,
    specialties: [
      "Nutrición Clínica",
      "Pérdida de Peso",
      "Trastornos de la Conducta Alimentaria",
      "Nutrición Deportiva",
    ],
    education: [
      "Grado en Nutrición Humana y Dietética",
      "Máster en Nutrición Clínica",
      "Especialización en Trastornos de la Conducta Alimentaria",
    ],
    experience:
      "8 años ayudando a pacientes a transformar su relación con la comida",
    approach:
      "Creo firmemente en una alimentación consciente y sostenible. Mi objetivo es que encuentres un equilibrio nutricional que se adapte a tu estilo de vida y te haga sentir bien contigo mismo.",
  },
  {
    name: "Cristina Ballestín",
    role: "Psicóloga Infantil",
    description:
      "Especializada en psicología infantil y adolescente, con enfoque en desarrollo emocional y conductas.",
    image: null,
    specialties: [
      "Psicología Infantil y Adolescente",
      "TDAH y Trastornos del Neurodesarrollo",
      "Problemas de Conducta",
      "Orientación a Padres",
    ],
    education: [
      "Licenciada en Psicología",
      "Máster en Psicología Infantil y Adolescente",
      "Especialización en TDAH y Trastornos del Aprendizaje",
    ],
    experience: "7 años trabajando con niños, adolescentes y sus familias",
    approach:
      "Trabajo desde el juego y la creatividad para conectar con los más pequeños. Mi prioridad es crear un espacio donde se sientan seguros para expresar sus emociones y crecer con confianza.",
  },
  {
    name: "Laura González",
    role: "Psicóloga General Sanitaria",
    description:
      "Terapeuta especializada en terapia de aceptación y compromiso (ACT) y mindfulness.",
    image: null,
    specialties: [
      "Terapia de Aceptación y Compromiso (ACT)",
      "Mindfulness",
      "Gestión Emocional",
      "Autoestima y Crecimiento Personal",
    ],
    education: [
      "Grado en Psicología",
      "Máster en Psicología General Sanitaria",
      "Formación Avanzada en ACT y Mindfulness",
    ],
    experience: "6 años acompañando procesos de cambio y crecimiento personal",
    approach:
      "Mi enfoque se basa en ayudarte a conectar con tus valores y vivir una vida más plena y significativa. Utilizo herramientas de mindfulness y aceptación para que aprendas a relacionarte con tus pensamientos y emociones de forma saludable.",
  },
  {
    name: "Fernando Acedo",
    role: "Psicólogo Especialista en Trauma",
    description:
      "Experto en tratamiento de trauma, EMDR y terapia para trastorno de estrés postraumático.",
    image: null,
    specialties: [
      "EMDR",
      "Trastorno de Estrés Postraumático",
      "Trauma Complejo",
      "Duelo y Pérdida",
    ],
    education: [
      "Licenciado en Psicología",
      "Máster en Psicología Clínica",
      "Certificación en EMDR",
      "Formación en Trauma y Apego",
    ],
    experience: "12 años especializándose en trauma y sus efectos",
    approach:
      "Entiendo que las experiencias traumáticas pueden afectar profundamente tu vida. Mi trabajo se centra en ayudarte a procesar esas experiencias de manera segura, utilizando técnicas avanzadas como EMDR para que puedas sanar y seguir adelante.",
  },
  {
    name: "Adriana Arro",
    role: "Nutricionista Deportiva",
    description:
      "Especialista en nutrición deportiva y optimización del rendimiento físico.",
    image: null,
    specialties: [
      "Nutrición Deportiva",
      "Optimización del Rendimiento",
      "Composición Corporal",
      "Suplementación",
    ],
    education: [
      "Grado en Nutrición Humana y Dietética",
      "Máster en Nutrición Deportiva",
      "Certificación en Entrenamiento y Nutrición",
    ],
    experience: "5 años trabajando con atletas y personas activas",
    approach:
      "Mi pasión es ayudarte a alcanzar tu máximo potencial físico mediante una nutrición personalizada y basada en evidencia. Ya seas atleta o simplemente quieras mejorar tu composición corporal, te acompañaré en cada paso del camino.",
  },
];

export const processSteps: ProcessStep[] = [
  {
    icon: MessageSquare,
    title: "Primera Consulta",
    description:
      "Te escuchamos con atención para entender tu situación, necesidades y objetivos. Es un espacio confidencial donde puedes expresarte libremente.",
  },
  {
    icon: Wrench,
    title: "Evaluación y Diagnóstico",
    description:
      "Realizamos una evaluación profesional completa para diseñar un plan de tratamiento personalizado que se ajuste a tus necesidades específicas.",
  },
  {
    icon: CheckCircle,
    title: "Tratamiento",
    description:
      "Iniciamos el proceso terapéutico con sesiones regulares, aplicando las técnicas más efectivas y ajustando el plan según tu evolución.",
  },
  {
    icon: Heart,
    title: "Seguimiento",
    description:
      "Acompañamos tu progreso a largo plazo, asegurando que los cambios sean duraderos y que dispongas de las herramientas necesarias para mantener tu bienestar.",
  },
];
