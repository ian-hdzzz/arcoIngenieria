
import { useState } from 'react';

const Cotizador = () => {
  const [formData, setFormData] = useState({
    tipoProyecto: '',
    numCuartos: '',
    numBanos: '',
    metrosCuadrados: '',
    zona: '',
    presupuesto: '',
    tipoTerreno: '',
    timeline: '',
    nombre: '',
    email: '',
    telefono: '',
    comentarios: ''
  });

  const [estimatedCost, setEstimatedCost] = useState<number | null>(null);

  const zonas = [
    'Centro Histórico',
    'Juriquilla',
    'Corregidora',
    'El Refugio',
    'Zibatá',
    'Santa Fe',
    'Antea',
    'Valle Dorado',
    'Otra zona'
  ];

  const presupuestoRangos = [
    'Menos de $500,000',
    '$500,000 - $1,000,000',
    '$1,000,000 - $2,000,000',
    '$2,000,000 - $3,000,000',
    '$3,000,000 - $5,000,000',
    'Más de $5,000,000'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const calculateEstimate = () => {
    const metros = parseInt(formData.metrosCuadrados) || 0;
    const cuartos = parseInt(formData.numCuartos) || 1;
    
    let costoBase = 0;
    
    // Costo por tipo de proyecto
    switch (formData.tipoProyecto) {
      case 'vivienda-individual':
        costoBase = metros * 8000; // $8,000 por m²
        break;
      case 'remodelacion':
        costoBase = metros * 5000; // $5,000 por m²
        break;
      case 'ampliacion':
        costoBase = metros * 6000; // $6,000 por m²
        break;
      default:
        costoBase = metros * 7000;
    }
    
    // Ajuste por zona
    const multiplicadorZona = ['Juriquilla', 'Zibatá', 'Antea'].includes(formData.zona) ? 1.2 : 1;
    costoBase *= multiplicadorZona;
    
    // Ajuste por número de cuartos
    const ajusteCuartos = cuartos > 3 ? 1.1 : 1;
    costoBase *= ajusteCuartos;
    
    setEstimatedCost(Math.round(costoBase));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    calculateEstimate();
    
    // Aquí enviarías los datos al backend
    console.log('Datos del formulario:', formData);
  };

  return (
    <div className="bg-black text-white pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">
            Cotizador <span className="text-blue-400">Inteligente</span>
          </h1>
          <p className="text-xl text-gray-400 mb-8">
            Diseñado especialmente para parejas jóvenes y recién casados
          </p>
          <p className="text-lg text-gray-500">
            Obtén una estimación personalizada para tu proyecto de construcción en segundos
          </p>
        </div>
      </section>

      {/* Quote Form */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Project Type */}
            <div className="bg-black/50 p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-blue-400 mb-6">Tipo de Proyecto</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { value: 'vivienda-individual', label: 'Casa Nueva', desc: 'Construcción desde cero' },
                  { value: 'remodelacion', label: 'Remodelación', desc: 'Renovar espacios existentes' },
                  { value: 'ampliacion', label: 'Ampliación', desc: 'Agregar nuevos espacios' }
                ].map((option) => (
                  <label key={option.value} className="cursor-pointer">
                    <input
                      type="radio"
                      name="tipoProyecto"
                      value={option.value}
                      checked={formData.tipoProyecto === option.value}
                      onChange={handleInputChange}
                      className="sr-only"
                    />
                    <div className={`p-4 border-2 rounded-lg text-center transition-all duration-300 ${
                      formData.tipoProyecto === option.value 
                        ? 'border-blue-400 bg-blue-400/20' 
                        : 'border-gray-600 hover:border-gray-500'
                    }`}>
                      <h3 className="font-semibold text-white">{option.label}</h3>
                      <p className="text-sm text-gray-400 mt-1">{option.desc}</p>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Property Details */}
            <div className="bg-black/50 p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-blue-400 mb-6">Detalles del Proyecto</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white font-medium mb-2">Número de Cuartos</label>
                  <select
                    name="numCuartos"
                    value={formData.numCuartos}
                    onChange={handleInputChange}
                    className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-400"
                    required
                  >
                    <option value="">Seleccionar</option>
                    <option value="1">1 cuarto</option>
                    <option value="2">2 cuartos</option>
                    <option value="3">3 cuartos</option>
                    <option value="4">4 cuartos</option>
                    <option value="5">5+ cuartos</option>
                  </select>
                </div>

                <div>
                  <label className="block text-white font-medium mb-2">Número de Baños</label>
                  <select
                    name="numBanos"
                    value={formData.numBanos}
                    onChange={handleInputChange}
                    className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-400"
                    required
                  >
                    <option value="">Seleccionar</option>
                    <option value="1">1 baño</option>
                    <option value="2">2 baños</option>
                    <option value="3">3 baños</option>
                    <option value="4">4+ baños</option>
                  </select>
                </div>

                <div>
                  <label className="block text-white font-medium mb-2">Metros Cuadrados</label>
                  <input
                    type="number"
                    name="metrosCuadrados"
                    value={formData.metrosCuadrados}
                    onChange={handleInputChange}
                    placeholder="Ej: 120"
                    className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-400"
                    required
                  />
                </div>

                <div>
                  <label className="block text-white font-medium mb-2">Zona en Querétaro</label>
                  <select
                    name="zona"
                    value={formData.zona}
                    onChange={handleInputChange}
                    className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-400"
                    required
                  >
                    <option value="">Seleccionar zona</option>
                    {zonas.map((zona) => (
                      <option key={zona} value={zona}>{zona}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Budget and Timeline */}
            <div className="bg-black/50 p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-blue-400 mb-6">Presupuesto y Tiempos</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white font-medium mb-2">Presupuesto Estimado</label>
                  <select
                    name="presupuesto"
                    value={formData.presupuesto}
                    onChange={handleInputChange}
                    className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-400"
                    required
                  >
                    <option value="">Seleccionar rango</option>
                    {presupuestoRangos.map((rango) => (
                      <option key={rango} value={rango}>{rango}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-white font-medium mb-2">Tiempo Deseado</label>
                  <select
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleInputChange}
                    className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-400"
                    required
                  >
                    <option value="">Seleccionar</option>
                    <option value="3-6-meses">3-6 meses</option>
                    <option value="6-12-meses">6-12 meses</option>
                    <option value="12-18-meses">12-18 meses</option>
                    <option value="mas-18-meses">Más de 18 meses</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-black/50 p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-blue-400 mb-6">Información de Contacto</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white font-medium mb-2">Nombre Completo</label>
                  <input
                    type="text"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleInputChange}
                    placeholder="Tu nombre completo"
                    className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-400"
                    required
                  />
                </div>

                <div>
                  <label className="block text-white font-medium mb-2">Teléfono</label>
                  <input
                    type="tel"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleInputChange}
                    placeholder="442-XXX-XXXX"
                    className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-400"
                    required
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-white font-medium mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="tu@email.com"
                    className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-400"
                    required
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-white font-medium mb-2">Comentarios Adicionales</label>
                  <textarea
                    name="comentarios"
                    value={formData.comentarios}
                    onChange={handleInputChange}
                    placeholder="Cuéntanos más sobre tu proyecto..."
                    rows={4}
                    className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-400"
                  ></textarea>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105"
              >
                Obtener Cotización
              </button>
            </div>
          </form>

          {/* Estimated Cost Display */}
          {estimatedCost && (
            <div className="mt-12 bg-gradient-to-r from-blue-600 to-blue-800 p-8 rounded-lg text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Estimación Preliminar</h3>
              <div className="text-4xl font-bold text-white mb-4">
                ${estimatedCost.toLocaleString('es-MX')} MXN
              </div>
              <p className="text-blue-100 mb-6">
                *Esta es una estimación preliminar. El costo final puede variar según especificaciones y acabados.
              </p>
              <div className="bg-white/20 p-4 rounded-lg">
                <p className="text-sm text-blue-100">
                  Nuestro equipo se pondrá en contacto contigo en las próximas 24 horas 
                  para agendar una cita y proporcionar una cotización detallada.
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Benefits for Young Couples */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Especial para <span className="text-blue-400">Parejas Jóvenes</span>
            </h2>
            <p className="text-xl text-gray-400">
              Beneficios diseñados pensando en tu futuro
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center bg-gray-900 p-8 rounded-lg">
              <div className="w-16 h-16 bg-blue-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Financiamiento Flexible</h3>
              <p className="text-gray-400">
                Opciones de pago adaptadas a tu situación financiera actual y futura.
              </p>
            </div>

            <div className="text-center bg-gray-900 p-8 rounded-lg">
              <div className="w-16 h-16 bg-blue-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-2xl">🏠</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Diseños Modernos</h3>
              <p className="text-gray-400">
                Espacios funcionales y contemporáneos, perfectos para parejas que inician.
              </p>
            </div>

            <div className="text-center bg-gray-900 p-8 rounded-lg">
              <div className="w-16 h-16 bg-blue-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-2xl">⏰</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Entrega Rápida</h3>
              <p className="text-gray-400">
                Procesos optimizados para que puedas estrenar tu hogar lo antes posible.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cotizador;
