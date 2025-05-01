
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ProductGrid } from "@/components/ProductGrid";
import { ThemeProvider } from "@/lib/theme-provider";
import { products } from "@/data/products";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";
  const [searchResults, setSearchResults] = useState(products);

  useEffect(() => {
    if (query) {
      const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.category.toLowerCase().includes(query.toLowerCase()) ||
        product.description?.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(filteredProducts);
    } else {
      setSearchResults([]);
    }
  }, [query]);

  return (
    <ThemeProvider>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <div className="container-custom pt-8">
            <h1 className="text-2xl md:text-3xl font-semibold mb-4">
              Search Results for: "{query}"
            </h1>
            {searchResults.length > 0 ? (
              <ProductGrid 
                title={`${searchResults.length} Results Found`} 
                products={searchResults} 
                showViewAll={false}
              />
            ) : (
              <div className="py-12 text-center">
                <div className="flex justify-center mb-4">
                  <Search className="h-16 w-16 text-muted-foreground" />
                </div>
                <h2 className="text-xl font-medium mb-4">No products found matching "{query}"</h2>
                <p className="text-muted-foreground mb-6">
                  Try using different keywords or browse our categories.
                </p>
                <Button asChild className="bg-shopease-purple hover:bg-shopease-dark-purple">
                  <a href="/">Continue Shopping</a>
                </Button>
              </div>
            )}
          </div>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default SearchPage;
