## Pages

### Home (/)

Contiene una imagen de una captura de pantalla de la web de Mercado Libre. Es la pantalla de inicio del proyecto.

### NotFound (/notFound)

Contiene una imagen de NotFound. Se utiliza cuando el usuario ingresa una URL que no hace match con ninguna de las pantallas del proyecto.

### Product (/items/:id)

Contiene información de un (1) producto a través del id obtenido por `Url Params`.

Al cargar se hace una petición GET API hacia `http://localhost:5000/api/items/:id`. Durante la espera, se carga el componente `Loading`.

Si se obtiene información, se presenta en pantalla. De lo contrario, se redirecciona a la página de `NotFound`.

El valor `condition` del producto se formatea al español utilizando la función `setCondition`.

En el caso del precio, se realiza nuevamente el formateo a un string con los símbolos correctos de la moneda argentina utilizando `formatCurrency`.

De no existir una descripción para el producto se utiliza un mensaje por defecto, esta lógica se encuentra dentro de la función `setDescription`.

### Search (/items/?search=)

Página de búsqueda del proyecto. Obtiene un valor `search` de la url y realiza una petición GET API hacia `http://localhost:5000/api/items/q=`.

Durante la espera, se carga el componente `Loading`.

De obtener información, es presentada mediante al component `ProductList`. De lo contario, se renderiza el componente `Error`.
