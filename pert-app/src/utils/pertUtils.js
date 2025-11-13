// Funciones de utilidad para cálculos PERT

export const calculateExpected = (o, m, p) => (o + 4 * m + p) / 6;

export const calculateVariance = (o, p) => Math.pow((p - o) / 6, 2);

// Ordenamiento simple (sin dependencias)
export const topologicalSort = (activities) => {
  return activities.map(act => act.id);
};

// Pase hacia adelante (sin dependencias)
export const forwardPass = (activities, sorted) => {
  const earliestStart = {};
  const earliestFinish = {};
  sorted.forEach(id => {
    const act = activities.find(a => a.id === id);
    earliestStart[id] = 0;
    earliestFinish[id] = calculateExpected(act.optimistic, act.mostLikely, act.pessimistic);
  });
  return { earliestStart, earliestFinish };
};

// Pase hacia atrás (sin dependencias)
export const backwardPass = (activities, sorted, earliestFinish) => {
  const latestFinish = {};
  const latestStart = {};
  const projectEnd = Math.max(...Object.values(earliestFinish));
  sorted.forEach(id => {
    const act = activities.find(a => a.id === id);
    latestFinish[id] = projectEnd;
    latestStart[id] = projectEnd - calculateExpected(act.optimistic, act.mostLikely, act.pessimistic);
  });
  return { latestStart, latestFinish };
};

// Ruta crítica (sin dependencias, todas son críticas)
export const findCriticalPath = (activities) => {
  return activities.map(act => act.name);
};