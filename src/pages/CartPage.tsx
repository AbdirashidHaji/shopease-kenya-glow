
import { useState, useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ThemeProvider } from "@/lib/theme-provider";
import { Button } from "@/components/ui/button";
import { Trash2, ShoppingBag } from "lucide-react";
import { products } from "@/data/products";
import { useToast } from "@/hooks/use-toast";

// For demonstration purposes - in a real app this would be managed by state management
const initialCartItems = [
  { productId: "1", quantity: 1 },
  { productId: "3", quantity: 2 },
];

const CartPage = () => {
  const [cartItems, setCartItems] = useState(initialCartItems);
  const [cartProducts, setCartProducts] = useState([]);
  const { toast } = useToast();

  useEffect(() => {
    // Find the product details for each cart item
    const productsInCart = cartItems.map(item => {
      const product = products.find(p => p.id === item.productId);
      return {
        ...product,
        quantity: item.quantity,
        subtotal: product ? product.price * item.quantity : 0
      };
    });
    setCartProducts(productsInCart);
  }, [cartItems]);

  const removeItem = (productId) => {
    setCartItems(cartItems.filter(item => item.productId !== productId));
    toast({
      title: "Item removed",
      description: "Product has been removed from your cart",
    });
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) return;
    
    setCartItems(cartItems.map(item => 
      item.productId === productId ? { ...item, quantity: newQuantity } : item
    ));
  };

  const calculateTotal = () => {
    return cartProducts.reduce((total, item) => total + item.subtotal, 0);
  };

  return (
    <ThemeProvider>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow py-10">
          <div className="container-custom">
            <h1 className="text-3xl font-semibold mb-6 flex items-center">
              <ShoppingBag className="mr-2 h-7 w-7 text-shopease-purple" /> 
              Your Shopping Cart
            </h1>
            
            {cartProducts.length === 0 ? (
              <div className="text-center py-16">
                <div className="flex justify-center mb-4">
                  <ShoppingBag className="h-16 w-16 text-muted-foreground" />
                </div>
                <h2 className="text-2xl font-medium mb-2">Your cart is empty</h2>
                <p className="text-muted-foreground mb-6">Looks like you haven't added anything to your cart yet.</p>
                <Button asChild className="bg-shopease-purple hover:bg-shopease-dark-purple">
                  <a href="/">Continue Shopping</a>
                </Button>
              </div>
            ) : (
              <div className="grid md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                  <div className="bg-card rounded-lg shadow-sm overflow-hidden">
                    <div className="divide-y divide-border">
                      {cartProducts.map((item) => (
                        <div key={item.id} className="p-4 md:p-6 flex flex-col md:flex-row gap-4">
                          <div className="flex-shrink-0">
                            <img 
                              src={item.image} 
                              alt={item.name} 
                              className="w-24 h-24 object-cover rounded-md"
                            />
                          </div>
                          <div className="flex-grow">
                            <div className="flex justify-between">
                              <h3 className="font-medium">{item.name}</h3>
                              <p className="font-medium">KSh {item.price.toLocaleString()}</p>
                            </div>
                            <p className="text-muted-foreground text-sm mb-4">Category: {item.category}</p>
                            <div className="flex justify-between items-center">
                              <div className="flex items-center border rounded-md">
                                <button 
                                  className="px-3 py-1" 
                                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                >
                                  -
                                </button>
                                <span className="px-3 py-1">{item.quantity}</span>
                                <button 
                                  className="px-3 py-1"
                                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                >
                                  +
                                </button>
                              </div>
                              <Button
                                variant="ghost" 
                                size="icon" 
                                onClick={() => removeItem(item.id)}
                              >
                                <Trash2 className="h-5 w-5 text-red-500" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="md:col-span-1">
                  <div className="bg-card rounded-lg shadow-sm p-6 sticky top-24">
                    <h3 className="text-xl font-medium mb-4">Order Summary</h3>
                    <div className="space-y-2 mb-4">
                      {cartProducts.map((item) => (
                        <div key={item.id} className="flex justify-between text-sm">
                          <span>{item.name} x{item.quantity}</span>
                          <span>KSh {item.subtotal.toLocaleString()}</span>
                        </div>
                      ))}
                    </div>
                    <div className="border-t pt-4 mb-6">
                      <div className="flex justify-between font-medium">
                        <span>Total</span>
                        <span>KSh {calculateTotal().toLocaleString()}</span>
                      </div>
                    </div>
                    <Button className="w-full bg-shopease-purple hover:bg-shopease-dark-purple">
                      Proceed to Checkout
                    </Button>
                    <Button variant="outline" className="w-full mt-2" asChild>
                      <a href="/">Continue Shopping</a>
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default CartPage;
