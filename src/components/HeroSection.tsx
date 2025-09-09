const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img 
          src="" 
          alt="Inclusão Digital Background" 
          className="w-full h-full object-cover"
          onError={(e) => {
            e.currentTarget.outerHTML = '<div class="w-full h-full bg-gradient-to-br from-primary to-accent"></div>';
          }}
        />
      </div>
      
      {/* Background overlay */}
      <div className="absolute inset-0 bg-hero-overlay"></div>
      
      <div className="relative z-10 container mx-auto px-4 py-32 lg:py-48">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-8">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              Inclusão Digital
            </h1>
            <p className="text-lg lg:text-xl leading-relaxed opacity-90">
              A importância da inclusão digital para idosos está em ampliar sua autonomia, facilitar o acesso a serviços e fortalecer vínculos sociais. 
              Ela contribui para a qualidade de vida, reduz o isolamento e garante maior participação no mundo moderno.
            </p>
          </div>
          
          <div className="flex justify-center lg:justify-end">
            <div className="w-80 h-80 lg:w-96 lg:h-96 bg-white/10 rounded-2xl border border-white/20 flex items-center justify-center backdrop-blur-sm">
              <img 
                src="" 
                alt="VR Headset Technology" 
                className="w-full h-full object-cover rounded-2xl"
                onError={(e) => {
                  e.currentTarget.outerHTML = '<div class="w-full h-full rounded-2xl bg-white/5 flex items-center justify-center text-white/50 text-lg">VR Image Placeholder</div>';
                }}
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;