import { create } from "zustand";

interface Service {
  id: number;
  name: string;
  price: number;
  category: string;
}

// Estado y acciones que manejará el store
interface ServiceStore {
  services: Service[];
  addService: (service: Service) => void;
  removeService: (id: number) => void;
}

// se crea el store con el estado inicial y las acciones
export const useServiceStore = create<ServiceStore>((set) => ({
  services: [],

  // Función para agregar un nuevo servicio
  addService: (service) =>
    set((state) => ({
      services: [...state.services, service],
    })),

  // Función para eliminar un servicio por ID
  removeService: (id) =>
    set((state) => ({
      services: state.services.filter((service) => service.id !== id),
    })),
}));
