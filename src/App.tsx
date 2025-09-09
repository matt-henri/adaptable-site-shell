import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import UsoBasico from "./pages/UsoBasico";
import Seguranca from "./pages/Seguranca";
import Bancos from "./pages/Bancos";
import RedesSociais from "./pages/RedesSociais";
import Lazer from "./pages/Lazer";
import Saude from "./pages/Saude";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/uso-basico" element={<UsoBasico />} />
          <Route path="/seguranca" element={<Seguranca />} />
          <Route path="/bancos" element={<Bancos />} />
          <Route path="/redes-sociais" element={<RedesSociais />} />
          <Route path="/lazer" element={<Lazer />} />
          <Route path="/saude" element={<Saude />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
