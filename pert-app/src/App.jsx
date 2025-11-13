import { useState } from 'react'
import ActivityForm from './components/ActivityForm'
import ActivityList from './components/ActivityList'
import Calculations from './components/Calculations'
import { findCriticalPath } from './utils/pertUtils'

function App() {
  const [activities, setActivities] = useState([])

  const addActivity = (activity) => {
    setActivities([...activities, activity])
  }

  let criticalPath = [];
  if (activities.length > 0) {
    criticalPath = findCriticalPath(activities);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-2">Estimación PERT</h1>
          <p className="text-lg text-gray-600">Herramienta profesional para la gestión de proyectos</p>
        </header>
        <ActivityForm onAddActivity={addActivity} />
        <ActivityList activities={activities} />
        <Calculations activities={activities} criticalPath={criticalPath} />
      </div>
    </div>
  )
}

export default App
