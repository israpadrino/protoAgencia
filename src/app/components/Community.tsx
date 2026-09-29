import { Card, CardContent, CardHeader } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { MessageCircle, MapPin, Calendar, Users, Heart, Share2 } from "lucide-react";

const communityPosts = [
  {
    id: 1,
    user: {
      name: "Ana M.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b72ddfcc?w=100&h=100&fit=crop&crop=face",
      location: "Madrid, España"
    },
    destination: "Bali, Indonesia",
    dates: "15-22 Marzo",
    message: "¡Busco compañeros de viaje para explorar templos y hacer surf! 🏄‍♀️ Tengo experiencia viajando y me encanta conocer gente nueva.",
    tags: ["Surf", "Templos", "Aventura"],
    likes: 24,
    replies: 8,
    timestamp: "Hace 2 horas"
  },
  {
    id: 2,
    user: {
      name: "Carlos R.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      location: "Barcelona, España"
    },
    destination: "Tokio, Japón",
    dates: "1-10 Abril",
    message: "Primera vez en Japón! 🇯🇵 Me gustaría encontrar gente para compartir experiencias gastronómicas y visitar mercados locales.",
    tags: ["Gastronomía", "Cultura", "Fotografía"],
    likes: 18,
    replies: 12,
    timestamp: "Hace 5 horas"
  },
  {
    id: 3,
    user: {
      name: "María L.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      location: "Valencia, España"
    },
    destination: "Patagonia, Argentina",
    dates: "20-30 Mayo",
    message: "Senderismo en la Patagonia 🏔️ Busco compañeros experimentados en trekking para hacer la ruta completa. ¡Será épico!",
    tags: ["Senderismo", "Naturaleza", "Fotografía"],
    likes: 31,
    replies: 15,
    timestamp: "Hace 1 día"
  }
];

const travelMeetups = [
  {
    id: 1,
    title: "Encuentro de Viajeros - Madrid",
    date: "Este Sábado, 19:00",
    location: "Café Central, Madrid",
    attendees: 24,
    image: "https://images.unsplash.com/photo-1621314450340-1ff21fa983e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncm91cCUyMGZyaWVuZHMlMjB0cmF2ZWxpbmclMjB0b2dldGhlcnxlbnwxfHx8fDE3NTg5OTgwODV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: 2,
    title: "Intercambio de Historias de Viaje",
    date: "Próximo Miércoles, 20:30",
    location: "Online - Zoom",
    attendees: 45,
    image: "https://images.unsplash.com/photo-1621314450340-1ff21fa983e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncm91cCUyMGZyaWVuZHMlMjB0cmF2ZWxpbmclMjB0b2dldGhlcnxlbnwxfHx8fDE3NTg5OTgwODV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  }
];

export function Community() {
  return (
    <section id="community" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-6">
            Conecta con{" "}
            <span className="bg-gradient-to-r from-pink-500 to-violet-600 bg-clip-text text-transparent">
              Viajeros Afines
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Encuentra compañeros de aventura, comparte experiencias y crea conexiones 
            que durarán toda la vida.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Community Feed */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl">Buscando Compañeros</h3>
              <Button className="bg-gradient-to-r from-pink-500 to-violet-600 hover:from-pink-600 hover:to-violet-700 text-white">
                Crear Publicación
              </Button>
            </div>

            <div className="space-y-6">
              {communityPosts.map((post) => (
                <Card key={post.id} className="hover:shadow-lg transition-shadow border-0 bg-gray-50">
                  <CardHeader className="pb-3">
                    <div className="flex items-start space-x-3">
                      <Avatar>
                        <AvatarImage src={post.user.avatar} alt={post.user.name} />
                        <AvatarFallback>{post.user.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2">
                          <h4 className="font-medium">{post.user.name}</h4>
                          <span className="text-sm text-muted-foreground">•</span>
                          <span className="text-sm text-muted-foreground">{post.timestamp}</span>
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground mt-1">
                          <MapPin className="w-3 h-3 mr-1" />
                          {post.user.location}
                        </div>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="pt-0">
                    <div className="mb-3">
                      <div className="flex items-center space-x-4 text-sm bg-white rounded-lg p-3">
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 text-blue-500 mr-1" />
                          <span className="font-medium">{post.destination}</span>
                        </div>
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 text-green-500 mr-1" />
                          <span>{post.dates}</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-sm mb-3 leading-relaxed">{post.message}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          #{tag}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center space-x-4">
                        <button className="flex items-center space-x-1 hover:text-red-500 transition-colors">
                          <Heart className="w-4 h-4" />
                          <span>{post.likes}</span>
                        </button>
                        <button className="flex items-center space-x-1 hover:text-blue-500 transition-colors">
                          <MessageCircle className="w-4 h-4" />
                          <span>{post.replies}</span>
                        </button>
                      </div>
                      <button className="flex items-center space-x-1 hover:text-blue-500 transition-colors">
                        <Share2 className="w-4 h-4" />
                        <span>Compartir</span>
                      </button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-8">
              <Button variant="outline" size="lg">
                Cargar Más Publicaciones
              </Button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Upcoming Events */}
            <Card className="border-0 bg-gradient-to-br from-blue-50 to-purple-50">
              <CardHeader>
                <h4 className="text-lg">Próximos Eventos</h4>
              </CardHeader>
              <CardContent className="pt-0 space-y-4">
                {travelMeetups.map((meetup) => (
                  <div key={meetup.id} className="bg-white rounded-lg p-4">
                    <h5 className="font-medium mb-2">{meetup.title}</h5>
                    <div className="space-y-1 text-sm text-muted-foreground mb-3">
                      <div className="flex items-center">
                        <Calendar className="w-3 h-3 mr-2" />
                        {meetup.date}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-3 h-3 mr-2" />
                        {meetup.location}
                      </div>
                      <div className="flex items-center">
                        <Users className="w-3 h-3 mr-2" />
                        {meetup.attendees} personas van
                      </div>
                    </div>
                    <Button size="sm" className="w-full" variant="outline">
                      Unirse
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Community Stats */}
            <Card className="border-0 bg-gradient-to-br from-pink-50 to-yellow-50">
              <CardHeader>
                <h4 className="text-lg">Nuestra Comunidad</h4>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="text-2xl text-pink-600 mb-1">2,847</div>
                    <div className="text-sm text-muted-foreground">Viajeros activos</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl text-blue-600 mb-1">156</div>
                    <div className="text-sm text-muted-foreground">Conexiones esta semana</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl text-green-600 mb-1">89</div>
                    <div className="text-sm text-muted-foreground">Países representados</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}