import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
            <span className="text-primary-foreground font-bold">🏠</span>
          </div>
          <span className="text-xl font-semibold text-foreground">Inclusão Digital</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-foreground hover:text-primary transition-colors">Modellen</a>
          <a href="#" className="text-foreground hover:text-primary transition-colors">Kopen</a>
          <a href="#" className="text-foreground hover:text-primary transition-colors">Huren</a>
          <a href="#" className="text-foreground hover:text-primary transition-colors">Nieuws</a>
          <Button variant="outline" className="bg-muted hover:bg-tech-card-hover">
            Contact
          </Button>
        </nav>
        
        {/* Mobile menu button */}
        <button className="md:hidden">
          <span className="sr-only">Menu</span>
          <div className="w-6 h-6 flex flex-col justify-center space-y-1">
            <div className="w-full h-0.5 bg-foreground"></div>
            <div className="w-full h-0.5 bg-foreground"></div>
            <div className="w-full h-0.5 bg-foreground"></div>
          </div>
        </button>
      </div>
    </header>
  );
};

export default Header;