# ML Finder Test

Es buscador de productos de Mercado Libre hecho en React y Nodejs. Realiza peticiones a la API de Mercado Libre para obtener información de los productos consultados y representa la información en componentes dinámicos dentro del navegador.

## Scripts Disponibles

En el proyecto podés ejecutar los siguientes comandos:

### `npm run start`

Lanza la aplicación el modo desarrollo \
Abre [http://localhost:3000](http://localhost:3000) para visualizar la pantalla de inicio del navegador.

La página se recargará si realiza modificaciones.\
También verá cualquier error de linters en la consola.

### `npm run test`

Ejecuta todas las pruebas en modo interactivo.

### `npm run coverage`

Ejecuta todas las pruebas en modo interactivo. Además genera un reporte de coverage en la aplicación.

### `npm run build`

Construye la aplicación para producción en la carpeta `build`. \
Agrupa correctamente React en el modo de producción y optimiza la compilación para obtener el mejor rendimiento.

La compilación se minimiza y los nombres de archivo incluyen los hash.

### `npm run lint`

Ejecuta un análisis del código y muestra los errores encontrados según la configuración del linter.


### `npm run fix`

Ejecuta un análisis del código y corrige los errores encontrados según la configuración del linter.

## Implementación en ambiente de desarrollo

#### 1. Debemos realizar el clone del repositorio:
  
`git clone https://github.com/alejandrouray/ml-finder-test.git`

#### 2. Luego debemos ir a la carpeta del proyecto `ml-finder-test` y crear un archivo .env con el siguiente contenido:

  REACT_APP_API_ENDPOINT=http://localhost:5000/api
  
#### 3. Dentro de la carpeta `ml-finder-test` se encuentra la carpeta `api`. En ese directorio debemos crear otro archivo .env con el siguiente contenido:

  PORT=5000 \
  ML_ENDPOINT=https://api.mercadolibre.com \
  AUTHOR_NAME=[Acá colocar tu nombre] \
  AUTHOR_LAST_NAME=[Acá colocar tu apellido]
  
