/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Question, LevelDetails, EnglishLevelKey } from '../types';

const DEFAULT_QUESTIONS: Question[] = [
  // --- A1 LEVEL (Questions 1 - 3) ---
  {
    id: 1,
    category: 'Grammar',
    level: 'A1',
    text: 'Where ________ you from?',
    options: ['is', 'are', 'am', 'be'],
    correctAnswer: 1, // are
    explanation: 'With the subject "you", we use the verb form "are" in the present simple tense.'
  },
  {
    id: 2,
    category: 'Vocabulary',
    level: 'A1',
    text: 'The lesson starts in ten minutes. Please don\'t be ________.',
    options: ['quick', 'happy', 'early', 'late'],
    correctAnswer: 3, // late
    explanation: 'If a lesson starts soon, you should arrive on time. Being "late" means arriving after the scheduled time.'
  },
  {
    id: 3,
    category: 'Grammar',
    level: 'A1',
    text: 'She ________ to the gym every Tuesday evening.',
    options: ['goes', 'go', 'going', 'went'],
    correctAnswer: 0, // goes
    explanation: 'Using the third person singular "She" in the present simple (expressing a routine: "every Tuesday") requires adding "-es" to "go", resulting in "goes".'
  },
  // --- A2 LEVEL (Questions 4 - 6) ---
  {
    id: 4,
    category: 'Grammar',
    level: 'A2',
    text: 'I\'ve decided that I am ________ a new laptop next week.',
    options: ['buy', 'going to buy', 'bought', 'buys'],
    correctAnswer: 1, // going to buy
    explanation: 'We use "be going to + verb" to express a plan or intention decided before speaking.'
  },
  {
    id: 5,
    category: 'Vocabulary',
    level: 'A2',
    text: 'Could you please ________ me some money? I forgot my wallet at home.',
    options: ['borrow', 'lend', 'spend', 'take'],
    correctAnswer: 1, // lend
    explanation: '"Lend" means to give something to someone temporarily. "Borrow" is to take something from someone temporarily.'
  },
  {
    id: 6,
    category: 'Grammar',
    level: 'A2',
    text: 'We went to the park yesterday, ________ it was raining quite heavily.',
    options: ['because', 'although', 'so', 'consequently'],
    correctAnswer: 1, // although
    explanation: '"Although" is used to show a contrast between two clauses (going to the park vs. heavy rain).'
  },
  // --- B1 LEVEL (Questions 7 - 10) ---
  {
    id: 7,
    category: 'Grammar',
    level: 'B1',
    text: 'If I ________ you, I would study more for the official language certification.',
    options: ['was', 'am', 'were', 'would be'],
    correctAnswer: 2, // were
    explanation: 'In the Second Conditional (giving advice with "If I..."), we use "were" instead of "was" for all subjects in standard English.'
  },
  {
    id: 8,
    category: 'Grammar',
    level: 'B1',
    text: 'Choose the grammatically correct sentence:',
    options: [
      'I have went to London.',
      'I have been to London.',
      'I have go to London.',
      'I am been to London.'
    ],
    correctAnswer: 1, // I have been to London
    explanation: 'The present perfect is formed with "have + past participle". "Been" is the correct past participle of "go/be" used here to describe a life experience.'
  },
  {
    id: 9,
    category: 'Vocabulary',
    level: 'B1',
    text: 'The company\'s profits have grown ________ over the past fiscal year, surprising the executives.',
    options: ['significantly', 'rarely', 'strictly', 'superficially'],
    correctAnswer: 0, // significantly
    explanation: '"Significantly" means in a sufficiently large or important way, which explains the executives being surprised by the growth.'
  },
  {
    id: 10,
    category: 'Comprehension',
    level: 'B1',
    text: 'What is the closest meaning of: "I have standard working hours, so I get off at 6:00 PM"?',
    options: [
      'I start my job at 6:00 PM.',
      'I am fired from my job at 6:00 PM.',
      'I finish my work shift at 6:00 PM.',
      'I receive my salary at 6:00 PM.'
    ],
    correctAnswer: 2, // I finish my work shift at 6:00 PM
    explanation: 'The phrasal verb "get off (work)" colloquially means to finish one\'s work shift or workday.'
  },
  // --- B2 LEVEL (Questions 11 - 14) ---
  {
    id: 11,
    category: 'Grammar',
    level: 'B2',
    text: 'By the time we finally arrived at the cinema, the movie ________.',
    options: ['already started', 'has already started', 'had already started', 'would start'],
    correctAnswer: 2, // had already started
    explanation: 'We use the Past Perfect ("had started") to talk about an action that happened before another action in the past ("arrived").'
  },
  {
    id: 12,
    category: 'Vocabulary',
    level: 'B2',
    text: 'Your current proposals are simply not ________ with our long-term structural guidelines.',
    options: ['compatible', 'comparable', 'identical', 'combined'],
    correctAnswer: 0, // compatible
    explanation: '"Compatible" means able to exist, occur, or work together without conflict.'
  },
  {
    id: 13,
    category: 'Grammar',
    level: 'B2',
    text: 'She has been living here for many years, so she is used to ________ in the left lane.',
    options: ['drive', 'driving', 'be driving', 'having driven'],
    correctAnswer: 1, // driving
    explanation: 'The phrase "be used to" (accustomed to) is followed by a gerund ("-ing" form) or a noun.'
  },
  {
    id: 14,
    category: 'Comprehension',
    level: 'B2',
    text: 'Select the primary meaning of the idiom: "He decided to bite the bullet and approach his boss."',
    options: [
      'He made a violent gesture representing anger.',
      'He forced himself to do something difficult but necessary.',
      'He bought bullets as a hobby or collection.',
      'He experienced sudden dental distress.'
    ],
    correctAnswer: 1, // He forced himself to do something difficult but necessary
    explanation: '"To bite the bullet" means to face a difficult situation with courage and get it over with.'
  },
  // --- C1 LEVEL (Questions 15 - 17) ---
  {
    id: 15,
    category: 'Grammar',
    level: 'C1',
    text: 'Hardly ________ entered the lecture hall when the professor began his presentation.',
    options: ['I had', 'had I', 'did I', 'have I'],
    correctAnswer: 1, // had I
    explanation: 'When "hardly", "scarcely", or "no sooner" starts a sentence, it triggers inversion (verb before subject), needing past perfect.'
  },
  {
    id: 16,
    category: 'Vocabulary',
    level: 'C1',
    text: 'The description of the project was so ________ that none of the engineers knew where to start.',
    options: ['articulate', 'concise', 'ambiguous', 'lucid'],
    correctAnswer: 2, // ambiguous
    explanation: '"Ambiguous" means open to more than one interpretation or having a double meaning, leading to confusion.'
  },
  {
    id: 17,
    category: 'Grammar',
    level: 'C1',
    text: 'We would far rather you ________ tell the board of directors about this transaction yet.',
    options: ['don\'t', 'didn\'t', 'won\'t', 'not to'],
    correctAnswer: 1, // didn't
    explanation: 'We use "would rather + subject + past simple" to express a preference about actions in the present or future.'
  },
  // --- C2 LEVEL (Questions 18 - 20) ---
  {
    id: 18,
    category: 'Grammar',
    level: 'C2',
    text: 'Should you ________ any further assistance, please do not hesitate to contact our admissions department.',
    options: ['require', 'required', 'of requiring', 'be requiring'],
    correctAnswer: 0, // require
    explanation: 'This is a formal conditional inversion representing "If you should require...". The bare infinitive "require" must follow auxiliary "should".'
  },
  {
    id: 19,
    category: 'Vocabulary',
    level: 'C2',
    text: 'The archaeological expedition was ________ with administrative delays and inclement weather from start to finish.',
    options: ['elided', 'beset', 'shunned', 'dissolved'],
    correctAnswer: 1, // beset
    explanation: '"Beset" means troubled or persistently threatened by problems, obstacles, or dangers.'
  },
  {
    id: 20,
    category: 'Grammar',
    level: 'C2',
    text: 'I didn\'t hear my alarm clock go off this morning; otherwise, I ________ on time for the meeting.',
    options: [
      'would have been',
      'had been',
      'should be',
      'must have been'
    ],
    correctAnswer: 0, // would have been
    explanation: 'This refers to an unfulfilled hypothetical past condition (Third Conditional) where "otherwise" replaces an "if" clause (e.g., "if I had heard it").'
  }
];

