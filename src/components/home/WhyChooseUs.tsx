// components/WhyChooseUs.tsx
import React from "react";
import { benefits } from "../../constants";

const WhyChooseUs: React.FC = () => {
  return (
    <section className="bg-[var(--color-light)] py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">
          ¿Por qué elegir ServiciosRápidos?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center">
              {React.createElement(benefit.icon, {
                className: "mx-auto mb-4 text-[var(--color-primary)]",
                size: 48,
              })}
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-[var(--color-text)]">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
