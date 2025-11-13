const ActivityList = ({ activities }) => {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-200 mb-8">
      <h2 className="text-2xl font-semibold mb-6 text-gray-900 border-b border-gray-200 pb-2">Lista de Actividades</h2>
      {activities.length === 0 ? (
        <p className="text-gray-500 text-center py-8">No se han agregado actividades aún.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full table-auto border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b-2 border-gray-200">
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 uppercase tracking-wider">Nombre</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 uppercase tracking-wider">Optimista</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 uppercase tracking-wider">Más Probable</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 uppercase tracking-wider">Pesimista</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 uppercase tracking-wider">Unidad</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 uppercase tracking-wider">Esperado</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 uppercase tracking-wider">Varianza</th>
              </tr>
            </thead>
            <tbody>
              {activities.map((activity) => {
                const expected = (activity.optimistic + 4 * activity.mostLikely + activity.pessimistic) / 6;
                const variance = Math.pow((activity.pessimistic - activity.optimistic) / 6, 2);
                return (
                  <tr key={activity.id} className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 text-sm text-gray-900 font-medium">{activity.name}</td>
                    <td className="px-6 py-4 text-sm text-gray-700">{activity.optimistic}</td>
                    <td className="px-6 py-4 text-sm text-gray-700">{activity.mostLikely}</td>
                    <td className="px-6 py-4 text-sm text-gray-700">{activity.pessimistic}</td>
                    <td className="px-6 py-4 text-sm text-gray-700">{activity.unit || 'días'}</td>
                    <td className="px-6 py-4 text-sm text-gray-700 font-semibold">{expected.toFixed(2)}</td>
                    <td className="px-6 py-4 text-sm text-gray-700">{variance.toFixed(2)}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ActivityList;