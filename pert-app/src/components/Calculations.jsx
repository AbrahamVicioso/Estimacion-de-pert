import { calculateExpected, calculateVariance } from '../utils/pertUtils';

const Calculations = ({ activities, variables }) => {
  if (activities.length === 0 || variables.length === 0) {
    return (
      <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-200 mb-8">
        <h2 className="text-2xl font-semibold mb-6 text-gray-900 border-b border-gray-200 pb-2">Cálculos del Proyecto</h2>
        <p className="text-gray-500 text-center py-8">
          {activities.length === 0
            ? "No hay actividades para calcular."
            : "No hay variables definidas."}
        </p>
      </div>
    );
  }

  // Calculate totals for each variable
  const variableCalculations = variables.map(variable => {
    let totalExpected = 0;
    let totalVariance = 0;

    activities.forEach(activity => {
      const estimate = activity.estimates?.[variable.id];
      if (estimate) {
        const expected = calculateExpected(
          estimate.optimistic,
          estimate.mostLikely,
          estimate.pessimistic
        );
        const variance = calculateVariance(estimate.optimistic, estimate.pessimistic);

        totalExpected += expected;
        totalVariance += variance;
      }
    });

    const stdDev = Math.sqrt(totalVariance);

    return {
      variable,
      totalExpected,
      totalVariance,
      stdDev
    };
  });

  return (
    <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-200 mb-8">
      <h2 className="text-2xl font-semibold mb-6 text-gray-900 border-b border-gray-200 pb-2">Cálculos del Proyecto</h2>

      {variableCalculations.map(({ variable, totalExpected, totalVariance, stdDev }) => (
        <div key={variable.id} className="mb-8 p-6 bg-gray-50 rounded-lg border border-gray-200">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            {variable.name} ({variable.unit})
          </h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center py-2 border-b border-gray-200">
              <span className="text-gray-700 font-medium">Estimación Esperada (Fórmula PERT):</span>
              <span className="text-gray-900 font-semibold text-lg">{totalExpected.toFixed(2)} {variable.unit}</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-gray-200">
              <span className="text-gray-700 font-medium">Varianza Total:</span>
              <span className="text-gray-900">{totalVariance.toFixed(4)}</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-gray-200">
              <span className="text-gray-700 font-medium">Desviación Estándar:</span>
              <span className="text-gray-900">{stdDev.toFixed(4)}</span>
            </div>
            <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
              <p className="text-sm text-gray-700 mb-2">
                <span className="font-semibold">Fórmula PERT:</span> Estimación = (O + 4M + P) / 6
              </p>
              <p className="text-sm text-gray-700">
                <span className="font-semibold">Varianza:</span> σ² = ((P - O) / 6)²
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Calculations;