import { Button } from "@/components/ui/button";

const CommunicationSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              Comunicação Digital
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              O WhatsApp é importante para a comunicação porque permite trocar mensagens, áudios e vídeos 
              de forma rápida e gratuita. Para os idosos, ele facilita o contato com familiares e amigos, 
              reduzindo o isolamento e aproximando gerações.
            </p>
            <Button 
              variant="outline" 
              size="lg"
              className="bg-tech-card hover:bg-tech-card-hover border-primary text-primary hover:text-accent-foreground hover:bg-accent"
            >
              Click aqui e aprenda usar
            </Button>
          </div>
          
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-96 lg:w-96 lg:h-[500px] bg-muted rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="" 
                  alt="Hands holding smartphone with app interface" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.outerHTML = '<div class="w-full h-full bg-tech-card flex items-center justify-center text-muted-foreground text-lg">Phone Image Placeholder</div>';
                  }}
                />
              </div>
              {/* Floating elements for visual interest */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-accent rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-primary rounded-full animate-pulse delay-300"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunicationSection;