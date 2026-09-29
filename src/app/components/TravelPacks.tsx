import { Card, CardContent, CardHeader } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Plane, MapPin, Calendar, Users, Star, Clock } from "lucide-react";

const travelPacks = [
  {
    id: 1,
    title: "Paraíso Tropical en Bali",
    location: "Bali, Indonesia",
    duration: "7 días / 6 noches",
    price: 1299,
    originalPrice: 1599,
    rating: 4.9,
    reviews: 128,
    image: "https://images.unsplash.com/photo-1743230405369-c29079014eac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMGJlYWNoJTIwdmFjYXRpb24lMjBwYXJhZGlzZXxlbnwxfHx8fDE3NTg5OTgwODR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    features: ["Vuelos incluidos", "Hotel 4★", "Desayuno", "Excursión a templos"],
    popular: true
  },
  {
    id: 2,
    title: "Aventura Alpina",
    location: "Suiza",
    duration: "5 días / 4 noches",
    price: 1899,
    originalPrice: 2299,
    rating: 4.8,
    reviews: 96,
    image: "https://images.unsplash.com/photo-1609373066983-cee8662ea93f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMGhpa2luZyUyMGFkdmVudHVyZSUyMHRyYXZlbHxlbnwxfHx8fDE3NTg5OTgwODV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    features: ["Vuelos incluidos", "Chalet tradicional", "Todas las comidas", "Actividades de montaña"],
    popular: false
  },
  {
    id: 3,
    title: "Escapada Urbana",
    location: "Nueva York, USA",
    duration: "4 días / 3 noches",
    price: 999,
    originalPrice: 1199,
    rating: 4.7,
    reviews: 204,
    image: "https://images.unsplash.com/photo-1652176862396-99e525e9f87b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXR5JTIwc2t5bGluZSUyMHVyYmFuJTIwdHJhdmVsfGVufDF8fHx8MTc1ODk3MTMxMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    features: ["Vuelos incluidos", "Hotel céntrico 3★", "Tour por la ciudad", "Broadway show"],
    popular: false
  }
];

export function TravelPacks() {
  return (
    <section id="packs" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-6">
            Nuestros{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Packs Estrella
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experiencias únicas, precios transparentes, todo incluido. 
            Porque tu único trabajo es disfrutar la aventura.
          </p>
        </div>

        {/* Packs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {travelPacks.map((pack) => (
            <Card key={pack.id} className="group hover:shadow-2xl transition-all duration-300 border-0 bg-white overflow-hidden">
              {pack.popular && (
                <div className="absolute top-4 left-4 z-10">
                  <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white border-0">
                    ⭐ Más Popular
                  </Badge>
                </div>
              )}
              
              <div className="relative">
                <ImageWithFallback
                  src={pack.image}
                  alt={pack.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl mb-2 group-hover:text-blue-600 transition-colors">
                      {pack.title}
                    </h3>
                    <div className="flex items-center text-muted-foreground mb-2">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span className="text-sm">{pack.location}</span>
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <Clock className="w-4 h-4 mr-1" />
                      <span className="text-sm">{pack.duration}</span>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                    <span className="text-sm">{pack.rating}</span>
                    <span className="text-xs text-muted-foreground ml-1">({pack.reviews})</span>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="pt-0">
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {pack.features.map((feature, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-2xl text-green-600">€{pack.price}</span>
                      <span className="text-sm text-muted-foreground line-through">€{pack.originalPrice}</span>
                    </div>
                    <span className="text-xs text-muted-foreground">por persona</span>
                  </div>
                  <Badge variant="outline" className="text-green-600 border-green-600">
                    -{Math.round(((pack.originalPrice - pack.price) / pack.originalPrice) * 100)}%
                  </Badge>
                </div>

                <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white">
                  Ver Detalles
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="border-blue-500 text-blue-600 hover:bg-blue-50">
            Ver Todos los Destinos
          </Button>
        </div>
      </div>
    </section>
  );
}