
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ThemeProvider } from "@/lib/theme-provider";
import { products } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";

const AllProductsPage = () => {
  return (
    <ThemeProvider>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <section className="py-10 md:py-16">
            <div className="container-custom">
              <h1 className="text-2xl md:text-3xl font-semibold mb-8">All Products</h1>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                {products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default AllProductsPage;
