import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const TechnologySection = () => {
  const techCategories = [
    {
      title: "USO BÁSICO DO CELULAR",
      href: "/uso-basico",
      description: "Aprenda as funções essenciais do smartphone"
    },
    {
      title: "SEGURANÇA DIGITAL",
      href: "/seguranca",
      description: "Proteja-se contra golpes e ameaças online"
    },
    {
      title: "BANCOS DIGITAIS",
      href: "/bancos",
      description: "Use aplicativos bancários com segurança"
    },
    {
      title: "REDES SOCIAIS",
      href: "/redes-sociais",
      description: "Conecte-se com familiares e amigos"
    },
    {
      title: "LAZER DIGITAL",
      href: "/lazer",
      description: "Entretenimento e diversão online"
    },
    {
      title: "SAÚDE DIGITAL",
      href: "/saude",
      description: "Aplicativos para cuidar da sua saúde"
    }
  ];

  return (
    <section className="py-20 bg-section-dark relative overflow-hidden">
      {/* Background image placeholder */}
      <div className="absolute inset-0">
        <img 
          src="" 
          alt="Person using technology background" 
          className="w-full h-full object-cover opacity-20"
          onError={(e) => {
            e.currentTarget.style.display = 'none';
          }}
        />
      </div>
      <div className="absolute inset-0 bg-section-dark/80"></div>
      
      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Introdução à Tecnologia
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {techCategories.map((category, index) => (
            <Link key={index} to={category.href} className="block group">
              <Card className="bg-tech-card hover:bg-tech-card-hover transition-all duration-300 transform group-hover:scale-105 group-hover:shadow-xl border-0">
                <CardContent className="p-8 text-center">
                  <h3 className="text-lg font-semibold text-primary mb-3 group-hover:text-accent transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {category.description}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;