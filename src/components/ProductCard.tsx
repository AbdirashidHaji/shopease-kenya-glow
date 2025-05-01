
import { Product } from "@/data/products";
import { Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const discountedPrice = product.discount
    ? product.price - (product.price * product.discount) / 100
    : product.price;

  return (
    <Link to={`/product/${product.id}`} className="group">
      <div className="bg-card rounded-lg overflow-hidden transition-all duration-300 h-full flex flex-col card-hover">
        <div className="relative aspect-square overflow-hidden bg-secondary/20">
          <img
            src={product.image}
            alt={product.name}
            className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
          />
          {product.discount && (
            <Badge className="absolute top-2 right-2 bg-red-500">
              {product.discount}% OFF
            </Badge>
          )}
          {product.isFeatured && (
            <Badge className="absolute top-2 left-2 bg-shopease-purple">
              Featured
            </Badge>
          )}
        </div>

        <div className="p-4 flex flex-col flex-grow">
          <h3 className="font-medium mb-2 line-clamp-2">{product.name}</h3>
          
          <div className="flex items-center mb-2">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${
                    i < Math.floor(product.rating) ? "fill-current" : ""
                  }`}
                />
              ))}
            </div>
            <span className="text-xs text-muted-foreground ml-1">
              {product.rating}
            </span>
          </div>

          <div className="mt-auto">
            <div className="flex items-center gap-2">
              <span className="font-semibold">
                KSh {discountedPrice.toLocaleString()}
              </span>
              {product.discount && (
                <span className="text-sm text-muted-foreground line-through">
                  KSh {product.price.toLocaleString()}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
