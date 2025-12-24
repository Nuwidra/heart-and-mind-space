import { Heart, Mail, Phone, MapPin, Instagram, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Heart className="w-6 h-6 text-rose" />
              <span className="font-serif text-xl font-semibold">Psic. Ingrid Rojas</span>
            </div>
            <p className="text-background/70 text-sm">
              Acompañamiento profesional para tu bienestar emocional. 
              Tu salud mental importa.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-serif font-semibold text-lg">Enlaces Rápidos</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li><a href="#temas" className="hover:text-background transition-colors">Temas de Bienestar</a></li>
              <li><a href="#paquetes" className="hover:text-background transition-colors">Paquetes</a></li>
              <li><a href="#sobre-mi" className="hover:text-background transition-colors">Sobre Mí</a></li>
              <li><a href="#faq" className="hover:text-background transition-colors">Preguntas Frecuentes</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-serif font-semibold text-lg">Contacto</h4>
            <ul className="space-y-3 text-sm text-background/70">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-rose" />
                <span>(Pendiente)</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-rose" />
                <span>(Pendiente)</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-rose" />
                <span>(Pendiente)</span>
              </li>
            </ul>
            
            {/* Social */}
            <div className="flex gap-4 pt-2">
              <a href="#" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-rose/20 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-rose/20 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-background/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-background/50">
            <p>© 2024 Psicóloga Ingrid Rojas. Todos los derechos reservados.</p>
            <p className="italic">
              Este servicio es informativo y de acompañamiento, y no sustituye una consulta profesional.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
