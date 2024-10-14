import React from "react";
import { ChevronRight } from "lucide-react";
import { categories } from "../../constants";

const ExploreCategories: React.FC = () => {
  return (
    <section className="container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-8">Explora por categoría</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {categories.map((categoria, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-4 border border-gray-200 rounded-md hover:border-[var(--color-primary)] transition-colors"
          >
            <span className="font-semibold">{categoria}</span>
            <ChevronRight className="text-[var(--color-primary)]" size={20} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExploreCategories;
