import { useState, useEffect } from 'react';
import CocomoProjectForm from './CocomoProjectForm';
import ScaleDriversForm from './ScaleDriversForm';
import CostDriversForm from './CostDriversForm';
import CocomoCalculations from './CocomoCalculations';
import { initializeScaleFactors, initializeCostDrivers } from '../utils/cocomoUtils';

const CocomoApp = ({ onBack }) => {
  const [projectSize, setProjectSize] = useState(0);
  const [scaleFactors, setScaleFactors] = useState(() => {
    const saved = localStorage.getItem('cocomo-scale-factors');
    return saved ? JSON.parse(saved) : initializeScaleFactors();
  });
  const [costFactors, setCostFactors] = useState(() => {
    const saved = localStorage.getItem('cocomo-cost-factors');
    return saved ? JSON.parse(saved) : initializeCostDrivers();
  });

  useEffect(() => {
    const savedSize = localStorage.getItem('cocomo-project-size');
    if (savedSize) {
      setProjectSize(parseFloat(savedSize));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cocomo-project-size', projectSize.toString());
  }, [projectSize]);

  useEffect(() => {
    localStorage.setItem('cocomo-scale-factors', JSON.stringify(scaleFactors));
  }, [scaleFactors]);

  useEffect(() => {
    localStorage.setItem('cocomo-cost-factors', JSON.stringify(costFactors));
  }, [costFactors]);

  const handleScaleFactorChange = (key, value) => {
    setScaleFactors(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const handleCostFactorChange = (key, value) => {
    setCostFactors(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const handleReset = () => {
    if (window.confirm('¿Estás seguro de que deseas restablecer todos los valores a sus valores predeterminados?')) {
      setProjectSize(0);
      setScaleFactors(initializeScaleFactors());
      setCostFactors(initializeCostDrivers());
      localStorage.removeItem('cocomo-project-size');
      localStorage.removeItem('cocomo-scale-factors');
      localStorage.removeItem('cocomo-cost-factors');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-8">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <button
              onClick={onBack}
              className="absolute left-8 flex items-center text-gray-600 hover:text-gray-900 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Volver
            </button>
            <div>
              <h1 className="text-5xl font-bold text-gray-900 mb-2">Estimación COCOMO 2</h1>
              <p className="text-lg text-gray-600">Modelo de Costos Constructivos (Post-Architecture)</p>
            </div>
          </div>
          <div className="flex justify-center gap-4 mt-6">
            <button
              onClick={handleReset}
              className="px-6 py-2 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition-colors font-medium border border-red-300"
            >
              Restablecer Valores
            </button>
          </div>
        </header>

        <div className="mb-8 bg-white p-6 rounded-2xl shadow-xl border border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Acerca de COCOMO 2</h2>
          <div className="space-y-3 text-gray-700">
            <p>
              <span className="font-semibold">COCOMO 2 (COnstructive COst MOdel II)</span> es un modelo de estimación de costos
              de software desarrollado por Barry Boehm. El modelo Post-Architecture es el más detallado y preciso de los tres
              niveles de COCOMO 2.
            </p>
            <div className="grid md:grid-cols-3 gap-4 mt-4">
              <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                <h3 className="font-semibold text-purple-900 mb-2">Factores de Escala</h3>
                <p className="text-sm text-gray-700">5 factores que afectan el exponente de la ecuación de esfuerzo</p>
              </div>
              <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                <h3 className="font-semibold text-blue-900 mb-2">Multiplicadores</h3>
                <p className="text-sm text-gray-700">17 cost drivers organizados en 4 categorías</p>
              </div>
              <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                <h3 className="font-semibold text-green-900 mb-2">Resultados</h3>
                <p className="text-sm text-gray-700">Esfuerzo, tiempo, personal y productividad</p>
              </div>
            </div>
          </div>
        </div>

        <CocomoProjectForm
          projectSize={projectSize}
          onProjectSizeChange={setProjectSize}
        />

        <ScaleDriversForm
          scaleFactors={scaleFactors}
          onScaleFactorChange={handleScaleFactorChange}
        />

        <CostDriversForm
          costFactors={costFactors}
          onCostFactorChange={handleCostFactorChange}
        />

        <CocomoCalculations
          projectSize={projectSize}
          scaleFactors={scaleFactors}
          costFactors={costFactors}
        />
      </div>
    </div>
  );
};

export default CocomoApp;
