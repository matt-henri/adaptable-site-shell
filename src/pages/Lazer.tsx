import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Lazer = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold text-center mb-8 text-foreground">
            Lazer Digital
          </h1>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-muted-foreground text-center mb-12">
              Conteúdo sobre lazer digital será adicionado aqui.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-xl font-semibold mb-4">YouTube</h3>
                <p className="text-muted-foreground">Conteúdo a ser desenvolvido...</p>
              </div>
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-xl font-semibold mb-4">Jogos Online</h3>
                <p className="text-muted-foreground">Conteúdo a ser desenvolvido...</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Lazer;