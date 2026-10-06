# British House International - Test de Nivelación de Inglés (Quiz)

Plataforma web interactiva para evaluación y diagnóstico del nivel de inglés (A1 - C1) según el estándar del Marco Común Europeo de Referencia (MCER) para **British House International**.

---

## 🚀 Características
- **Diagnóstico Integral:** 20 preguntas dinámicas calibradas por nivel (A1 a C1) y categoría (Grammar, Vocabulary, Comprehension).
- **Formulario de Registro de Leads:** Captura de datos previo a la evaluación, con entrega automática a webhook de **Zapier** (Kommo CRM) y respaldo en `localStorage`.
- **Casilla de Alumno British:** Detección de estudiantes activos o antiguos en el formulario.
- **Panel Administrativo (`/config`):**
  - Gestión y edición de preguntas.
  - Ajuste de ponderaciones y umbrales de nivel.
  - Visualización y descarga de leads en formato Excel (CSV).

---

## 🛠️ Tecnologías
- **Framework:** React 19 + TypeScript
- **Bundler:** Vite
- **Estilos:** Tailwind CSS
- **Iconografía:** Lucide React
- **Integración:** Webhook Zapier + Google Tag Manager dataLayer

---

## 💻 Desarrollo Local

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Compilar para producción
npm run build
```

---

## 🌐 Despliegue en Producción
Alojado en **Vercel** bajo el subdominio:
`https://quiz.britishhouseinternational.pe`
