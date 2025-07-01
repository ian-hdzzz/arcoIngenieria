import React, { useRef, useEffect, useState } from 'react';
import AnimatedCounter from '../components/AnimatedCounter';

const Nosotros = () => {
  const teamMembers = [
    {
      name: "Ing. Anonimo",
      position: "Director General",
      specialization: "Ingeniería Civil",
      experience: "15 años",
      image: "#"
    },
    {
      name: "Arq. Anonimo",
      position: "Directora de Diseño",
      specialization: "Arquitectura Residencial",
      experience: "12 años",
      image: "#"
    },
    {
      name: "Ing. Anonimo",
      position: "Gerente de Proyectos",
      specialization: "Gestión de Obra",
      experience: "10 años",
      image: "#"
    },
    {
      name: "Arq. Anonimo",
      position: "Coordinadora de Urbanismo",
      specialization: "Desarrollo Urbano",
      experience: "8 años",
      image: "#"
    }
  ];

  const timeline = [
    { year: "2010", event: "Fundación de ARCO Ingeniería y Diseño en Querétaro", img: "/img/img25.jpg" },
    { year: "2012", event: "Primer desarrollo residencial completado", img: "/img/img16.jpeg" },
    { year: "2015", event: "Expansión a proyectos industriales", img: "/img/img24.jpg" },
    { year: "2018", event: "Consolidación en obra pública educativa y social", img: "/img/img29.jpg" },
    { year: "2020", event: "1000+ proyectos completados exitosamente", img: "/img/img17.jpeg" },
    { year: "2024", event: "Líderes en construcción en Querétaro", img: "/img/img27.png" }
  ];

  // Animación de la línea y los eventos
  const timelineRef = useRef<HTMLDivElement>(null);
  const [lineHeight, setLineHeight] = useState(0);
  const [visibleItems, setVisibleItems] = useState<number[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;
      const rect = timelineRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      // Calcula el porcentaje visible de la sección, pero hazlo más sensible y rápido
      let visible = (windowHeight - rect.top) / rect.height;
      visible = Math.min(Math.max(visible, 0), 1);
      setLineHeight(visible * 100);

      // Animación progresiva de los items
      const items = document.querySelectorAll('.timeline-item');
      items.forEach((item, idx) => {
        const itemRect = item.getBoundingClientRect();
        // El item empieza a aparecer cuando su top está a 80% de la ventana y desaparece cuando sale por arriba
        const appearPoint = windowHeight * 0.85;
        const disappearPoint = windowHeight * 0.15;
        if (itemRect.top < appearPoint && itemRect.bottom > disappearPoint) {
          setVisibleItems((prev) => (prev.includes(idx) ? prev : [...prev, idx]));
        } else {
          setVisibleItems((prev) => prev.filter((i) => i !== idx));
        }
      });
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-black text-white pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold text-white mb-6">
                Sobre <span className="text-arcoColor">ARCO</span>
              </h1>
              <p className="text-xl text-gray-100 mb-8">
                Más de 14 años construyendo el futuro de Querétaro con excelencia, 
                innovación y compromiso con nuestros clientes.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center">
                  <AnimatedCounter end={2010} />
                  <p className="text-gray-200 mt-2">Año de Fundación</p>
                </div>
                <div className="text-center">
                  <AnimatedCounter end={1000} suffix="+" />
                  <p className="text-gray-200 mt-2">Proyectos</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="../public/img/img28.png"
                alt="ARCO Ingeniería y Diseño"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-blue-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-black/70 p-8 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl ">
              <h2 className="text-3xl font-bold text-white mb-6">Nuestra Misión</h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                Proporcionar servicios integrales de construcción e ingeniería civil de la más alta 
                calidad, construyendo relaciones a largo plazo con nuestros clientes y superando 
                sus expectativas en cada proyecto. Trabajamos con pasión, experiencia y compromiso 
                para hacer realidad los sueños de cada familia queretana.
              </p>
            </div>

            <div className="bg-black/70 p-8 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl ">
              <h2 className="text-3xl font-bold text-white mb-6">Nuestra Visión</h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                Ser la empresa líder en construcción y desarrollo inmobiliario en Querétaro, 
                reconocida por nuestra excelencia técnica, innovación en diseño y compromiso 
                con el desarrollo sustentable. Aspiramos a ser la primera opción para parejas 
                jóvenes y familias que buscan construir su patrimonio.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Nuestra <span className="text-arcoColorTwo">Historia</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Una década y media de crecimiento, aprendizaje y construcción del futuro de Querétaro
            </p>
          </div>

          <div className="relative" ref={timelineRef} style={{ minHeight: 400 }}>
            {/* Línea azul animada con degradado brillante al final */}
            {/* Desktop: línea central, Mobile: línea izquierda */}
            <div
              className="hidden sm:block absolute left-1/2 transform -translate-x-1/2 w-1 transition-all duration-150"
              style={{
                height: `${lineHeight}%`,
                top: 0,
                bottom: 'auto',
                opacity: lineHeight > 0 ? 1 : 0,
                background: 'linear-gradient(to bottom, #2563eb 80%, #A1D8D6 95%, #fff 100%)',
                boxShadow: '0 0 16px 2px #60a5fa99',
                transitionProperty: 'height, opacity'
              }}
            ></div>
            <div
              className="sm:hidden absolute left-4 w-1 transition-all duration-150"
              style={{
                height: `${lineHeight}%`,
                top: 0,
                bottom: 'auto',
                opacity: lineHeight > 0 ? 1 : 0,
                background: 'linear-gradient(to bottom, #2563eb 80%, #A1D8D6 95%, #fff 100%)',
                boxShadow: '0 0 16px 2px #60a5fa99',
                transitionProperty: 'height, opacity'
              }}
            ></div>
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className={
                    `timeline-item relative transition-all duration-200 ` +
                    (visibleItems.includes(index)
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-10 pointer-events-none border-black hover:border-blue-500') +
                    ' ' +
                    // Desktop: alterna izquierda/derecha, Mobile: full width
                    'flex items-center ' +
                    'sm:' + (index % 2 === 0 ? 'justify-start' : 'justify-end') +
                    ' justify-start'
                  }
                  style={{ transitionDelay: `${index * 40}ms` }}
                >
                  {/* Desktop: alterna, Mobile: full width y padding izquierdo para la línea */}
                  <div
                    className={
                      'sm:w-5/12 w-full ' +
                      (index % 2 === 0
                        ? 'sm:text-right sm:pr-8 text-left pl-12 sm:pl-0'
                        : 'sm:text-left sm:pl-8 text-left pl-12 sm:pl-8')
                    }
                  >
                    <div className="bg-black/60 backdrop-blur-md p-8 rounded-2xl shadow-2xl border border-blue-700/40 hover:bg-black/80 transition-all duration-300 flex flex-col">
                      <div className="text-2xl font-bold text-blue-500 mb-2 drop-shadow-[0_2px_8px_rgba(30,58,138,0.7)]">{item.year}</div>
                      <p className="text-gray-100 mb-4 drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]">{item.event}</p>
                      <div className="relative w-full h-56 mt-4">
                        <img
                          src={item.img}
                          alt={item.year}
                          className="w-full h-full object-cover border-2 border-blue-400 rounded-xl"
                          style={{ display: 'block', margin: 0, padding: 0 }}
                        />
                        <div className="absolute inset-0 pointer-events-none rounded-xl" style={{ boxShadow: 'inset 0 0 32px 8px rgba(30,58,138,0.3), inset 0 0 0 2px #2563eb' }}></div>
                      </div>
                    </div>
                  </div>
                  {/* Punto azul: central en desktop, a la izquierda en móvil */}
                  <div
                    className={
                      'absolute ' +
                      'sm:left-1/2 sm:transform sm:-translate-x-1/2 left-4 ' +
                      'w-4 h-4 bg-blue-600 rounded-full border-4 border-black'
                    }
                  ></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Nuestros <span className="text-arcoColorTwo">Valores</span>
            </h2>
            <p className="text-xl text-white">
              Los principios que guían cada uno de nuestros proyectos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center bg-gray-900 p-8 rounded-lg hover:bg-gray-800 transition-all duration-300">
              <div className="w-16 h-16 bg-arcoColorTwo rounded-full mx-auto mb-6 flex items-center justify-center">
                {/* Trofeo: Excelencia */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5v2.25m7.5-2.25v2.25m-11.25 0A2.25 2.25 0 006 8.25v2.25a6 6 0 0012 0V8.25a2.25 2.25 0 001.5-2.25m-15 0h15" />
                  <circle cx="12" cy="17" r="3" stroke="white" strokeWidth="1.5" fill="none" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Excelencia</h3>
              <p className="text-gray-400">
                Nos esforzamos por superar las expectativas en cada proyecto, 
                manteniendo los más altos estándares de calidad.
              </p>
            </div>

            <div className="text-center bg-gray-900 p-8 rounded-lg hover:bg-gray-800 transition-all duration-300">
              <div className="w-16 h-16 bg-arcoColorTwo rounded-full mx-auto mb-6 flex items-center justify-center">
                {/* Apretón de manos: Confianza */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 15l-3.5-3.5a2.121 2.121 0 010-3l.5-.5a2.121 2.121 0 013 0l.5.5.5-.5a2.121 2.121 0 013 0l.5.5a2.121 2.121 0 010 3L12 15zm0 0l2.5 2.5a2.121 2.121 0 003 0l.5-.5a2.121 2.121 0 000-3L17 13" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Confianza</h3>
              <p className="text-gray-400">
                Construimos relaciones sólidas basadas en la transparencia, 
                honestidad y cumplimiento de nuestros compromisos.
              </p>
            </div>

            <div className="text-center bg-gray-900 p-8 rounded-lg hover:bg-gray-800 transition-all duration-300">
              <div className="w-16 h-16 bg-arcoColorTwo rounded-full mx-auto mb-6 flex items-center justify-center">
                {/* Bombilla: Innovación */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 18h6m-3 0v2m-4-2a4 4 0 018 0c0 1.657-1.343 3-3 3s-3-1.343-3-3zm3-16a7 7 0 00-7 7c0 2.21 1.343 4.21 3.5 5.5M12 2a7 7 0 017 7c0 2.21-1.343 4.21-3.5 5.5" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Innovación</h3>
              <p className="text-gray-400">
                Incorporamos tecnologías y métodos modernos para crear 
                espacios funcionales y sostenibles.
              </p>
            </div>

            <div className="text-center bg-gray-900 p-8 rounded-lg hover:bg-gray-800 transition-all duration-300">
              <div className="w-16 h-16 bg-arcoColorTwo rounded-full mx-auto mb-6 flex items-center justify-center">
                {/* Hoja: Sustentabilidad */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 0C7.03 4 3 8.03 3 13c0 3.866 3.134 7 7 7s7-3.134 7-7c0-4.97-4.03-9-9-9zm0 0v1m0 0c2.21 0 4 1.79 4 4 0 2.21-1.79 4-4 4s-4-1.79-4-4c0-2.21 1.79-4 4-4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Sustentabilidad</h3>
              <p className="text-gray-400">
                Promovemos prácticas constructivas responsables con el medio ambiente 
                y el desarrollo de comunidades sustentables.
              </p>
            </div>

            <div className="text-center bg-gray-900 p-8 rounded-lg hover:bg-gray-800 transition-all duration-300">
              <div className="w-16 h-16 bg-arcoColorTwo rounded-full mx-auto mb-6 flex items-center justify-center">
                {/* Personas: Compromiso */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a4 4 0 00-4-4h-1M7 20H2v-2a4 4 0 014-4h1m6-4a4 4 0 11-8 0 4 4 0 018 0zm6 4a4 4 0 10-8 0 4 4 0 008 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Compromiso</h3>
              <p className="text-gray-400">
                Nos comprometemos con el éxito de cada cliente, 
                acompañándolos desde la idea hasta la entrega.
              </p>
            </div>

            <div className="text-center bg-gray-900 p-8 rounded-lg hover:bg-gray-800 transition-all duration-300">
              <div className="w-16 h-16 bg-arcoColorTwo rounded-full mx-auto mb-6 flex items-center justify-center">
                {/* Rayo: Eficiencia */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Eficiencia</h3>
              <p className="text-gray-400">
                Optimizamos recursos, tiempo y procesos para entregar 
                resultados excepcionales de manera oportuna.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-arcoColorTwo ">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            ¿Listo para Construir con Nosotros?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Únete a las más de 150 familias que han confiado en ARCO Ingeniería y Diseño 
            para construir su patrimonio.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contacto" 
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105"
            >
              Contactar
            </a>
            <a 
              href="/cotizador" 
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105"
            >
              Cotizar Proyecto
            </a>
          </div>
        </div>
      </section>

      <a
        href="https://wa.me/5214423278984?text=Hola!%20Me%20interesa%20cotizar%20un%20proyecto%20en%20Arco%20Angenier%C3%ADa"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg p-4 flex items-center justify-center transition-all duration-300"
        aria-label="Cotizar por WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="32" height="32" fill="white">
          <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
        </svg>
      </a>
    </div>
  );
};

export default Nosotros;
