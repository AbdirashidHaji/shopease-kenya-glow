
import { Facebook, Instagram, Twitter, Mail, MapPin, Phone, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t">
      <div className="container-custom pt-12 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <ShoppingBag className="h-6 w-6 text-shopease-purple" />
              <span className="text-xl font-bold text-shopease-purple">ShopEase</span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
              Your one-stop shop for authentic Kenyan products delivered across the country.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-shopease-purple dark:hover:text-shopease-purple">
                <Facebook size={18} />
              </a>
              <a href="#" className="text-gray-500 hover:text-shopease-purple dark:hover:text-shopease-purple">
                <Instagram size={18} />
              </a>
              <a href="#" className="text-gray-500 hover:text-shopease-purple dark:hover:text-shopease-purple">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/about" className="text-sm text-gray-600 dark:text-gray-300 hover:text-shopease-purple dark:hover:text-shopease-purple">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="text-sm text-gray-600 dark:text-gray-300 hover:text-shopease-purple dark:hover:text-shopease-purple">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="/shipping" className="text-sm text-gray-600 dark:text-gray-300 hover:text-shopease-purple dark:hover:text-shopease-purple">
                  Shipping & Delivery
                </a>
              </li>
              <li>
                <a href="/returns" className="text-sm text-gray-600 dark:text-gray-300 hover:text-shopease-purple dark:hover:text-shopease-purple">
                  Return Policy
                </a>
              </li>
              <li>
                <a href="/faq" className="text-sm text-gray-600 dark:text-gray-300 hover:text-shopease-purple dark:hover:text-shopease-purple">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <MapPin size={18} className="text-shopease-purple shrink-0" />
                <span className="text-sm text-gray-600 dark:text-gray-300">
                  34 Kenyatta Avenue, Nairobi, Kenya
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={18} className="text-shopease-purple" />
                <span className="text-sm text-gray-600 dark:text-gray-300">+254 712 345 678</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={18} className="text-shopease-purple" />
                <span className="text-sm text-gray-600 dark:text-gray-300">info@shopease.co.ke</span>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold mb-4">Subscribe to Our Newsletter</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
              Get the latest updates on new products and special offers.
            </p>
            <div className="flex gap-2">
              <Input placeholder="Your email address" className="rounded-l-md" />
              <Button className="bg-shopease-purple hover:bg-shopease-dark-purple">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} ShopEase. All rights reserved.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="/privacy" className="text-sm text-gray-500 dark:text-gray-400 hover:text-shopease-purple dark:hover:text-shopease-purple">
              Privacy Policy
            </a>
            <a href="/terms" className="text-sm text-gray-500 dark:text-gray-400 hover:text-shopease-purple dark:hover:text-shopease-purple">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
