import { calculateExpected, calculateVariance } from '../utils/pertUtils';

const ActivityList = ({ activities, variables, onDeleteActivity }) => {
  if (activities.length === 0) {
    return (
      <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-200 mb-8">
        <h2 className="text-2xl font-semibold mb-6 text-gray-900 border-b border-gray-200 pb-2">Lista de Actividades</h2>
        <p className="text-gray-500 text-center py-8">No se han agregado actividades aún.</p>
      </div>
    );
  }

  return (
    <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-200 mb-8">
      <h2 className="text-2xl font-semibold mb-6 text-gray-900 border-b border-gray-200 pb-2">Lista de Actividades</h2>
      <div className="space-y-6">
        {activities.map((activity) => (
          <div key={activity.id} className="p-6 bg-gray-50 rounded-lg border border-gray-200">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-lg font-semibold text-gray-900">{activity.name}</h3>
              <button
                onClick={() => onDeleteActivity(activity.id)}
                className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md text-sm font-medium transition-colors"
              >
                Eliminar
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full table-auto border-collapse">
                <thead>
                  <tr className="bg-white border-b-2 border-gray-300">
                    <th className="px-4 py-3 text-left text-xs font-semibold text-gray-900 uppercase tracking-wider">Variable</th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-gray-900 uppercase tracking-wider">Optimista</th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-gray-900 uppercase tracking-wider">Más Probable</th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-gray-900 uppercase tracking-wider">Pesimista</th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-gray-900 uppercase tracking-wider">Esperado</th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-gray-900 uppercase tracking-wider">Varianza</th>
                  </tr>
                </thead>
                <tbody>
                  {variables.map((variable) => {
                    const estimate = activity.estimates?.[variable.id];
                    if (!estimate) return null;

                    const expected = calculateExpected(
                      estimate.optimistic,
                      estimate.mostLikely,
                      estimate.pessimistic
                    );
                    const variance = calculateVariance(estimate.optimistic, estimate.pessimistic);

                    return (
                      <tr key={variable.id} className="border-b border-gray-200 hover:bg-white transition-colors">
                        <td className="px-4 py-3 text-sm text-gray-900 font-medium">
                          {variable.name} ({variable.unit})
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-700">{estimate.optimistic}</td>
                        <td className="px-4 py-3 text-sm text-gray-700">{estimate.mostLikely}</td>
                        <td className="px-4 py-3 text-sm text-gray-700">{estimate.pessimistic}</td>
                        <td className="px-4 py-3 text-sm text-gray-900 font-semibold">{expected.toFixed(2)}</td>
                        <td className="px-4 py-3 text-sm text-gray-700">{variance.toFixed(4)}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityList;