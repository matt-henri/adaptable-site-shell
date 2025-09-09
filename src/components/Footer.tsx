const Footer = () => {
  return (
    <footer className="bg-section-dark py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-white/70">
            <p>Site destinado a informação e inclusão digital</p>
          </div>
          
          <div className="flex space-x-8 text-white/70">
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
            <a href="#" className="hover:text-white transition-colors">Privacybeleid</a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-white/20 text-center text-white/50">
          <p>&copy; 2024 Inclusão Digital. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;