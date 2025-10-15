import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { StrictMode, useEffect } from "react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import Index from "./pages/Index";
import AboutUs from "./pages/AboutUs";
import OurVision from "./pages/OurVision";
import WeBelieve from "./pages/WeBelieve";
import MeetPastors from "./pages/MeetPastors";
import Events from "./pages/Events";
import ContactUs from "./pages/ContactUs";
import NotFound from "./pages/NotFound";
import NewHere from "./pages/NewHere";
import NewBeliever from "./pages/NewBeliever";
import PraiseChapelGlobal from "./pages/PraiseChapelGlobal";
import ConnectGroups from "./pages/ConnectGroups";
import OutreachMinistry from "./pages/OutreachMinistry";
import KidsForJesus from "./pages/KidsForJesus";
import PittsburgChurch from "./pages/ChurchesPage/PittsburgChurch";
import SanFranciscoChurch from "./pages/ChurchesPage/SanFranciscoChurch";
import OakleyChurch from "./pages/ChurchesPage/OakleyChurch";
import IndiaChurch from "./pages/ChurchesPage/IndiaChurch";
import SpainChurch from "./pages/ChurchesPage/SpainChurch";
import { LanguageProvider } from "./contexts/LanguageContext";

// Create a client
const queryClient = new QueryClient();

// ScrollToTop component to handle scroll restoration without animation
function ScrollToTop() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    // Force immediate scroll to top without smooth behavior
    window.scrollTo(0, 0);
    
    // Disable smooth scrolling to ensure instant jump
    document.documentElement.style.scrollBehavior = 'auto';
    document.body.style.scrollBehavior = 'auto';
    
    return () => {
      // Cleanup not necessary as we always want instant scrolling on navigation
    };
  }, [pathname]);
  
  return null;
}

const App = () => {
  return (
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <LanguageProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <ScrollToTop />
              <SpeedInsights />
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/about-us" element={<AboutUs />} />
                <Route path="/our-vision" element={<OurVision />} />
                <Route path="/we-believe" element={<WeBelieve />} />
                <Route path="/meet-the-pastors" element={<MeetPastors />} />
                <Route path="/praise-chapel-global" element={<PraiseChapelGlobal />} />
                <Route path="/events" element={<Events />} />
                <Route path="/contact-us" element={<ContactUs />} />
                
                {/* Welcome pages */}
                <Route path="/welcome/new-here" element={<NewHere />} />
                <Route path="/welcome/new-believer" element={<NewBeliever />} />
                
                {/* Ministry pages */}
                <Route path="/ministries" element={<NotFound />} />
                <Route path="/ministries/connect-groups" element={<ConnectGroups />} />
                <Route path="/ministries/outreach" element={<OutreachMinistry />} />
                <Route path="/ministries/kids" element={<KidsForJesus />} />
                
                {/* Church locations */}
                <Route path="/churches" element={<NotFound />} />
                <Route path="/churches/pittsburg" element={<PittsburgChurch />} />
                <Route path="/churches/san-francisco" element={<SanFranciscoChurch />} />
                <Route path="/churches/oakley" element={<OakleyChurch />} />
                <Route path="/churches/india" element={<IndiaChurch />} />
                <Route path="/churches/spain" element={<SpainChurch />} />
                <Route path="/ets-bible-school" element={<NotFound />} />
                <Route path="/give" element={<NotFound />} />
                <Route path="/watch" element={<NotFound />} />
                
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          </LanguageProvider>
        </TooltipProvider>
      </QueryClientProvider>
    </StrictMode>
  );
};

export default App;
