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
      <footer 
        className="bg-[#0A2E9E] text-white font-sans border-t border-white/10 relative z-10 py-12 px-4 md:px-8 bg-cover bg-center bg-no-repeat rounded-t-[40px] md:rounded-t-[48px] overflow-hidden"
        style={{ backgroundImage: "url('/assets/images/footer_bg.png')" }}
      >
        <div className="w-full max-w-7xl mx-auto space-y-10">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            
            {/* Column 1: Logos */}
            <div className="md:col-span-3 flex flex-col items-start gap-6">
              <img 
                src="/assets/images/logo_bh_white.png" 
                alt="British House International Logo" 
                className="h-10 w-auto object-contain" 
              />
              <img 
                src="/assets/images/logo_ba_white.png" 
                alt="BA Group Beltrán A. Logo" 
                className="h-10 w-auto object-contain" 
              />
            </div>

            {/* Column 2: Nuestras Oficinas */}
            <div className="md:col-span-4 space-y-4 text-left">
              <h4 className="text-base font-bold text-white uppercase tracking-wider">
                Nuestras Oficinas
              </h4>
              <ul className="space-y-3 text-xs text-white/90 leading-relaxed font-medium">
                <li className="flex items-start gap-1.5">
                  <span className="text-[#FFC83D] mt-0.5">•</span>
                  <span>Av. Javier Prado Este N° 1420, Urb. Corpac, San Isidro</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-[#FFC83D] mt-0.5">•</span>
                  <span>Av. Grau 266, Huacho - Ref. Frente a la RENIEC</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-[#FFC83D] mt-0.5">•</span>
                  <span>Av. Bolognesi con calle 22 de Agosto, Mz G, Lote 4B, distrito de Cayma. Frente al Grifo Primax, a una cuadra de la plaza de Cayma - Arequipa</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-[#FFC83D] mt-0.5">•</span>
                  <span>Calle Zafiro Nro. 209, Residencial Zafiro, distrito Wanchaq, Cusco</span>
                </li>
              </ul>
            </div>

            {/* Column 3: Contactos */}
            <div className="md:col-span-3 space-y-4 text-left">
              <h4 className="text-base font-bold text-white uppercase tracking-wider">
                Contactos
              </h4>
              <div className="space-y-2 text-xs text-white/90 font-medium">
                <p>administracion@britishhouseinternational.pe</p>
                <p>(+51) 978 957 849 - Lima/Huacho</p>
                <p>(+51) 954 536 031 - Arequipa</p>
                <p>(+51) 976 705 738 - Cusco</p>
              </div>
              
              {/* Social Media Icons */}
              <div className="flex items-center gap-4 pt-2">
                {/* WhatsApp */}
                <a href="https://wa.me/51978957849" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#FFC83D] transition-colors">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.625 1.45 5.536.002 10.04-4.501 10.043-10.04 0-2.684-1.044-5.207-2.943-7.107C16.425 1.558 13.902.515 11.217.515 5.676.515 1.171 5.018 1.168 10.559c-.001 1.558.424 3.085 1.233 4.453l-1.02 3.722 3.82-1.002c1.32.72 2.766 1.098 4.446 1.101zM17.91 14.93c-.274-.137-1.62-.8-1.87-.892-.252-.093-.437-.137-.62.137-.183.275-.71.892-.87 1.076-.16.183-.32.206-.594.07-1.63-.8-2.73-1.38-3.82-2.32-.27-.24-.51-.49-.72-.74-.28-.32-.03-.5.12-.65.13-.13.27-.32.41-.48.06-.07.13-.15.19-.22.08-.1.13-.19.19-.29.13-.27.07-.5-.03-.71-.1-.21-.62-1.49-.85-2.04-.22-.53-.47-.46-.65-.47-.16-.01-.35-.01-.54-.01-.19 0-.5.07-.76.35-.38.41-1.46 1.42-1.46 3.47 0 2.05 1.49 4.03 1.7 4.31.21.28 2.93 4.47 7.09 6.27.99.43 1.76.69 2.37.88.99.31 1.9.27 2.62.16.8-.12 2.47-1.01 2.82-1.99.35-.98.35-1.83.25-2.01-.11-.18-.41-.27-.68-.41z"/>
                  </svg>
                </a>
                
                {/* LinkedIn */}
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#FFC83D] transition-colors">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>

                {/* YouTube */}
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#FFC83D] transition-colors">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.107C19.52 3.5 12 3.5 12 3.5s-7.52 0-9.388.556a3.003 3.003 0 0 0-2.11 2.107C0 8.028 0 12 0 12s0 3.972.502 5.837a3.003 3.003 0 0 0 2.11 2.107C4.48 20.5 12 20.5 12 20.5s7.52 0 9.388-.556a3.003 3.003 0 0 0 2.11-2.107C24 15.972 24 12 24 12s0-3.972-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>

                {/* Instagram */}
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#FFC83D] transition-colors">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
                  </svg>
                </a>

                {/* TikTok */}
                <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#FFC83D] transition-colors">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.57-3.99-1.57-.44-.39-.82-.87-1.11-1.39v7.87c.01 2.23-.74 4.54-2.32 6.13-1.8 1.83-4.5 2.53-6.97 1.94-2.73-.64-5.06-2.84-5.69-5.59-.72-3.07.69-6.49 3.39-7.96 1.19-.65 2.54-.85 3.89-.78v4.02c-1.01-.13-2.09.19-2.84.9-.84.81-1.07 2.12-.66 3.19.46 1.25 1.77 2.08 3.09 1.95 1.42-.04 2.6-1.18 2.74-2.59.02-1.01.01-2.03.02-3.04V0h-.01z"/>
                  </svg>
                </a>

                {/* Facebook */}
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#FFC83D] transition-colors">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Column 4: Navegación & Libro de Reclamaciones */}
            <div className="md:col-span-2 flex items-start gap-4 justify-between w-full md:w-auto">
              <div className="space-y-4">
                <h4 className="text-base font-bold text-white uppercase tracking-wider">
                  Navegación
                </h4>
                <ul className="space-y-2 text-xs text-white/90 font-medium">
                  <li className="hover:text-[#FFC83D] transition-colors cursor-pointer">Inicio</li>
                  <li className="hover:text-[#FFC83D] transition-colors cursor-pointer">Nosotros</li>
                  <li className="hover:text-[#FFC83D] transition-colors cursor-pointer">Cursos Online</li>
                  <li className="hover:text-[#FFC83D] transition-colors cursor-pointer">Convenios</li>
                </ul>
              </div>
              
              {/* Libro de Reclamaciones Logo */}
              <div className="pt-6">
                <a href="/libro-de-reclamaciones" className="inline-block transition-transform hover:scale-[1.03]">
                  <img 
                    src="/assets/images/libro_reclamaciones.png" 
                    alt="Libro de Reclamaciones" 
                    className="h-12 w-auto object-contain rounded" 
                  />
                </a>
              </div>
            </div>

          </div>

          {/* Bottom Bar: Privacy / Terms / ARCO */}
          <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-center gap-6 text-xs text-white/70">
            <div className="flex flex-wrap justify-center gap-6 font-semibold uppercase tracking-wider">
              <span className="hover:text-[#FFC83D] cursor-pointer transition-colors">Políticas de Privacidad</span>
              <span className="hover:text-[#FFC83D] cursor-pointer transition-colors">Términos Y Condiciones</span>
              <span className="hover:text-[#FFC83D] cursor-pointer transition-colors">Derechos ARCO</span>
            </div>
          </div>

        </div>
      </footer>
    </div>
  );
}
