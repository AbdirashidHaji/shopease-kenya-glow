
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <div className="relative bg-shopease-purple dark:bg-opacity-80 text-white">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1607082349566-187342175e2f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGFmcmljYW4lMjBtYXJrZXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop')] bg-cover bg-center opacity-20"></div>
      <div className="container-custom relative z-10 py-16 md:py-24">
        <div className="max-w-2xl animate-fade-in">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Shop Across Kenya with Ease
          </h1>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            Discover authentic Kenyan products with nationwide delivery. Shop fashion, electronics, art, and more!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            <Button size="lg" className="bg-white text-shopease-purple hover:bg-gray-100 font-medium px-8">
              Shop Now
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/20 font-medium px-8">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
