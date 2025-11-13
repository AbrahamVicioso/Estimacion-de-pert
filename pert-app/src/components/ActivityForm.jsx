import { useState } from 'react';

const ActivityForm = ({ onAddActivity }) => {
  const [name, setName] = useState('');
  const [optimistic, setOptimistic] = useState('');
  const [mostLikely, setMostLikely] = useState('');
  const [pessimistic, setPessimistic] = useState('');
  const [unit, setUnit] = useState('días');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !optimistic || !mostLikely || !pessimistic) return;
    onAddActivity({
      id: Date.now().toString(),
      name,
      optimistic: parseFloat(optimistic),
      mostLikely: parseFloat(mostLikely),
      pessimistic: parseFloat(pessimistic),
      unit,
    });
    setName('');
    setOptimistic('');
    setMostLikely('');
    setPessimistic('');
    setUnit('días');
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-xl border border-gray-200 mb-8">
      <h2 className="text-2xl font-semibold mb-6 text-gray-900 border-b border-gray-200 pb-2">Nueva Actividad</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Nombre de la Actividad</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Tiempo Optimista (días)</label>
          <input
            type="number"
            value={optimistic}
            onChange={(e) => setOptimistic(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Tiempo Más Probable (días)</label>
          <input
            type="number"
            value={mostLikely}
            onChange={(e) => setMostLikely(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Tiempo Pesimista</label>
          <input
            type="number"
            value={pessimistic}
            onChange={(e) => setPessimistic(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Unidad</label>
          <select
            value={unit}
            onChange={(e) => setUnit(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
          >
            <option value="días">Días</option>
            <option value="horas">Horas</option>
            <option value="semanas">Semanas</option>
            <option value="meses">Meses</option>
          </select>
        </div>
      </div>
      <button type="submit" className="mt-8 w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 transition-all duration-200 font-medium text-lg shadow-md hover:shadow-lg">
        Agregar Actividad
      </button>
    </form>
  );
};

export default ActivityForm;