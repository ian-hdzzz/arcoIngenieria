import { useState, useEffect, useRef } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    asunto: '',
    mensaje: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí enviarías los datos al backend
    console.log('Datos del formulario:', formData);
    alert('¡Gracias por contactarnos! Nos pondremos en contacto contigo pronto.');
    
    // Reset form
    setFormData({
      nombre: '',
      email: '',
      telefono: '',
      asunto: '',
      mensaje: ''
    });
  };

  const contactInfo = [
    {
      icon: '📍',
      title: 'Ubicación',
      details: ['Querétaro, México', 'Centro de la ciudad'],
      link: '#'
    },
    {
      icon: '📞',
      title: 'Teléfono',
      details: ['442-XXX-XXXX', 'Lun - Vie: 9:00 - 18:00'],
      link: 'tel:442-XXX-XXXX'
    },
    {
      icon: '✉️',
      title: 'Email',
      details: ['contacto@arcoingenieria.com', 'Respuesta en 24 hrs'],
      link: 'mailto:contacto@arcoingenieria.com'
    },
    {
      icon: '⏰',
      title: 'Horarios',
      details: ['Lunes - Viernes: 9:00 - 18:00', 'Sábados: 9:00 - 14:00'],
      link: '#'
    }
  ];

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
      answer: 'Ofrecemos garantía completa en todos nuestros proyectos, respaldada por más de 14 años de experiencia.'
    }
  ];

  // Botón flotante de WhatsApp
  const whatsappNumber = '524423278984'; // Cambia por el número real
  const whatsappMessage = encodeURIComponent('¡Hola! Me gustaría recibir más información.');

  // Animaciones scroll
  const [heroRef, heroVisible] = useScrollReveal();
  const [formRef, formVisible] = useScrollReveal();
  const [faqRef, faqVisible] = useScrollReveal();
  const [ubicacionRef, ubicacionVisible] = useScrollReveal();
  const [ctaRef, ctaVisible] = useScrollReveal();

  // Calendly widget ref
  const calendlyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scriptId = 'calendly-widget-script';
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div className="bg-white text-white pt-16">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className={`relative py-40 bg-cover bg-center transition-all duration-700`}
        style={{ backgroundImage: `url(/img/img14.jpeg)` }}
      >
        <div className="absolute inset-0 bg-black/30 z-0 backdrop-blur-sm"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <h1 className="text-5xl font-bold text-white mb-6">
            <span className="text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]">Contáctanos</span>
          </h1>
          <p className="text-xl text-gray-100 mb-4">
            Estamos aquí para hacer realidad tu proyecto de construcción
          </p>
          <p className="text-lg text-gray-100">
            Obtén una consulta gratuita con nuestros expertos
          </p>
        </div>
      </section>

      {/* <div
        ref={calendlyRef}
        className="calendly-inline-widget"
        data-url="https://calendly.com/ianhdez2020/30min"
        style={{ minWidth: 320, height: 700 }}
      /> */}

      {/* Contact Form */}
      <section
        ref={formRef}
        className={`py-20 bg-gray-900 transition-all duration-700 ${formVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Envíanos un <span className="text-blue-600">Mensaje</span>
            </h2>
            <p className="text-xl text-white">
              Completa el formulario y nos pondremos en contacto contigo
            </p>
          </div>
          <form onSubmit={handleSubmit} className="bg-gray-900 p-8 rounded-lg shadow-lg shadow-black">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-white font-medium mb-2">Nombre Completo *</label>
                <input
                  type="text"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleInputChange}
                  placeholder="Tu nombre completo"
                  className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                  required
                />
              </div>

              <div>
                <label className="block text-white font-medium mb-2">Teléfono *</label>
                <input
                  type="tel"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleInputChange}
                  placeholder="442-XXX-XXXX"
                  className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-white font-medium mb-2">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="tu@email.com"
                  className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                  required
                />
              </div>

              <div>
                <label className="block text-white font-medium mb-2">Asunto *</label>
                <select
                  name="asunto"
                  value={formData.asunto}
                  onChange={handleInputChange}
                  className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                  required
                >
                  <option value="">Seleccionar asunto</option>
                  <option value="cotizacion">Solicitar cotización</option>
                  <option value="informacion">Información general</option>
                  <option value="proyecto">Consulta sobre proyecto</option>
                  <option value="seguimiento">Seguimiento de obra</option>
                  <option value="otro">Otro</option>
                </select>
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-white font-medium mb-2">Mensaje *</label>
              <textarea
                name="mensaje"
                value={formData.mensaje}
                onChange={handleInputChange}
                placeholder="Cuéntanos sobre tu proyecto o consulta..."
                rows={6}
                className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                required
              ></textarea>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105"
              >
                Enviar Mensaje
              </button>
            </div>
          </form>
        </div>
      </section>
    
      

      {/* <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-black/50 p-6 rounded-lg text-center hover:bg-black/70 transition-all duration-300">
                <div className="text-4xl mb-4">{info.icon}</div>
                <h3 className="text-xl font-bold text-blue-500 mb-3">{info.title}</h3>
                {info.details.map((detail, detailIndex) => (
                  <p key={detailIndex} className="text-gray-300 text-sm mb-1">{detail}</p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section> */}
      {/* Map Section
      <section
        ref={ubicacionRef}
        className={`py-20 bg-black transition-all duration-700 ${ubicacionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Nuestra <span className="text-blue-500 ">Ubicación</span>
            </h2>
            <p className="text-xl text-gray-500">
              Visítanos en nuestras oficinas en Querétaro
            </p>
          </div>

          <div className="bg-gray-900 p-8 rounded-lg">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">ARCO Ingeniería y Diseño</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <span className="text-blue-500 mr-3 mt-1">📍</span>
                    <div>
                      <p className="text-white font-medium">Dirección:</p>
                      <p className="text-gray-500">ELVIRA QUINTANA #435
  COLONIA LA JOYA 2ª SECCIÓN
  QUERÉTARO, QRO.
  C.P. 76180
</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <span className="text-blue-400 mr-3 mt-1">🕒</span>
                    <div>
                      <p className="text-white font-medium">Horarios de Atención:</p>
                      <p className="text-gray-400">Lunes - Viernes: 9:00 - 18:00</p>
                      <p className="text-gray-400">Sábados: 9:00 - 14:00</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <span className="text-blue-400 mr-3 mt-1">🚗</span>
                    <div>
                      <p className="text-white font-medium">Cómo llegar:</p>
                      <p className="text-gray-400">Fácil acceso desde cualquier punto de la ciudad</p>
                      <p className="text-gray-400">Estacionamiento disponible</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-800 h-64 rounded-lg flex items-center justify-center">
                <div className="w-full h-64 rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3735.4329046351786!2d-100.42609311859307!3d20.570371431890724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d34546c89d9b5f%3A0xb7d11c79bbf06e91!2sElvira%20Quintana%20435%2C%20La%20Joya%2C%2076180%20Santiago%20de%20Quer%C3%A9taro%2C%20Qro.!5e0!3m2!1ses!2smx!4v1750648010745!5m2!1ses!2smx"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Ubicación ARCO Ingeniería y Diseño"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      
      {/* Emergency Contact */}
      <section
        ref={ctaRef}
        className={`py-20 bg-arcoColorTwo from-blue-600 to-blue-800 transition-all duration-700 ${ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4">
            ¿Necesitas Atención Urgente?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Para emergencias en obra o consultas urgentes
          </p>
          <a 
            href="tel:442-XXX-XXXX" 
            className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 inline-block"
          >
            📞 Llamar Ahora
          </a>
        </div>
      </section>
      
      {/* Botón flotante de WhatsApp */}
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

export default Contacto;
