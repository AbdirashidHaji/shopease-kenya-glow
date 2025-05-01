
import { Category } from "@/data/categories";

interface CategoryBannerProps {
  category: Category;
}

export function CategoryBanner({ category }: CategoryBannerProps) {
  return (
    <div className="relative h-64 md:h-80 overflow-hidden">
      <img 
        src={category.image} 
        alt={category.name}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30 flex flex-col justify-center items-center text-center p-6">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">{category.name}</h1>
        <p className="text-white/90 text-lg max-w-2xl">{category.description}</p>
      </div>
    </div>
  );
}
