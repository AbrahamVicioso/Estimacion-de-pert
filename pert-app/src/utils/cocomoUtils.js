// COCOMO 2 Post-Architecture Model Utilities

// Scale Drivers (Factores de Escala)
export const scaleDrivers = {
  PREC: {
    name: 'Precedentedness',
    description: 'Precedencia del proyecto (experiencia con proyectos similares)',
    levels: {
      'very-low': { label: 'Muy Bajo', value: 6.20, description: 'Completamente nuevo' },
      'low': { label: 'Bajo', value: 4.96, description: 'Mayormente nuevo' },
      'nominal': { label: 'Nominal', value: 3.72, description: 'Algo familiar' },
      'high': { label: 'Alto', value: 2.48, description: 'Mayormente familiar' },
      'very-high': { label: 'Muy Alto', value: 1.24, description: 'Muy familiar' },
      'extra-high': { label: 'Extra Alto', value: 0.00, description: 'Completamente familiar' }
    }
  },
  FLEX: {
    name: 'Development Flexibility',
    description: 'Flexibilidad en el desarrollo',
    levels: {
      'very-low': { label: 'Muy Bajo', value: 5.07, description: 'Conformidad rigurosa' },
      'low': { label: 'Bajo', value: 4.05, description: 'Conformidad ocasional' },
      'nominal': { label: 'Nominal', value: 3.04, description: 'Conformidad básica' },
      'high': { label: 'Alto', value: 2.03, description: 'Conformidad general' },
      'very-high': { label: 'Muy Alto', value: 1.01, description: 'Metas generales' },
      'extra-high': { label: 'Extra Alto', value: 0.00, description: 'Sin restricciones' }
    }
  },
  RESL: {
    name: 'Architecture/Risk Resolution',
    description: 'Resolución de arquitectura y riesgos',
    levels: {
      'very-low': { label: 'Muy Bajo', value: 7.07, description: 'Poco (20%)' },
      'low': { label: 'Bajo', value: 5.65, description: 'Algo (40%)' },
      'nominal': { label: 'Nominal', value: 4.24, description: 'A menudo (60%)' },
      'high': { label: 'Alto', value: 2.83, description: 'Generalmente (80%)' },
      'very-high': { label: 'Muy Alto', value: 1.41, description: 'Mayormente (90%)' },
      'extra-high': { label: 'Extra Alto', value: 0.00, description: 'Completamente (100%)' }
    }
  },
  TEAM: {
    name: 'Team Cohesion',
    description: 'Cohesión del equipo',
    levels: {
      'very-low': { label: 'Muy Bajo', value: 5.48, description: 'Interacciones muy difíciles' },
      'low': { label: 'Bajo', value: 4.38, description: 'Algunas dificultades' },
      'nominal': { label: 'Nominal', value: 3.29, description: 'Interacciones básicas' },
      'high': { label: 'Alto', value: 2.19, description: 'Mayormente cooperativo' },
      'very-high': { label: 'Muy Alto', value: 1.10, description: 'Altamente cooperativo' },
      'extra-high': { label: 'Extra Alto', value: 0.00, description: 'Interacción perfecta' }
    }
  },
  PMAT: {
    name: 'Process Maturity',
    description: 'Madurez del proceso (nivel CMM)',
    levels: {
      'very-low': { label: 'Muy Bajo', value: 7.80, description: 'Nivel CMM 1, bajo' },
      'low': { label: 'Bajo', value: 6.24, description: 'Nivel CMM 1, alto' },
      'nominal': { label: 'Nominal', value: 4.68, description: 'Nivel CMM 2' },
      'high': { label: 'Alto', value: 3.12, description: 'Nivel CMM 3' },
      'very-high': { label: 'Muy Alto', value: 1.56, description: 'Nivel CMM 4' },
      'extra-high': { label: 'Extra Alto', value: 0.00, description: 'Nivel CMM 5' }
    }
  }
};

