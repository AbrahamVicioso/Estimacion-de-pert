import { useState, useEffect } from 'react'
import VariableManager from './components/VariableManager'
import ActivityForm from './components/ActivityForm'
import ActivityList from './components/ActivityList'
import Calculations from './components/Calculations'

function App() {
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


  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-8">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-2">Estimación PERT</h1>
          <p className="text-lg text-gray-600">Herramienta profesional para la gestión de proyectos</p>
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
