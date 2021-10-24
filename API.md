## API ML-FINDER-TEST

### [GET] Recurso (/api/items/id)

Obtiene el id enviado por url y hace una peticion GET API hacia `https://api.mercadolibre.com/items/:id`.

Si no encuentra información retorna un objeto `{ items: false }`.

Si encuentra información, hace otra petición GET API hacia `https://api.mercadolibre.com/items/:id/description`.

Invoca la función `createInterface` que se encarga de retornar un objeto con la siguiente estructura utilizando los datos obtenidos:

`{
  id,
  title,
  price: {
    currency,
    amount,
    decimals
  },
  condition,
  free_shipping,
  picture
}`

Dentro `createInterface` se invoca a `formatDecimals` que básicamente obtiene la parte de decimal del precio del producto y si es menor a 10 le agrega un cero a la izquierda.

También dentro de `createInterface` se invoca a `getPictureFromItem` que recibe dos parámetros: `id` y `previous`.\
`id` representa el identificador del producto.\
`previous` representa el valor de un array de imágenes del producto. Si este valor está definido entonces la función retorna la primera imagen que encuentre dentro del array.

En el caso de este recurso, `getPicturesFromItem` siempre se invocará con `previous` definido.

Volviendo a `/api/items/:id`, finalmente se retorna un objeto con la siguiente estructura:

`{
  author: [Acá toma los valores de nombre y apellido definidos en el archivo .env],
  item: {
    [Resultado de createInterface],
    sold_quantity: [Número de ventas],
    description
`}

### [GET] Recurso (/api/items/?q=)

Obtiene el valor `q` dentro de la URL. Y realiza una petición GET API hacia `https://api.mercadolibre.com/sites/MLA/search?q=`.

Destructura la respuesta y declara las variables `results`y `filters`.

Se realiza un `Array.slice` de `results` para utilizar solo los cuatro primeros resultados de la búsqueda.

Con un `Array.map` se realiza una iteración de los cuatro productos y se retorna un objeto con la estructura de `createInterface` más el valor de `state_name`.
El resultado se almacena en la variable `items`.

En esta oportunidad también se invoca la función `getPicturesFromItem` pero sin el valor `previous`.
Esto requiere una petición GET API hacia `https://api.mercadolibre.com/items/:id` para obtener la imagen del producto.

Para obtener las categorías se invoca la función `getCategoriesFromFilters` que recibe el valor de `filters` declarado anteriormente.
Esta función busca dentro del array de `filters` el elemento con id `category` y retonar un array de strings los títulos de las categorías.
Si no encuentra el id `category` retorna un array vacío.

Finalmente se retorna un objeto con esta estructura:

`{
  author: [Valores de .env],
  categories: [Resultado de getCategoriesFromFilters],
  items
}`
