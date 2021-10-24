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

Volviendo a `(/api/items/:id), finalmente se retorna un objeto con la siguiente estructura:

`{
  author: [Acá toma los valores de nombre y apellido definidos en el archivo .env],
  item: {
    [Resultado de createInterface],
    sold_quantity: [Número de ventas],
    description
`}
