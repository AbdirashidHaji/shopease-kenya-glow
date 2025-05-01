
export interface Category {
  id: string;
  name: string;
  image: string;
  description: string;
}

export const categories: Category[] = [
  {
    id: "electronics",
    name: "Electronics",
    image: "https://images.unsplash.com/photo-1550009158-9ebf69173e03?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZWxlY3Ryb25pY3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    description: "Latest gadgets and electronics with fast delivery",
  },
  {
    id: "fashion",
    name: "Fashion",
    image: "https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    description: "Trending fashion for all occasions",
  },
  {
    id: "home",
    name: "Home & Living",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG9tZSUyMGRlY29yfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    description: "Beautiful home decor and essentials",
  },
  {
    id: "groceries",
    name: "Groceries",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3JvY2VyaWVzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    description: "Fresh and packaged food items delivered to you",
  },
  {
    id: "art",
    name: "Art & Crafts",
    image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXJ0JTIwYW5kJTIwY3JhZnRzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    description: "Authentic Kenyan art and handcrafted items",
  },
];
