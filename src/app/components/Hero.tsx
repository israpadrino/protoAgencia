import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Search, MapPin, Calendar, Users } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1632301387009-ef882af483f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHRyYXZlbGVycyUyMGJhY2twYWNrJTIwYWR2ZW50dXJlfGVufDF8fHx8MTc1ODk5ODA4NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Young travelers with backpacks"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-purple-900/70 to-pink-900/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl mb-6 text-white leading-tight">
            Vive tu{" "}
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              próxima aventura
            </span>
            <br />
            sin preocupaciones
          </h1>
          
          <p className="text-xl sm:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto leading-relaxed">
            Packs de viaje completos con vuelos, alojamiento y experiencias únicas. 
            Todo incluido, precio transparente, aventuras increíbles.
          </p>

          {/* Search Bar */}
          <div className="bg-white/95 backdrop-blur-md rounded-2xl p-6 mb-8 shadow-2xl max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  placeholder="¿Dónde quieres ir?"
                  className="pl-10 border-gray-200 focus:border-blue-500"
                />
              </div>
              
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  type="date"
                  className="pl-10 border-gray-200 focus:border-blue-500"
                />
              </div>
              
              <div className="relative">
                <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  placeholder="Viajeros"
                  className="pl-10 border-gray-200 focus:border-blue-500"
                />
              </div>
              
              <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white h-12">
                <Search className="w-5 h-5 mr-2" />
                Buscar
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-white">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl mb-2 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                500+
              </div>
              <div className="text-gray-300">Destinos únicos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl mb-2 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                10K+
              </div>
              <div className="text-gray-300">Viajeros felices</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl mb-2 bg-gradient-to-r from-pink-400 to-red-500 bg-clip-text text-transparent">
                95%
              </div>
              <div className="text-gray-300">Satisfacción garantizada</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-yellow-400/20 rounded-full animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-pink-400/20 rounded-full animate-bounce"></div>
      <div className="absolute top-1/3 right-20 w-12 h-12 bg-blue-400/20 rounded-full animate-ping"></div>
    </section>
  );
}