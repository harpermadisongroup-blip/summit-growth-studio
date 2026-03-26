import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Solutions from "./pages/Solutions";
import SolutionDetail from "./pages/SolutionDetail";
import PlatformDetail from "./pages/PlatformDetail";
import { WhoWeHelpHub, WhoWeHelpDetail } from "./pages/WhoWeHelp";
import EngagementModels from "./pages/EngagementModels";
import { CaseStudiesHub, CaseStudyDetail } from "./pages/CaseStudies";
import About from "./pages/About";
import StrategyCall from "./pages/StrategyCall";
import Contact from "./pages/Contact";
import Insights from "./pages/Insights";
import BlogArticle from "./pages/BlogArticle";
import Privacy from "./pages/Privacy";
import Pricing from "./pages/Pricing";
import Terms from "./pages/Terms";
import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/solutions/:slug" element={<SolutionDetail />} />
          <Route path="/platforms/:slug" element={<PlatformDetail />} />
          <Route path="/who-we-help" element={<WhoWeHelpHub />} />
          <Route path="/who-we-help/:slug" element={<WhoWeHelpDetail />} />
          <Route path="/engagement-models" element={<EngagementModels />} />
          <Route path="/case-studies" element={<CaseStudiesHub />} />
          <Route path="/case-studies/:slug" element={<CaseStudyDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/strategy-call" element={<StrategyCall />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/insights/:slug" element={<BlogArticle />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/terms" element={<Terms />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
