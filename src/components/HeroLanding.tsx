import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Zap, ShieldAlert, Star, Globe2 } from 'lucide-react';
import MascotLion from './MascotLion';

interface HeroLandingProps {
  onStartAssessment: () => void;
  onSeeSampleResults: () => void;
}

export default function HeroLanding({
  onStartAssessment,
  onSeeSampleResults,
}: HeroLandingProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 15 },
    },
  };

  return (
    <div className="relative min-h-[calc(100vh-80px)] flex items-center justify-center py-10 px-4 md:px-8 overflow-hidden bg-[#020925] bg-union-jack-grid">
      
      {/* Immersive background light leaks and glows */}
      <div className="absolute top-[10%] left-[20%] w-[50vw] h-[50vw] rounded-full bg-[#1736D1]/20 blur-[130px] pointer-events-none -z-10 animate-pulse-glow" />
      <div className="absolute bottom-[10%] right-[10%] w-[40vw] h-[40vw] rounded-full bg-[#4A2DCC]/15 blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-0 right-0 w-[30vw] h-[30vw] rounded-full bg-[#0A2E9E]/25 blur-[100px] pointer-events-none -z-10" />

      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        
        {/* LEFT COLUMN - CONTENT */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 flex flex-col justify-center text-left"
        >
          {/* Main Headline (Matching image spacing and styling) */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-5.5xl xl:text-6xl font-sans font-black text-white tracking-tight leading-[1.08] mb-6 uppercase"
          >
            Descubre <br />
            tu nivel de inglés <br />
            en solo <br />
            <span className="relative inline-block mt-2">
              {/* Brush / Highlight Background */}
              <span className="absolute inset-0 bg-[#00d2ff] rounded-lg transform -skew-x-3 shadow-[0_0_20px_rgba(0,210,255,0.4)]" />
              <span className="relative z-10 text-white px-5 py-1 text-4xl md:text-5xl xl:text-5.5xl font-black block">
                5 minutos
              </span>
            </span>
          </motion.h1>

          {/* Subheadline (Matching text) */}
          <motion.p
            variants={itemVariants}
            className="text-slate-200 text-sm md:text-base font-sans max-w-lg leading-relaxed mb-10 font-medium"
          >
            Responde una breve evaluación y recibe una recomendación personalizada basada en estándares internacionales.
          </motion.p>

          {/* Row of 4 key benefits below the text with simple line icons */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-10 max-w-2xl border-t border-white/5 pt-8"
          >
            {[
              { text: 'Resultados inmediatos', icon: <Zap className="w-5 h-5 text-[#00d2ff]" /> },
              { text: 'Evaluación gratuita', icon: <ShieldAlert className="w-5 h-5 text-[#00d2ff]" /> },
              { text: 'Recomendación personalizada', icon: <Star className="w-5 h-5 text-[#00d2ff]" /> },
              { text: 'Estándares internacionales', icon: <Globe2 className="w-5 h-5 text-[#00d2ff]" /> },
            ].map((benefit, index) => (
              <div 
                key={index} 
                className="flex flex-col items-start text-left group"
              >
                <div className="mb-3 w-10 h-10 rounded-full border border-white/15 flex items-center justify-center bg-white/5 group-hover:bg-[#00d2ff]/10 group-hover:border-[#00d2ff]/40 transition-all duration-300">
                  {benefit.icon}
                </div>
                <h4 className="text-[11px] font-bold text-slate-200 font-sans tracking-wide leading-snug uppercase">
                  {benefit.text}
                </h4>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons (Matching screenshot) */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-6"
          >
            {/* COMENZAR EVALUACIÓN yellow button */}
            <button
              onClick={onStartAssessment}
              className="group relative flex items-center justify-center gap-3 bg-[#FFC83D] hover:bg-[#ffe08a] text-[#020925] font-sans font-black tracking-wider uppercase rounded-xl px-8 py-4.5 transition-all duration-300 shadow-[0_0_25px_rgba(255,200,61,0.25)] hover:shadow-[0_0_35px_rgba(255,200,61,0.45)] transform hover:-translate-y-1 cursor-pointer text-center text-sm animate-shine"
              id="cta-start-free-test"
            >
              <span>COMENZAR EVALUACIÓN</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 stroke-[3px]" />
            </button>

            {/* Ver resultado de ejemplo link */}
            <button
              onClick={onSeeSampleResults}
              className="group flex items-center justify-center gap-1.5 text-white/80 hover:text-white font-sans font-extrabold text-sm uppercase tracking-wider transition-colors cursor-pointer"
            >
              <span>Ver resultado de ejemplo</span>
              <span className="transform group-hover:translate-x-0.5 transition-transform duration-200">&gt;</span>
            </button>
          </motion.div>
        </motion.div>

        {/* RIGHT COLUMN - MASCOT LION */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, type: 'spring' }}
          className="lg:col-span-5 flex items-center justify-center relative mt-10 lg:mt-0"
        >
          <MascotLion
            state="welcome"
            className="w-full animate-float-slow"
          />
        </motion.div>

      </div>
    </div>
  );
}
