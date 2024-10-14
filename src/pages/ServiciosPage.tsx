import React, { useState } from 'react';
import { Star, Heart } from 'lucide-react';

const servicios = [
  { id: 1, nombre: 'Juan Pérez', servicio: 'Plomería', rating: 4.8, reviews: 120, precio: 50, imagen: 'https://source.unsplash.com/random/300x200?plumber' },
  { id: 2, nombre: 'María González', servicio: 'Electricidad', rating: 4.9, reviews: 85, precio: 60, imagen: 'https://source.unsplash.com/random/300x200?electrician' },
  { id: 3, nombre: 'Carlos Rodríguez', servicio: 'Carpintería', rating: 4.7, reviews: 95, precio: 55, imagen: 'https://source.unsplash.com/random/300x200?carpenter' },
  { id: 4, nombre: 'Ana Martínez', servicio: 'Limpieza', rating: 4.6, reviews: 110, precio: 40, imagen: 'https://source.unsplash.com/random/300x200?cleaner' },
  { id: 5, nombre: 'Luis Sánchez', servicio: 'Pintura', rating: 4.8, reviews: 75, precio: 45, imagen: 'https://source.unsplash.com/random/300x200?painter' },
];

const ServiciosPage: React.FC = () => {
  const [filtro, setFiltro] = useState('');

  const serviciosFiltrados = servicios.filter(
    (servicio) =>
      servicio.nombre.toLowerCase().includes(filtro.toLowerCase()) ||
      servicio.servicio.toLowerCase().includes(filtro.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Servicios disponibles</h1>
      <div className="mb-8">
        <input
          type="text"
          placeholder="Buscar por nombre o tipo de servicio"
          className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
          value={filtro}
          onChange={(e) => setFiltro(e.target.value)}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {serviciosFiltrados.map((servicio) => (
          <div key={servicio.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <img src={servicio.imagen} alt={servicio.servicio} className="w-full h-48 object-cover" />
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h2 className="text-xl font-semibold mb-1">{servicio.servicio}</h2>
                  <p className="text-[var(--color-text)]">{servicio.nombre}</p>
                </div>
                <button className="text-gray-400 hover:text-red-500">
                  <Heart size={24} />
                </button>
              </div>
              <div className="flex items-center mb-4">
                <Star className="text-yellow-400 mr-1" size={20} />
                <span className="font-semibold mr-2">{servicio.rating}</span>
                <span className="text-[var(--color-text)]">({servicio.reviews})</span>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-lg font-bold">Desde ${servicio.precio}</p>
                <button className="btn-primary">Contactar</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiciosPage;