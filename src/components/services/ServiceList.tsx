import { useServiceStore } from "../../store/useServiceStore";

const ServiceList: React.FC = () => {
  // Obtener los servicios y la función para eliminar desde el store
  const { services, removeService } = useServiceStore();

  return (
    <div className="p-4 bg-white rounded shadow-md">
      <h2 className="text-xl font-bold mb-4">Servicios Disponibles</h2>
      <ul className="space-y-2">
        {services.map((service) => (
          <li
            key={service.id}
            className="flex justify-between items-center p-2 border-b"
          >
            <span>
              {service.name} - ${service.price} ({service.category})
            </span>
            <button
              onClick={() => removeService(service.id)}
              className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
            >
              Eliminar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceList;
