import { useState, useEffect } from 'react';

// Logos temporales para demostración - se pueden reemplazar con los logos reales
const clientLogos = [
  {
    id: 1,
    name: "Cliente Premium 1",
    logo: "https://via.placeholder.com/200x100/1a365d/ff6b35?text=Cliente+1",
    description: "Construcción de oficinas corporativas"
  },
  {
    id: 2,
    name: "Cliente Premium 2", 
    logo: "https://via.placeholder.com/200x100/1a365d/ff6b35?text=Cliente+2",
    description: "Proyectos residenciales de lujo"
  },
  {
    id: 3,
    name: "Cliente Premium 3",
    logo: "https://via.placeholder.com/200x100/1a365d/ff6b35?text=Cliente+3", 
    description: "Infraestructura industrial"
  },
  {
    id: 4,
    name: "Cliente Premium 4",
    logo: "https://via.placeholder.com/200x100/1a365d/ff6b35?text=Cliente+4",
    description: "Centros comerciales"
  },
  {
    id: 5,
    name: "Cliente Premium 5",
    logo: "https://via.placeholder.com/200x100/1a365d/ff6b35?text=Cliente+5",
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
    <section className="py-20 bg-gradient-to-br from-background via-secondary/20 to-background overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16 animate-slide-up">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-12 h-1 bg-gradient-accent rounded-full"></div>
            <span className="text-construction-orange font-semibold text-lg tracking-wider uppercase">
              Nuestros Clientes
            </span>
            <div className="w-12 h-1 bg-gradient-accent rounded-full"></div>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-construction bg-clip-text text-transparent mb-6">
            Confianza Construida
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Empresas líderes que han confiado en Arco.-Ingeniería para materializar sus proyectos más ambiciosos
          </p>
        </div>

        {/* Main Slider Container */}
        <div className="relative">
          {/* 3D Floating Background Elements */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-10 left-10 w-20 h-20 bg-gradient-accent rounded-full opacity-20 animate-float" style={{animationDelay: '0s'}}></div>
            <div className="absolute top-32 right-20 w-16 h-16 bg-gradient-construction rounded-full opacity-15 animate-float" style={{animationDelay: '2s'}}></div>
            <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-construction-orange rounded-full opacity-25 animate-float" style={{animationDelay: '4s'}}></div>
          </div>

          {/* Central Display Area */}
          <div 
            className="relative max-w-6xl mx-auto"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Main Logo Display */}
            <div className="relative h-80 md:h-96 flex items-center justify-center mb-12">
              <div className="absolute inset-0 bg-gradient-steel rounded-3xl opacity-5"></div>
              
              {clientLogos.map((client, index) => (
                <div
                  key={client.id}
                  className={`absolute inset-0 flex items-center justify-center transition-all duration-500 transform
                    ${index === activeIndex 
                      ? 'opacity-100 scale-100 z-10' 
                      : 'opacity-0 scale-75 z-0'
                    }`}
                >
                  <div className="relative group">
                    {/* Glow Effect Background */}
                    <div className="absolute -inset-4 bg-gradient-accent rounded-2xl opacity-20 blur-xl group-hover:opacity-40 transition-all duration-500"></div>
                    
                    {/* Logo Container */}
                    <div className="relative bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-construction border border-white/20 group-hover:shadow-glow transition-all duration-500 transform group-hover:scale-105">
                      <img 
                        src={client.logo}
                        alt={client.name}
                        className="w-64 h-32 md:w-80 md:h-40 object-contain filter drop-shadow-lg"
                      />
                      
                      {/* Client Info Overlay */}
                      <div className="absolute inset-0 bg-gradient-construction rounded-2xl opacity-0 group-hover:opacity-95 transition-all duration-500 flex items-center justify-center">
                        <div className="text-center text-white p-6">
                          <h3 className="text-2xl font-bold mb-2">{client.name}</h3>
                          <p className="text-construction-orange font-medium">{client.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Infinite Sliding Strip */}
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-construction-blue/10 via-construction-gray/5 to-construction-blue/10 p-6 mb-8">
              <div className="flex animate-slide-infinite">
                {/* First set */}
                {clientLogos.map((client, index) => (
                  <div key={`first-${client.id}`} className="flex-shrink-0 mx-8">
                    <div className="w-24 h-12 bg-white/80 rounded-lg flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-110">
                      <img 
                        src={client.logo}
                        alt={client.name}
                        className="w-20 h-10 object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
                      />
                    </div>
                  </div>
                ))}
                {/* Duplicate set for seamless loop */}
                {clientLogos.map((client, index) => (
                  <div key={`second-${client.id}`} className="flex-shrink-0 mx-8">
                    <div className="w-24 h-12 bg-white/80 rounded-lg flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-110">
                      <img 
                        src={client.logo}
                        alt={client.name}
                        className="w-20 h-10 object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

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
                      ? 'bg-construction-orange shadow-glow'
                      : 'bg-construction-gray/40 hover:bg-construction-orange/60'
                  }`}></div>
                  
                  {/* Active indicator ring */}
                  {index === activeIndex && (
                    <div className="absolute inset-0 w-4 h-4 rounded-full border-2 border-construction-orange animate-glow-pulse"></div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Side Elements for 3D Effect */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 opacity-30">
            <div className="w-32 h-64 bg-gradient-steel rounded-2xl transform rotate-12 animate-float"></div>
          </div>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 opacity-30">
            <div className="w-32 h-64 bg-gradient-accent rounded-2xl transform -rotate-12 animate-float" style={{animationDelay: '3s'}}></div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ClientsSlider;