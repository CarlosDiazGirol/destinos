import cities from "./ciudades.js";

// Variables de ejemplo para la ciudad de salida y destino.

const salida = "valencia";
const llegada = "roma";

// Función para obtener una ciudad del array `cities`.
// Se busca la ciudad cuyo nombre coincida con el valor de `ciudad`.
const getCity = (ciudad) => 
  cities.find(city => 
    Object.keys(city).includes(ciudad)
  );

// Función para encontrar una ruta directa desde `from` hasta `to`.
// Retorna el tipo de transporte si existe una ruta directa, o `null` si no.
const findDirectRoute = (from, to) => {
  const city = getCity(from); // Busca la ciudad de salida.
  return city?.[from]?.destinos?.[to] || null; // Retorna el transporte directo o `null` si no existe.
};

// Función para encontrar una ruta indirecta desde `from` hasta `to`.
// Busca si existe una ruta intermedia para llegar al destino.
// Retorna un objeto con detalles de la ruta indirecta, o `null` si no existe.
const findIndirectRoute = (from, to) => {
  const city = getCity(from); // Busca la ciudad de salida.
  if (!city) return null; // Si no encuentra la ciudad, retorna `null`.

  // Recorre todos los destinos posibles desde la ciudad de salida.
  for (const intermedio in city[from].destinos) {
    const transporteIntermedio = city[from].destinos[intermedio]; // Obtiene el transporte hacia la ciudad intermedia.
    const transporteFinal = findDirectRoute(intermedio, to); // Verifica si hay un transporte directo desde la ciudad intermedia hasta el destino.

    // Si encuentra una ruta indirecta válida, retorna los detalles de la ruta.
    if (transporteFinal) {
      return {
        ciudadIntermedia: intermedio,
        transporte1: transporteIntermedio,
        transporte2: transporteFinal
      };
    }
  }
  return null; // Si no encuentra ninguna ruta indirecta, retorna `null`.
};

// Función principal que decide cómo viajar de `from` a `to`.
// Imprime las instrucciones de viaje, ya sea directo o indirecto.
const travel = (from, to) => {
  const directRoute = findDirectRoute(from, to); // Intenta encontrar una ruta directa.

  // Si existe una ruta directa, imprime la forma de viajar.
  if (directRoute) {
    console.log(`Coge el ${directRoute} desde ${from} hasta ${to}.`);
  } else {
    // Si no hay ruta directa, busca una ruta indirecta.
    const indirectRoute = findIndirectRoute(from, to);
    if (indirectRoute) {
      // Si encuentra una ruta indirecta, imprime los pasos del viaje.
      console.log(`Coge el ${indirectRoute.transporte1} desde ${from} hasta ${indirectRoute.ciudadIntermedia}.`);
      console.log(`Luego, coge el ${indirectRoute.transporte2} desde ${indirectRoute.ciudadIntermedia} hasta ${to}.`);
    } else {
      // Si no hay ninguna ruta posible, imprime un mensaje de error.
      console.log(`No hay ninguna ruta disponible desde ${from} hasta ${to}.`);
    }
  }
};

// Llamada a la función `travel` con los valores de `salida` y `llegada` definidos arriba.
// Esto inicia la búsqueda de la mejor ruta y la imprime en la consola.
travel(salida, llegada);
