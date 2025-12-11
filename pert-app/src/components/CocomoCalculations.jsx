import {
  calculateExponent,
  calculateEffortMultiplier,
  calculateEffort,
  calculateTime,
  calculateAverageStaff,
  calculateProductivity,
  COCOMO_CONSTANTS
} from '../utils/cocomoUtils';

const CocomoCalculations = ({ projectSize, scaleFactors, costFactors }) => {
  if (!projectSize || projectSize <= 0) {
    return (
      <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-200 mb-8">
        <h2 className="text-2xl font-semibold mb-6 text-gray-900 border-b border-gray-200 pb-2">
          Resultados de COCOMO 2
        </h2>
        <p className="text-gray-500 text-center py-8">
          Por favor, ingresa el tamaño del proyecto para ver los cálculos.
        </p>
      </div>
    );
  }

  const E = calculateExponent(scaleFactors);
  const EM = calculateEffortMultiplier(costFactors);
  const effort = calculateEffort(projectSize, scaleFactors, costFactors);
  const time = calculateTime(effort, scaleFactors);
  const avgStaff = calculateAverageStaff(effort, time);
  const productivity = calculateProductivity(projectSize, effort);

  const sumSF = Object.values(scaleFactors).reduce((sum, value) => sum + value, 0);

  return (
    <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-200 mb-8">
      <h2 className="text-2xl font-semibold mb-6 text-gray-900 border-b border-gray-200 pb-2">
        Resultados de COCOMO 2
      </h2>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {/* Parámetros de entrada */}
        <div className="p-6 bg-blue-50 rounded-lg border border-blue-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
            <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
            Parámetros de Entrada
          </h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center py-2 border-b border-blue-200">
              <span className="text-gray-700 font-medium">Tamaño (KLOC):</span>
              <span className="text-gray-900 font-semibold">{projectSize.toFixed(2)}</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-blue-200">
              <span className="text-gray-700 font-medium">Constante A:</span>
              <span className="text-gray-900 font-semibold">{COCOMO_CONSTANTS.A.toFixed(2)}</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-blue-200">
              <span className="text-gray-700 font-medium">Exponente Base B:</span>
              <span className="text-gray-900 font-semibold">{COCOMO_CONSTANTS.B.toFixed(2)}</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-blue-200">
              <span className="text-gray-700 font-medium">Σ Scale Factors:</span>
              <span className="text-gray-900 font-semibold">{sumSF.toFixed(2)}</span>
            </div>
            <div className="flex justify-between items-center py-2">
              <span className="text-gray-700 font-medium">Effort Multiplier (EM):</span>
              <span className="text-gray-900 font-semibold">{EM.toFixed(4)}</span>
            </div>
          </div>
        </div>

        {/* Valores calculados intermedios */}
        <div className="p-6 bg-purple-50 rounded-lg border border-purple-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
            <svg className="w-5 h-5 mr-2 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
            Valores Intermedios
          </h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center py-2 border-b border-purple-200">
              <span className="text-gray-700 font-medium">Exponente E:</span>
              <span className="text-gray-900 font-semibold">{E.toFixed(4)}</span>
            </div>
            <div className="p-3 bg-white rounded border border-purple-200">
              <p className="text-xs text-gray-600 mb-1">Fórmula del Exponente:</p>
              <p className="text-xs font-mono text-gray-800">
                E = B + 0.01 × ΣSF
              </p>
              <p className="text-xs font-mono text-gray-800 mt-1">
                E = {COCOMO_CONSTANTS.B.toFixed(2)} + 0.01 × {sumSF.toFixed(2)} = {E.toFixed(4)}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Resultados principales */}
      <div className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border-2 border-green-300 mb-6">
        <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
          <svg className="w-6 h-6 mr-2 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Estimaciones del Proyecto
        </h3>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-5 rounded-lg shadow-md border border-green-200">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-700 font-medium">Esfuerzo (Effort)</span>
              <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <p className="text-3xl font-bold text-green-600 mb-1">
              {effort.toFixed(2)} PM
            </p>
            <p className="text-xs text-gray-600">Persona-Mes</p>
            <div className="mt-3 pt-3 border-t border-gray-200">
              <p className="text-xs text-gray-500 mb-1">Esfuerzo en horas (160h/PM):</p>
              <p className="text-sm font-semibold text-gray-700">{(effort * 160).toFixed(0)} horas</p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-lg shadow-md border border-green-200">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-700 font-medium">Tiempo de Desarrollo</span>
              <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <p className="text-3xl font-bold text-green-600 mb-1">
              {time.toFixed(2)} meses
            </p>
            <p className="text-xs text-gray-600">Calendario</p>
            <div className="mt-3 pt-3 border-t border-gray-200">
              <p className="text-xs text-gray-500 mb-1">Aproximadamente:</p>
              <p className="text-sm font-semibold text-gray-700">
                {Math.floor(time)} meses y {Math.round((time - Math.floor(time)) * 30)} días
              </p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-lg shadow-md border border-green-200">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-700 font-medium">Personal Promedio</span>
              <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <p className="text-3xl font-bold text-green-600 mb-1">
              {avgStaff.toFixed(2)}
            </p>
            <p className="text-xs text-gray-600">Personas</p>
            <div className="mt-3 pt-3 border-t border-gray-200">
              <p className="text-xs text-gray-500 mb-1">Redondeado:</p>
              <p className="text-sm font-semibold text-gray-700">
                {Math.ceil(avgStaff)} {Math.ceil(avgStaff) === 1 ? 'persona' : 'personas'}
              </p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-lg shadow-md border border-green-200">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-700 font-medium">Productividad</span>
              <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <p className="text-3xl font-bold text-green-600 mb-1">
              {productivity.toFixed(0)}
            </p>
            <p className="text-xs text-gray-600">SLOC / PM</p>
            <div className="mt-3 pt-3 border-t border-gray-200">
              <p className="text-xs text-gray-500 mb-1">Líneas por persona-mes</p>
              <p className="text-sm font-semibold text-gray-700">
                {(productivity / 160).toFixed(0)} SLOC/hora
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Fórmulas */}
      <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Fórmulas COCOMO 2 (Post-Architecture)</h3>
        <div className="space-y-3 text-sm">
          <div className="p-3 bg-white rounded border border-gray-200">
            <p className="text-gray-700 mb-1"><span className="font-semibold">Esfuerzo (PM):</span></p>
            <p className="font-mono text-xs text-gray-600">Effort = A × Size<sup>E</sup> × EM</p>
            <p className="font-mono text-xs text-gray-600 mt-1">
              Effort = {COCOMO_CONSTANTS.A.toFixed(2)} × {projectSize.toFixed(2)}<sup>{E.toFixed(4)}</sup> × {EM.toFixed(4)} = {effort.toFixed(2)} PM
            </p>
          </div>
          <div className="p-3 bg-white rounded border border-gray-200">
            <p className="text-gray-700 mb-1"><span className="font-semibold">Tiempo (meses):</span></p>
            <p className="font-mono text-xs text-gray-600">Time = C × Effort<sup>(D + 0.2(E-B))</sup> donde C=3.67, D=0.28</p>
            <p className="font-mono text-xs text-gray-600 mt-1">
              Time = 3.67 × {effort.toFixed(2)}<sup>{(0.28 + 0.2 * (E - COCOMO_CONSTANTS.B)).toFixed(4)}</sup> = {time.toFixed(2)} meses
            </p>
          </div>
          <div className="p-3 bg-white rounded border border-gray-200">
            <p className="text-gray-700 mb-1"><span className="font-semibold">Personal Promedio:</span></p>
            <p className="font-mono text-xs text-gray-600">Avg Staff = Effort / Time</p>
            <p className="font-mono text-xs text-gray-600 mt-1">
              Avg Staff = {effort.toFixed(2)} / {time.toFixed(2)} = {avgStaff.toFixed(2)} personas
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CocomoCalculations;
