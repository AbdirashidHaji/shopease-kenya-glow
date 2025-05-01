
import { Product } from "@/data/products";
import { ProductCard } from "./ProductCard";
import { Link } from "react-router-dom";

interface ProductGridProps {
  title: string;
  products: Product[];
  showViewAll?: boolean;
}

export function ProductGrid({ title, products, showViewAll = true }: ProductGridProps) {
  return (
    <section className="py-10 md:py-16">
      <div className="container-custom">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl md:text-3xl font-semibold">{title}</h2>
          {showViewAll && (
            <Link to="/products" className="text-shopease-purple hover:underline text-sm font-medium">
              View All
            </Link>
          )}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
