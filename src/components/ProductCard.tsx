
import { Link } from "react-router-dom";
import { ShoppingBag, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Product } from "@/data/products";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  discount?: number;
  rating: number;
  inStock?: boolean;
  product?: Product; // Add product prop option
}

export function ProductCard({ 
  id, 
  name, 
  price, 
  image, 
  category,
  discount,
  rating,
  inStock = true,
  product
}: ProductCardProps) {
  // If a product object was passed, use its properties instead of individual props
  const productId = product?.id || id;
  const productName = product?.name || name;
  const productPrice = product?.price || price;
  const productImage = product?.image || image;
  const productCategory = product?.category || category;
  const productDiscount = product?.discount || discount;
  const productRating = product?.rating || rating;
  const productInStock = product?.inStock !== undefined ? product.inStock : inStock;
  
  // Calculate discounted price safely
  const discountedPrice = productDiscount ? productPrice * (1 - productDiscount / 100) : productPrice;
  
  return (
    <div className="group relative overflow-hidden rounded-lg border">
      <Link to={`/product/${productId}`}>
        <img
          src={productImage}
          alt={productName}
          className="h-[200px] w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </Link>
      {productDiscount && (
        <Badge className="absolute top-2 right-2 bg-red-500">
          {productDiscount}% OFF
        </Badge>
      )}
      {!productInStock && (
        <div className="absolute top-0 left-0 w-full h-full bg-black/60 flex items-center justify-center">
          <Badge variant="destructive" className="text-sm">Out of Stock</Badge>
        </div>
      )}
      <div className="p-4">
        <div className="mb-1 flex items-center">
          <Badge variant="outline" className="capitalize text-xs">
            {productCategory}
          </Badge>
          <div className="ml-auto flex items-center">
            <Star className="h-3 w-3 fill-yellow-500 text-yellow-500" />
            <span className="ml-1 text-xs text-muted-foreground">
              {productRating}
            </span>
          </div>
        </div>
        <Link to={`/product/${productId}`} className="block">
          <h3 className="font-medium line-clamp-1 mb-1 group-hover:text-shopease-purple transition-colors">
            {productName}
          </h3>
          <div className="flex gap-1 items-baseline">
            <span className="font-bold">
              KSh {discountedPrice.toLocaleString()}
            </span>
            {productDiscount && (
              <span className="text-xs text-muted-foreground line-through">
                KSh {productPrice.toLocaleString()}
              </span>
            )}
          </div>
        </Link>
        <div className="mt-3">
          <Button 
            size="sm" 
            className="w-full bg-shopease-purple hover:bg-shopease-dark-purple"
            asChild={!productInStock}
            disabled={!productInStock}
          >
            {productInStock ? (
              <>
                <ShoppingBag className="mr-1 h-4 w-4" /> Add to Cart
              </>
            ) : (
              <Link to={`/product/${productId}`}>View Details</Link>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
}
