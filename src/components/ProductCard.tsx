
import { Star } from "lucide-react";
import { Product } from "@/data/products";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { name, price, image, discount, rating } = product;
  
  // Calculate discounted price
  const discountedPrice = discount ? price - (price * discount / 100) : null;
  
  return (
    <Card className="overflow-hidden card-hover">
      <div className="aspect-square relative overflow-hidden bg-gray-100">
        <img
          src={image}
          alt={name}
          className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
        />
        {discount && (
          <div className="absolute top-2 right-2 bg-shopease-green text-white text-xs px-2 py-1 rounded-full">
            {discount}% OFF
          </div>
        )}
      </div>
      <CardContent className="p-4">
        <h3 className="font-medium text-base line-clamp-1 mb-1">{name}</h3>
        <div className="flex items-center gap-1 text-amber-500 mb-2">
          <Star className="h-3.5 w-3.5 fill-current" />
          <span className="text-xs font-medium">{rating}</span>
        </div>
        <div className="flex items-center justify-between">
          <div>
            {discountedPrice ? (
              <div className="flex items-center gap-1.5">
                <span className="text-sm font-semibold">KSh {discountedPrice.toLocaleString()}</span>
                <span className="text-xs line-through text-muted-foreground">
                  KSh {price.toLocaleString()}
                </span>
              </div>
            ) : (
              <span className="text-sm font-semibold">KSh {price.toLocaleString()}</span>
            )}
          </div>
          <Button size="sm" className="bg-shopease-purple hover:bg-shopease-dark-purple">
            Add
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
