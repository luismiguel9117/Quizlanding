/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Question, LevelDetails, EnglishLevelKey } from '../types';

const DEFAULT_QUESTIONS: Question[] = [
  // --- A1 LEVEL (Questions 1 - 13) ---
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
  {
    id: 4,
    category: 'Grammar',
    level: 'A1',
    text: 'What ________ your name?',
    options: ['is', 'are', 'am', 'be'],
    correctAnswer: 0, // is
    explanation: 'With the singular subject "your name" (it), we use "is" in the present simple tense.'
  },
  {
    id: 5,
    category: 'Vocabulary',
    level: 'A1',
    text: 'I usually have breakfast at 8:00 in the ________.',
    options: ['evening', 'morning', 'afternoon', 'night'],
    correctAnswer: 1, // morning
    explanation: 'Breakfast is the first meal of the day, eaten in the morning.'
  },
  {
    id: 6,
    category: 'Grammar',
    level: 'A1',
    text: 'They ________ a big house near the beach.',
    options: ['has', 'having', 'have', 'are have'],
    correctAnswer: 2, // have
    explanation: 'With the plural subject "They", we use "have" in the present simple tense.'
  },
  {
    id: 7,
    category: 'Vocabulary',
    level: 'A1',
    text: 'My father\'s brother is my ________.',
    options: ['uncle', 'aunt', 'cousin', 'brother'],
    correctAnswer: 0, // uncle
    explanation: 'Your father\'s or mother\'s brother is your uncle.'
  },
  {
    id: 8,
    category: 'Grammar',
    level: 'A1',
    text: 'I can\'t find my keys. Where are ________?',
    options: ['it', 'them', 'their', 'they'],
    correctAnswer: 3, // they
    explanation: 'We use the subject pronoun "they" to refer to a plural noun ("keys") as the subject of the clause "Where are they?"'
  },
  {
    id: 9,
    category: 'Vocabulary',
    level: 'A1',
    text: 'We need to buy some ________ like apples and bananas.',
    options: ['vegetables', 'meat', 'fruit', 'bread'],
    correctAnswer: 2, // fruit
    explanation: 'Apples and bananas are types of fruit.'
  },
  {
    id: 10,
    category: 'Grammar',
    level: 'A1',
    text: 'He ________ like milk. He prefers juice.',
    options: ['don\'t', 'doesn\'t', 'not', 'isn\'t'],
    correctAnswer: 1, // doesn\'t
    explanation: 'In the present simple, we use "doesn\'t" (does not) for third-person singular subjects (He/She/It) in negative sentences.'
  },
  {
    id: 11,
    category: 'Vocabulary',
    level: 'A1',
    text: 'It is very ________ today, so don\'t forget your umbrella.',
    options: ['sunny', 'windy', 'rainy', 'hot'],
    correctAnswer: 2, // rainy
    explanation: 'We use an umbrella to protect ourselves from the rain, so the weather is rainy.'
  },
  {
    id: 12,
    category: 'Grammar',
    level: 'A1',
    text: 'Listen! The baby ________.',
    options: ['cries', 'is crying', 'cry', 'crying'],
    correctAnswer: 1, // is crying
    explanation: 'The word "Listen!" indicates that the action is happening right now, requiring the present continuous tense ("is crying").'
  },
  {
    id: 13,
    category: 'Grammar',
    level: 'A1',
    text: '________ you speak English?',
    options: ['Do', 'Does', 'Are', 'Is'],
    correctAnswer: 0, // Do
    explanation: 'With the subject pronoun "you", we use the auxiliary verb "Do" to form questions in the present simple.'
  },
  // --- A2 LEVEL (Questions 14 - 16) ---
  {
    id: 14,
    category: 'Grammar',
    level: 'A2',
    text: 'I\'ve decided that I am ________ a new laptop next week.',
    options: ['buy', 'going to buy', 'bought', 'buys'],
    correctAnswer: 1, // going to buy
    explanation: 'We use "be going to + verb" to express a plan or intention decided before speaking.'
  },
  {
    id: 15,
    category: 'Vocabulary',
    level: 'A2',
    text: 'Could you please ________ me some money? I forgot my wallet at home.',
    options: ['borrow', 'lend', 'spend', 'take'],
    correctAnswer: 1, // lend
    explanation: '"Lend" means to give something to someone temporarily. "Borrow" is to take something from someone temporarily.'
  },
  {
    id: 16,
    category: 'Grammar',
    level: 'A2',
    text: 'We went to the park yesterday, ________ it was raining quite heavily.',
    options: ['because', 'although', 'so', 'consequently'],
    correctAnswer: 1, // although
    explanation: '"Although" is used to show a contrast between two clauses (going to the park vs. heavy rain).'
  },
  // --- B1 LEVEL (Questions 17 - 20) ---
  {
    id: 17,
    category: 'Grammar',
    level: 'B1',
    text: 'If I ________ you, I would study more for the official language certification.',
    options: ['was', 'am', 'were', 'would be'],
    correctAnswer: 2, // were
    explanation: 'In the Second Conditional (giving advice with "If I..."), we use "were" instead of "was" for all subjects in standard English.'
  },
  {
    id: 18,
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
    id: 19,
    category: 'Vocabulary',
    level: 'B1',
    text: 'The company\'s profits have grown ________ over the past fiscal year, surprising the executives.',
    options: ['significantly', 'rarely', 'strictly', 'superficially'],
    correctAnswer: 0, // significantly
    explanation: '"Significantly" means in a sufficiently large or important way, which explains the executives being surprised by the growth.'
  },
  {
    id: 20,
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
  // --- B2 LEVEL (Questions 21 - 24) ---
  {
    id: 21,
    category: 'Grammar',
    level: 'B2',
    text: 'By the time we finally arrived at the cinema, the movie ________.',
    options: ['already started', 'has already started', 'had already started', 'would start'],
    correctAnswer: 2, // had already started
    explanation: 'We use the Past Perfect ("had started") to talk about an action that happened before another action in the past ("arrived").'
  },
  {
    id: 22,
    category: 'Vocabulary',
    level: 'B2',
    text: 'Your current proposals are simply not ________ with our long-term structural guidelines.',
    options: ['compatible', 'comparable', 'identical', 'combined'],
    correctAnswer: 0, // compatible
    explanation: '"Compatible" means able to exist, occur, or work together without conflict.'
  },
  {
    id: 23,
    category: 'Grammar',
    level: 'B2',
    text: 'She has been living here for many years, so she is used to ________ in the left lane.',
    options: ['drive', 'driving', 'be driving', 'having driven'],
    correctAnswer: 1, // driving
    explanation: 'The phrase "be used to" (accustomed to) is followed by a gerund ("-ing" form) or a noun.'
  },
  {
    id: 24,
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
  // --- C1 LEVEL (Questions 25 - 27) ---
  {
    id: 25,
    category: 'Grammar',
    level: 'C1',
    text: 'Hardly ________ entered the lecture hall when the professor began his presentation.',
    options: ['I had', 'had I', 'did I', 'have I'],
    correctAnswer: 1, // had I
    explanation: 'When "hardly", "scarcely", or "no sooner" starts a sentence, it triggers inversion (verb before subject), needing past perfect.'
  },
  {
    id: 26,
    category: 'Vocabulary',
    level: 'C1',
    text: 'The description of the project was so ________ that none of the engineers knew where to start.',
    options: ['articulate', 'concise', 'ambiguous', 'lucid'],
    correctAnswer: 2, // ambiguous
    explanation: '"Ambiguous" means open to more than one interpretation or having a double meaning, leading to confusion.'
  },
  {
    id: 27,
    category: 'Grammar',
    level: 'C1',
    text: 'We would far rather you ________ tell the board of directors about this transaction yet.',
    options: ['don\'t', 'didn\'t', 'won\'t', 'not to'],
    correctAnswer: 1, // didn\'t
    explanation: 'We use "would rather + subject + past simple" to express a preference about actions in the present or future.'
  }
];

const getQuestionsFromStorage = (): Question[] => {
  if (typeof window === 'undefined') return DEFAULT_QUESTIONS;

  // Clear outdated storage items if version mismatch (C2 removal and thresholds shift)
  const SCHEMA_VERSION = 'v2_c1_max_v2';
  const currentVersion = localStorage.getItem('bh_quiz_version');
  if (currentVersion !== SCHEMA_VERSION) {
    localStorage.removeItem('bh_quiz_questions');
    localStorage.removeItem('bh_quiz_weights');
    localStorage.removeItem('bh_quiz_thresholds');
    localStorage.setItem('bh_quiz_version', SCHEMA_VERSION);
  }

  const stored = localStorage.getItem('bh_quiz_questions');
  if (stored) {
    try {
      const parsed = JSON.parse(stored);
      if (Array.isArray(parsed)) {
        // Strict validation to filter out any corrupted or incomplete items
        const valid = parsed.filter((q: any) => 
          q &&
          typeof q.id === 'number' &&
          typeof q.text === 'string' &&
          Array.isArray(q.options) &&
          q.options.length === 4 &&
          q.options.every((o: any) => typeof o === 'string') &&
          typeof q.correctAnswer === 'number' &&
          typeof q.explanation === 'string' &&
          ['Grammar', 'Vocabulary', 'Comprehension'].includes(q.category) &&
          ['A1', 'A2', 'B1', 'B2', 'C1'].includes(q.level)
        );
        if (valid.length > 0) {
          return valid;
        }
      }
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

// Helper to get level weights from localStorage:
export const getLevelWeights = (): Record<EnglishLevelKey, number> => {
  if (typeof window === 'undefined') return { A1: 1, A2: 2, B1: 3, B2: 4, C1: 5 };
  const stored = localStorage.getItem('bh_quiz_weights');
  if (stored) {
    try {
      const parsed = JSON.parse(stored);
      if (parsed && typeof parsed === 'object') {
        const validated: any = {};
        let hasKeys = false;
        (['A1', 'A2', 'B1', 'B2', 'C1'] as EnglishLevelKey[]).forEach(k => {
          if (typeof parsed[k] === 'number') {
            validated[k] = parsed[k];
            hasKeys = true;
          }
        });
        if (hasKeys) return validated;
      }
    } catch (e) {
      console.error("Failed to parse weights", e);
    }
  }
  return { A1: 1, A2: 2, B1: 3, B2: 4, C1: 5 };
};

// Helper to save weights:
export const saveLevelWeights = (weights: Record<EnglishLevelKey, number>) => {
  localStorage.setItem('bh_quiz_weights', JSON.stringify(weights));
};

export interface LevelThresholds {
  A2: number;
  B1: number;
  B2: number;
  C1: number;
}

// Helper to get level percentage thresholds from localStorage:
export const getLevelThresholds = (): LevelThresholds => {
  if (typeof window === 'undefined') return { A2: 38, B1: 54, B2: 60, C1: 86 };
  const stored = localStorage.getItem('bh_quiz_thresholds');
  if (stored) {
    try {
      const parsed = JSON.parse(stored);
      if (parsed && typeof parsed === 'object') {
        return {
          A2: typeof parsed.A2 === 'number' ? parsed.A2 : 38,
          B1: typeof parsed.B1 === 'number' ? parsed.B1 : 54,
          B2: typeof parsed.B2 === 'number' ? parsed.B2 : 60,
          C1: typeof parsed.C1 === 'number' ? parsed.C1 : 86,
        };
      }
    } catch (e) {
      console.error("Failed to parse thresholds", e);
    }
  }
  return { A2: 38, B1: 54, B2: 60, C1: 86 };
};

// Helper to save thresholds:
export const saveLevelThresholds = (thresholds: LevelThresholds) => {
  localStorage.setItem('bh_quiz_thresholds', JSON.stringify(thresholds));
};

// Helper to reset to default:
export const resetQuestions = () => {
  saveQuestions(DEFAULT_QUESTIONS);
  localStorage.removeItem('bh_quiz_weights');
  localStorage.removeItem('bh_quiz_thresholds');
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
      'Producir textos claros, bien estructurados and detallados sobre temas complejos, controlando la organización y cohesión del discurso'
    ],
    recommendedProgram: {
      name: 'Preparación de Cambridge Avanzado (Nivel C1)',
      tagline: 'Logra un nivel lingüístico corporativo de élite y prepárate para certificaciones internacionales.',
      duration: '7 Meses (140 horas académicas)',
      schedule: 'Lun y Mié 19:00 - 21:30 o Sáb Intensivo 08:30 - 13:30',
      focusAreas: ['Análisis académico avanzado', 'Estrategias de exámenes oficiales (CAE)', 'Matices léxicos', 'Oratoria persuasiva y debates formales']
    }
  }
};
