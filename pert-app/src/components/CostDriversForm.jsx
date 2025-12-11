import { useState } from 'react';
import { costDrivers } from '../utils/cocomoUtils';

const CostDriversForm = ({ costFactors, onCostFactorChange }) => {
  const [expandedCategory, setExpandedCategory] = useState('Producto');

  // Group cost drivers by category
  const categories = {
    'Producto': [],
    'Plataforma': [],
    'Personal': [],
    'Proyecto': []
  };

  Object.entries(costDrivers).forEach(([key, driver]) => {
    categories[driver.category].push({ key, ...driver });
  });

  const toggleCategory = (category) => {
    setExpandedCategory(expandedCategory === category ? null : category);
  };

  const categoryColors = {
    'Producto': 'blue',
    'Plataforma': 'green',
    'Personal': 'orange',
    'Proyecto': 'purple'
  };

  return (
    <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-200 mb-8">
      <h2 className="text-2xl font-semibold mb-6 text-gray-900 border-b border-gray-200 pb-2">
        Multiplicadores de Esfuerzo (Cost Drivers)
      </h2>

      <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 mb-6">
        <div className="flex items-start">
          <svg className="w-5 h-5 text-purple-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
          </svg>
          <div>
            <p className="text-sm text-gray-700">
              Los multiplicadores de esfuerzo ajustan la estimación base según características del producto, plataforma, personal y proyecto.
              Valores &lt; 1.0 reducen el esfuerzo, valores &gt; 1.0 lo incrementan.
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        {Object.entries(categories).map(([category, drivers]) => {
          const color = categoryColors[category];
          const isExpanded = expandedCategory === category;

          return (
            <div key={category} className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                onClick={() => toggleCategory(category)}
                className={`w-full p-4 bg-${color}-50 hover:bg-${color}-100 transition-colors flex items-center justify-between`}
              >
                <div className="flex items-center">
                  <div className={`w-3 h-3 rounded-full bg-${color}-500 mr-3`}></div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {category} ({drivers.length} factores)
                  </h3>
                </div>
                <svg
                  className={`w-5 h-5 text-gray-600 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {isExpanded && (
                <div className="p-4 bg-white space-y-4">
                  {drivers.map(({ key, name, description, levels }) => (
                    <div key={key} className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                      <div className="mb-3">
                        <h4 className="text-md font-semibold text-gray-900 mb-1">
                          {name}
                        </h4>
                        <p className="text-sm text-gray-600">{description}</p>
                      </div>

                      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
                        {Object.entries(levels).map(([levelKey, level]) => (
                          <button
                            key={levelKey}
                            onClick={() => onCostFactorChange(key, level.value)}
                            className={`p-2 rounded-lg border-2 transition-all duration-200 ${
                              costFactors[key] === level.value
                                ? `border-${color}-500 bg-${color}-100 shadow-md`
                                : 'border-gray-300 bg-white hover:border-gray-400 hover:bg-gray-50'
                            }`}
                            title={level.description}
                          >
                            <div className="text-xs font-semibold text-gray-900 mb-1">
                              {level.label}
                            </div>
                            <div className={`text-sm font-bold ${
                              level.value < 1 ? 'text-green-600' : level.value > 1 ? 'text-red-600' : 'text-gray-600'
                            }`}>
                              {level.value.toFixed(2)}
                            </div>
                          </button>
                        ))}
                      </div>

                      <div className="mt-2 p-2 bg-white rounded border border-gray-200">
                        <p className="text-xs text-gray-600">
                          <span className="font-semibold">Seleccionado:</span>{' '}
                          {Object.entries(levels).find(([_, level]) => level.value === costFactors[key])?.[1]?.description || 'No seleccionado'}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
        <h3 className="text-sm font-semibold text-gray-900 mb-2">Multiplicador de Esfuerzo (EM):</h3>
        <p className="text-2xl font-bold text-purple-600">
          {Object.values(costFactors).reduce((product, value) => product * value, 1).toFixed(4)}
        </p>
        <p className="text-xs text-gray-600 mt-1">
          Este es el producto de todos los multiplicadores de esfuerzo seleccionados
        </p>
      </div>
    </div>
  );
};

export default CostDriversForm;
