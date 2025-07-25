import { useScrollReveal } from '../hooks/useScrollReveal';
import { useState } from 'react';

const faqs = [
  {
    question: '¿Cuánto tiempo tarda la construcción de una casa?',
    answer: 'El tiempo varía según el tamaño y complejidad, pero generalmente entre 6-12 meses para una casa habitación.'
  },
  {
    question: '¿Ofrecen opciones de financiamiento?',
    answer: 'Sí, trabajamos con diferentes instituciones financieras para ofrecer las mejores opciones de crédito.'
  },
  {
    question: '¿Incluyen los permisos de construcción?',
    answer: 'Sí, nos encargamos de todos los trámites y permisos necesarios ante las autoridades correspondientes.'
  },
  {
    question: '¿Proporcionan garantía en sus trabajos?',
    answer: 'Ofrecemos garantía completa en todos nuestros proyectos, respaldada por más de 15 años de experiencia.'
  }
];

const PreguntasFrecuentes = () => {
  const [faqRef, faqVisible] = useScrollReveal();

  return (
    <div className="bg-white min-h-screen pt-16">
      {/* FAQ Section */}
      <section
        ref={faqRef}
        className={`py-20 bg-white transition-all duration-700 ${faqVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-blue-600 mb-4">
              Preguntas <span className="text-blue-600">Frecuentes</span>
            </h2>
            <p className="text-xl text-black">
              Respuestas a las consultas más comunes
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-900 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-blue-500 mb-3">{faq.question}</h3>
                <p className="text-white leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PreguntasFrecuentes;
