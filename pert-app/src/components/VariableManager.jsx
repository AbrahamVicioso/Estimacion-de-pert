import { useState } from 'react';

const VariableManager = ({ variables, onAddVariable, onDeleteVariable }) => {
  const [name, setName] = useState('');
  const [unit, setUnit] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !unit) return;
    onAddVariable({
      id: Date.now().toString(),
      name,
      unit,
    });
    setName('');
    setUnit('');
  };

  return (
    <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-200 mb-8">
      <h2 className="text-2xl font-semibold mb-6 text-gray-900 border-b border-gray-200 pb-2">Variables de Estimación</h2>
      <form onSubmit={handleSubmit} className="mb-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Nombre de la Variable</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="ej. Tiempo, Costo, Recursos"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Unidad</label>
            <input
              type="text"
              value={unit}
              onChange={(e) => setUnit(e.target.value)}
              placeholder="ej. días, USD, personas"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              required
            />
          </div>
          <div className="flex items-end">
            <button type="submit" className="w-full bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 focus:ring-4 focus:ring-green-300 transition-all duration-200 font-medium shadow-md hover:shadow-lg">
              Agregar Variable
            </button>
          </div>
        </div>
      </form>

      {variables.length === 0 ? (
        <p className="text-gray-500 text-center py-4">No hay variables definidas. Agrega al menos una variable para comenzar.</p>
      ) : (
        <div className="space-y-2">
          {variables.map((variable) => (
            <div key={variable.id} className="flex items-center justify-between bg-gray-50 p-4 rounded-lg border border-gray-200">
              <div>
                <span className="font-medium text-gray-900">{variable.name}</span>
                <span className="text-gray-500 ml-2">({variable.unit})</span>
              </div>
              <button
                onClick={() => onDeleteVariable(variable.id)}
                className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md text-sm font-medium transition-colors"
              >
                Eliminar
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default VariableManager;
