
import { categories } from "@/data/categories";

export function CategorySection() {
  return (
    <section className="py-10 md:py-16 bg-secondary/50 dark:bg-secondary/10">
      <div className="container-custom">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">Shop by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {categories.map((category) => (
            <a 
              key={category.id} 
              href={`/category/${category.id}`} 
              className="group relative overflow-hidden rounded-lg aspect-square card-hover"
            >
              <img 
                src={category.image} 
                alt={category.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4">
                <h3 className="text-white font-medium text-lg">{category.name}</h3>
                <p className="text-white/80 text-sm">{category.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