// Cost Drivers (Multiplicadores de Esfuerzo)
export const costDrivers = {
  // Product Factors
  RELY: {
    name: 'Required Software Reliability',
    description: 'Confiabilidad requerida del software',
    category: 'Producto',
    levels: {
      'very-low': { label: 'Muy Bajo', value: 0.82, description: 'Bajo impacto de fallas' },
      'low': { label: 'Bajo', value: 0.92, description: 'Bajo a medio impacto' },
      'nominal': { label: 'Nominal', value: 1.00, description: 'Impacto medio' },
      'high': { label: 'Alto', value: 1.10, description: 'Alto impacto financiero' },
      'very-high': { label: 'Muy Alto', value: 1.26, description: 'Riesgo de vida' }
    }
  },
  DATA: {
    name: 'Database Size',
    description: 'Tamaño de la base de datos',
    category: 'Producto',
    levels: {
      'low': { label: 'Bajo', value: 0.90, description: 'DB bytes/SLOC < 10' },
      'nominal': { label: 'Nominal', value: 1.00, description: 'DB bytes/SLOC 10-100' },
      'high': { label: 'Alto', value: 1.14, description: 'DB bytes/SLOC 100-1000' },
      'very-high': { label: 'Muy Alto', value: 1.28, description: 'DB bytes/SLOC > 1000' }
    }
  },
  CPLX: {
    name: 'Product Complexity',
    description: 'Complejidad del producto',
    category: 'Producto',
    levels: {
      'very-low': { label: 'Muy Bajo', value: 0.73, description: 'Muy simple' },
      'low': { label: 'Bajo', value: 0.87, description: 'Simple' },
      'nominal': { label: 'Nominal', value: 1.00, description: 'Medio' },
      'high': { label: 'Alto', value: 1.17, description: 'Complejo' },
      'very-high': { label: 'Muy Alto', value: 1.34, description: 'Muy complejo' },
      'extra-high': { label: 'Extra Alto', value: 1.74, description: 'Extremadamente complejo' }
    }
  },
  RUSE: {
    name: 'Required Reusability',
    description: 'Reusabilidad requerida',
    category: 'Producto',
    levels: {
      'low': { label: 'Bajo', value: 0.95, description: 'Sin reuso planeado' },
      'nominal': { label: 'Nominal', value: 1.00, description: 'Reuso en proyecto' },
      'high': { label: 'Alto', value: 1.07, description: 'Reuso en programa' },
      'very-high': { label: 'Muy Alto', value: 1.15, description: 'Reuso en línea de productos' },
      'extra-high': { label: 'Extra Alto', value: 1.24, description: 'Reuso en múltiples líneas' }
    }
  },
  DOCU: {
    name: 'Documentation Match to Life-Cycle Needs',
    description: 'Documentación acorde al ciclo de vida',
    category: 'Producto',
    levels: {
      'very-low': { label: 'Muy Bajo', value: 0.81, description: 'Muy poca documentación' },
      'low': { label: 'Bajo', value: 0.91, description: 'Poca documentación' },
      'nominal': { label: 'Nominal', value: 1.00, description: 'Documentación adecuada' },
      'high': { label: 'Alto', value: 1.11, description: 'Mucha documentación' },
      'very-high': { label: 'Muy Alto', value: 1.23, description: 'Documentación excesiva' }
    }
  },

  // Platform Factors
  TIME: {
    name: 'Execution Time Constraint',
    description: 'Restricción de tiempo de ejecución',
    category: 'Plataforma',
    levels: {
      'nominal': { label: 'Nominal', value: 1.00, description: 'Uso < 50% del tiempo' },
      'high': { label: 'Alto', value: 1.11, description: 'Uso 70% del tiempo' },
      'very-high': { label: 'Muy Alto', value: 1.29, description: 'Uso 85% del tiempo' },
      'extra-high': { label: 'Extra Alto', value: 1.63, description: 'Uso 95% del tiempo' }
    }
  },
  STOR: {
    name: 'Main Storage Constraint',
    description: 'Restricción de almacenamiento',
    category: 'Plataforma',
    levels: {
      'nominal': { label: 'Nominal', value: 1.00, description: 'Uso < 50% de memoria' },
      'high': { label: 'Alto', value: 1.05, description: 'Uso 70% de memoria' },
      'very-high': { label: 'Muy Alto', value: 1.17, description: 'Uso 85% de memoria' },
      'extra-high': { label: 'Extra Alto', value: 1.46, description: 'Uso 95% de memoria' }
    }
  },
  PVOL: {
    name: 'Platform Volatility',
    description: 'Volatilidad de la plataforma',
    category: 'Plataforma',
    levels: {
      'low': { label: 'Bajo', value: 0.87, description: 'Cambios cada 12 meses' },
      'nominal': { label: 'Nominal', value: 1.00, description: 'Cambios cada 6 meses' },
      'high': { label: 'Alto', value: 1.15, description: 'Cambios cada 2 meses' },
      'very-high': { label: 'Muy Alto', value: 1.30, description: 'Cambios cada 2 semanas' }
    }
  },

  // Personnel Factors
  ACAP: {
    name: 'Analyst Capability',
    description: 'Capacidad del analista',
    category: 'Personal',
    levels: {
      'very-low': { label: 'Muy Bajo', value: 1.42, description: 'Percentil 15%' },
      'low': { label: 'Bajo', value: 1.19, description: 'Percentil 35%' },
      'nominal': { label: 'Nominal', value: 1.00, description: 'Percentil 55%' },
      'high': { label: 'Alto', value: 0.85, description: 'Percentil 75%' },
      'very-high': { label: 'Muy Alto', value: 0.71, description: 'Percentil 90%' }
    }
  },
  PCAP: {
    name: 'Programmer Capability',
    description: 'Capacidad del programador',
    category: 'Personal',
    levels: {
      'very-low': { label: 'Muy Bajo', value: 1.34, description: 'Percentil 15%' },
      'low': { label: 'Bajo', value: 1.15, description: 'Percentil 35%' },
      'nominal': { label: 'Nominal', value: 1.00, description: 'Percentil 55%' },
      'high': { label: 'Alto', value: 0.88, description: 'Percentil 75%' },
      'very-high': { label: 'Muy Alto', value: 0.76, description: 'Percentil 90%' }
    }
  },
  PCON: {
    name: 'Personnel Continuity',
    description: 'Continuidad del personal',
    category: 'Personal',
    levels: {
      'very-low': { label: 'Muy Bajo', value: 1.29, description: 'Rotación 48% anual' },
      'low': { label: 'Bajo', value: 1.12, description: 'Rotación 24% anual' },
      'nominal': { label: 'Nominal', value: 1.00, description: 'Rotación 12% anual' },
      'high': { label: 'Alto', value: 0.90, description: 'Rotación 6% anual' },
      'very-high': { label: 'Muy Alto', value: 0.81, description: 'Rotación 3% anual' }
    }
  },
  APEX: {
    name: 'Applications Experience',
    description: 'Experiencia en aplicaciones',
    category: 'Personal',
    levels: {
      'very-low': { label: 'Muy Bajo', value: 1.22, description: '≤ 2 meses' },
      'low': { label: 'Bajo', value: 1.10, description: '6 meses' },
      'nominal': { label: 'Nominal', value: 1.00, description: '1 año' },
      'high': { label: 'Alto', value: 0.88, description: '3 años' },
      'very-high': { label: 'Muy Alto', value: 0.81, description: '6 años' }
    }
  },
  PLEX: {
    name: 'Platform Experience',
    description: 'Experiencia en plataforma',
    category: 'Personal',
    levels: {
      'very-low': { label: 'Muy Bajo', value: 1.19, description: '≤ 2 meses' },
      'low': { label: 'Bajo', value: 1.09, description: '6 meses' },
      'nominal': { label: 'Nominal', value: 1.00, description: '1 año' },
      'high': { label: 'Alto', value: 0.91, description: '3 años' },
      'very-high': { label: 'Muy Alto', value: 0.85, description: '6 años' }
    }
  },
  LTEX: {
    name: 'Language and Tool Experience',
    description: 'Experiencia en lenguaje y herramientas',
    category: 'Personal',
    levels: {
      'very-low': { label: 'Muy Bajo', value: 1.20, description: '≤ 2 meses' },
      'low': { label: 'Bajo', value: 1.09, description: '6 meses' },
      'nominal': { label: 'Nominal', value: 1.00, description: '1 año' },
      'high': { label: 'Alto', value: 0.91, description: '3 años' },
      'very-high': { label: 'Muy Alto', value: 0.84, description: '6 años' }
    }
  },

  // Project Factors
  TOOL: {
    name: 'Use of Software Tools',
    description: 'Uso de herramientas de software',
    category: 'Proyecto',
    levels: {
      'very-low': { label: 'Muy Bajo', value: 1.17, description: 'Edición de texto' },
      'low': { label: 'Bajo', value: 1.09, description: 'Herramientas básicas' },
      'nominal': { label: 'Nominal', value: 1.00, description: 'Herramientas integradas' },
      'high': { label: 'Alto', value: 0.90, description: 'Herramientas avanzadas' },
      'very-high': { label: 'Muy Alto', value: 0.78, description: 'Herramientas de última generación' }
    }
  },
  SITE: {
    name: 'Multisite Development',
    description: 'Desarrollo multisitio',
    category: 'Proyecto',
    levels: {
      'very-low': { label: 'Muy Bajo', value: 1.22, description: 'Internacional, pobre comunicación' },
      'low': { label: 'Bajo', value: 1.09, description: 'Internacional, buena comunicación' },
      'nominal': { label: 'Nominal', value: 1.00, description: 'Mismo edificio o ciudad' },
      'high': { label: 'Alto', value: 0.93, description: 'Misma ubicación, buena comunicación' },
      'very-high': { label: 'Muy Alto', value: 0.86, description: 'Completamente integrado' }
    }
  },
  SCED: {
    name: 'Required Development Schedule',
    description: 'Calendario de desarrollo requerido',
    category: 'Proyecto',
    levels: {
      'very-low': { label: 'Muy Bajo', value: 1.43, description: '75% del nominal' },
      'low': { label: 'Bajo', value: 1.14, description: '85% del nominal' },
      'nominal': { label: 'Nominal', value: 1.00, description: '100% del nominal' },
      'high': { label: 'Alto', value: 1.00, description: '130% del nominal' },
      'very-high': { label: 'Muy Alto', value: 1.00, description: '160% del nominal' }
    }
  }
};

