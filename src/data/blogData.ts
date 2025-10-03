export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: "psicologia" | "nutricion" | "general";
  author: {
    name: string;
    role: string;
    avatar?: string;
  };
  date: string;
  readTime: string;
  image: string;
  tags: string[];
}

export interface BlogCategory {
  key: string;
  label: string;
}

export const blogCategories: BlogCategory[] = [
  { key: "todos", label: "Todos" },
  { key: "psicologia", label: "Psicología" },
  { key: "nutricion", label: "Nutrición" },
  { key: "general", label: "Bienestar" },
];

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: "gestion-ansiedad-tecnicas-practicas",
    title: "Gestión de la ansiedad: Técnicas prácticas para el día a día",
    excerpt:
      "Descubre estrategias efectivas basadas en evidencia científica para manejar la ansiedad en tu vida cotidiana.",
    content: `La ansiedad es una respuesta natural del organismo ante situaciones percibidas como amenazantes. Sin embargo, cuando se vuelve crónica o desproporcionada, puede interferir significativamente en nuestra calidad de vida.

## ¿Qué es la ansiedad?

La ansiedad es una emoción caracterizada por sentimientos de tensión, pensamientos de preocupación y cambios físicos como aumento de la presión arterial. Es importante distinguir entre ansiedad adaptativa (que nos ayuda a responder ante desafíos) y ansiedad patológica.

## Técnicas de Gestión

### 1. Respiración Diafragmática
La respiración profunda y consciente activa el sistema nervioso parasimpático, promoviendo la relajación. Practica inhalar durante 4 segundos, mantener 4 segundos y exhalar en 6 segundos.

### 2. Mindfulness y Atención Plena
La práctica de mindfulness nos ayuda a anclar nuestra atención en el presente, reduciendo la rumiación sobre el futuro que alimenta la ansiedad.

### 3. Reestructuración Cognitiva
Identificar y cuestionar los pensamientos automáticos negativos es fundamental. Pregúntate: ¿Esta preocupación es realista? ¿Qué evidencia tengo?

### 4. Exposición Gradual
Enfrentar progresivamente las situaciones que generan ansiedad, en un entorno controlado y con apoyo profesional, puede reducir significativamente los síntomas.

## Cuándo Buscar Ayuda Profesional

Si la ansiedad interfiere con tus actividades diarias, relaciones o bienestar general, es importante consultar con un psicólogo especializado. La terapia cognitivo-conductual ha demostrado ser altamente efectiva en el tratamiento de los trastornos de ansiedad.

## Conclusión

La ansiedad es manejable con las herramientas y el apoyo adecuados. No dudes en buscar ayuda profesional para desarrollar estrategias personalizadas que se adapten a tu situación particular.`,
    category: "psicologia",
    author: {
      name: "Dra. María González",
      role: "Psicóloga Clínica",
    },
    date: "2025-09-15",
    readTime: "5 min",
    image: "/placeholder.svg",
    tags: ["ansiedad", "técnicas", "bienestar", "salud mental"],
  },
  {
    id: 2,
    slug: "alimentacion-saludable-ninos-adolescentes",
    title: "Alimentación saludable en niños y adolescentes",
    excerpt:
      "Guía práctica para padres sobre cómo fomentar hábitos alimenticios saludables desde la infancia.",
    content: `La nutrición durante la infancia y adolescencia es fundamental para el crecimiento, desarrollo cognitivo y establecimiento de hábitos que perdurarán toda la vida.

## Importancia de la Nutrición Infantil

Durante estas etapas críticas, el organismo requiere nutrientes específicos para:
- Crecimiento físico adecuado
- Desarrollo cerebral y cognitivo
- Fortalecimiento del sistema inmunológico
- Establecimiento de patrones alimentarios saludables

## Principios Básicos

### Variedad y Equilibrio
Una alimentación equilibrada debe incluir:
- **Frutas y verduras**: 5 porciones diarias de diferentes colores
- **Proteínas**: Carnes magras, pescado, huevos, legumbres
- **Carbohidratos complejos**: Cereales integrales, pan, pasta
- **Lácteos**: Leche, yogur, queso (adaptados a la edad)
- **Grasas saludables**: Aceite de oliva, frutos secos, aguacate

### Hidratación
El agua debe ser la bebida principal. Limitar zumos industriales y bebidas azucaradas.

## Estrategias Prácticas

### 1. Modelo a Seguir
Los niños aprenden por imitación. Si los padres comen saludable, es más probable que los hijos lo hagan.

### 2. Involucrar en la Preparación
Permitir que los niños participen en la compra y preparación de alimentos aumenta su interés por probar nuevos alimentos.

### 3. Sin Presión
Evitar forzar a comer. Respetar las señales de saciedad del niño.

### 4. Horarios Regulares
Establecer rutinas de comidas y evitar picoteo constante.

### 5. Limitar Pantallas
No usar dispositivos durante las comidas para fomentar la conexión familiar y la conciencia alimentaria.

## Señales de Alerta

Consulta con un nutricionista si observas:
- Rechazo persistente a grupos alimentarios completos
- Cambios bruscos en el peso
- Preocupación excesiva por la imagen corporal
- Conductas alimentarias restrictivas

## Conclusión

Establecer bases nutricionales sólidas en la infancia es una inversión en salud a largo plazo. La orientación profesional puede ser invaluable para adaptar las recomendaciones a las necesidades específicas de cada niño.`,
    category: "nutricion",
    author: {
      name: "Lic. Ana Martínez",
      role: "Nutricionista Clínica",
    },
    date: "2025-09-10",
    readTime: "6 min",
    image: "/placeholder.svg",
    tags: ["nutrición infantil", "hábitos saludables", "familia", "desarrollo"],
  },
  {
    id: 3,
    slug: "tdah-estrategias-apoyo-familiar",
    title: "TDAH: Estrategias de apoyo familiar y escolar",
    excerpt:
      "Comprende el Trastorno por Déficit de Atención e Hiperactividad y cómo las familias pueden brindar apoyo efectivo.",
    content: `El Trastorno por Déficit de Atención e Hiperactividad (TDAH) es una condición del neurodesarrollo que afecta a aproximadamente el 5% de los niños y adolescentes. Comprender sus manifestaciones y estrategias de apoyo es fundamental para el bienestar del niño.

## Características del TDAH

El TDAH se caracteriza por:
- **Inatención**: Dificultad para mantener la atención, organización y seguimiento de instrucciones
- **Hiperactividad**: Movimiento excesivo, dificultad para permanecer sentado
- **Impulsividad**: Actuar sin pensar, dificultad para esperar turnos

## Estrategias en el Hogar

### 1. Estructura y Rutinas
Establecer horarios predecibles para comidas, tareas, tiempo libre y sueño proporciona un marco de referencia que reduce la ansiedad.

### 2. Instrucciones Claras y Concretas
- Usar frases cortas y directas
- Dar una instrucción a la vez
- Contacto visual al comunicar
- Pedir que repita para verificar comprensión

### 3. Sistema de Recompensas
Reforzar positivamente los comportamientos deseados con un sistema de puntos o privilegios específicos.

### 4. Ambiente Libre de Distracciones
Crear espacios de estudio tranquilos, organizados y con mínimas distracciones visuales o auditivas.

### 5. Actividad Física
El ejercicio regular ayuda a canalizar la energía y mejora la concentración.

## Coordinación con el Entorno Escolar

Es fundamental mantener comunicación fluida con el profesorado para:
- Implementar adaptaciones metodológicas
- Establecer sistemas de comunicación diarios
- Coordinar estrategias entre casa y escuela
- Monitorizar el progreso académico y social

## Apoyo Emocional

Los niños con TDAH frecuentemente experimentan baja autoestima debido a:
- Dificultades académicas
- Conflictos sociales
- Correcciones constantes

Es crucial:
- Reconocer esfuerzos, no solo resultados
- Identificar y potenciar fortalezas
- Validar emociones
- Evitar etiquetas negativas

## Intervención Profesional

El abordaje del TDAH requiere enfoque multimodal:
- **Evaluación diagnóstica** por profesionales especializados
- **Terapia psicológica** (terapia cognitivo-conductual)
- **Orientación familiar** y apoyo parental
- **Coordinación con la escuela**
- **Valoración farmacológica** cuando sea necesario (siempre por psiquiatría infantil)

## Conclusión

El TDAH presenta desafíos, pero con comprensión, estrategias adecuadas y apoyo profesional, los niños pueden desarrollar todo su potencial. Cada niño es único, y las estrategias deben adaptarse a sus necesidades específicas.`,
    category: "psicologia",
    author: {
      name: "Dra. Carmen López",
      role: "Psicóloga Infantil",
    },
    date: "2025-09-05",
    readTime: "7 min",
    image: "/placeholder.svg",
    tags: ["TDAH", "neurodivergencia", "apoyo familiar", "educación"],
  },
  {
    id: 4,
    slug: "nutricion-salud-mental-conexion",
    title: "La conexión entre nutrición y salud mental",
    excerpt:
      "Explora cómo la alimentación influye en nuestro bienestar emocional y salud psicológica.",
    content: `La relación entre lo que comemos y cómo nos sentimos es más profunda de lo que tradicionalmente se pensaba. La investigación científica actual revela conexiones fascinantes entre nutrición y salud mental.

## El Eje Intestino-Cerebro

El sistema digestivo y el cerebro están conectados a través del eje intestino-cerebro, una red de comunicación bidireccional que involucra:
- Nervio vago
- Sistema nervioso entérico
- Microbiota intestinal
- Sistema inmunológico

## Nutrientes Clave para la Salud Mental

### Omega-3
Los ácidos grasos omega-3 (EPA y DHA) son componentes estructurales del cerebro y han demostrado efectos en:
- Reducción de síntomas depresivos
- Mejora de la función cognitiva
- Modulación de la inflamación

**Fuentes**: Pescado azul, nueces, semillas de chía y lino

### Vitaminas del Complejo B
Especialmente B6, B9 (ácido fólico) y B12, participan en la síntesis de neurotransmisores como serotonina y dopamina.

**Fuentes**: Legumbres, verduras de hoja verde, huevos, lácteos

### Magnesio
Mineral fundamental para la función nerviosa y la regulación del estrés.

**Fuentes**: Frutos secos, semillas, legumbres, chocolate negro

### Triptófano
Aminoácido precursor de la serotonina, el neurotransmisor del bienestar.

**Fuentes**: Pavo, pollo, plátano, frutos secos

## Alimentos Proinflamatorios a Limitar

- Azúcares refinados y procesados
- Grasas trans y saturadas en exceso
- Alcohol en cantidades elevadas
- Alimentos ultraprocesados

## Patrón Alimentario Mediterráneo

Este patrón ha demostrado beneficios para la salud mental:
- Alto consumo de verduras, frutas, legumbres
- Aceite de oliva como grasa principal
- Consumo moderado de pescado
- Bajo consumo de carnes rojas
- Frutos secos y semillas

## Impacto en Condiciones Específicas

### Depresión
Estudios sugieren que dietas ricas en alimentos procesados aumentan el riesgo, mientras que patrones saludables tienen efecto protector.

### Ansiedad
La estabilidad glucémica y el consumo de alimentos ricos en magnesio pueden ayudar a regular la respuesta de ansiedad.

### TDAH
Algunos estudios sugieren que deficiencias de omega-3, hierro y zinc pueden influir en los síntomas.

## Recomendaciones Prácticas

1. **Regularidad**: Mantener horarios de comida estables
2. **Variedad**: Incluir alimentos de todos los grupos
3. **Hidratación**: Agua suficiente a lo largo del día
4. **Cocina casera**: Preferir preparaciones caseras sobre ultraprocesados
5. **Conciencia**: Comer con atención, sin distracciones

## Conclusión

La nutrición es un pilar fundamental del bienestar integral. Mientras no sustituye el tratamiento psicológico cuando es necesario, una alimentación adecuada puede ser un complemento valioso en el cuidado de la salud mental.`,
    category: "nutricion",
    author: {
      name: "Lic. Patricia Ruiz",
      role: "Nutricionista y Psicóloga",
    },
    date: "2025-08-28",
    readTime: "8 min",
    image: "/placeholder.svg",
    tags: ["nutrición", "salud mental", "bienestar", "alimentación consciente"],
  },
  {
    id: 5,
    slug: "terapia-pareja-cuando-acudir",
    title: "Terapia de pareja: ¿Cuándo es el momento de acudir?",
    excerpt:
      "Identifica las señales que indican que tu relación podría beneficiarse de la terapia de pareja.",
    content: `Las relaciones de pareja atraviesan diferentes etapas y desafíos. Reconocer cuándo es necesario buscar apoyo profesional puede marcar la diferencia entre el fortalecimiento o deterioro del vínculo.

## Señales de que Podrían Necesitar Terapia

### 1. Problemas de Comunicación
- Discusiones frecuentes que terminan sin resolución
- Dificultad para expresar necesidades o sentimientos
- Uno o ambos se sienten no escuchados
- Uso de la comunicación agresiva o pasivo-agresiva

### 2. Crisis de Confianza
- Infidelidad (emocional o física)
- Mentiras recurrentes
- Dificultad para perdonar eventos pasados
- Celos excesivos

### 3. Distanciamiento Emocional o Físico
- Reducción significativa de la intimidad
- Sensación de vivir como "compañeros de piso"
- Falta de interés en compartir tiempo juntos
- Actividades e intereses completamente separados

### 4. Conflictos No Resueltos
- Discusiones repetitivas sobre los mismos temas
- Acumulación de resentimientos
- Incapacidad para llegar a acuerdos
- Ciclos de conflicto predecibles

### 5. Transiciones Vitales
- Llegada de hijos
- Cambios laborales importantes
- Pérdidas significativas
- Mudanzas o cambios de entorno

## ¿Qué NO es Terapia de Pareja?

Es importante aclarar que la terapia de pareja:
- **No es mediación**: El terapeuta no toma partido
- **No es mágica**: Requiere compromiso y trabajo de ambos
- **No siempre salva la relación**: A veces ayuda a separarse de forma saludable
- **No es para cambiar al otro**: Cada uno trabaja en sí mismo

## ¿Qué Sucede en Terapia de Pareja?

### Evaluación Inicial
El terapeuta conocerá:
- Historia de la relación
- Naturaleza de los conflictos
- Fortalezas de la pareja
- Objetivos terapéuticos

### Intervención
Las sesiones pueden incluir:
- Mejora de la comunicación
- Resolución de conflictos
- Reconstrucción de confianza
- Restablecimiento de la conexión emocional
- Acuerdos sobre temas prácticos

### Seguimiento
Evaluación periódica del progreso y ajuste de estrategias.

## Enfoques Terapéuticos Efectivos

### Terapia Sistémica
Entiende la relación como un sistema donde cada miembro influye en el otro.

### Terapia Cognitivo-Conductual
Trabaja en identificar patrones de pensamiento y comportamiento problemáticos.

### Terapia Focalizada en las Emociones (EFT)
Se centra en los vínculos emocionales y patrones de apego.

## ¿Cuándo es Tarde para Terapia?

Aunque nunca es "demasiado tarde", hay señales que indican que la relación está críticamente deteriorada:
- Uno o ambos han tomado la decisión firme de terminar
- Presencia de violencia (física o psicológica)
- Uno de los miembros se niega rotundamente a participar
- Falta absoluta de afecto o respeto mutuo

## Beneficios de la Terapia Preventiva

No es necesario esperar a una crisis. La terapia también sirve para:
- Fortalecer la relación
- Aprender herramientas de comunicación
- Prepararse para transiciones
- Crecer juntos de forma saludable

## Conclusión

Buscar ayuda profesional es un acto de valentía y compromiso con la relación. Un terapeuta especializado puede proporcionar un espacio seguro y herramientas efectivas para navegar los desafíos de la vida en pareja.`,
    category: "psicologia",
    author: {
      name: "Dr. Roberto Sánchez",
      role: "Psicólogo y Terapeuta de Pareja",
    },
    date: "2025-08-20",
    readTime: "6 min",
    image: "/placeholder.svg",
    tags: ["terapia de pareja", "relaciones", "comunicación", "conflictos"],
  },
  {
    id: 6,
    slug: "dieta-mediterranea-beneficios-salud",
    title: "Dieta Mediterránea: Más que una forma de comer",
    excerpt:
      "Descubre por qué la Dieta Mediterránea es considerada uno de los patrones alimentarios más saludables del mundo.",
    content: `La Dieta Mediterránea no es simplemente un plan alimentario, sino un estilo de vida que ha demostrado innumerables beneficios para la salud física y mental, reconocido por la UNESCO como Patrimonio Cultural Inmaterial de la Humanidad.

## ¿Qué es la Dieta Mediterránea?

Es el patrón alimentario tradicional de los países de la cuenca del Mediterráneo (España, Italia, Grecia), caracterizado por:
- Abundancia de alimentos vegetales
- Aceite de oliva como grasa principal
- Consumo moderado de pescado y aves
- Bajo consumo de carnes rojas
- Consumo moderado de vino (opcional)
- Actividad física regular
- Comensalidad y disfrute de las comidas

## Pirámide de la Dieta Mediterránea

### Base (consumo diario)
- **Frutas y verduras**: 5+ porciones
- **Cereales integrales**: Pan, pasta, arroz (preferiblemente integrales)
- **Aceite de oliva virgen extra**: Principal fuente de grasa
- **Frutos secos y semillas**: Un puñado al día
- **Lácteos**: Preferentemente yogur y queso, con moderación
- **Hierbas y especias**: Para reducir el uso de sal
- **Agua**: 1.5-2 litros

### Consumo Semanal
- **Pescado y marisco**: 2-3 veces por semana
- **Huevos**: 2-4 por semana
- **Legumbres**: 2-3 veces por semana
- **Aves**: 2 veces por semana

### Consumo Ocasional
- **Carnes rojas**: Máximo 1-2 veces por semana
- **Dulces y procesados**: Consumo esporádico

## Beneficios Científicamente Comprobados

### Salud Cardiovascular
- Reducción del riesgo de enfermedad cardíaca en un 30%
- Mejora del perfil lipídico
- Reducción de la presión arterial
- Disminución de la inflamación

### Prevención de Diabetes Tipo 2
- Mejora de la sensibilidad a la insulina
- Control glucémico
- Mantenimiento de peso saludable

### Función Cognitiva
- Reducción del riesgo de deterioro cognitivo
- Posible protección contra Alzheimer
- Mejora de la memoria y funciones ejecutivas

### Longevidad
Estudios epidemiológicos asocian este patrón con:
- Mayor esperanza de vida
- Reducción de mortalidad por todas las causas
- Mejor calidad de vida en la vejez

### Salud Mental
- Reducción del riesgo de depresión
- Mejora del estado de ánimo
- Efecto antiinflamatorio que beneficia al cerebro

## Componentes Estrella

### Aceite de Oliva Virgen Extra
Rico en ácidos grasos monoinsaturados y polifenoles con propiedades:
- Antiinflamatorias
- Antioxidantes
- Cardioprotectoras

### Pescado Azul
Fuente de omega-3 (EPA y DHA) esencial para:
- Salud cerebral
- Reducción de la inflamación
- Protección cardiovascular

### Frutos Secos
Aportan grasas saludables, proteínas, fibra y micronutrientes.

### Legumbres
Proteína vegetal, fibra y bajo índice glucémico.

## Implementación Práctica

### Desayuno Mediterráneo
- Pan integral con aceite de oliva y tomate
- Fruta fresca
- Puñado de frutos secos

### Comida Principal
- Ensalada variada con aceite de oliva
- Legumbres o pescado con verduras
- Fruta de temporada

### Cena
- Verduras a la plancha o al horno
- Huevo o pescado
- Yogur natural

## Más Allá de la Alimentación

La Dieta Mediterránea también enfatiza:
- **Actividad física regular**: Caminar, jardinería, actividades al aire libre
- **Socialización**: Comer en compañía, disfrutar las comidas
- **Descanso adecuado**: Sueño de calidad
- **Gestión del estrés**: Ritmo de vida más pausado

## Conclusión

La Dieta Mediterránea representa un enfoque holístico de la salud que combina alimentación de calidad, actividad física y bienestar social. Su adopción no requiere cambios radicales, sino una transición gradual hacia hábitos más saludables y sostenibles.`,
    category: "nutricion",
    author: {
      name: "Lic. Elena Fernández",
      role: "Nutricionista Clínica",
    },
    date: "2025-08-15",
    readTime: "7 min",
    image: "/placeholder.svg",
    tags: ["dieta mediterránea", "nutrición", "prevención", "estilo de vida"],
  },
];

export const getPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find((post) => post.slug === slug);
};

export const getPostsByCategory = (category: string): BlogPost[] => {
  if (category === "todos") return blogPosts;
  return blogPosts.filter((post) => post.category === category);
};
