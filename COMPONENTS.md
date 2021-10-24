## Componentes de ML-FINDER-TEST

### Breadcrumb

Recibe un `array`de categorías, se queda con las primeras cuatro, y genera un string con las categorías separadas con un símbolo de `>`.

También hace uso de `React Context API` al solicitar del contexto global el valor de un breadcrumb anteriormente almacenado.

Si por alguna razón el `array` de categorias viene vacío, asigna un valor por defecto.

El valor del breadcrumb es almacenado también en el `localStorage` para luego ser consumido por el contexto global en un eventual reload de la página.

### Error

Retorna una imagen de error con un texto que indica que no se encontraron resultados.

### Loading

Retorna un componente Loader que funciona como animación de carga durante las llamadas API.

### ProductList

Recibe un `array` de productos, y genera un `ProductListItem Component` por cada uno en un recorrido `Array.map`. Le envía los valores  de id, title, price, picture, state y freeShipping.

### ProductListItem

Recibe datos de un producto y los muestra en pantalla. Si se hace click en la imagen y en el título se dispara `onClick` que invoca la función `toProductPage` que envía al usuario a la página de detalle del producto correspondiente.

El valor del precio es formateado para que contenga el separador de números enteros con el símbolo (.) en lugar de (,) y se le anexe el símbolo de pesos.

Si el valor de freeShipping es `true` entonces se renderiza un ícono de shipping junto al precio.

### SearchBar

Renderiza formulario de búsqueda en la parte superior de la pantalla. Utiliza el hook `useState` para guardar los valores ingresados.

El input tiene activo el evento `onChange` que invoca la función `saveData` que se encarga de guardar en el `state` la información ingresada por el usuario cada vez que escribe un nuevo caracter en la caja de texto.

El logo de Mercado Libre tiene activo el evento `onClick` y redirecciona a la página de inicio borrando el valor del input de búsqueda.

El hacer click en el botón de la lupa o presionar `ENTER` se invocará la función `sendData` que realiza un redireccionamiento a la página de búsqueda enviando por `queryParams`el valor del `state` (es decir, lo ingresado por el usuario).
