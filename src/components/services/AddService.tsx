import React, { useState } from "react";
import { useServiceStore } from "../../store/useServiceStore";

const AddService: React.FC = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState("");

  const addService = useServiceStore((state) => state.addService);

  const handleAddService = () => {
    if (name && category && price > 0) {
      addService({
        id: Math.random(),
        name,
        price,
        category,
      });
      setName("");
      setPrice(0);
      setCategory("");
    }
  };

  return (
    <div className="p-4 bg-white rounded shadow-md mb-5">
      <h2 className="text-xl font-bold mb-4">Agregar Nuevo Servicio</h2>
      <input
        type="text"
        placeholder="Nombre del servicio"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full p-2 mb-2 border rounded"
      />
      <input
        type="number"
        placeholder="Precio"
        value={price}
        onChange={(e) => setPrice(Number(e.target.value))}
        className="w-full p-2 mb-2 border rounded"
      />
      <input
        type="text"
        placeholder="Categoría"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="w-full p-2 mb-2 border rounded"
      />
      <button
        onClick={handleAddService}
        className="btn-primary text-white px-4 py-2 rounded"
      >
        Agregar Servicio
      </button>
    </div>
  );
};

export default AddService;
