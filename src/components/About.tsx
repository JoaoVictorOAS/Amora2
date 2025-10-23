<<<<<<< HEAD
import { Heart, Users, Award } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Cuidado Humanizado",
      description: "Atendimento acolhedor e personalizado para cada paciente"
    },
    {
      icon: Users,
      title: "Equipe Multidisciplinar",
      description: "Profissionais especializados trabalhando de forma integrada"
    },
    {
      icon: Award,
      title: "Excelência",
      description: "Comprometimento com os melhores resultados terapêuticos"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-background via-muted/20 to-background">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
            Sobre a Amora
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A Amora é uma clínica multidisciplinar dedicada ao desenvolvimento e bem-estar integral. 
            Oferecemos um ambiente acolhedor com profissionais qualificados para atender suas necessidades.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div 
              key={index}
              className="bg-card rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-border/50 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-primary">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
=======
import { Heart, Users, Award } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Cuidado Humanizado",
      description: "Atendimento acolhedor e personalizado para cada paciente"
    },
    {
      icon: Users,
      title: "Equipe Multidisciplinar",
      description: "Profissionais especializados trabalhando de forma integrada"
    },
    {
      icon: Award,
      title: "Excelência",
      description: "Comprometimento com os melhores resultados terapêuticos"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-background via-muted/20 to-background">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
            Sobre a Amora
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A Amora é uma clínica multidisciplinar dedicada ao desenvolvimento e bem-estar integral. 
            Oferecemos um ambiente acolhedor com profissionais qualificados para atender suas necessidades.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div 
              key={index}
              className="bg-card rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-border/50 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-primary">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
>>>>>>> ae4489bf7c2729cbd68fca45eab81dd39a2f427f
