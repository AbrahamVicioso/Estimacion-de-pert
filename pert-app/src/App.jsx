import { useState, useEffect } from 'react'
import WelcomeScreen from './components/WelcomeScreen'
import VariableManager from './components/VariableManager'
import ActivityForm from './components/ActivityForm'
import ActivityList from './components/ActivityList'
import Calculations from './components/Calculations'
import CocomoApp from './components/CocomoApp'

function App() {
  const [selectedMethod, setSelectedMethod] = useState(() => {
    return localStorage.getItem('selected-method') || null;
  });
  const [variables, setVariables] = useState([])
  const [activities, setActivities] = useState([])

  useEffect(() => {
    const savedVariables = localStorage.getItem('pert-variables');
    const savedActivities = localStorage.getItem('pert-activities');
    if (savedVariables) {
      setVariables(JSON.parse(savedVariables));
    }
    if (savedActivities) {
      setActivities(JSON.parse(savedActivities));
    }
  }, []);

  useEffect(() => {
    if (selectedMethod) {
      localStorage.setItem('selected-method', selectedMethod);
    }
  }, [selectedMethod]);

  const addVariable = (variable) => {
    setVariables([...variables, variable])
  }

  const deleteVariable = (id) => {
    setVariables(variables.filter(variable => variable.id !== id))
    // Also remove estimates for this variable from all activities
    setActivities(activities.map(activity => {
      const newEstimates = { ...activity.estimates };
      delete newEstimates[id];
      return { ...activity, estimates: newEstimates };
    }))
  }

  const addActivity = (activity) => {
    setActivities([...activities, activity])
  }

  const deleteActivity = (id) => {
    setActivities(activities.filter(activity => activity.id !== id))
  }

  useEffect(() => {
    localStorage.setItem('pert-variables', JSON.stringify(variables));
  }, [variables]);

  useEffect(() => {
    localStorage.setItem('pert-activities', JSON.stringify(activities));
  }, [activities]);

  const handleMethodSelect = (method) => {
    setSelectedMethod(method);
  };

  const handleBackToWelcome = () => {
    setSelectedMethod(null);
    localStorage.removeItem('selected-method');
  };

  if (!selectedMethod) {
    return <WelcomeScreen onSelectMethod={handleMethodSelect} />;
  }

  if (selectedMethod === 'cocomo') {
    return <CocomoApp onBack={handleBackToWelcome} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-8">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <button
              onClick={handleBackToWelcome}
              className="absolute left-8 flex items-center text-gray-600 hover:text-gray-900 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Volver
            </button>
            <div>
              <h1 className="text-5xl font-bold text-gray-900 mb-2">Estimación PERT</h1>
              <p className="text-lg text-gray-600">Herramienta profesional para la gestión de proyectos</p>
            </div>
          </div>
        </header>
        <VariableManager
          variables={variables}
          onAddVariable={addVariable}
          onDeleteVariable={deleteVariable}
        />
        <ActivityForm
          variables={variables}
          onAddActivity={addActivity}
        />
        <ActivityList
          activities={activities}
          variables={variables}
          onDeleteActivity={deleteActivity}
        />
        <Calculations
          activities={activities}
          variables={variables}
        />
      </div>
    </div>
  )
}

export default App
