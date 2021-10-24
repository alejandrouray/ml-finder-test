## Componentes de ML-FINDER-TEST

### Breadcrumb

Recibe un `array`de categorías, se queda con las primeras cuatro, y genera un string con las categorías separadas con un símbolo de `>`. \

También hace uso de `React Context API` al solicitar del contexto global el valor de un breadcrumb anteriormente almacenado. \

Si por alguna razón el `array` de categorias viene vacío, asigna un valor por defecto.

El valor del breadcrumb es almacenado también en el `localStorage` para luego ser consumido por el contexto global en un eventual reload de la página.

### ProductList

Recibe un `array` de productos, y genera un `ProductListItem Component` por cada uno en un recorrido `Array.map`. Le envía los valores  de id, title, price, picture, state y freeShipping.

### ProductListItem

Recibe datos de un producto y los muestra en pantalla. Si se hace click en la imagen y en el título se dispara `onClick` que invoca la función `toProductPage` que envía al usuario a la página de detalle del producto correspondiente. \

El valor del precio es formateado para que contenga el separador de números enteros con el símbolo (.) en lugar de (,) y se le anexe el símbolo de pesos. \

Si el valor de freeShipping es `true` entonces se renderiza un ícono de shipping junto al precio.
