import '../styles/slider-animation.css';
import { useState, useEffect } from 'react';

// Logos temporales para demostración - se pueden reemplazar con los logos reales
const clientLogos = [
  {
    id: 1,
    name: "Cliente Premium 1",
    logo: "/img/ruba.png",
    description: "Construcción de oficinas corporativas"
  },
  {
    id: 2,
    name: "Cliente Premium 2", 
    logo: "/img/estadoQro.png",
    description: "Proyectos residenciales de lujo"
  },
  {
    id: 3,
    name: "Cliente Premium 3",
    logo: "/img/municipioQro.png", 
    description: "Infraestructura industrial"
  },
  {
    id: 4,
    name: "Cliente Premium 4",
    logo: "/img/corregidora.png",
    description: "Centros comerciales"
  },
  {
    id: 5,
    name: "Cliente Premium 5",
    logo: "/img/atlas.png",
    description: "Hospitales y clínicas"
  }
];

const ClientsSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered) {
        setActiveIndex((prev) => (prev + 1) % clientLogos.length);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <section className="py-10 bg-gradient-to-br overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16 animate-slide-up">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-12 h-1 bg-arcoColorTwo rounded-full"></div>
            <span className="text-arcoColorTwo font-semibold text-lg tracking-wider uppercase">
              Nuestros Aliados
            </span>
            <div className="w-12 h-1 bg-arcoColorTwo rounded-full"></div>
          </div>
          <h2 className="text-5xl md:text-5xl font-bold text-arcoColorTwo mb-6">
            Una red de confianza que sigue creciendo
          </h2>
          <p className="text-xl text-black max-w-2xl mx-auto leading-relaxed ">
            Organizaciones líderes que han confiado en Arco-Ingeniería para ejecutar proyectos de alto impacto.
          </p>
        </div>

        {/* Main Slider Container */}
        <div className="relative">
          <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-10 w-20 h-20 bg-arcoColorTwo rounded-full opacity-20 animate-float" style={{animationDelay: '0s'}}></div>
          <div className="absolute top-32 right-20 w-16 h-16 bg-arcoColor rounded-full opacity-15 animate-float" style={{animationDelay: '2s'}}></div>
          </div>

          {/* Central Display Area */}
          <div 
            className="relative max-w-6xl mx-auto"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Main Logo Display */}
            <div className="relative h-80 md:h-96 flex items-center justify-center mb-12">
              <div className="absolute inset-0 bg-arcoColor rounded-3xl opacity-10"></div>
              
              {clientLogos.map((client, index) => (
                <div
                  key={client.id}
                  className={`absolute inset-0 flex items-center justify-center transition-all duration-1000 transform
                    ${index === activeIndex 
                      ? 'opacity-100 scale-100 z-10' 
                      : 'opacity-0 scale-75 z-0'
                    }`}
                >
                  <div className="relative group">
                    {/* Glow Effect Background */}
                    <div className="absolute -inset-4 bg-arcoColorTwo rounded-2xl opacity-20 blur-xl group-hover:opacity-40 transition-all duration-500"></div>
                    
                    {/* Logo Container */}
                    <div className="relative bg-white/95 rounded-2xl p-8 border border-arcoColor/20 group-hover:shadow-xl transition-all duration-500 transform group-hover:scale-105">
                      <img 
                        src={client.logo}
                        alt={client.name}
                        className="w-80 h-40 md:w-[23rem] md:h-46 object-contain filter drop-shadow-lg"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Infinite Sliding Strip */}
            <div className="relative overflow-hidden rounded-2xl p-4 mb-8">
              {/* Animación automática en todas las vistas */}
              <div
                className="flex gap-6 md:gap-8 animate-slider-horizontal"
                style={{ minWidth: '100%', width: 'max-content' }}
              >
                {clientLogos.concat(clientLogos).map((client, idx) => (
                  <div
                    key={idx < clientLogos.length ? `first-${client.id}` : `second-${client.id}`}
                    className="flex-shrink-0 mx-2 md:mx-8"
                  >
                    <div className="w-24 h-12 md:w-28 md:h-16 rounded-lg flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-110 bg-white/80">
                      <img
                        src={client.logo}
                        alt={client.name}
                        className="w-20 h-10 md:w-24 md:h-12 object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
// Agrega la animación personalizada para el slider horizontal
// Puedes poner esto en tu archivo CSS global si lo prefieres
import '../styles/slider-animation.css';

            {/* Navigation Dots */}
            <div className="flex justify-center space-x-3">
              {clientLogos.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`relative group transition-all duration-300 ${
                    index === activeIndex 
                      ? 'scale-110' 
                      : 'scale-100 hover:scale-105'
                  }`}
                >
                  <div className={`w-4 h-4 rounded-full transition-all duration-300 ${
                    index === activeIndex
                      ? 'bg-arcoColorTwo shadow-lg'
                      : 'bg-arcoColor/40 hover:bg-arcoColorTwo/60'
                  }`}></div>
                  
                  {/* Active indicator ring */}
                  {index === activeIndex && (
                    <div className="absolute inset-0 w-4 h-4 rounded-full border-2 border-arcoColorTwo animate-pulse"></div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Side Elements for 3D Effect */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 opacity-30">
            <div className="w-32 h-64 bg-arcoColor rounded-2xl transform rotate-12 animate-float"></div>
          </div>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 opacity-30">
            <div className="w-32 h-64 bg-arcoColorTwo rounded-2xl transform -rotate-12 animate-float" style={{animationDelay: '2s'}}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSlider;
