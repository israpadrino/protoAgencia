import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Plane, Instagram, Twitter, Facebook, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      <div className="border-b border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl sm:text-3xl mb-4">
              ¿Listo para tu próxima{" "}
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                aventura?
              </span>
            </h3>
            <p className="text-gray-300 mb-6">
              Suscríbete y recibe ofertas exclusivas, destinos únicos y consejos de viaje directamente en tu email.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Tu email"
                className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
              />
              <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white">
                Suscribirse
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <Plane className="w-4 h-4 text-white" />
              </div>
              <span className="text-xl tracking-tight bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                WanderPack
              </span>
            </div>
            <p className="text-gray-300 mb-4 max-w-xs">
              Creamos experiencias de viaje únicas para jóvenes aventureros. Todo incluido, precios transparentes, aventuras increíbles.
            </p>
            <div className="flex space-x-3">
              <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white p-2">
                <Instagram className="w-4 h-4" />
              </Button>
              <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white p-2">
                <Twitter className="w-4 h-4" />
              </Button>
              <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white p-2">
                <Facebook className="w-4 h-4" />
              </Button>
              <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white p-2">
                <Mail className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Destinos */}
          <div>
            <h4 className="text-lg mb-4">Destinos Populares</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">Bali, Indonesia</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Japón</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Patagonia</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Tailandia</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Costa Rica</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Marruecos</a></li>
            </ul>
          </div>

          {/* Servicios */}
          <div>
            <h4 className="text-lg mb-4">Servicios</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">Packs de Viaje</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Comunidad</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Vuelos</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Alojamiento</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Experiencias</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Seguro de Viaje</a></li>
            </ul>
          </div>

          {/* Soporte */}
          <div>
            <h4 className="text-lg mb-4">Soporte</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">Centro de Ayuda</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contactar</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Políticas</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Términos de Uso</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacidad</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog de Viajes</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center text-gray-400 text-sm">
            <div>
              © 2024 WanderPack. Todos los derechos reservados.
            </div>
            <div className="mt-4 sm:mt-0">
              Hecho con ❤️ para viajeros aventureros
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}