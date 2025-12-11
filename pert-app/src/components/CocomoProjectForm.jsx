import { useState } from 'react';

const CocomoProjectForm = ({ projectSize, onProjectSizeChange }) => {
  const [kloc, setKloc] = useState(projectSize || '');
  const [sloc, setSloc] = useState('');

  const handleKlocChange = (value) => {
    setKloc(value);
    setSloc(value ? (parseFloat(value) * 1000).toString() : '');
    onProjectSizeChange(value ? parseFloat(value) : 0);
  };

  const handleSlocChange = (value) => {
    setSloc(value);
    const klocValue = value ? (parseFloat(value) / 1000).toString() : '';
    setKloc(klocValue);
    onProjectSizeChange(klocValue ? parseFloat(klocValue) : 0);
  };

  return (
    <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-200 mb-8">
      <h2 className="text-2xl font-semibold mb-6 text-gray-900 border-b border-gray-200 pb-2">
        Tamaño del Proyecto
      </h2>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
        <div className="flex items-start">
          <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
          </svg>
          <div>
            <p className="text-sm text-gray-700 mb-1">
              <span className="font-semibold">KLOC (Kilo Lines of Code):</span> Miles de líneas de código fuente.
            </p>
            <p className="text-sm text-gray-700">
              <span className="font-semibold">SLOC (Source Lines of Code):</span> Líneas de código fuente totales.
            </p>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Tamaño en KLOC
          </label>
          <input
            type="number"
            step="0.1"
            min="0"
            value={kloc}
            onChange={(e) => handleKlocChange(e.target.value)}
            placeholder="Ej: 10.5"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
          />
          <p className="text-xs text-gray-500 mt-1">Miles de líneas de código</p>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Tamaño en SLOC
          </label>
          <input
            type="number"
            step="1"
            min="0"
            value={sloc}
            onChange={(e) => handleSlocChange(e.target.value)}
            placeholder="Ej: 10500"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
          />
          <p className="text-xs text-gray-500 mt-1">Líneas de código totales</p>
        </div>
      </div>

      {kloc && parseFloat(kloc) > 0 && (
        <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
          <div className="flex items-center">
            <svg className="w-5 h-5 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <p className="text-sm text-gray-700">
              Tamaño del proyecto: <span className="font-semibold">{parseFloat(kloc).toFixed(2)} KLOC</span> ({(parseFloat(kloc) * 1000).toLocaleString()} líneas de código)
            </p>
          </div>
        </div>
      )}

      <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
        <h3 className="text-sm font-semibold text-gray-900 mb-2">Ejemplos de referencia:</h3>
        <ul className="space-y-1 text-sm text-gray-700">
          <li>• Proyecto pequeño: 2-10 KLOC (2,000-10,000 líneas)</li>
          <li>• Proyecto mediano: 10-100 KLOC (10,000-100,000 líneas)</li>
          <li>• Proyecto grande: 100-1000 KLOC (100,000-1,000,000 líneas)</li>
          <li>• Proyecto muy grande: &gt; 1000 KLOC (&gt; 1,000,000 líneas)</li>
        </ul>
      </div>
    </div>
  );
};

export default CocomoProjectForm;
