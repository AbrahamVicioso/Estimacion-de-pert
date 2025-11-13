import { topologicalSort, forwardPass } from '../utils/pertUtils';

const Calculations = ({ activities }) => {
  if (activities.length === 0) {
    return (
      <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-200 mb-8">
        <h2 className="text-2xl font-semibold mb-6 text-gray-900 border-b border-gray-200 pb-2">Cálculos del Proyecto</h2>
        <p className="text-gray-500 text-center py-8">No hay actividades para calcular.</p>
      </div>
    );
  }

  const totalVariance = activities.reduce((sum, act) => {
    const variance = Math.pow((act.pessimistic - act.optimistic) / 6, 2);
    return sum + variance;
  }, 0);

  const stdDev = Math.sqrt(totalVariance);

  const sorted = topologicalSort(activities);
  const { earliestFinish } = forwardPass(activities, sorted);
  const projectDuration = Math.max(...Object.values(earliestFinish));
  const maxActivity = activities.find(act => earliestFinish[act.id] === projectDuration);
  const projectUnit = maxActivity ? maxActivity.unit : 'días';

  return (
    <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-200 mb-8">
      <h2 className="text-2xl font-semibold mb-6 text-gray-900 border-b border-gray-200 pb-2">Cálculos del Proyecto</h2>
      <div className="space-y-4">
        <div className="flex justify-between items-center py-2 border-b border-gray-100">
          <span className="text-gray-700 font-medium">Duración del Proyecto:</span>
          <span className="text-gray-900 font-semibold">{projectDuration.toFixed(2)} {projectUnit}</span>
        </div>
        <div className="flex justify-between items-center py-2 border-b border-gray-100">
          <span className="text-gray-700 font-medium">Varianza Total:</span>
          <span className="text-gray-900">{totalVariance.toFixed(2)}</span>
        </div>
        <div className="flex justify-between items-center py-2 border-b border-gray-100">
          <span className="text-gray-700 font-medium">Desviación Estándar:</span>
          <span className="text-gray-900">{stdDev.toFixed(2)}</span>
        </div>
        <div className="flex justify-between items-center py-2 border-b border-gray-100">
          <span className="text-gray-700 font-medium">Intervalo de Confianza (95%):</span>
          <span className="text-gray-900 font-semibold">{projectDuration.toFixed(2)} ± {(1.96 * stdDev).toFixed(2)} {projectUnit}</span>
        </div>
      </div>
    </div>
  );
};

export default Calculations;