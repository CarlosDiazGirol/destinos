## Descripción de las Funciones

### `getCity(ciudad)`

- **Descripción**: 
  Esta función busca y devuelve el objeto correspondiente a la ciudad indicada dentro de la lista `cities`. Es crucial para acceder a los detalles de una ciudad, como sus posibles destinos.

- **Parámetros**: 
  - `ciudad` (string): El nombre de la ciudad que se desea buscar.

- **Retorno**: 
  Devuelve el objeto de la ciudad encontrada en la lista `cities`, o `undefined` si no se encuentra.

### `findDirectRoute(from, to)`

- **Descripción**: 
  Esta función busca una ruta directa desde la ciudad de salida (`from`) hasta la ciudad de destino (`to`). Si encuentra la ruta, devuelve el tipo de transporte (como "coche", "avión", etc.); si no, devuelve `null`.

- **Parámetros**: 
  - `from` (string): El nombre de la ciudad de salida.
  - `to` (string): El nombre de la ciudad de destino.

- **Retorno**: 
  Devuelve el tipo de transporte si existe una ruta directa entre las dos ciudades, o `null` si no existe.

### `findIndirectRoute(from, to)`

- **Descripción**: 
  Esta función intenta encontrar una ruta indirecta cuando no existe una ruta directa entre la ciudad de salida (`from`) y la ciudad de destino (`to`). Recorre todos los destinos posibles desde la ciudad de salida para ver si alguno conecta con la ciudad de destino. Si encuentra una ruta indirecta, devuelve los detalles de esta ruta; si no, retorna `null`.

- **Parámetros**: 
  - `from` (string): El nombre de la ciudad de salida.
  - `to` (string): El nombre de la ciudad de destino.

- **Retorno**: 
  Devuelve un objeto con los detalles de la ruta indirecta (ciudad intermedia y tipos de transporte), o `null` si no hay ninguna ruta indirecta disponible.

### `travel(from, to)`

- **Descripción**: 
  Esta es la función principal que decide cómo se debe viajar desde la ciudad de salida (`from`) hasta la ciudad de destino (`to`). Primero intenta encontrar una ruta directa. Si no la encuentra, intenta buscar una ruta indirecta. Si no existe ninguna ruta posible, informa al usuario con un mensaje adecuado.

- **Parámetros**: 
  - `from` (string): El nombre de la ciudad de salida.
  - `to` (string): El nombre de la ciudad de destino.

- **Retorno**: 
  No tiene retorno. Imprime en la consola los pasos necesarios para realizar el viaje, o un mensaje indicando que no hay rutas disponibles.

## Ejemplo de Uso

Para ejecutar el código, puedes cambiar los valores de `salida` y `llegada` según las ciudades que desees conectar y luego ejecutar la función `travel(salida, llegada)`.

```javascript
const salida = "valencia"; // Ciudad de salida
const llegada = "roma";    // Ciudad de destino

travel(salida, llegada);   // Ejecuta la función para encontrar la ruta
