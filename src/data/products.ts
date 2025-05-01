
export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  isFeatured: boolean;
  discount?: number;
  rating: number;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Wireless Bluetooth Earbuds",
    price: 2499,
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGVhcmJ1ZHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    category: "electronics",
    isFeatured: true,
    discount: 15,
    rating: 4.5,
  },
  {
    id: "2",
    name: "Smart Fitness Tracker",
    price: 3999,
    image: "https://images.unsplash.com/photo-1576243345690-4e4b79b63288?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zml0bmVzcyUyMHRyYWNrZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    category: "electronics",
    isFeatured: true,
    rating: 4.2,
  },
  {
    id: "3",
    name: "Kenyan Coffee Beans - Premium",
    price: 899,
    image: "https://images.unsplash.com/photo-1559525839-b184a4d698c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y29mZmVlJTIwYmVhbnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    category: "groceries",
    isFeatured: true,
    discount: 10,
    rating: 4.8,
  },
  {
    id: "4",
    name: "Authentic Maasai Shuka Blanket",
    price: 1499,
    image: "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFhc2FpJTIwc2h1a2F8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    category: "home",
    isFeatured: true,
    rating: 4.9,
  },
  {
    id: "5",
    name: "Men's African Print Shirt",
    price: 1899,
    image: "https://images.unsplash.com/photo-1626788433973-40a1f1ae1ff3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YWZyaWNhbiUyMHByaW50fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    category: "fashion",
    isFeatured: true,
    rating: 4.6,
  },
  {
    id: "6",
    name: "Kenyan Soapstone Sculpture",
    price: 2999,
    image: "https://images.unsplash.com/photo-1631125915902-d8abe9225ff2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c29hcHN0b25lfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    category: "art",
    isFeatured: false,
    rating: 4.7,
  },
  {
    id: "7",
    name: "Portable Solar Phone Charger",
    price: 1799,
    image: "https://images.unsplash.com/photo-1662421140914-94fee4a8e0da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c29sYXIlMjBjaGFyZ2VyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    category: "electronics",
    isFeatured: false,
    rating: 4.3,
  },
  {
    id: "8",
    name: "Women's Kitenge Dress",
    price: 2499,
    image: "https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGFmcmljYW4lMjBkcmVzc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    category: "fashion",
    isFeatured: false,
    discount: 20,
    rating: 4.8,
  },
];
