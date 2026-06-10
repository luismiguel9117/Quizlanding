/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useCallback } from 'react';
import { Shield, Mail, Globe, HelpCircle, Phone, Award, Star } from 'lucide-react';
import HeroLanding from './components/HeroLanding';
import AssessmentQuiz from './components/AssessmentQuiz';
import ReportResult from './components/ReportResult';

type ScreenState = 'landing' | 'quiz' | 'result';

interface QuizResponse {
  questionId: number;
  selectedOption: number;
  isCorrect: boolean;
}

export default function App() {
  const [screen, setScreen] = useState<ScreenState>('landing');
  const [responses, setResponses] = useState<QuizResponse[]>([]);

  // Action to launch a fresh exam
  const handleStartAssessment = useCallback(() => {
    setResponses([]);
    setScreen('quiz');
  }, []);

  // Action to simulate sample results immediately (demonstrating standard B1 Intermediate score patterns)
  const handleSeeSampleResults = useCallback(() => {
    const sampleResponses: QuizResponse[] = [
      { questionId: 1, selectedOption: 1, isCorrect: true },  // are (correct, index 1)
      { questionId: 2, selectedOption: 3, isCorrect: true },  // late (correct, index 3)
      { questionId: 3, selectedOption: 0, isCorrect: true },  // goes (correct, index 0)
      { questionId: 4, selectedOption: 1, isCorrect: true },  // going to buy (correct, index 1)
      { questionId: 5, selectedOption: 1, isCorrect: true },  // lend (correct, index 1)
      { questionId: 6, selectedOption: 1, isCorrect: true },  // although (correct, index 1)
      { questionId: 7, selectedOption: 2, isCorrect: true },  // were (correct, index 2)
      { questionId: 8, selectedOption: 1, isCorrect: true },  // I have been... (correct, index 1)
      { questionId: 9, selectedOption: 0, isCorrect: true },  // significantly (correct, index 0)
      { questionId: 10, selectedOption: 2, isCorrect: true }, // finish work shift (correct, index 2)
      { questionId: 11, selectedOption: 0, isCorrect: false }, // already started (incorrect)
      { questionId: 12, selectedOption: 1, isCorrect: false }, // comparable (incorrect)
      { questionId: 13, selectedOption: 1, isCorrect: true },  // driving (correct)
      { questionId: 14, selectedOption: 1, isCorrect: true },  // bite the bullet (correct)
      { questionId: 15, selectedOption: 0, isCorrect: false }, // I had (incorrect)
      { questionId: 16, selectedOption: 2, isCorrect: true },  // ambiguous (correct)
      { questionId: 17, selectedOption: 0, isCorrect: false }, // don't (incorrect)
      { questionId: 18, selectedOption: 0, isCorrect: true },  // require (correct)
      { questionId: 19, selectedOption: 0, isCorrect: false }, // elided (incorrect)
      { questionId: 20, selectedOption: 0, isCorrect: true },  // would have been (correct)
    ];

    setResponses(sampleResponses);
    setScreen('result');
  }, []);

  const handleQuizComplete = useCallback((finalResponses: QuizResponse[]) => {
    setResponses(finalResponses);
    setScreen('result');
  }, []);

  const handleRestart = useCallback(() => {
    setResponses([]);
    setScreen('landing');
  }, []);

  return (
    <div className="min-h-screen bg-gaming-dark text-white flex flex-col font-sans selection:bg-[#FFC83D] selection:text-[#020925]">
      
      {/* BRAND GLASS HEADER BAR */}
      <header className="sticky top-0 z-40 bg-[#020925]/85 backdrop-blur-md border-b border-white/5 px-4 md:px-8 py-3.5">
        <div className="w-full max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Logo Brand container */}
          <div 
            onClick={handleRestart}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <img 
              src="/assets/images/logo_bh.png" 
              alt="British House Logo" 
              className="h-10 md:h-12 w-auto object-contain transition-transform duration-300 hover:scale-[1.03]"
            />
          </div>

          {/* Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold text-slate-200">
            <span className="hover:text-[#FFC83D] transition-colors cursor-pointer">Programas</span>
            <span className="hover:text-[#FFC83D] transition-colors cursor-pointer">Para empresas</span>
            <span className="hover:text-[#FFC83D] transition-colors cursor-pointer">Sobre nosotros</span>
            <span className="hover:text-[#FFC83D] transition-colors cursor-pointer">Recursos</span>
          </nav>

          {/* Contact Button with WhatsApp Icon */}
          <div className="flex items-center gap-4">
            <a 
              href="https://wa.me/51999999999" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs font-bold text-white border border-white/20 px-5 py-2.5 rounded-full hover:bg-white/10 hover:border-white/40 transition-all duration-300"
            >
              <span>Contáctanos</span>
              <svg className="w-4 h-4 text-green-400 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.625 1.45 5.536.002 10.04-4.501 10.043-10.04 0-2.684-1.044-5.207-2.943-7.107C16.425 1.558 13.902.515 11.217.515 5.676.515 1.171 5.018 1.168 10.559c-.001 1.558.424 3.085 1.233 4.453l-1.02 3.722 3.82-1.002c1.32.72 2.766 1.098 4.446 1.101zM17.91 14.93c-.274-.137-1.62-.8-1.87-.892-.252-.093-.437-.137-.62.137-.183.275-.71.892-.87 1.076-.16.183-.32.206-.594.07-1.63-.8-2.73-1.38-3.82-2.32-.27-.24-.51-.49-.72-.74-.28-.32-.03-.5.12-.65.13-.13.27-.32.41-.48.06-.07.13-.15.19-.22.08-.1.13-.19.19-.29.13-.27.07-.5-.03-.71-.1-.21-.62-1.49-.85-2.04-.22-.53-.47-.46-.65-.47-.16-.01-.35-.01-.54-.01-.19 0-.5.07-.76.35-.38.41-1.46 1.42-1.46 3.47 0 2.05 1.49 4.03 1.7 4.31.21.28 2.93 4.47 7.09 6.27.99.43 1.76.69 2.37.88.99.31 1.9.27 2.62.16.8-.12 2.47-1.01 2.82-1.99.35-.98.35-1.83.25-2.01-.11-.18-.41-.27-.68-.41z"/>
              </svg>
            </a>
          </div>

        </div>
      </header>

      {/* CORE SCREEN SWITCHBOARD */}
      <main className="flex-grow">
        {screen === 'landing' && (
          <HeroLanding
            onStartAssessment={handleStartAssessment}
            onSeeSampleResults={handleSeeSampleResults}
          />
        )}

        {screen === 'quiz' && (
          <AssessmentQuiz
            onComplete={handleQuizComplete}
            onExit={handleRestart}
          />
        )}

        {screen === 'result' && (
          <ReportResult
            responses={responses}
            onRestart={handleRestart}
          />
        )}
      </main>

      {/* FOOTER */}
      <footer className="bg-[#020925] text-slate-400 font-sans border-t border-white/5 relative z-10">
        <div className="w-full max-w-7xl mx-auto px-6 md:px-8 py-10 md:py-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            
            {/* Left Section */}
            <div className="md:col-span-5 space-y-4 text-left">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 bg-[#0A2E9E] rounded-lg flex items-center justify-center text-white border border-white/10">
                  <Shield className="w-4.5 h-4.5 text-white" />
                </div>
                <span className="font-display font-black text-base text-white tracking-wide uppercase">
                  Admisiones British House
                </span>
              </div>
              <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
                British House es una institución líder y de primer nivel especializada en la enseñanza del idioma inglés. Esta evaluación de 5 minutos permite a los usuarios descubrir su nivel estimado mediante parámetros internacionales del Marco Común Europeo (MCER).
              </p>
              <div className="flex items-center gap-3 text-slate-500 text-[11px] font-mono">
                <span>© {new Date().getFullYear()} British House S.L.</span>
                <span>•</span>
                <span className="hover:text-[#FFC83D] cursor-pointer">Política de Privacidad</span>
              </div>
            </div>

            {/* Middle Section */}
            <div className="md:col-span-4 space-y-3 text-left">
              <h4 className="text-xs uppercase font-mono tracking-widest text-[#FFC83D] font-black">
                Calibración MCER
              </h4>
              <p className="text-xs leading-relaxed text-slate-400">
                Este diagnóstico evalúa tu rendimiento en comparación con el Marco Común Europeo de Referencia para las Lenguas (MCER), ideal para:
              </p>
              <div className="flex flex-wrap gap-2 text-[9px] font-black font-mono tracking-widest uppercase">
                <span className="bg-white/5 border border-white/10 text-white px-2.5 py-1 rounded">Prep. Cambridge</span>
                <span className="bg-white/5 border border-white/10 text-white px-2.5 py-1 rounded">Estándar IELTS</span>
                <span className="bg-white/5 border border-white/10 text-white px-2.5 py-1 rounded">Equivalencia TOEFL</span>
              </div>
            </div>

            {/* Right Section */}
            <div className="md:col-span-3 space-y-3 text-left">
              <h4 className="text-xs uppercase font-mono tracking-widest text-[#FFC83D] font-black">
                Contacto de Admisiones
              </h4>
              <p className="text-xs leading-relaxed text-slate-400">
                ¿Tienes consultas sobre los resultados o nuestros programas? Contáctate con un asesor educativo calificado.
              </p>
              <div className="space-y-1 text-xs font-semibold">
                <a href="mailto:admisiones@britishhouse.edu" className="flex items-center gap-1.5 text-[#FFC83D] hover:underline">
                  <Mail className="w-3.5 h-3.5" />
                  admisiones@britishhouse.edu
                </a>
                <div className="text-slate-400 font-medium">
                  Horario: Lun - Vie (9:00 AM - 8:00 PM)
                </div>
              </div>
            </div>

          </div>
        </div>
      </footer>
    </div>
  );
}
