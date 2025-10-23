<<<<<<< HEAD
import { Brain, Hand, Heart, Activity, Users, BookOpen, Utensils, Palette, Waves, Music, Sparkles, MessageCircle } from "lucide-react";
import { Card } from "@/components/ui/card";

const Specialties = () => {
  const specialties = [
    {
      icon: MessageCircle,
      title: "Fonoaudiologia",
      description: "Prompt, Pecs, TD Snap, Pood"
    },
    {
      icon: Hand,
      title: "Terapia Ocupacional",
      description: "Integração Sensorial"
    },
    {
      icon: Brain,
      title: "Psicologia ABA",
      description: "Análise do Comportamento Aplicada"
    },
    {
      icon: Activity,
      title: "Fisioterapia",
      description: "Desenvolvimento motor e reabilitação"
    },
    {
      icon: Users,
      title: "Psicomotricidade",
      description: "Coordenação e movimento"
    },
    {
      icon: BookOpen,
      title: "Psicopedagogia",
      description: "Aprendizagem e desenvolvimento"
    },
    {
      icon: Utensils,
      title: "Nutrição Sensorial",
      description: "Alimentação e seletividade"
    },
    {
      icon: Palette,
      title: "Arteterapia",
      description: "Expressão através da arte"
    },
    {
      icon: Waves,
      title: "Hidroterapia",
      description: "Terapia aquática"
    },
    {
      icon: Music,
      title: "Musicoterapia",
      description: "Desenvolvimento através da música"
    },
    {
      icon: Sparkles,
      title: "Snoezelen",
      description: "Estimulação multissensorial"
    },
    {
      icon: Heart,
      title: "Habilidades Sociais",
      description: "Interação e comunicação"
    }
  ];

  return (
    <section id="especialidades" className="py-20 px-4 bg-gradient-to-br from-accent/10 via-background to-muted/20">
      <div className="container max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
            Nossas Especialidades
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Oferecemos uma ampla gama de terapias especializadas para atender todas as suas necessidades
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {specialties.map((specialty, index) => (
            <Card 
              key={index}
              className="p-6 rounded-3xl bg-card hover:bg-accent/5 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border-2 border-border/50 hover:border-primary/30 animate-fade-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-md">
                  <specialty.icon className="h-7 w-7 text-white" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-primary">{specialty.title}</h3>
                  <p className="text-sm text-muted-foreground">{specialty.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specialties;
=======
import { Brain, Hand, Heart, Activity, Users, BookOpen, Utensils, Palette, Waves, Music, Sparkles, MessageCircle } from "lucide-react";
import { Card } from "@/components/ui/card";

const Specialties = () => {
  const specialties = [
    {
      icon: MessageCircle,
      title: "Fonoaudiologia",
      description: "Prompt, Pecs, TD Snap, Pood"
    },
    {
      icon: Hand,
      title: "Terapia Ocupacional",
      description: "Integração Sensorial"
    },
    {
      icon: Brain,
      title: "Psicologia ABA",
      description: "Análise do Comportamento Aplicada"
    },
    {
      icon: Activity,
      title: "Fisioterapia",
      description: "Desenvolvimento motor e reabilitação"
    },
    {
      icon: Users,
      title: "Psicomotricidade",
      description: "Coordenação e movimento"
    },
    {
      icon: BookOpen,
      title: "Psicopedagogia",
      description: "Aprendizagem e desenvolvimento"
    },
    {
      icon: Utensils,
      title: "Nutrição Sensorial",
      description: "Alimentação e seletividade"
    },
    {
      icon: Palette,
      title: "Arteterapia",
      description: "Expressão através da arte"
    },
    {
      icon: Waves,
      title: "Hidroterapia",
      description: "Terapia aquática"
    },
    {
      icon: Music,
      title: "Musicoterapia",
      description: "Desenvolvimento através da música"
    },
    {
      icon: Sparkles,
      title: "Snoezelen",
      description: "Estimulação multissensorial"
    },
    {
      icon: Heart,
      title: "Habilidades Sociais",
      description: "Interação e comunicação"
    }
  ];

  return (
    <section id="especialidades" className="py-20 px-4 bg-gradient-to-br from-accent/10 via-background to-muted/20">
      <div className="container max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
            Nossas Especialidades
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Oferecemos uma ampla gama de terapias especializadas para atender todas as suas necessidades
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {specialties.map((specialty, index) => (
            <Card 
              key={index}
              className="p-6 rounded-3xl bg-card hover:bg-accent/5 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border-2 border-border/50 hover:border-primary/30 animate-fade-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-md">
                  <specialty.icon className="h-7 w-7 text-white" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-primary">{specialty.title}</h3>
                  <p className="text-sm text-muted-foreground">{specialty.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specialties;
>>>>>>> ae4489bf7c2729cbd68fca45eab81dd39a2f427f
