1.1. Introducción
Descripción del Proyecto: Aplicacion movil para el puerto TainoBay que emula la página web.

Tecnologías Utilizadas:  (Ionic, Capacitor, React).

Requisitos del Sistema: (Node.js, npm/yarn, Android Studio, Xcode).

1.2. Instalación

Instalar Dependencias: npm install (esto instalara todas las dependencias del package.json incluyendo el capacitor y Ionic)

1.3. Ejecución del Proyecto
Servidor de Desarrollo: Cómo ejecutar la aplicación en modo desarrollo.

ionic serve
Build del Proyecto: npm run build:full (este es un comando personalizado que ejecutara todo lo que necesita el proyecto incluye tambien abrir el proyecto con Android Studio)

1.4. Estructura del Proyecto

src/
├── App.js                               # app principal 
├── serviceWorkerRegistration            # Guardado de cache de la pagina web
.Android/
├── app/
    ├── src/
        ├── buid.gradle                  #Aqui se cambia la version de la app, se cambia cada que se sube una nueva version a playconsole
Assets/                                  #Aqui se guardas las imagenes que la app mete en todos los tamaños que necesita

1.5. Despliegue
Android: abierto el proyecto en Android Studio ir a build/Generate signed app bundle.
         seleccionar la llave KeyTainobay.jks
         ingresar la misma en ambos campos que la solicita contraseña y el nombre "KeyTainobay" como alias
         la build creara un archivo release .aab, ese archivo es el que solicita play console como version de la app

