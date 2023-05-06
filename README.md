Este proyecto consta de frontend y backend por separado. Para probarlo en forma local, bajar tanto este repositorio, como la parte backend que esta en mis repositorios (geekStore-server)

Una vez descargado y echo los pasos de la parte del backend.

Ir a la consola, posicionarse en el /client del proyecto y correr npm install para installar las dependencias.

Despues correr npm start para levar el front en el navegador.

La pagina cuenta con un usuario Administrador que se crea al seedear el backend.

Las credenciales son:
email: admin@gmail.com
password: admin

Con el usuario Admin se puede ingresar para ver el panel de administrador y realizar el CRUD de los productos, como tambien eliminar usuarios registrados o darles rol de administrador.


Librerias utilizadas:
-tailwindcss: Framework de css
-headlessui: Componentes realizados para tailwind para darles estilos.
-axios: Libreria basada en HTTP, que maneja promesas para el node.js y el navegador.
-react-router-dom: Es una biblioteca que proporciona enrutamiento (routing) declarativo para aplicaciones de React. 
-fortawesome: Es una biblioteca de iconos

Dentro de la aplicacion, en el home, vamos a poder ver un listado de todo los productos disponibles. Se muestran hasta 8 productos por pagina. Los mismos tienen una marca y logo(por medio de una asociacion de tablas).
 Podemos clickear a cada producto, para tener una vista mas detallada del mismo.

Nos vamos a poder loguear directamente como administrador con las credenciales mencionadas arriba, o nos podemos crear un usuario nuevo si vamos al "login" de la Navbar, y en el formulario de Login hacemos click en Register.
 Una vez logueados, si lo hacemos con el usuario Administrador, vamos a poder ver un "Admin Panel" en la Navbar. Si nos dirigimos al panel de administrador, dentro del mismo vamos a poder cargar, editar y borrar productos. Y tambien podemos ver y controlar los usuario registrados.

