/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, User, Send, CheckCircle2, X, MessageSquare, Calendar, ShieldCheck, Star } from 'lucide-react';
import { ConsultationForm } from '../types';

interface BookingFormProps {
  isOpen: boolean;
  onClose: () => void;
  initialType?: 'info' | 'consultation';
  estimatedLevel?: string;
  recommendedProgram?: string;
}

export default function BookingForm({
  isOpen,
  onClose,
  initialType = 'info',
  estimatedLevel = 'B1',
  recommendedProgram = 'Regular English Program',
}: BookingFormProps) {
  const [formType, setFormType] = useState<'info' | 'consultation'>(initialType);
  const [formData, setFormData] = useState<ConsultationForm>({
    fullName: '',
    email: '',
    phone: '',
    preferredContact: 'whatsapp',
    termsAccepted: true,
  });
  const [errors, setErrors] = useState<Partial<ConsultationForm>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  React.useEffect(() => {
    setFormType(initialType);
    if (isOpen) {
      setIsSubmitted(false);
      setIsSubmitting(false);
    }
  }, [isOpen, initialType]);

  const validate = () => {
    const newErrors: Partial<ConsultationForm> = {};
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Por favor, ingresa tu nombre completo.';
    } else if (formData.fullName.trim().length < 3) {
      newErrors.fullName = 'El nombre debe tener al menos 3 caracteres.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Por favor, ingresa tu correo electrónico.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Por favor, ingresa un correo electrónico válido.';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Por favor, ingresa tu número de celular.';
    } else if (!/^[0-9\s\-+]{9,15}$/.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Por favor, ingresa un número de celular válido para Perú (9 dígitos).';
    }

    if (!formData.termsAccepted) {
      newErrors.termsAccepted = true as any;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    try {
      const stored = localStorage.getItem('bh_quiz_leads');
      const leads = stored ? JSON.parse(stored) : [];
      const newLead = {
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        preferredContact: formData.preferredContact,
        estimatedLevel,
        recommendedProgram,
        submittedAt: new Date().toISOString()
      };
      leads.push(newLead);
      localStorage.setItem('bh_quiz_leads', JSON.stringify(leads));

      // Push data to Google Tag Manager dataLayer
      const dl = (window as any).dataLayer || [];
      dl.push({
        event: 'lead_form_submitted',
        estimatedLevel: estimatedLevel,
        recommendedProgram: recommendedProgram,
        preferredContact: formData.preferredContact
      });
      (window as any).dataLayer = dl;
    } catch (err) {
      console.error('Failed to save lead info', err);
    }

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1100);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop Overlay mask */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#020925]/90 backdrop-blur-md z-30"
          />

          {/* Modal Card container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="relative w-full max-w-lg bg-[#120b36] rounded-[32px] shadow-[0_25px_60px_rgba(0,0,0,0.5)] overflow-hidden border border-white/10 z-40 text-white"
          >
            {/* Header backdrop gradient */}
            <div className="bg-gradient-to-br from-[#0A2E9E] via-[#1736D1] to-[#4A2DCC] px-6 py-6 text-white relative">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 text-white rounded-full p-1.5 transition-all cursor-pointer"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
              
              <div className="flex gap-2 mb-2">
                <span className="text-[9px] bg-[#FFC83D] text-[#020925] font-sans font-black uppercase tracking-wider px-3 py-1 rounded-full shadow-[0_4px_10px_rgba(255,200,61,0.3)]">
                  Nivel {estimatedLevel} Estimado
                </span>
                <span className="text-[9px] bg-white/20 font-sans font-bold text-white uppercase tracking-wider px-3 py-1 rounded-full">
                  Admisiones British House
                </span>
              </div>

              <h2 className="text-xl md:text-2xl font-display font-black uppercase tracking-wide">
                {formType === 'info' ? 'Solicitar Malla Curricular' : 'Reservar Asesoría Gratuita'}
              </h2>
              <p className="text-slate-200 text-xs mt-1.5 font-medium leading-relaxed">
                {formType === 'info'
                  ? `Descubre la duración, precios y beneficios de estudiar el programa: ${recommendedProgram}.`
                  : 'Agenda una llamada corta de 5 minutos con un especialista para trazar tu ruta académica.'}
              </p>

              {/* Toggle tabs (glass design) */}
              <div className="flex bg-[#020925]/45 p-1 rounded-xl mt-4 gap-1 border border-white/10">
                <button
                  type="button"
                  onClick={() => {
                    setFormType('info');
                    setIsSubmitted(false);
                  }}
                  className={`flex-1 py-2 text-xs font-black uppercase tracking-wider rounded-lg transition-all cursor-pointer text-center flex items-center justify-center gap-1.5 ${
                    formType === 'info' ? 'bg-[#FFC83D] text-[#020925]' : 'text-slate-300 hover:text-white'
                  }`}
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  Malla y Precios
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setFormType('consultation');
                    setIsSubmitted(false);
                  }}
                  className={`flex-1 py-2 text-xs font-black uppercase tracking-wider rounded-lg transition-all cursor-pointer text-center flex items-center justify-center gap-1.5 ${
                    formType === 'consultation' ? 'bg-[#FFC83D] text-[#020925]' : 'text-slate-300 hover:text-white'
                  }`}
                >
                  <Calendar className="w-3.5 h-3.5" />
                  Llamar a un Asesor
                </button>
              </div>
            </div>

            {/* Modal Form body */}
            <div className="p-6 md:p-8 bg-[#120b36]/90 backdrop-blur-xl">
              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center justify-center py-6 text-center"
                  >
                    <div className="w-16 h-16 bg-emerald-500/10 rounded-full flex items-center justify-center border border-emerald-500/20 text-emerald-400 mb-4 shadow-[0_0_20px_rgba(16,185,129,0.3)] animate-pulse">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h3 className="text-xl font-display font-black text-white uppercase tracking-wide mb-2">
                      ¡Registro Exitoso!
                    </h3>
                    <p className="text-xs md:text-sm font-sans text-slate-300 max-w-sm mb-6 leading-relaxed">
                      Muchas gracias, <span className="font-extrabold text-[#FFC83D]">{formData.fullName}</span>. 
                      Tu nivel estimado es <span className="font-bold text-[#FFC83D] bg-white/5 border border-white/10 px-2 py-0.5 rounded ml-1">{estimatedLevel}</span>. 
                      Un asesor educativo calificado se comunicará contigo mediante <span className="font-bold text-white capitalize">{formData.preferredContact === 'phone' ? 'Llamada' : formData.preferredContact === 'email' ? 'Correo Electrónico' : 'WhatsApp'}</span> en los próximos minutos para brindarte asesoría gratuita de admisión.
                    </p>
                    
                    <div className="w-full bg-[#020925]/60 rounded-2xl p-4.5 border border-white/5 text-left space-y-2 mb-6 text-xs text-slate-300">
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-slate-400 uppercase text-[9px] tracking-wider">CENTRO DE ADMISIONES:</span>
                        <span className="font-bold text-white">British House - Perú</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-slate-400 uppercase text-[9px] tracking-wider">TIEMPO ESTIMADO:</span>
                        <span className="font-semibold text-[#FFC83D] text-glow-yellow">Menos de 10 minutos</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-slate-400 uppercase text-[9px] tracking-wider">PROGRAMA RECOMENDADO:</span>
                        <span className="font-bold text-white">{recommendedProgram}</span>
                      </div>
                    </div>

                    <button
                      onClick={onClose}
                      className="w-full py-4.5 bg-[#0A2E9E] hover:bg-[#1736D1] text-white font-sans font-black tracking-widest uppercase rounded-xl shadow-lg transition-all duration-205 cursor-pointer"
                    >
                      Cerrar Ventana
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-4 font-sans text-left"
                  >
                    {/* Course outline indicator */}
                    <div className="bg-[#020925]/60 p-3 rounded-xl border border-white/5 flex items-center justify-between text-xs text-slate-300">
                      <span className="font-bold text-slate-400 uppercase text-[9px] tracking-wider">RECOMENDADO PARA TU NIVEL:</span>
                      <span className="font-extrabold text-[#FFC83D] text-glow-yellow bg-[#FFC83D]/10 px-2.5 py-0.5 rounded-lg border border-[#FFC83D]/30">
                        {recommendedProgram}
                      </span>
                    </div>

                    {/* Name */}
                    <div>
                      <label className="block text-[10px] font-black text-slate-400 mb-1.5 uppercase tracking-widest">
                        Nombres y Apellidos
                      </label>
                      <div className="relative">
                        <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-slate-400" />
                        <input
                          type="text"
                          value={formData.fullName}
                          onChange={(e) => {
                            setFormData({ ...formData, fullName: e.target.value });
                            if (errors.fullName) setErrors({ ...errors, fullName: '' });
                          }}
                          placeholder="Ej. Juan Pérez"
                          className={`w-full pl-10 pr-4 py-2.5 bg-[#020925]/60 border ${
                            errors.fullName ? 'border-red-400' : 'border-white/10 focus:border-[#FFC83D]/60'
                          } text-white placeholder-slate-500 text-sm rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FFC83D]/20 transition-all`}
                        />
                      </div>
                      {errors.fullName && (
                        <p className="text-red-400 text-xs mt-1 font-bold">{errors.fullName}</p>
                      )}
                    </div>

                    {/* Contact details */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[10px] font-black text-slate-400 mb-1.5 uppercase tracking-widest">
                          Correo Electrónico
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-slate-400" />
                          <input
                            type="email"
                            value={formData.email}
                            onChange={(e) => {
                              setFormData({ ...formData, email: e.target.value });
                              if (errors.email) setErrors({ ...errors, email: '' });
                            }}
                            placeholder="Ej. juan.perez@gmail.com"
                            className={`w-full pl-10 pr-4 py-2.5 bg-[#020925]/60 border ${
                              errors.email ? 'border-red-400' : 'border-white/10 focus:border-[#FFC83D]/60'
                            } text-white placeholder-slate-500 text-sm rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FFC83D]/20 transition-all`}
                          />
                        </div>
                        {errors.email && (
                          <p className="text-red-400 text-xs mt-1 font-bold">{errors.email}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-[10px] font-black text-slate-400 mb-1.5 uppercase tracking-widest">
                          Celular (WhatsApp)
                        </label>
                        <div className="relative">
                          <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-slate-400" />
                          <input
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => {
                              setFormData({ ...formData, phone: e.target.value });
                              if (errors.phone) setErrors({ ...errors, phone: '' });
                            }}
                            placeholder="Ej. 987654321"
                            maxLength={15}
                            className={`w-full pl-10 pr-4 py-2.5 bg-[#020925]/60 border ${
                              errors.phone ? 'border-red-400' : 'border-white/10 focus:border-[#FFC83D]/60'
                            } text-white placeholder-slate-500 text-sm rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FFC83D]/20 transition-all`}
                          />
                        </div>
                        {errors.phone && (
                          <p className="text-red-400 text-xs mt-1 font-bold">{errors.phone}</p>
                        )}
                      </div>
                    </div>

                    {/* Preferred Method of Contact */}
                    <div>
                      <span className="block text-[10px] font-black text-slate-400 mb-2 uppercase tracking-widest">
                        ¿Cómo te gustaría ser contactado para recibir tu guía y tarifas?
                      </span>
                      <div className="grid grid-cols-3 gap-2">
                        {[
                          { key: 'whatsapp', label: 'WhatsApp' },
                          { key: 'phone', label: 'Celular' },
                          { key: 'email', label: 'Correo PDF' },
                        ].map((method) => (
                          <label
                            key={method.key}
                            className={`flex items-center justify-center p-2.5 rounded-xl border text-xs font-black uppercase tracking-wider cursor-pointer select-none transition-all duration-200 ${
                              formData.preferredContact === method.key
                                ? 'bg-[#0A2E9E]/45 border-[#FFC83D] text-white shadow-md'
                                : 'bg-[#020925]/30 border-white/5 text-slate-450 hover:bg-white/5 hover:text-white'
                            }`}
                          >
                            <input
                              type="radio"
                              name="preferredContact"
                              checked={formData.preferredContact === method.key}
                              onChange={() => setFormData({ ...formData, preferredContact: method.key as any })}
                              className="sr-only"
                            />
                            {method.label}
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Terms & Conditions Box */}
                    <div className="flex items-start gap-2 pt-2 text-left">
                      <input
                        id="privacy-terms-checkbox"
                        type="checkbox"
                        checked={formData.termsAccepted}
                        onChange={(e) => {
                          setFormData({ ...formData, termsAccepted: e.target.checked });
                          if (errors.termsAccepted) setErrors({ ...errors, termsAccepted: false as any });
                        }}
                        className={`w-4 h-4 rounded mt-0.5 text-[#0A2E9E] focus:ring-[#FFC83D]/20 bg-[#020925] cursor-pointer ${
                          errors.termsAccepted ? 'border-red-400' : 'border-white/15'
                        }`}
                      />
                      <label htmlFor="privacy-terms-checkbox" className="text-[10px] leading-relaxed text-slate-400 select-none cursor-pointer">
                        Acepto recibir la mallas del curso e invitaciones académicas confidenciales de British House Perú en conformidad con la política de seguridad de datos. Conexión encriptada SSL.
                      </label>
                    </div>

                    {/* ACCENT YELLOW SUBMISSION BUTTON */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4.5 mt-4 bg-gradient-to-r from-[#FFC83D] via-[#ffe08a] to-[#FFC83D] text-[#020925] font-sans font-black tracking-widest uppercase rounded-xl shadow-[0_0_20px_rgba(255,200,61,0.35)] hover:shadow-[0_0_30px_rgba(255,200,61,0.55)] cursor-pointer transition-all duration-200 hover:-translate-y-0.5 flex items-center justify-center gap-2 text-xs animate-shine"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-[#020925]" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                          </svg>
                          Procesando Solicitud...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          {formType === 'info' ? 'Solicitar Malla y Promociones' : 'Reservar Cita Académica'}
                        </>
                      )}
                    </button>

                    <div className="flex items-center justify-center gap-1 text-[9px] text-[#FFC83D] uppercase tracking-widest mt-2 font-black text-glow-yellow font-mono">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#FFC83D]" />
                      <span>Preparación Oficial Cambridge • Conexión Segura</span>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
