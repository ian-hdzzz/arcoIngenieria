import Stats from '@/components/Stats';
import { Link } from 'react-router-dom';
import AnimatedCounter from '../components/AnimatedCounter';
import VerticalCarousel from "../components/VerticalCarousel";
import { useScrollReveal } from '../hooks/useScrollReveal';

const Home = () => {
  // Hero
  const [heroRef, heroVisible] = useScrollReveal<HTMLDivElement>();
  // Stats
  const [statsRef, statsVisible] = useScrollReveal<HTMLDivElement>();
  // Servicios
  const [servRef, servVisible] = useScrollReveal<HTMLDivElement>();
  // CTA
  const [ctaRef, ctaVisible] = useScrollReveal<HTMLDivElement>();

  return (
    <div className="bg-black text-white">
      {/* Botón flotante de WhatsApp */}
      <a
        href="https://wa.me/5214423278984?text=Hola!%20Me%20interesa%20cotizar%20en%20arco%20ingenier%C3%ADa"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg p-4 flex items-center justify-center transition-all duration-300"
        aria-label="Cotizar por WhatsApp"
      >
        {/* Icono WhatsApp SVG */}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="32" height="32" fill="white">
          <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
        </svg>
      </a>

      {/* Hero Section */}
      <section
        ref={heroRef}
        className={
          `relative min-h-screen flex items-center justify-center bg-gradient-to-br from-black/50 via-gray-900/30 to-black/50 overflow-hidden transition-all duration-1000 ` +
          (heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8')
        }
      >
        {/* Animated Background Carousel */}
        <VerticalCarousel />
        
        {/* Content */}
        <div className="relative z-20 text-center max-w-4xl mx-auto px-6 sm:px-4">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6 animate-fade-in">
            <span className="text-white">ARCO</span>
            <br />
            <span className="text-arcoColor">Ingeniería y Diseño</span>
          </h1>
          <p className="text-base sm:text-xl md:text-2xl text-gray-100 mb-4 sm:mb-8 animate-fade-in delay-150">
            Construyendo el futuro de Querétaro desde 2010
          </p>
          <p className="text-sm sm:text-lg text-gray-200 mb-8 sm:mb-12 max-w-2xl mx-auto animate-fade-in delay-300">
            Especialistas en obra civil, urbanización y desarrollo inmobiliario. 
            Tu hogar ideal nos espera.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center animate-fade-in delay-500">
            <Link 
              to="/home" 
              className="bg-arcoColor hover:bg-blue-700 text-white px-4 sm:px-6 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              Cotiza tu Proyecto
            </Link>
            <Link 
              to="/servicios" 
              className="border-2 border-blue-400 text-blue-400 hover:bg-arcoColor hover:text-black px-4 sm:px-6 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all duration-300 transform hover:scale-105"
            >
              Ver Servicios
            </Link>
          </div>
        </div>
      </section>
     {/* Stats Section */}
      <section
        ref={statsRef}
        className={
          `py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white w-full transition-all duration-1000 ` +
          (statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8')
        }
      >
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Nuestra Experiencia en Números
            </h2>
            <p className="text-xl text-blue-100">
              Más de una década construyendo confianza
            </p>
          </div>
          <Stats/>
        </div>
      </section>

      {/* Services Preview */}
      <section
        ref={servRef}
        className={
          `py-20 bg-black transition-all duration-1000 ` +
          (servVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8')
        }
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Nuestros Servicios
            </h2>
            <p className="text-xl text-gray-400">
              Soluciones integrales para tu proyecto inmobiliario
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* ...existing code for service cards... */}
            <div className="group bg-gray-900 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
              <div
                className="h-48 bg-cover bg-center"
                style={{ backgroundImage: `url('/public/img/img24.jpg')` }}
              ></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">Obra Civil</h3>
                <p className="text-gray-400">Construcción profesional con los más altos estándares de calidad.</p>
              </div>
            </div>
            <div className="group bg-gray-900 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
              <div
                className="h-48 bg-cover bg-center"
                style={{ backgroundImage: `url('/public/img/img14.jpeg')` }}
              ></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">Vivienda Individual</h3>
                <p className="text-gray-400">Tu hogar personalizado, diseñado según tus necesidades.</p>
              </div>
            </div>
            <div className="group bg-gray-900 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
              <div
                className="h-48 bg-cover bg-center"
                style={{ backgroundImage: `url('/public/img/img25.jpg')` }}
              ></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">Urbanización</h3>
                <p className="text-gray-400">Desarrollo integral de fraccionamientos y zonas habitacionales.</p>
              </div>
            </div>
            {/* Segunda fila de servicios adicionales */}
            <div className="group bg-gray-900 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
              <div
                className="h-48 bg-cover bg-center"
                style={{ backgroundImage: `url('/public/img/img2.jpeg')` }}
              ></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">Redes de Agua y Drenaje</h3>
                <p className="text-gray-400">Instalación profesional de redes hidráulicas y sanitarias.</p>
              </div>
            </div>
            <div className="group bg-gray-900 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
              <div
                className="h-48 bg-cover bg-center"
                style={{ backgroundImage: `url('/public/img/img16.jpeg')` }}
              ></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">Vivienda en Serie</h3>
                <p className="text-gray-400">Desarrollos habitacionales con procesos eficientes y entrega rápida.</p>
              </div>
            </div>
            <div className="group bg-gray-900 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
              <div
                className="h-48 bg-cover bg-center"
                style={{ backgroundImage: `url('/public/img/img26.jpg')` }}
              ></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">Naves Industriales</h3>
                <p className="text-gray-400">Construcción de espacios industriales y comerciales adaptados.</p>
              </div>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link 
              to="/servicios" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300"
            >
              Ver Todos los Servicios
            </Link>
          </div>
        </div>
      </section>

     
      {/* CTA Section */}
      <section
        ref={ctaRef}
        className={
          `py-20 bg-gradient-to-r from-blue-600 to-blue-800 transition-all duration-1000 ` +
          (ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8')
        }
      >
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            ¿Listo para Construir tu Futuro?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Obtén una cotización personalizada para tu proyecto. 
            Especialistas en parejas jóvenes y recién casados.
          </p>
          <Link 
            to="/cotizador" 
            className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 inline-block"
          >
            Comenzar Cotización
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
