import React from 'react';
import { Search, Star, Clock, Shield, ChevronRight } from 'lucide-react';

const HomePage: React.FC = () => {
  return (
    <div className="space-y-16">
      <section className="bg-[var(--color-light)] py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold mb-6">Encuentra el servicio perfecto para tu hogar</h1>
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

      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Servicios populares</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {['Plomería', 'Electricidad', 'Carpintería', 'Limpieza', 'Pintura'].map((servicio, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-md mb-2">
                <img src={`https://source.unsplash.com/random/300x200?${servicio.toLowerCase()}`} alt={servicio} className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-opacity duration-300"></div>
              </div>
              <h3 className="font-semibold text-[var(--color-secondary)] group-hover:text-[var(--color-primary)] transition-colors">{servicio}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[var(--color-light)] py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">¿Por qué elegir ServiciosRápidos?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Star className="mx-auto mb-4 text-[var(--color-primary)]" size={48} />
              <h3 className="text-xl font-semibold mb-2">Profesionales calificados</h3>
              <p className="text-[var(--color-text)]">Expertos verificados y evaluados por la comunidad.</p>
            </div>
            <div className="text-center">
              <Clock className="mx-auto mb-4 text-[var(--color-primary)]" size={48} />
              <h3 className="text-xl font-semibold mb-2">Respuesta rápida</h3>
              <p className="text-[var(--color-text)]">Obtén propuestas en minutos, no en días.</p>
            </div>
            <div className="text-center">
              <Shield className="mx-auto mb-4 text-[var(--color-primary)]" size={48} />
              <h3 className="text-xl font-semibold mb-2">Garantía de servicio</h3>
              <p className="text-[var(--color-text)]">Tu satisfacción está garantizada o te devolvemos tu dinero.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Explora por categoría</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {['Hogar', 'Tecnología', 'Eventos', 'Negocios', 'Estilo de vida', 'Otros'].map((categoria, index) => (
            <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-md hover:border-[var(--color-primary)] transition-colors">
              <span className="font-semibold">{categoria}</span>
              <ChevronRight className="text-[var(--color-primary)]" size={20} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;