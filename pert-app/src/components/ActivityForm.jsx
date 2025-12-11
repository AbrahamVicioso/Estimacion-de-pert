import { useState } from 'react';

const ActivityForm = ({ variables, onAddActivity }) => {
  const [name, setName] = useState('');
  const [estimates, setEstimates] = useState({});

  const handleEstimateChange = (variableId, field, value) => {
    setEstimates(prev => ({
      ...prev,
      [variableId]: {
        ...prev[variableId],
        [field]: value
      }
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) return;

    // Validate that all variables have all three estimates
    for (const variable of variables) {
      const estimate = estimates[variable.id];
      if (!estimate || !estimate.optimistic || !estimate.mostLikely || !estimate.pessimistic) {
        alert(`Por favor completa todas las estimaciones para ${variable.name}`);
        return;
      }
    }

    // Convert string values to numbers
    const processedEstimates = {};
    for (const [variableId, estimate] of Object.entries(estimates)) {
      processedEstimates[variableId] = {
        optimistic: parseFloat(estimate.optimistic),
        mostLikely: parseFloat(estimate.mostLikely),
        pessimistic: parseFloat(estimate.pessimistic),
      };
    }

    onAddActivity({
      id: Date.now().toString(),
      name,
      estimates: processedEstimates,
    });

    setName('');
    setEstimates({});
  };

  if (variables.length === 0) {
    return (
      <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-200 mb-8">
        <h2 className="text-2xl font-semibold mb-6 text-gray-900 border-b border-gray-200 pb-2">Nueva Actividad</h2>
        <p className="text-gray-500 text-center py-8">Por favor, define al menos una variable de estimación antes de agregar actividades.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-xl border border-gray-200 mb-8">
      <h2 className="text-2xl font-semibold mb-6 text-gray-900 border-b border-gray-200 pb-2">Nueva Actividad</h2>

      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">Nombre de la Actividad</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
          required
        />
      </div>

      {variables.map((variable) => (
        <div key={variable.id} className="mb-6 p-6 bg-gray-50 rounded-lg border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            {variable.name} ({variable.unit})
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Optimista</label>
              <input
                type="number"
                step="any"
                value={estimates[variable.id]?.optimistic || ''}
                onChange={(e) => handleEstimateChange(variable.id, 'optimistic', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Más Probable</label>
              <input
                type="number"
                step="any"
                value={estimates[variable.id]?.mostLikely || ''}
                onChange={(e) => handleEstimateChange(variable.id, 'mostLikely', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Pesimista</label>
              <input
                type="number"
                step="any"
                value={estimates[variable.id]?.pessimistic || ''}
                onChange={(e) => handleEstimateChange(variable.id, 'pessimistic', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                required
              />
            </div>
          </div>
        </div>
      ))}

      <button type="submit" className="mt-6 w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 transition-all duration-200 font-medium text-lg shadow-md hover:shadow-lg">
        Agregar Actividad
      </button>
    </form>
  );
};

export default ActivityForm;