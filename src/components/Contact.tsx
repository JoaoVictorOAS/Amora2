import { MapPin, Phone, Mail, Clock, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contato" className="py-20 px-4 bg-gradient-to-br from-muted/30 via-background to-accent/20">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
            Entre em Contato
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Estamos prontos para atender você e sua família
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="space-y-6 animate-fade-in">
            <div className="bg-card rounded-3xl p-6 shadow-lg border border-border/50 hover:shadow-xl transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary mb-2">Endereço</h3>
                  <p className="text-muted-foreground">
                    Em breve divulgaremos nosso endereço
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-3xl p-6 shadow-lg border border-border/50 hover:shadow-xl transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary mb-2">Telefone</h3>
                  <p className="text-muted-foreground">
                    Entre em contato pelo Instagram
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-3xl p-6 shadow-lg border border-border/50 hover:shadow-xl transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary mb-2">Horário de Atendimento</h3>
                  <p className="text-muted-foreground">
                    Segunda a Sexta: 8h às 18h
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center space-y-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="bg-gradient-to-br from-primary to-secondary rounded-3xl p-8 shadow-xl text-white">
              <h3 className="text-2xl font-bold mb-4">Siga-nos no Instagram</h3>
              <p className="mb-6 opacity-90">
                Acompanhe nosso trabalho, dicas e novidades sobre desenvolvimento infantil
              </p>
              <Button 
                asChild
                size="lg"
                className="w-full bg-white text-primary hover:bg-white/90 rounded-2xl font-medium py-6 shadow-lg transition-all duration-300 hover:scale-105"
              >
                <a 
                  href="https://www.instagram.com/amora.clinica/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center"
                >
                  <Instagram className="mr-2 h-5 w-5" />
                  @amora.clinica
                </a>
              </Button>
            </div>

            <div className="bg-card rounded-3xl p-6 shadow-lg border border-border/50 hover:shadow-xl transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary mb-2">E-mail</h3>
                  <p className="text-muted-foreground">
                    contato@amoraclinica.com.br
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
