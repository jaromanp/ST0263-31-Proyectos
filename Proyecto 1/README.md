# Proyecto 1 
### Tópicos especiales en Telemática
José Alejandro Román Patiño

## Tecnologías de desarrollo
### Back-End
Para el desarrallo del servidor Back-End la principal tecnología que se utilizó  fue [Node.JS](https://nodejs.org/es/) fue escogido gracias a la facilidad con la que permite construir programas de red escalables.
En segundo lugar la tecnología de base de datos utilizada fue [MongoDB](https://www.mongodb.com/es) debido a su capacidad de manejo de datos masivos y las facilidades para el desarrollo de aplicaciones web modernas.
Otras tecnologías y dependencias del back:

 - [Express](https://expressjs.com/es/) Infraestructura Web
 - [Nodemon](https://www.npmjs.com/package/nodemon)
 - [Moongose](https://www.npmjs.com/package/mongoose) Conexión a la base de datos
 - [Bcrypt](https://www.npmjs.com/package/bcrypt) Criptografía de las contraseñas
 - [Cors](https://www.npmjs.com/package/cors) Middleware entre Front y Back end

Otras dependencias estan listadas en [package.json](https://github.com/jaromanp/ST0263-31-Proyectos/blob/master/Proyecto%201/api-rest/package.json)

### Front-End
Para el desarrallo del Front-End la principal tecnología que se utilizó  fue [VUE](https://vuejs.org/) ya que hace tambien uso de la tecnología Node.JS lo que permite una versatilidad en cuanto escalabilidad entre librerias y un framework full-featured.
Otras tecnologías:

 - [Axios](https://github.com/axios/axios) Cliente HTTP
 - [Bootstrap](https://getbootstrap.com/) Toolkit HTML, CSS y JS

Otras dependencias estan listadas en [package.json](https://github.com/jaromanp/ST0263-31-Proyectos/blob/master/Proyecto%201/frontend/package.json)

### Especificación API-REST
La especificación de los servicios brindados por el servidor se hizo de la siguiente forma:
#### Rutas /api 
Encargadas de la recolección y visualización de los datos
 - /api/consultar	
Petición tipo *Get* que devuelve todos los datos registrados en la base de datos
 - /api/enviar_datos
Petición tipo *Post* que recibe los datos del sensor
 - /api/:user
Petición tipo *Get* donde :user es el nombre de un usuario ya registrado, y de donde se devuelven todos los datos del sensor de este usuario
#### Rutas /user
Encargadas de la autenticación (Registro y Login)
 - /user/signup
Petición tipo *Post* para el registro de los usuarios
 - /user/login
Petición tipo *Post* para el inicio de sesión de los usuarios

### Autenticación Servicios API-REST
La autenticación de los servicios API-REST se realiza principalmente por medio de [JsonWebToken](https://jwt.io/)  el cual es un estándar abierto ([RFC-7519](https://tools.ietf.org/html/rfc7519)) basado en JSON para crear un token que sirva para enviar datos entre aplicaciones o servicios y garantizar que sean válidos y seguros.
Tanto del lado del back como del front end se utiliza esta tecnología.
