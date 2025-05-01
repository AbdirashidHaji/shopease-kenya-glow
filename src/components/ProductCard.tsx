
import { Link } from "react-router-dom";
import { ShoppingBag, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  discount?: number;
  rating: number;
  inStock?: boolean;
}

export function ProductCard({ 
  id, 
  name, 
  price, 
  image, 
  category,
  discount,
  rating,
  inStock = true
}: ProductCardProps) {
  const discountedPrice = discount ? price * (1 - discount / 100) : price;
  
  return (
    <div className="group relative overflow-hidden rounded-lg border">
      <Link to={`/product/${id}`}>
        <img
          src={image}
          alt={name}
          className="h-[200px] w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </Link>
      {discount && (
        <Badge className="absolute top-2 right-2 bg-red-500">
          {discount}% OFF
        </Badge>
      )}
      {!inStock && (
        <div className="absolute top-0 left-0 w-full h-full bg-black/60 flex items-center justify-center">
          <Badge variant="destructive" className="text-sm">Out of Stock</Badge>
        </div>
      )}
      <div className="p-4">
        <div className="mb-1 flex items-center">
          <Badge variant="outline" className="capitalize text-xs">
            {category}
          </Badge>
          <div className="ml-auto flex items-center">
            <Star className="h-3 w-3 fill-yellow-500 text-yellow-500" />
            <span className="ml-1 text-xs text-muted-foreground">
              {rating}
            </span>
          </div>
        </div>
        <Link to={`/product/${id}`} className="block">
          <h3 className="font-medium line-clamp-1 mb-1 group-hover:text-shopease-purple transition-colors">
            {name}
          </h3>
          <div className="flex gap-1 items-baseline">
            <span className="font-bold">
              KSh {discountedPrice.toLocaleString()}
            </span>
            {discount && (
              <span className="text-xs text-muted-foreground line-through">
                KSh {price.toLocaleString()}
              </span>
            )}
          </div>
        </Link>
        <div className="mt-3">
          <Button 
            size="sm" 
            className="w-full bg-shopease-purple hover:bg-shopease-dark-purple"
            asChild={!inStock}
            disabled={!inStock}
          >
            {inStock ? (
              <>
                <ShoppingBag className="mr-1 h-4 w-4" /> Add to Cart
              </>
            ) : (
              <Link to={`/product/${id}`}>View Details</Link>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
}
