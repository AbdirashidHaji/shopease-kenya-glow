
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ThemeProvider } from "@/lib/theme-provider";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Minus, Plus, ShoppingBag, Star } from "lucide-react";
import { products } from "@/data/products";
import { ProductGrid } from "@/components/ProductGrid";
import { MPesaPaymentModal } from "@/components/MPesaPaymentModal";

const ProductDetailPage = () => {
  const { productId } = useParams();
  const { toast } = useToast();
  const [quantity, setQuantity] = useState(1);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  
  const product = products.find(p => p.id === productId);
  const relatedProducts = products
    .filter(p => p.category === product?.category && p.id !== productId)
    .slice(0, 4);

  if (!product) {
    return (
      <ThemeProvider>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow container-custom py-12">
            <div className="text-center">
              <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
              <p className="mb-6">The product you're looking for doesn't exist or has been removed.</p>
              <Button asChild>
                <Link to="/">Back to Homepage</Link>
              </Button>
            </div>
          </main>
          <Footer />
        </div>
      </ThemeProvider>
    );
  }

  const handleAddToCart = () => {
    toast({
      title: "Added to cart",
      description: `${quantity} x ${product.name} added to your cart`,
    });
  };

  const increaseQuantity = () => setQuantity(prev => prev + 1);
  const decreaseQuantity = () => setQuantity(prev => prev > 1 ? prev - 1 : 1);
  
  const openPaymentModal = () => setIsPaymentModalOpen(true);
  const closePaymentModal = () => setIsPaymentModalOpen(false);

  return (
    <ThemeProvider>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow container-custom py-8">
          <div className="mb-6">
            <nav aria-label="Breadcrumb" className="flex text-sm">
              <Link to="/" className="text-muted-foreground">Home</Link>
              <span className="mx-2 text-muted-foreground">/</span>
              <Link to={`/category/${product.category}`} className="text-muted-foreground capitalize">{product.category}</Link>
              <span className="mx-2 text-muted-foreground">/</span>
              <span>{product.name}</span>
            </nav>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Product Image */}
            <div className="bg-card rounded-lg overflow-hidden">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-auto object-cover aspect-square"
              />
            </div>
            
            {/* Product Details */}
            <div>
              <h1 className="text-2xl md:text-3xl font-semibold mb-2">{product.name}</h1>
              
              <div className="flex items-center mb-4">
                <div className="flex items-center text-yellow-500 mr-2">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'fill-yellow-500' : 'fill-none'}`} 
                    />
                  ))}
                </div>
                <span className="text-muted-foreground">{product.rating} ({Math.floor(product.rating * 10) + 3} reviews)</span>
              </div>

              <div className="mb-6">
                {product.discount ? (
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold">KSh {(product.price * (1 - product.discount / 100)).toLocaleString()}</span>
                    <span className="text-lg text-muted-foreground line-through">KSh {product.price.toLocaleString()}</span>
                    <span className="bg-red-100 text-red-600 text-xs font-medium px-2 py-1 rounded">
                      {product.discount}% OFF
                    </span>
                  </div>
                ) : (
                  <span className="text-2xl font-bold">KSh {product.price.toLocaleString()}</span>
                )}
              </div>

              <p className="mb-6 text-muted-foreground">{product.description}</p>

              <div className="flex items-center mb-6">
                <span className={`${product.inStock ? 'text-green-600' : 'text-red-600'} text-sm font-medium`}>
                  {product.inStock ? 'In Stock' : 'Out of Stock'}
                </span>
              </div>

              <div className="mb-6">
                <p className="font-medium mb-2">Quantity</p>
                <div className="flex items-center">
                  <Button 
                    variant="outline" 
                    size="icon" 
                    onClick={decreaseQuantity}
                    disabled={quantity <= 1}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="mx-4 w-8 text-center">{quantity}</span>
                  <Button 
                    variant="outline" 
                    size="icon" 
                    onClick={increaseQuantity}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="space-y-3">
                <Button 
                  onClick={handleAddToCart} 
                  className="w-full bg-shopease-purple hover:bg-shopease-dark-purple"
                  disabled={!product.inStock}
                >
                  <ShoppingBag className="mr-2 h-4 w-4" />
                  Add to Cart
                </Button>
                <Button 
                  onClick={openPaymentModal}
                  className="w-full bg-green-600 hover:bg-green-700"
                  disabled={!product.inStock}
                >
                  Buy Now with M-Pesa
                </Button>
              </div>
            </div>
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <ProductGrid 
              title={`Related ${product.category.charAt(0).toUpperCase() + product.category.slice(1)} Products`} 
              products={relatedProducts} 
              showViewAll={true}
              viewAllLink={`/category/${product.category}`}
            />
          )}
        </main>
        <Footer />
        
        {/* M-Pesa Payment Modal */}
        <MPesaPaymentModal 
          isOpen={isPaymentModalOpen} 
          onClose={closePaymentModal} 
          product={product}
          quantity={quantity}
        />
      </div>
    </ThemeProvider>
  );
};

export default ProductDetailPage;
