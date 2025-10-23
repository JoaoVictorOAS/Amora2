import { Heart, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-primary to-secondary text-white py-12 px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center space-y-6">
          <div className="space-y-2">
            <h3 className="text-2xl font-bold">Amora Clínica Multidisciplinar</h3>
            <p className="text-white/80">Cuidado especializado com amor e dedicação</p>
          </div>

          <a 
            href="https://www.instagram.com/amora.clinica/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
          >
            <Instagram className="h-6 w-6" />
            <span>@amora.clinica</span>
          </a>

          <div className="pt-6 border-t border-white/20 w-full">
            <p className="text-white/80 flex items-center justify-center gap-2">
              Feito com <Heart className="h-4 w-4 fill-current" /> pela Amora
            </p>
            <p className="text-white/60 text-sm mt-2">
              © {new Date().getFullYear()} Amora Clínica Multidisciplinar. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
