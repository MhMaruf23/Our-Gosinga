import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";

const info = () => import("./pages/InfoPages");
const AboutPage = lazy(() => info().then(m => ({ default: m.AboutPage })));
const ContactPage = lazy(() => info().then(m => ({ default: m.ContactPage })));
const GalleryPage = lazy(() => info().then(m => ({ default: m.GalleryPage })));
const InstitutionsPage = lazy(() => info().then(m => ({ default: m.InstitutionsPage })));
const PlacesPage = lazy(() => info().then(m => ({ default: m.PlacesPage })));
const RepresentativesPage = lazy(() => info().then(m => ({ default: m.RepresentativesPage })));
const ServicesPage = lazy(() => info().then(m => ({ default: m.ServicesPage })));
const ProvidersPage = lazy(() => import("./pages/ProvidersPage"));
const VillagesPage = lazy(() => info().then(m => ({ default: m.VillagesPage })));
const AdminPage = lazy(() => import("./pages/AdminPage"));
const UploadPage = lazy(() => import("./pages/UploadPage"));

function Router() {
  return <Suspense fallback={<main className="route-loading"><span className="spinner"/>পাতাটি তৈরি হচ্ছে…</main>}><Switch>
    <Route path="/" component={Home} />
    <Route path="/about" component={AboutPage} />
    <Route path="/villages" component={VillagesPage} />
    <Route path="/representatives" component={RepresentativesPage} />
    <Route path="/institutions" component={InstitutionsPage} />
    <Route path="/services" component={ServicesPage} />
    <Route path="/providers" component={ProvidersPage} />
    <Route path="/places" component={PlacesPage} />
    <Route path="/gallery" component={GalleryPage} />
    <Route path="/upload" component={UploadPage} />
    <Route path="/contact" component={ContactPage} />
    <Route path="/admin" component={AdminPage} />
    <Route component={NotFound} />
  </Switch></Suspense>;
}

export default function App() {
  return <ErrorBoundary><ThemeProvider defaultTheme="light"><TooltipProvider><Toaster/><Router/></TooltipProvider></ThemeProvider></ErrorBoundary>;
}
