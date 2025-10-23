import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import logo from "@/assets/logo-amora.png";

const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contato");
    contactSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-muted/30 via-background to-accent/20 px-4 py-20">
      <div className="container max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center space-y-8 animate-fade-in">
          <div className="w-64 md:w-80 lg:w-96 transition-transform hover:scale-105 duration-300">
            <img 
              src={logo} 
              alt="Amora Clínica Multidisciplinar" 
              className="w-full h-auto drop-shadow-xl"
            />
          </div>
          
          <div className="space-y-4 max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary">
              Bem-vindo à Amora
            </h1>
            <p className="text-xl md:text-2xl text-secondary font-medium">
              Clínica Multidisciplinar
            </p>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Cuidado especializado e acolhedor para o desenvolvimento integral. 
              Nossa equipe multidisciplinar está pronta para oferecer o melhor atendimento.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button 
              size="lg" 
              onClick={scrollToContact}
              className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all duration-300 text-white font-medium px-8 py-6 text-lg rounded-2xl shadow-lg hover:shadow-xl hover:scale-105"
            >
              <Heart className="mr-2 h-5 w-5" />
              Agende sua Consulta
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => {
                const especialidadesSection = document.getElementById("especialidades");
                especialidadesSection?.scrollIntoView({ behavior: "smooth" });
              }}
              className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-medium px-8 py-6 text-lg rounded-2xl transition-all duration-300 hover:scale-105"
            >
              Conheça Nossas Especialidades
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
