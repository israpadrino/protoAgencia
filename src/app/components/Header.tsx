import { Button } from "./ui/button";
import { Plane, Menu, X } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
              <Plane className="w-4 h-4 text-white" />
            </div>
            <span className="text-xl tracking-tight bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              WanderPack
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#packs" className="text-foreground hover:text-blue-600 transition-colors">
              Packs de Viaje
            </a>
            <a href="#community" className="text-foreground hover:text-blue-600 transition-colors">
              Comunidad
            </a>
            <a href="#about" className="text-foreground hover:text-blue-600 transition-colors">
              Nosotros
            </a>
            <a href="#contact" className="text-foreground hover:text-blue-600 transition-colors">
              Contacto
            </a>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="text-foreground hover:text-blue-600">
              Iniciar Sesión
            </Button>
            <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white">
              Únete Ahora
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-4">
              <a href="#packs" className="text-foreground hover:text-blue-600 transition-colors">
                Packs de Viaje
              </a>
              <a href="#community" className="text-foreground hover:text-blue-600 transition-colors">
                Comunidad
              </a>
              <a href="#about" className="text-foreground hover:text-blue-600 transition-colors">
                Nosotros
              </a>
              <a href="#contact" className="text-foreground hover:text-blue-600 transition-colors">
                Contacto
              </a>
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="ghost" className="text-foreground hover:text-blue-600 justify-start">
                  Iniciar Sesión
                </Button>
                <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white justify-start">
                  Únete Ahora
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}