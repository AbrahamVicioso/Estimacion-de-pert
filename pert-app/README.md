# Aplicación de Estimación PERT Simplificada

Esta aplicación web permite estimar la duración de proyectos utilizando una versión simplificada del método PERT (Program Evaluation and Review Technique), asumiendo que todas las actividades son independientes y se ejecutan en paralelo.

## Características

- Agregar actividades con tiempos optimista, más probable y pesimista
- Calcular el tiempo esperado y la varianza para cada actividad
- Mostrar una lista de actividades con detalles
- Calcular la duración total del proyecto (máximo tiempo esperado), varianza total, desviación estándar e intervalo de confianza
- Todas las actividades se consideran críticas ya que no hay dependencias

## Tecnologías Utilizadas

- React
- Vite
- Tailwind CSS

## Instalación y Uso

1. Clona el repositorio
2. Instala las dependencias: `npm install`
3. Ejecuta la aplicación: `npm run dev`
4. Abre tu navegador en `http://localhost:5173`

## Cómo Usar

1. Agrega actividades proporcionando nombre, tiempos optimista, más probable y pesimista.
2. La aplicación calculará automáticamente los valores.
3. Revisa la lista de actividades y los cálculos del proyecto.
