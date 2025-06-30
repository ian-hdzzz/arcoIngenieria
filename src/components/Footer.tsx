
import { Mail, Phone, MapPin } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex-shrink-0 mb-10">
             <Link to="/" className="text-2xl font-bold text-blue-400">
                          ARCO
                          <span className="text-white ml-1">Ingeniería</span>
                        </Link>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Empresa queretana especializada en construcción de obra civil, desarrollo inmobiliario y proyectos ejecutivos integrales desde 2010.
            </p>
            <p className="text-gray-300 text-sm">
              Construyendo relaciones a largo plazo con nuestros clientes, superando expectativas en cada proyecto.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Servicios</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#servicios" className="hover:text-blue-400 transition-colors">Obra Civil</a></li>
              <li><a href="#servicios" className="hover:text-blue-400 transition-colors">Construcción Residencial</a></li>
              <li><a href="#servicios" className="hover:text-blue-400 transition-colors">Naves Industriales</a></li>
              <li><a href="#servicios" className="hover:text-blue-400 transition-colors">Proyectos Ejecutivos</a></li>
              <li><a href="#servicios" className="hover:text-blue-400 transition-colors">Gestión Inmobiliaria</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-10 h-10 text-blue-400" />
                <span className="text-gray-300">ELVIRA QUINTANA #435 COLONIA LA JOYA 2ª SECCIÓN QUERÉTARO, QRO. C.P. 76180</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">+52 (442) 135-4334</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">luisponce@arco-ingenieria.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Arco Ingeniería y Diseño. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                Política de Privacidad
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                Términos de Servicio
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
