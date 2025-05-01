
import { useState, useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ProductGrid } from "@/components/ProductGrid";
import { CategorySection } from "@/components/CategorySection";
import { Footer } from "@/components/Footer";
import { ThemeProvider } from "@/lib/theme-provider";
import { products } from "@/data/products";

const Index = () => {
  const featuredProducts = products.filter((product) => product.isFeatured);
  const discountedProducts = products.filter((product) => product.discount);

  return (
    <ThemeProvider>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Hero />
          <CategorySection />
          <ProductGrid title="Featured Products" products={featuredProducts} />
          <div className="py-10 md:py-16 bg-shopease-light-purple/30 dark:bg-shopease-purple/10">
            <div className="container-custom">
              <div className="rounded-xl bg-gradient-to-r from-shopease-purple to-shopease-dark-purple p-8 md:p-12 text-white">
                <div className="max-w-2xl">
                  <h2 className="text-2xl md:text-4xl font-bold mb-4">Free Delivery Across Kenya</h2>
                  <p className="mb-6 text-white/90">
                    Get free standard shipping on orders over KSh 5,000. Applies to all major cities and towns in Kenya.
                  </p>
                  <a 
                    href="/shipping" 
                    className="inline-block px-6 py-2.5 bg-white text-shopease-purple rounded-md font-medium hover:bg-opacity-90 transition-colors"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
          <ProductGrid title="Special Offers" products={discountedProducts} />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Index;
