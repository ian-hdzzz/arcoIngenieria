import { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Servicios = () => {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      title: "Obra Civil",
      description: "Construcción profesional de infraestructura y edificaciones con los más altos estándares de calidad y seguridad.",
      features: ["Cimentaciones", "Estructuras de concreto", "Acabados de lujo", "Supervisión técnica"]
    },
    {
      title: "Urbanización",
      description: "Desarrollo integral de fraccionamientos y zonas habitacionales con todos los servicios necesarios.",
      features: ["Trazado urbano", "Vialidades", "Áreas verdes", "Servicios municipales"]
    },
    {
      title: "Redes de Agua y Drenaje",
      description: "Introducción profesional de redes de agua potable, drenaje sanitario y pluvial.",
      features: ["Agua potable", "Drenaje sanitario", "Drenaje pluvial", "Mantenimiento"]
    },
    {
      title: "Vivienda Individual",
      description: "Construcción de casas personalizadas diseñadas específicamente para cada familia.",
      features: ["Diseño personalizado", "Materiales premium", "Construcción rápida", "Garantía total"]
    },
    {
      title: "Vivienda en Serie",
      description: "Desarrollos habitacionales con diseños optimizados y procesos eficientes.",
      features: ["Diseños probados", "Construcción masiva", "Costos optimizados", "Entrega rápida"]
    },
    {
      title: "Naves Industriales",
      description: "Construcción de espacios industriales y comerciales adaptados a cada necesidad empresarial.",
      features: ["Estructuras metálicas", "Grandes claros", "Instalaciones especiales", "Eficiencia energética"]
    }
  ];

  const clients = [
    { name: "Puentes vehiculares, Querétaro.", image: "../public/img/img29.jpg" },
    { name: "Pitahayas, Zibatá", image: "../public/img/img25.jpg" },
    { name: "Edificio Nouvalia, Qro.", image: "../public/img/img28.png" },
    { name: "Condominios Cassis, El Marques, Qro.", image: "../public/img/img16.jpeg" },
    { name: "Fraccionamiento: Puerta Verona, Sonterra", image: "../public/img/img27.png" },
    { name: "Naves Industriales - Bernando Quintana, Qro.", image: "../public/img/img26.jpg" },
  ];

  // Animaciones scroll
  const [heroRef, heroVisible] = useScrollReveal();
  const [gridRef, gridVisible] = useScrollReveal();
  const [adicionalesRef, adicionalesVisible] = useScrollReveal();
  const [clientesRef, clientesVisible] = useScrollReveal();
  const [ctaRef, ctaVisible] = useScrollReveal();

  return (
    <div className="bg-black text-white pt-16">

      <section
        ref={heroRef}
        className={`relative py-40 bg-cover bg-center transition-all duration-700`}
        style={{ backgroundImage: `url(/public/img/img18.jpeg)` }}
      >
        <div className="absolute inset-0 bg-black/15 z-0 backdrop-blur-sm"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <h1 className="text-5xl font-bold text-white mb-6 drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]">
            Nuestros <span className="text-blue-500 drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]">Servicios</span>
          </h1>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Ofrecemos soluciones integrales en construcción e ingeniería civil, 
            respaldados por más de 14 años de experiencia en Querétaro.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section
        ref={gridRef}
        className={`py-20 bg-gray-900 transition-all duration-700 ${gridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => {
              // Selección de imágenes diferentes para cada servicio
              const serviceImages = [
                '/img/img1.jpeg',
                '/img/img2.jpeg',
                '/img/img3.jpeg',
                '/img/img4.jpeg',
                '/img/img5.jpeg',
                '/img/img6.jpeg',
              ];
              return (
                <div 
                  key={index}
                  className={`flex bg-black/50 rounded-lg p-8 border-2 transition-all duration-300 cursor-pointer ${
                    activeService === index ? 'border-black bg-black/70 hover:border-blue-500' : 'border-black hover:border-blue-500'
                  }`}
                  onClick={() => setActiveService(index)}
                >
                  <div className="flex-shrink-0 w-32 h-32 rounded-lg overflow-hidden mr-8 hidden sm:block">
                    <img 
                      src={serviceImages[index % serviceImages.length]} 
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-blue-500 mb-4">{service.title}</h3>
                    <p className="text-gray-300 mb-6">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-400">
                          <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section
        ref={adicionalesRef}
        className={`py-20 bg-black transition-all duration-700 ${adicionalesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Servicios <span className="text-blue-500">Adicionales</span>
            </h2>
            <p className="text-xl text-gray-400">
              Servicios complementarios para proyectos integrales
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center bg-gray-900 p-6 rounded-lg hover:bg-gray-800 transition-all duration-300 transform hover:scale-105">
              <div className="w-16 h-16 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" width="32" height="32" fill="white"><path d="M48 0C21.5 0 0 21.5 0 48L0 464c0 26.5 21.5 48 48 48l96 0 0-80c0-26.5 21.5-48 48-48s48 21.5 48 48l0 80 96 0c26.5 0 48-21.5 48-48l0-416c0-26.5-21.5-48-48-48L48 0zM64 240c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32zm112-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16zM80 96l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32zM272 96l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16z"/></svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Proyectos Ejecutivos</h3>
              <p className="text-gray-400 text-sm">Desarrollo integral de planos y especificaciones técnicas</p>
            </div>

            <div className="text-center bg-gray-900 p-6 rounded-lg hover:bg-gray-800 transition-all duration-300 transform hover:scale-105">
              <div className="w-16 h-16 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="32" height="32" fill="white"><path d="M243.4 2.6l-224 96c-14 6-21.8 21-18.7 35.8S16.8 160 32 160l0 8c0 13.3 10.7 24 24 24l400 0c13.3 0 24-10.7 24-24l0-8c15.2 0 28.3-10.7 31.3-25.6s-4.8-29.9-18.7-35.8l-224-96c-8-3.4-17.2-3.4-25.2 0zM128 224l-64 0 0 196.3c-.6 .3-1.2 .7-1.8 1.1l-48 32c-11.7 7.8-17 22.4-12.9 35.9S17.9 512 32 512l448 0c14.1 0 26.5-9.2 30.6-22.7s-1.1-28.1-12.9-35.9l-48-32c-.6-.4-1.2-.7-1.8-1.1L448 224l-64 0 0 192-40 0 0-192-64 0 0 192-48 0 0-192-64 0 0 192-40 0 0-192zM256 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Gestión Inmobiliaria</h3>
              <p className="text-gray-400 text-sm">Trámites ante autoridades y permisos de construcción</p>
            </div>

            <div className="text-center bg-gray-900 p-6 rounded-lg hover:bg-gray-800 transition-all duration-300 transform hover:scale-105">
              <div className="w-16 h-16 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" width="32" height="32" fill="white"><path d="M64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-384c0-35.3-28.7-64-64-64L64 0zM96 64l192 0c17.7 0 32 14.3 32 32l0 32c0 17.7-14.3 32-32 32L96 160c-17.7 0-32-14.3-32-32l0-32c0-17.7 14.3-32 32-32zm32 160a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zM96 352a32 32 0 1 1 0-64 32 32 0 1 1 0 64zM64 416c0-17.7 14.3-32 32-32l96 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-96 0c-17.7 0-32-14.3-32-32zM192 256a32 32 0 1 1 0-64 32 32 0 1 1 0 64zm32 64a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zm64-64a32 32 0 1 1 0-64 32 32 0 1 1 0 64zm32 64a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zM288 448a32 32 0 1 1 0-64 32 32 0 1 1 0 64z"/></svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Cálculo Estructural</h3>
              <p className="text-gray-400 text-sm">Análisis y diseño de estructuras seguras y eficientes</p>
            </div>

            <div className="text-center bg-gray-900 p-6 rounded-lg hover:bg-gray-800 transition-all duration-300 transform hover:scale-105">
              <div className="w-16 h-16 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="32" height="32" fill="white"><path d="M256 32c-17.7 0-32 14.3-32 32l0 2.3 0 99.6c0 5.6-4.5 10.1-10.1 10.1c-3.6 0-7-1.9-8.8-5.1L157.1 87C83 123.5 32 199.8 32 288l0 64 512 0 0-66.4c-.9-87.2-51.7-162.4-125.1-198.6l-48 83.9c-1.8 3.2-5.2 5.1-8.8 5.1c-5.6 0-10.1-4.5-10.1-10.1l0-99.6 0-2.3c0-17.7-14.3-32-32-32l-64 0zM16.6 384C7.4 384 0 391.4 0 400.6c0 4.7 2 9.2 5.8 11.9C27.5 428.4 111.8 480 288 480s260.5-51.6 282.2-67.5c3.8-2.8 5.8-7.2 5.8-11.9c0-9.2-7.4-16.6-16.6-16.6L16.6 384z"/></svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Director de Obra (DRO)</h3>
              <p className="text-gray-400 text-sm">Supervisión profesional y control de calidad</p>
            </div>
          </div>
        </div>
      </section>

      {/* Client Gallery */}
      <section
        ref={clientesRef}
        className={`py-20 bg-gradient-to-br from-gray-900 to-black transition-all duration-700 ${clientesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Nuestros <span className="text-blue-400">Clientes</span>
            </h2>
            <p className="text-xl text-gray-400">
              Proyectos realizados con excelencia y dedicación
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {clients.map((client, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-lg bg-gray-800 hover:transform hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-900/40"
              >
                <div className="aspect-w-16 aspect-h-12">
                  <img 
                    src={client.image} 
                    alt={client.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <h3 className="text-lg font-semibold text-white">{client.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        ref={ctaRef}
        className={`py-20 bg-blue-600 transition-all duration-700 ${ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            ¿Necesitas alguno de nuestros servicios?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Contacta con nuestro equipo de expertos para una consulta personalizada
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contacto" 
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105"
            >
              Contactar Ahora
            </a>
            <a 
              href="/cotizador" 
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105"
            >
              Obtener Cotización
            </a>
          </div>
        </div>
      </section>

      <a
        href="https://wa.me/5214423278984?text=Hola!%20Me%20interesa%20cotizar%20en%20arco%20ingenier%C3%ADa"
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

export default Servicios;
