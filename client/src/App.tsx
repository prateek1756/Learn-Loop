import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { CartProvider } from "@/contexts/CartContext";
import Layout from "@/components/Layout";
import Home from "@/pages/Home";
import Software from "@/pages/Software";
import Hardware from "@/pages/Hardware";
import Checkout from "@/pages/Checkout";
import ProductDetails from "@/pages/ProductDetails";
import Login from "@/pages/Login";
import Signup from "@/pages/Signup";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Support from "@/pages/Support";
import Documentation from "@/pages/Documentation";
import Services from "@/pages/Services";
import Training from "@/pages/Training";
import GetQuote from "@/pages/GetQuote";
import ScheduleInstallation from "@/pages/ScheduleInstallation";
import ExploreServices from "@/pages/ExploreServices";
import BookConsultation from "@/pages/BookConsultation";
import MaintenanceSupport from "@/pages/MaintenanceSupport";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/software" component={Software} />
        <Route path="/hardware" component={Hardware} />
        <Route path="/checkout" component={Checkout} />
        <Route path="/product/:id" component={ProductDetails} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/support" component={Support} />
        <Route path="/documentation" component={Documentation} />
        <Route path="/services" component={Services} />
        <Route path="/training" component={Training} />
        <Route path="/get-quote" component={GetQuote} />
        <Route path="/schedule-installation" component={ScheduleInstallation} />
        <Route path="/explore-services" component={ExploreServices} />
        <Route path="/book-consultation" component={BookConsultation} />
        <Route path="/maintenance-support" component={MaintenanceSupport} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <CartProvider>
          <Toaster />
          <Router />
        </CartProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