// Helper to get questions from localStorage:
const getQuestionsFromStorage = (): Question[] => {
  if (typeof window === 'undefined') return DEFAULT_QUESTIONS;
  const stored = localStorage.getItem('bh_quiz_questions');
  if (stored) {
    try {
      return JSON.parse(stored);
    } catch (e) {
      console.error("Failed to parse stored questions, falling back to default", e);
    }
  }
  return DEFAULT_QUESTIONS;
};

// Exported mutable array
export let QUESTIONS: Question[] = getQuestionsFromStorage();

// Helper to save questions and sync the exported array in-place:
export const saveQuestions = (newQuestions: Question[]) => {
  localStorage.setItem('bh_quiz_questions', JSON.stringify(newQuestions));
  // Update QUESTIONS array in place so imports in other files get the updates:
  QUESTIONS.length = 0;
  QUESTIONS.push(...newQuestions);
};

// Helper to reset to default:
export const resetQuestions = () => {
  saveQuestions(DEFAULT_QUESTIONS);
};

export const LEVEL_DETAILS: Record<EnglishLevelKey, LevelDetails> = {
  A1: {
    key: 'A1',
    name: 'Principiante (Acceso A1)',
    description: 'Puedes comprender y utilizar expresiones cotidianas familiares y frases básicas destinadas a satisfacer necesidades de tipo concreto de la vida diaria.',
    milestones: [
      'Presentarte a ti mismo y a otros con total comodidad',
      'Hacer y responder preguntas sobre detalles personales como dónde vives, personas que conoces y cosas que tienes',
      'Interactuar de forma sencilla si la otra persona habla despacio, con claridad y está dispuesta a cooperar'
    ],
    recommendedProgram: {
      name: 'Inglés Esencial (Nivel A1)',
      tagline: 'Construye una base sólida de vocabulario y gana confianza al hablar rápidamente.',
      duration: '4 Meses (60 horas académicas)',
      schedule: 'Lun y Mié 18:30 - 20:15 o Sáb Intensivo 09:00 - 13:00',
      focusAreas: ['Pronunciación básica', 'Vocabulario esencial', 'Estructuras de oraciones sencillas', 'Prácticas de oratoria de supervivencia']
    }
  },
  A2: {
    key: 'A2',
    name: 'Elemental (Plataforma A2)',
    description: 'Puedes comprender frases y expresiones de uso frecuente relacionadas con áreas de relevancia inmediata (por ejemplo, información personal y familiar básica, compras, geografía local, empleo).',
    milestones: [
      'Comunicarte en tareas sencillas y rutinarias que requieren un intercambio directo de información sobre temas conocidos',
      'Describir en términos sencillos aspectos de tu pasado, entorno inmediato y asuntos de primera necesidad',
      'Comprender textos cortos y sencillos y escribir notas personales básicas'
    ],
    recommendedProgram: {
      name: 'Inglés Elemental Activo (Nivel A2)',
      tagline: 'Expande tu vocabulario práctico y participa en conversaciones cotidianas estructuradas.',
      duration: '5 Meses (80 horas académicas)',
      schedule: 'Mar y Jue 19:30 - 21:15 o Sáb Intensivo 09:00 - 13:00',
      focusAreas: ['Fluidez al hablar', 'Estructura gramatical en pasado y futuro', 'Inglés práctico de viaje y social', 'Ejercicios de juego de rol']
    }
  },
  B1: {
    key: 'B1',
    name: 'Intermedio (Umbral B1)',
    description: 'Puedes comprender los puntos principales de textos claros en lengua estándar sobre asuntos familiares que se encuentran regularmente en el trabajo, el centro educativo, el ocio, etc.',
    milestones: [
      'Desenvolverte en la mayoría de las situaciones que pueden surgir durante un viaje por zonas donde se utiliza el idioma',
      'Producir textos sencillos y conectados sobre temas que te son familiares o de interés personal',
      'Describir experiencias, acontecimientos, deseos y aspiraciones, así como justificar brevemente tus opiniones y planes'
    ],
    recommendedProgram: {
      name: 'Programa de Inglés Regular (Nivel B1)',
      tagline: 'Desbloquea tu independencia diaria y comienza a expresarte con total naturalidad.',
      duration: '6 Meses (100 horas académicas)',
      schedule: 'Lun, Mié y Vie 19:30 - 21:00 o Sáb Intensivo 09:00 - 13:30',
      focusAreas: ['Confianza al Hablar', 'Comprensión Auditiva', 'Desarrollo Gramatical', 'Comunicación de la Vida Diaria']
    }
  },
  B2: {
    key: 'B2',
    name: 'Intermedio Alto (Avanzado B2)',
    description: 'Puedes entender las ideas principales de textos complejos sobre temas tanto concretos como abstractos, incluyendo debates técnicos y especializados en tu campo laboral.',
    milestones: [
      'Relacionarte con hablantes nativos con un grado suficiente de fluidez y espontaneidad que facilite la comunicación sin tensiones para ninguna de las partes',
      'Producir textos claros y detallados sobre una amplia gama de temas y explicar un punto de vista sobre un asunto general de actualidad',
      'Seguir conferencias y líneas de argumentación complejas en conversaciones rápidas'
    ],
    recommendedProgram: {
      name: 'Fluidez Profesional (Nivel B2)',
      tagline: 'Domina la comunicación laboral y defiende tus ideas con estructuras conceptuales avanzadas.',
      duration: '6 Meses (120 horas académicas)',
      schedule: 'Mar y Jue 19:00 - 21:30 o Sáb Intensivo 08:30 - 13:30',
      focusAreas: ['Fluidez idiomática', 'Debates de negocios', 'Estructuras gramaticales complejas', 'Talleres de redacción profesional']
    }
  },
  C1: {
    key: 'C1',
    name: 'Avanzado (Dominio Eficaz C1)',
    description: 'Puedes comprender una amplia variedad de textos más exigentes y extensos, así como reconocer significados implícitos y matizados en la comunicación.',
    milestones: [
      'Expresarte con fluidez y espontaneidad sin un esfuerzo visible para encontrar las palabras adecuadas',
      'Utilizar el idioma de manera flexible y eficaz con fines sociales, académicos y profesionales de alta exigencia',
      'Producir textos claros, bien estructurados y detallados sobre temas complejos, controlando la organización y cohesión del discurso'
    ],
    recommendedProgram: {
      name: 'Preparación de Cambridge Avanzado (Nivel C1)',
      tagline: 'Logra un nivel lingüístico corporativo de élite y prepárate para certificaciones internacionales.',
      duration: '7 Meses (140 horas académicas)',
      schedule: 'Lun y Mié 19:00 - 21:30 o Sáb Intensivo 08:30 - 13:30',
      focusAreas: ['Análisis académico avanzado', 'Estrategias de exámenes oficiales (CAE)', 'Matices léxicos', 'Oratoria persuasiva y debates formales']
    }
  },
  C2: {
    key: 'C2',
    name: 'Maestría Profesional / Nativo (C2)',
    description: 'Puedes comprender con facilidad prácticamente todo lo que oyes o lees, dominando los aspectos más complejos del idioma de forma natural.',
    milestones: [
      'Reconstruir la información de diferentes fuentes habladas o escritas, organizando los argumentos en una presentación coherente',
      'Expresarte espontáneamente, con gran fluidez y precisión, distinguiendo variaciones de significado muy sutiles incluso en situaciones complejas',
      'Dominar con soltura y naturalidad modismos, modismos coloquiales y vocabularios especializados'
    ],
    recommendedProgram: {
      name: 'Maestría Bilingüe Élite (Nivel C2)',
      tagline: 'Perfecciona tu dominio del inglés a un estado bilingüe natural con la máxima sofisticación.',
      duration: '6 Meses (120 horas académicas)',
      schedule: 'Horario VIP personalizado / Intensivo los Sábados',
      focusAreas: ['Estilística de élite', 'Redacción creativa y oratoria', 'Dominio idiomático absoluto', 'Modelado conceptual bilingüe']
    }
  }
};
