import React from "react";
import { Search } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <section className="bg-[var(--color-light)] py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl">
          <h1 className="text-5xl font-bold mb-6">
            Encuentra el servicio perfecto para tu hogar
          </h1>
          <div className="relative">
            <input
              type="text"
              placeholder="Busca cualquier servicio..."
              className="w-full py-4 pl-6 pr-12 text-lg rounded-md border-none focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
            />
            <button className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-[var(--color-primary)] text-white p-2 rounded-md hover:bg-[var(--color-primary-dark)]">
              <Search size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
