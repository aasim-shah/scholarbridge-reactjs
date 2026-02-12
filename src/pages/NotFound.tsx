import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Home, Search, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
    
    // SEO Meta Tags
    document.title = "Page Not Found - ScholarBridge.com";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "The page you're looking for doesn't exist. Browse scholarships or return to ScholarBridge.com homepage.");
    }
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      
      <main className="flex-1 flex items-center justify-center px-4 py-16">
        <div className="max-w-md w-full text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6">
            <span className="text-5xl font-bold gradient-text">404</span>
          </div>
          
          <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Page Not Found
          </h1>
          
          <p className="text-lg text-muted-foreground mb-8">
            Oops! The page you're looking for doesn't exist or has been moved.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button size="lg" asChild>
              <Link to="/">
                <Home className="mr-2 h-4 w-4" />
                Go Home
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/search">
                <Search className="mr-2 h-4 w-4" />
                Browse Scholarships
              </Link>
            </Button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 bg-card border-t border-border">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <Award className="h-4 w-4 text-primary-foreground" />
              </div>
              <span className="font-display font-semibold text-foreground">ScholarBridge</span>
            </div>
            <nav className="flex items-center gap-6 text-sm text-muted-foreground">
              <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
              <Link to="/search" className="hover:text-foreground transition-colors">Browse</Link>
              <Link to="/about" className="hover:text-foreground transition-colors">About</Link>
              <Link to="/contact" className="hover:text-foreground transition-colors">Contact</Link>
              <Link to="/privacy" className="hover:text-foreground transition-colors">Privacy</Link>
              <Link to="/terms" className="hover:text-foreground transition-colors">Terms</Link>
            </nav>
            <p className="text-sm text-muted-foreground">
              © 2026 ScholarBridge. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default NotFound;
