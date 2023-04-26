# ACCEDIENDO A MSSQL SERVER
Vamos a crear una aplicacion para poder acceder al motor de base de datos MSSQL Server para realizar un CRUD (`C`reate, `R`ead, `U`pdate y `D`elete).

La base de datos `DAI-Pizzas` va a tener una unica tabla `Pizzas` con las siguientes columnas. 

Vamos a sacar la configuracion de la conexion a la base de datos en u narchivo de configuracion `.env` que luego leeremos para poder conectarnos con el motor de base de datos.


<!-- 
#include "00-pre-requisitos.md"
-->
## PREREQUISITOS
Es necesario tener instalado lo siguiente:

- [Visual Studio Code](https://code.visualstudio.com/) instalado en la computadora (versión 1.66.2 o superior).

    ```doscon
    c:\>code -v
    1.77.0
    7f329fe6c66b0f86ae1574c2911b681ad5a45d63
    x64
    ```


- [Node.js®](https://nodejs.org/en/) entorno de ejecución para JavaScript construido con V8, motor de JavaScript de Chrome (versión 16.14.2 LTS o superior).

    ```doscon
    c:\>node -v
    v16.14.2
    ```

- [NPM](https://www.npmjs.com/) Node Package Manager (versión 8.6.0 o superior)

    ```doscon
    c:\>npm -v
    8.6.0

    npm install npm@latest -g
    ```
    
<!--- 
    - [C# extension for Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=ms-vscode.csharp)
-->
---

## DEPENDENCIAS 
Hacer una app que contenga los siguientes archivos con la funcionalidad que se especifica.
- [mssql](https://www.npmjs.com/package/mssql) Cliente de MSSQL Server para node (versión 9.1.1 o superior).
```doscon
    npm install mssql
```

- [dotenv](https://www.npmjs.com/package/dotenv) Modulo para la ccarga de variables de entorno desde archivos .env y alojandolas en process.env. (versión 16.0.1 superior).
```doscon
    npm install dotenv
```

---
## TP02 Node
Hacer una app que contenga los siguientes archivos con la funcionalidad que se especifica.

---
## EJ01: 
Desarrollar una aplicación que podamos utilizar es el `console.log()` haciendo pruebas con dos strings, concatenarlos e interpolárlos.


Por ejemplo: 
```doscon
    copiar("./entrada.txt", "./salida.txt")
```


----------------
npm i dotenv
https://www.npmjs.com/package/dotenv
.env file
S3_BUCKET="YOURS3BUCKET"
SECRET_KEY="YOURSECRETKEYGOESHERE"

import 'dotenv/config' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
----------------

body-parser
cors
express
mssql

devdependencies
nodemon

"scripts"
	"start" : "nodemon xxx.js"


https://www.youtube.com/watch?v=Uvy_BlgwfLI
https://www.youtube.com/watch?v=Uvy_BlgwfLI&t=15m
https://tediousjs.github.io/node-mssql/

compmgmt.msc
Services and Applications
	SQL SErver configuration
		SQL Server NetworkConfiguration
			Protocols for SQL	TCP/IP --> Enabled
			chequear en el puerto 1433 (IP Adresses)
			
npm install chequea el package.json

https://www.freecodecamp.org/news/how-the-question-mark-works-in-javascript/#:~:text=The%20conditional%20or%20question%20mark,it%20than%20meets%20the%20eye.
?
 ?? 
 ===
			
			
		
		
--------------------
npm i winston