// Constantes del modelo COCOMO 2
export const COCOMO_CONSTANTS = {
  A: 2.94,  // Constante de calibración
  B: 0.91   // Exponente base
};

// Calcular el exponente E
export function calculateExponent(scaleFactors) {
  const sumSF = Object.values(scaleFactors).reduce((sum, value) => sum + value, 0);
  return COCOMO_CONSTANTS.B + 0.01 * sumSF;
}

// Calcular el multiplicador de esfuerzo EM
export function calculateEffortMultiplier(costFactors) {
  return Object.values(costFactors).reduce((product, value) => product * value, 1);
}

// Calcular el esfuerzo en persona-mes
export function calculateEffort(kloc, scaleFactors, costFactors) {
  const E = calculateExponent(scaleFactors);
  const EM = calculateEffortMultiplier(costFactors);
  return COCOMO_CONSTANTS.A * Math.pow(kloc, E) * EM;
}

// Calcular el tiempo de desarrollo en meses
export function calculateTime(effort, scaleFactors) {
  const E = calculateExponent(scaleFactors);
  const C = 3.67;  // Constante para el cálculo del tiempo
  const D = 0.28;  // Exponente base para el tiempo
  return C * Math.pow(effort, D + 0.2 * (E - COCOMO_CONSTANTS.B));
}

// Calcular el número promedio de personal
export function calculateAverageStaff(effort, time) {
  return effort / time;
}

// Calcular la productividad (SLOC por persona-mes)
export function calculateProductivity(kloc, effort) {
  return (kloc * 1000) / effort;
}

// Obtener el valor por defecto (nominal) para un driver
export function getDefaultValue(driver) {
  const levels = driver.levels;
  if (levels.nominal) {
    return levels.nominal.value;
  }
  // Si no hay nominal, devolver el valor del medio
  const values = Object.values(levels);
  return values[Math.floor(values.length / 2)].value;
}

// Inicializar todos los scale factors con valores nominales
export function initializeScaleFactors() {
  const factors = {};
  Object.keys(scaleDrivers).forEach(key => {
    factors[key] = getDefaultValue(scaleDrivers[key]);
  });
  return factors;
}

// Inicializar todos los cost drivers con valores nominales
export function initializeCostDrivers() {
  const drivers = {};
  Object.keys(costDrivers).forEach(key => {
    drivers[key] = getDefaultValue(costDrivers[key]);
  });
  return drivers;
}
