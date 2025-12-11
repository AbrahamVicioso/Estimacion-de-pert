import { scaleDrivers } from '../utils/cocomoUtils';

const ScaleDriversForm = ({ scaleFactors, onScaleFactorChange }) => {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-200 mb-8">
      <h2 className="text-2xl font-semibold mb-6 text-gray-900 border-b border-gray-200 pb-2">
        Factores de Escala (Scale Drivers)
      </h2>

      <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 mb-6">
        <div className="flex items-start">
          <svg className="w-5 h-5 text-purple-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
          </svg>
          <div>
            <p className="text-sm text-gray-700">
              Los factores de escala afectan el exponente en la ecuación de esfuerzo de COCOMO 2.
              Selecciona el nivel que mejor describe tu proyecto para cada factor.
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        {Object.entries(scaleDrivers).map(([key, driver]) => (
          <div key={key} className="p-6 bg-gray-50 rounded-lg border border-gray-200">
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                {driver.name}
              </h3>
              <p className="text-sm text-gray-600">{driver.description}</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
              {Object.entries(driver.levels).map(([levelKey, level]) => (
                <button
                  key={levelKey}
                  onClick={() => onScaleFactorChange(key, level.value)}
                  className={`p-3 rounded-lg border-2 transition-all duration-200 ${
                    scaleFactors[key] === level.value
                      ? 'border-purple-500 bg-purple-100 shadow-md'
                      : 'border-gray-300 bg-white hover:border-purple-300 hover:bg-purple-50'
                  }`}
                  title={level.description}
                >
                  <div className="text-xs font-semibold text-gray-900 mb-1">
                    {level.label}
                  </div>
                  <div className="text-lg font-bold text-purple-600">
                    {level.value.toFixed(2)}
                  </div>
                </button>
              ))}
            </div>

            <div className="mt-3 p-3 bg-white rounded border border-gray-200">
              <p className="text-xs text-gray-600">
                <span className="font-semibold">Seleccionado:</span>{' '}
                {Object.entries(driver.levels).find(([_, level]) => level.value === scaleFactors[key])?.[1]?.description || 'No seleccionado'}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
        <h3 className="text-sm font-semibold text-gray-900 mb-2">Suma de Factores de Escala:</h3>
        <p className="text-2xl font-bold text-purple-600">
          {Object.values(scaleFactors).reduce((sum, value) => sum + value, 0).toFixed(2)}
        </p>
        <p className="text-xs text-gray-600 mt-1">
          Este valor se usa en el cálculo: E = B + 0.01 × ΣSF, donde B = 0.91
        </p>
      </div>
    </div>
  );
};

export default ScaleDriversForm;
