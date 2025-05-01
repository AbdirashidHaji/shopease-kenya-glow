
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ProductGrid } from "@/components/ProductGrid";
import { CategoryBanner } from "@/components/CategoryBanner";
import { ThemeProvider } from "@/lib/theme-provider";
import { products } from "@/data/products";
import { categories } from "@/data/categories";

const CategoryPage = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const [categoryProducts, setCategoryProducts] = useState(products);
  const [category, setCategory] = useState(categories[0]);

  useEffect(() => {
    if (categoryId) {
      const foundCategory = categories.find((cat) => cat.id === categoryId);
      if (foundCategory) {
        setCategory(foundCategory);
        const filteredProducts = products.filter(
          (product) => product.category === categoryId
        );
        setCategoryProducts(filteredProducts);
      }
    }
  }, [categoryId]);

  return (
    <ThemeProvider>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <CategoryBanner category={category} />
          <ProductGrid 
            title={`${category.name} Products`} 
            products={categoryProducts} 
            showViewAll={false}
          />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default CategoryPage;
