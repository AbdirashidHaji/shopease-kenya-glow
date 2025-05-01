
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ThemeProvider } from "@/lib/theme-provider";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <ThemeProvider>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow flex items-center justify-center py-16">
          <div className="text-center px-4">
            <h1 className="text-6xl md:text-8xl font-bold text-shopease-purple mb-4">404</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">Oops! Page not found</p>
            <p className="text-gray-500 dark:text-gray-400 mb-8 max-w-md mx-auto">
              The page you are looking for might have been removed or is temporarily unavailable.
            </p>
            <Button 
              asChild
              className="bg-shopease-purple hover:bg-shopease-dark-purple px-8"
            >
              <a href="/">Return to Home</a>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default NotFound;
