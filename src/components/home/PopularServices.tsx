// components/PopularServices.tsx
import React from "react";
import { popularServices } from "../../constants";

const PopularServices: React.FC = () => {
  return (
    <section className="container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-8">Servicios populares</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {popularServices.map((servicio, index) => (
          <div key={index} className="group cursor-pointer">
            <div className="relative overflow-hidden rounded-md mb-2">
              <img
                src={`https://source.unsplash.com/random/300x200?${servicio.toLowerCase()}`}
                alt={servicio}
                className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-opacity duration-300"></div>
            </div>
            <h3 className="font-semibold text-[var(--color-secondary)] group-hover:text-[var(--color-primary)] transition-colors">
              {servicio}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularServices;
